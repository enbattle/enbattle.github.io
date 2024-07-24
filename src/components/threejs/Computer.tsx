import React, { useEffect, useRef, useState, useCallback } from "react";
import * as THREE from "three";
import { OrbitControls } from "three/examples/jsm/Addons.js";

const createCube = (
  width: number,
  height: number,
  depth: number,
  x: number,
  y: number,
  z: number,
  color: string
): THREE.Mesh => {
  const geometry = new THREE.BoxGeometry(width, height, depth);
  const material = new THREE.MeshPhongMaterial({ color: color });
  const cube = new THREE.Mesh(geometry, material);

  cube.position.x = x;
  cube.position.y = y;
  cube.position.z = z;

  return cube;
};

const Computer = () => {
  const refContainer = useRef<HTMLDivElement>(null);
  const canvasCount = useRef<number>(0);
  const [renderer, setRenderer] = useState<THREE.Renderer>();
  const [camera, setCamera] = useState<THREE.Camera>();

  const handleWindowResize = useCallback(() => {
    const { current: container } = refContainer;
    if (container && renderer && camera) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      renderer.setSize(scW, scH);
    }
  }, [renderer, camera]);

  useEffect(() => {
    const { current: container } = refContainer;

    if (container && !renderer && canvasCount.current === 0) {
      const scW = container.clientWidth;
      const scH = container.clientHeight;

      const renderer = new THREE.WebGLRenderer({
        antialias: true,
        alpha: true,
      });

      renderer.setPixelRatio(window.devicePixelRatio);
      renderer.setSize(scW, scH);
      container.appendChild(renderer.domElement);
      setRenderer(renderer);
      canvasCount.current = 1;

      const computer = new THREE.Object3D();

      const monitorWidth = 30;
      const monitorHeight = 30;
      const monitorDepth = 5;
      const monitorX = 0;
      const monitorY = 0;
      const monitorZ = 0;
      const monitor = createCube(
        monitorWidth,
        monitorHeight,
        monitorDepth,
        monitorX,
        monitorY,
        monitorZ,
        "#C0C0C0"
      );
      computer.add(monitor);

      const screenWidth = monitorWidth - 6;
      const screenHeight = monitorHeight - 8;
      const screenDepth = monitorDepth / 2;
      const screenX = 0;
      const screenY = monitorY + 1;
      const screenZ = monitorZ + 1.5;
      const screen = createCube(
        screenWidth,
        screenHeight,
        screenDepth,
        screenX,
        screenY,
        screenZ,
        "#e0e0e0"
      );
      computer.add(screen);

      const keyboardWidth = monitorWidth;
      const keyboardHeight = monitorDepth;
      const keyboardDepth = monitorHeight;
      const keyboardX = monitorX;
      const keyboardY = monitorY - 15.5;
      const keyboardZ = monitorZ + 15;
      const keyboard = createCube(
        keyboardWidth,
        keyboardHeight,
        keyboardDepth,
        keyboardX,
        keyboardY,
        keyboardZ,
        "#C0C0C0"
      );
      computer.add(keyboard);

      const keypadWidth = 10;
      const keypadHeight = 1;
      const keypadDepth = 5;
      const keypadX = monitorX;
      const keypadY = monitorY - 13;
      const keypadZ = monitorZ + 26;
      const keypad = createCube(
        keypadWidth,
        keypadHeight,
        keypadDepth,
        keypadX,
        keypadY,
        keypadZ,
        "#e0e0e0"
      );
      computer.add(keypad);

      let buttonX = -13;
      let buttonZ = 6;
      for (let i = 0; i < 14; i++) {
        const buttonWidth = 1;
        const buttonHeight = 1;
        const buttonDepth = 1;
        const buttonY = -12.5;

        if (i !== 2 && i !== 7 && i !== 11) {
          const rowOneButton = createCube(
            buttonWidth,
            buttonHeight,
            buttonDepth,
            buttonX,
            buttonY,
            buttonZ,
            "#e0e0e0"
          );
          computer.add(rowOneButton);
        }

        if (i === 0) {
          const rowTwoButton = createCube(
            buttonWidth,
            buttonHeight,
            buttonDepth,
            buttonX,
            buttonY,
            buttonZ + 3,
            "#e0e0e0"
          );
          const rowThreeButtonSpecial = createCube(
            buttonWidth + 1.25,
            buttonHeight,
            buttonDepth,
            buttonX + 0.6,
            buttonY,
            buttonZ + 6,
            "#e0e0e0"
          );
          const rowFourButtonSpecial = createCube(
            buttonWidth + 2,
            buttonHeight,
            buttonDepth,
            buttonX + 1,
            buttonY,
            buttonZ + 9,
            "#e0e0e0"
          );
          const rowFiveButtonSpecial = createCube(
            buttonWidth + 2.5,
            buttonHeight,
            buttonDepth,
            buttonX + 1.25,
            buttonY,
            buttonZ + 12,
            "#e0e0e0"
          );
          computer.add(
            rowTwoButton,
            rowThreeButtonSpecial,
            rowFourButtonSpecial,
            rowFiveButtonSpecial
          );
        } else if (i % 12 === 0 && i !== 0) {
          const rowTwoButtonSpecial = createCube(
            buttonWidth + 2,
            buttonHeight,
            buttonDepth,
            buttonX + 1,
            buttonY,
            buttonZ + 3,
            "#e0e0e0"
          );
          const rowThreeButtonSpecial = createCube(
            buttonWidth + 1.5,
            buttonHeight,
            buttonDepth,
            buttonX + 1.25,
            buttonY,
            buttonZ + 6,
            "#e0e0e0"
          );
          const rowFourButtonSpecial = createCube(
            buttonWidth + 3.5,
            buttonHeight,
            buttonDepth,
            buttonX + 0.25,
            buttonY,
            buttonZ + 9,
            "#e0e0e0"
          );
          const rowFiveButtonSpecial = createCube(
            buttonWidth + 5,
            buttonHeight,
            buttonDepth,
            buttonX - 0.5,
            buttonY,
            buttonZ + 12,
            "#e0e0e0"
          );
          computer.add(
            rowTwoButtonSpecial,
            rowThreeButtonSpecial,
            rowFourButtonSpecial,
            rowFiveButtonSpecial
          );
        } else {
          if (!(i > 11 && i <= 13)) {
            const rowTwoButton = createCube(
              buttonWidth,
              buttonHeight,
              buttonDepth,
              buttonX,
              buttonY,
              buttonZ + 3,
              "#e0e0e0"
            );
            computer.add(rowTwoButton);
          }
          if (!(i > 11 && i <= 13)) {
            const rowThreeButton = createCube(
              buttonWidth,
              buttonHeight,
              buttonDepth,
              buttonX,
              buttonY,
              buttonZ + 6,
              "#e0e0e0"
            );
            computer.add(rowThreeButton);
          }
          if (!(i > 10 && i <= 13)) {
            const rowFourButton = createCube(
              buttonWidth,
              buttonHeight,
              buttonDepth,
              buttonX,
              buttonY,
              buttonZ + 9,
              "#e0e0e0"
            );
            computer.add(rowFourButton);
          }
          if (!(i > 9 && i <= 13)) {
            const rowFiveButton = createCube(
              buttonWidth,
              buttonHeight,
              buttonDepth,
              buttonX,
              buttonY,
              buttonZ + 12,
              "#e0e0e0"
            );
            computer.add(rowFiveButton);
          }
        }

        if (i === 6) {
          const rowSixButtonSpecial = createCube(
            buttonWidth + 6.5,
            buttonHeight,
            buttonDepth,
            buttonX + 1,
            buttonY,
            buttonZ + 15,
            "#e0e0e0"
          );
          computer.add(rowSixButtonSpecial);
        } else {
          if (!(i >= 6 && i <= 8)) {
            const rowSixButton = createCube(
              buttonWidth,
              buttonHeight,
              buttonDepth,
              buttonX,
              buttonY,
              buttonZ + 15,
              "#e0e0e0"
            );
            computer.add(rowSixButton);
          }
        }

        if (i === 12) {
          const rowSixButtonSpecial = createCube(
            buttonWidth,
            buttonHeight,
            buttonDepth,
            buttonX,
            buttonY,
            buttonZ + 13.5,
            "#e0e0e0"
          );
          computer.add(rowSixButtonSpecial);
        }

        buttonX += 2;
      }

      // Omnipresent and applied to everything equally, does not cast shadows because it does not have direction
      // Wil change how other colors appear
      const ambientLight = new THREE.AmbientLight("#FFFFFF", 1.0);

      // Since there is a direction, we need to give it a position
      const pointLight = new THREE.PointLight("#FFFFFF", 2);
      pointLight.position.set(25, 50, 25);

      const directionalLight = new THREE.DirectionalLight("#FFFFFF", 1);
      directionalLight.position.set(0, 50, 50);

      // Add to scene
      const scene = new THREE.Scene();
      scene.add(ambientLight);
      scene.add(pointLight);
      scene.add(directionalLight);
      scene.add(computer);

      // Set up camera
      const camera = new THREE.PerspectiveCamera(
        35,
        window.innerWidth / window.innerHeight,
        0.1,
        2000
      );
      camera.position.z = 90;
      setCamera(camera);

      // Set up controls
      const controls = new OrbitControls(camera, renderer.domElement);
      controls.enableZoom = false;

      const animate = () => {
        requestAnimationFrame(animate);

        computer.rotation.y += 0.005;
        controls.update();

        renderer.render(scene, camera);
      };

      animate();

      return () => {
        renderer.dispose();
      };
    }
  }, [renderer]);

  useEffect(() => {
    window.addEventListener("resize", handleWindowResize, false);
    return () => {
      window.removeEventListener("resize", handleWindowResize, false);
    };
  }, [renderer, handleWindowResize]);

  return (
    <div
      ref={refContainer}
      style={{
        height: "100%",
        width: "100%",
        top: 0,
        left: 0,
        position: "fixed",
        zIndex: -1,
        overflow: "hidden",
      }}
    ></div>
  );
};

export default Computer;
