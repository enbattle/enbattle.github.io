"use client";

import { useEffect, useRef } from "react";

type Cell = { x: number; y: number };

const CELL = 25;
const WALL_PROBABILITY = 0.24;
const STEP_MS = 18;
const HOLD_MS = 1400;
const FADE_MS = 500;
const PAUSE_AFTER_FADE_MS = 500;

function key(x: number, y: number) {
  return x + "," + y;
}

function neighbors(cols: number, rows: number, c: Cell): Cell[] {
  const out: Cell[] = [];
  if (c.x > 0) out.push({ x: c.x - 1, y: c.y });
  if (c.x < cols - 1) out.push({ x: c.x + 1, y: c.y });
  if (c.y > 0) out.push({ x: c.x, y: c.y - 1 });
  if (c.y < rows - 1) out.push({ x: c.x, y: c.y + 1 });
  return out;
}

function bfs(cols: number, rows: number, start: Cell, end: Cell, walls: Set<string>) {
  const cameFrom = new Map<string, string>();
  const visitedOrder: Cell[] = [];
  const queue: Cell[] = [start];
  const seen = new Set<string>([key(start.x, start.y)]);
  let head = 0;
  while (head < queue.length) {
    const current = queue[head++];
    visitedOrder.push(current);
    if (current.x === end.x && current.y === end.y) break;
    for (const n of neighbors(cols, rows, current)) {
      const k = key(n.x, n.y);
      if (walls.has(k) || seen.has(k)) continue;
      seen.add(k);
      cameFrom.set(k, key(current.x, current.y));
      queue.push(n);
    }
  }
  if (!seen.has(key(end.x, end.y))) return null;

  const path: Cell[] = [end];
  let cursor = key(end.x, end.y);
  while (cameFrom.has(cursor)) {
    cursor = cameFrom.get(cursor)!;
    const [px, py] = cursor.split(",").map(Number);
    path.push({ x: px, y: py });
  }
  path.reverse();
  return { visitedOrder, path };
}

function buildRun(cols: number, rows: number) {
  const start: Cell = { x: 1, y: Math.floor(rows / 2) };
  const end: Cell = { x: cols - 2, y: Math.floor(rows / 2) };

  for (let attempt = 0; attempt < 16; attempt++) {
    const walls = new Set<string>();
    for (let y = 0; y < rows; y++) {
      for (let x = 0; x < cols; x++) {
        if ((x === start.x && y === start.y) || (x === end.x && y === end.y)) continue;
        if (Math.random() < WALL_PROBABILITY) walls.add(key(x, y));
      }
    }
    const result = bfs(cols, rows, start, end, walls);
    if (result) return { walls, start, end, ...result };
  }
  return { walls: new Set<string>(), start, end, visitedOrder: [start], path: [start, end] };
}

/**
 * Decorative signature element: a real breadth-first search runs on a
 * randomly generated grid, laid out the same way the pathfinding-visualizer
 * project works, and quietly re-solves itself on a loop.
 */
export default function PathfindingCanvas({ className }: { className?: string }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let cols = 0;
    let rows = 0;
    let run = buildRun(1, 1);
    let phase: "searching" | "hold" | "fadeout" | "pause" = "searching";
    let phaseStart = performance.now();
    let raf = 0;

    const resize = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      canvas.style.width = rect.width + "px";
      canvas.style.height = rect.height + "px";
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      cols = Math.max(6, Math.floor(rect.width / CELL));
      rows = Math.max(4, Math.floor(rect.height / CELL));
      run = buildRun(cols, rows);
      phase = "searching";
      phaseStart = performance.now();
    };

    const ro = new ResizeObserver(resize);
    ro.observe(container);
    resize();

    const draw = (now: number) => {
      raf = requestAnimationFrame(draw);
      const rect = container.getBoundingClientRect();
      const width = rect.width;
      const height = rect.height;
      const offsetX = (width - cols * CELL) / 2 + CELL / 2;
      const offsetY = (height - rows * CELL) / 2 + CELL / 2;

      const styles = getComputedStyle(document.documentElement);
      const inkColor = styles.getPropertyValue("--muted-foreground").trim();
      const rustColor = styles.getPropertyValue("--rust").trim();

      const point = (c: Cell) => ({
        px: offsetX + c.x * CELL,
        py: offsetY + c.y * CELL,
      });

      let globalAlpha = 1;
      if (phase === "fadeout") {
        globalAlpha = Math.max(0, 1 - (now - phaseStart) / FADE_MS);
      } else if (phase === "pause") {
        globalAlpha = 0;
      }

      ctx.clearRect(0, 0, width, height);
      ctx.globalAlpha = globalAlpha;

      // faint dot grid for open cells
      ctx.fillStyle = inkColor;
      for (let y = 0; y < rows; y++) {
        for (let x = 0; x < cols; x++) {
          if (run.walls.has(key(x, y))) continue;
          const { px, py } = point({ x, y });
          ctx.globalAlpha = 0.1 * globalAlpha;
          ctx.beginPath();
          ctx.arc(px, py, 1.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      const elapsedInPhase = now - phaseStart;
      const revealCount = reduceMotion
        ? run.visitedOrder.length
        : Math.min(
            run.visitedOrder.length,
            Math.floor(elapsedInPhase / STEP_MS)
          );

      // visited search frontier
      ctx.fillStyle = inkColor;
      for (let i = 0; i < revealCount; i++) {
        const { px, py } = point(run.visitedOrder[i]);
        ctx.globalAlpha = 0.3 * globalAlpha;
        ctx.beginPath();
        ctx.arc(px, py, 2, 0, Math.PI * 2);
        ctx.fill();
      }

      const searchDone = revealCount >= run.visitedOrder.length;

      if (searchDone) {
        // resolved path in the accent color
        ctx.strokeStyle = rustColor;
        ctx.lineWidth = 2;
        ctx.globalAlpha = 0.9 * globalAlpha;
        ctx.beginPath();
        run.path.forEach((c, i) => {
          const { px, py } = point(c);
          if (i === 0) ctx.moveTo(px, py);
          else ctx.lineTo(px, py);
        });
        ctx.stroke();

        ctx.fillStyle = rustColor;
        ctx.globalAlpha = globalAlpha;
        for (const c of run.path) {
          const { px, py } = point(c);
          ctx.beginPath();
          ctx.arc(px, py, 2.4, 0, Math.PI * 2);
          ctx.fill();
        }
      }

      // start / end markers
      ctx.globalAlpha = globalAlpha;
      ctx.fillStyle = inkColor;
      [run.start, run.end].forEach((c) => {
        const { px, py } = point(c);
        ctx.beginPath();
        ctx.arc(px, py, 3.2, 0, Math.PI * 2);
        ctx.fill();
      });

      if (reduceMotion) return;

      if (phase === "searching" && searchDone) {
        phase = "hold";
        phaseStart = now;
      } else if (phase === "hold" && now - phaseStart > HOLD_MS) {
        phase = "fadeout";
        phaseStart = now;
      } else if (phase === "fadeout" && now - phaseStart > FADE_MS) {
        phase = "pause";
        phaseStart = now;
      } else if (phase === "pause" && now - phaseStart > PAUSE_AFTER_FADE_MS) {
        run = buildRun(cols, rows);
        phase = "searching";
        phaseStart = now;
      }
    };

    raf = requestAnimationFrame(draw);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} className={className} aria-hidden="true">
      <canvas ref={canvasRef} />
    </div>
  );
}
