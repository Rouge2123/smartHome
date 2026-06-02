import React from "react";

export default function ShapeBlur({ className }: { className?: string }) {
  return (
    <div className={className}>
      <iframe
        title="shape-blur"
        src="https://www.reactbits.dev/animations/shape-blur"
        className="w-full h-56 border-0"
        loading="lazy"
      />
    </div>
  );
}
