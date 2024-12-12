"use client";
import { useState, useEffect, useRef, ComponentType } from "react";

function withVisibility<T>(WrappedComponent: ComponentType<T & { isVisible: boolean }>) {
  const WithVisibilityComponent = (props: T) => {
    const [isVisible, setIsVisible] = useState(false);
    const sectionRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setIsVisible(true);
              observer.unobserve(entry.target);
            }
          });
        },
        { threshold: 0.1 },
      );

      const currentRef = sectionRef.current;
      if (currentRef) {
        observer.observe(currentRef);
      }

      return () => {
        if (currentRef) {
          observer.unobserve(currentRef);
        }
      };
    }, []);

    return (
      <div ref={sectionRef}>
        <WrappedComponent {...props} isVisible={isVisible} />
      </div>
    );
  };

  WithVisibilityComponent.displayName = `WithVisibility(${WrappedComponent.displayName || WrappedComponent.name || "Component"})`;

  return WithVisibilityComponent;
}

export default withVisibility;
