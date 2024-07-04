import { useEffect, useState } from "react";

export const LazyLoading = (ref) => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const currentRef = ref.current;

    const observer = new IntersectionObserver(
      (entries) => {
        const [entry] = entries;
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        threshold: 0.1,
      }
    );
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => observer.disconnect();
  }, [ref]);
  return isVisible;
};
