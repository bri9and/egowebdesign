"use client";

import { cn } from "@/lib/utils";

interface BrowserMockupProps {
  url?: string;
  className?: string;
  children?: React.ReactNode;
}

export function BrowserMockup({
  url = "kptdesigns.vercel.app",
  className,
  children,
}: BrowserMockupProps) {
  return (
    <div
      className={cn(
        "rounded-xl overflow-hidden border border-warm-gray/50 shadow-2xl bg-white",
        className
      )}
    >
      {/* Browser chrome */}
      <div className="flex items-center gap-2 px-4 py-3 bg-gray-50 border-b border-warm-gray/30">
        <div className="flex gap-1.5">
          <div className="w-3 h-3 rounded-full bg-red-400/60" />
          <div className="w-3 h-3 rounded-full bg-yellow-400/60" />
          <div className="w-3 h-3 rounded-full bg-green-400/60" />
        </div>
        <div className="flex-1 flex justify-center">
          <div className="px-4 py-1 bg-white rounded-md text-xs text-muted-foreground border border-warm-gray/30 max-w-xs w-full text-center">
            {url}
          </div>
        </div>
        <div className="w-12" />
      </div>
      {/* Content */}
      <div className="relative">{children}</div>
    </div>
  );
}
