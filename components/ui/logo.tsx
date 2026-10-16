const CELLS = [
  // [x, y, fill]
  [0, 0, "#C9922A"], [8, 0, "#c9912ad8"], [16, 0, "#b98626be"],
  [0, 8, "#c9892aff"], [8, 8, "#C9922A"], [16, 8, "#c9912a42"],
  [0, 16, "#C9922A"], [8, 16, "#c9912ad8"], [16, 16, "#b98626be"],
] as const;

export function LogoMark({ className = "w-6 h-6" }: { className?: string }) {
  return (
    <svg viewBox="0 0 23 23" fill="none" className={className} aria-hidden="true">
      {CELLS.map(([x, y, fill]) => (
        <rect key={`${x}-${y}`} x={x} y={y} width="7" height="7" rx="1" fill={fill} />
      ))}
    </svg>
  );
}

export default function Logo() {
  return (
    <span className="flex items-center gap-3">
      <span className="w-6 h-6 flex items-center justify-center">
        <LogoMark />
      </span>
      <span
        className="text-[#C9922A] font-semibold tracking-[0.12em] text-lg uppercase"
        style={{ fontFamily: "var(--font-dm-sans)" }}
      >
        EBANO
      </span>
    </span>
  );
}
