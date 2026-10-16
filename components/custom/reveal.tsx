import { ReactNode, useEffect } from 'react';

// Plays once per visit: the first render of the home page staggers its hero blocks in,
// later mounts (coming back from an experience page) render them in place.
// A CSS animation rather than a motion one, so the hero shows up as soon as the HTML paints,
// before any JavaScript has loaded.
let played = false;

type Props = {
  order: number;
  className?: string;
  children: ReactNode;
};

export const Reveal = ({ order, className, children }: Props) => {
  const shouldPlay = !played;

  useEffect(() => {
    played = true;
  }, []);

  return (
    <div
      className={shouldPlay ? `reveal ${className ?? ''}` : className}
      style={shouldPlay ? { animationDelay: `${order * 80}ms` } : undefined}
    >
      {children}
    </div>
  );
};
