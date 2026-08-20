export function SectionHeading({
  index,
  title,
}: {
  index: string;
  title: string;
}) {
  return (
    <div className="mb-12 flex items-baseline gap-4">
      <span className="font-mono text-xs text-rust">{index}</span>
      <h2 className="font-display text-4xl md:text-5xl">{title}</h2>
    </div>
  );
}
