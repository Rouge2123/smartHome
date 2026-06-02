import React from "react";

export default function PixelTrail({ className }: { className?: string }) {
  return (
    <div className={className}>
      <iframe
        title="pixel-trail"
        src="https://www.reactbits.dev/animations/pixel-trail"
        className="w-full h-56 border-0"
        loading="lazy"
      />
    </div>
  );
}
