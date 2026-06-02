import React from "react";

export default function LiquidChrome({ className }: { className?: string }) {
  return (
    <div className={className ? className : "pointer-events-none fixed inset-0 -z-10 opacity-80"}>
      <iframe
        title="liquid-chrome"
        src="https://www.reactbits.dev/backgrounds/liquid-chrome?interactive=false"
        className="w-full h-full border-0"
        loading="lazy"
      />
    </div>
  );
}
