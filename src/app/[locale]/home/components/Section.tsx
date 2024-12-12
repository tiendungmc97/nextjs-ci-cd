"use client";
import withVisibility from "@/app/hoc/withVisibility";
import React from "react";

interface SectionProps {
  isVisible: boolean;
}

const Section: React.FC<SectionProps> = ({ isVisible }) => {
  return (
    <div className="m-4 h-80 w-full bg-green-500 text-center">
      section1
      {isVisible && (
        <p className="animate__animated animate__zoomIn">Component is visible in the viewport</p>
      )}
    </div>
  );
};

export default withVisibility(Section);
