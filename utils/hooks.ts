import { useEffect, useState } from "react";

export const useScrollPosition = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [userHasScrolled, setUserHasScrolled] = useState(false);

  useEffect(() => {
    const updatePosition = () => {
      setScrollPosition(window.pageYOffset);
      if (!userHasScrolled && window.pageYOffset > 0) setUserHasScrolled(true);
    };

    window.addEventListener("scroll", updatePosition);

    updatePosition();

    return () => window.removeEventListener("scroll", updatePosition);
  }, []);

  return { scrollPosition, userHasScrolled };
};
