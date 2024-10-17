import { RefObject, useEffect, useMemo, useState } from 'react';

export const useIsOnScreen = (ref: RefObject<HTMLElement>) => {
  const [isIntersecting, setIntersecting] = useState(false);

  const observer = useMemo(
    () =>
      new IntersectionObserver(([entry]) => {
        if (entry.isIntersecting) {
          setIntersecting(true);
        }
      }),
    [ref],
  );

  useEffect(() => {
    if (!ref.current) return;

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return isIntersecting;
};
