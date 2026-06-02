import React from "react";

export default function LaserFlow({ className }: { className?: string }) {
  return (
    <div className={className}>
      <iframe
        title="laser-flow"
        src="https://www.reactbits.dev/animations/laser-flow"
        className="w-full h-56 border-0"
        loading="lazy"
      />
    </div>
  );
}
