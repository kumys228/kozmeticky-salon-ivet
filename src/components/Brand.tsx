export function Botanical({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 80 80"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.3"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M41 74C36 51 45 25 65 8M40 65C26 52 15 35 13 12M39 61C40 37 31 17 23 7M42 49C61 47 72 31 73 13C53 17 44 31 42 49ZM36 48C19 46 8 35 5 22C24 24 33 34 36 48ZM36 40C27 28 23 17 23 7C39 16 43 28 36 40ZM49 32C47 18 55 9 65 8C64 20 58 27 49 32Z" />
    </svg>
  );
}
export function Brand() {
  return (
    <span className="brand">
      <Botanical />
      <span>
        <span className="brand-caption">Kozmetický salón</span>
        <span className="brand-name">IVET</span>
      </span>
    </span>
  );
}
