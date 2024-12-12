"use client";
import { useState } from "react";
import "./styles.scss";
function TokenCardList() {
  const items = Array.from({ length: 10 });
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  return (
    <div className="h-40 w-full bg-gray-500">
      <div className="token-cards mx-2 p-8">
        {items.map((_, i) => (
          <div
            key={i}
            className={`cursor-pointer rounded-full bg-white ${hoveredIndex === i ? "hovered" : ""} ${!!hoveredIndex && "animation-paused"} hover:bg-gray-200`}
            onMouseEnter={() => setHoveredIndex(i + 1)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div className="flex h-16 items-center justify-center">{i}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TokenCardList;
