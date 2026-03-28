"use client";

interface LogoProps {
  variant?: "full" | "mark" | "icon";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizes = {
  sm: { kpt: "text-lg", sub: "text-[9px]", gap: "gap-0", tracking: "tracking-[0.25em]", subTracking: "tracking-[0.15em]" },
  md: { kpt: "text-2xl", sub: "text-[11px]", gap: "gap-0.5", tracking: "tracking-[0.3em]", subTracking: "tracking-[0.15em]" },
  lg: { kpt: "text-4xl", sub: "text-sm", gap: "gap-1", tracking: "tracking-[0.35em]", subTracking: "tracking-[0.2em]" },
};

export function Logo({ variant = "mark", className, size = "md" }: LogoProps) {
  const s = sizes[size];

  if (variant === "icon") {
    return (
      <span
        className={`inline-flex items-center justify-center font-bold text-[#FF8000] ${s.kpt} leading-none select-none ${className ?? ""}`}
        aria-label="KPT Designs"
      >
        K
      </span>
    );
  }

  return (
    <span
      className={`inline-flex flex-col ${s.gap} select-none ${className ?? ""}`}
      aria-label={variant === "full" ? "KPT Designs" : "KPT"}
    >
      <span className={`font-bold text-[#FF8000] ${s.kpt} ${s.tracking} leading-none`}>
        KPT
      </span>
      {variant === "full" && (
        <span className={`font-medium text-white/50 ${s.sub} ${s.subTracking} uppercase leading-none`}>
          Designs
        </span>
      )}
    </span>
  );
}

export function LogoIcon({ className }: { className?: string }) {
  return <Logo variant="icon" size="md" className={className} />;
}
