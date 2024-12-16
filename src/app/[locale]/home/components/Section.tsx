"use client";
import withVisibility from "@/hoc/withVisibility";
import React from "react";

interface SectionProps {
  isVisible: boolean;
}

const Section: React.FC<SectionProps> = ({ isVisible }) => {
  return (
    <div className="h-96 w-full text-center">
      section1
      {isVisible && (
        <p className="animate__animated animate__zoomIn">Component is visible in the viewport</p>
      )}
    </div>
  );
};

export default withVisibility(Section);
