import { useEffect, useState } from 'react';

/**
 * Types `text` character by character.
 * Use `\n` in text for a line break.
 * `loop` repeats type → pause → delete → type (CPU only, no network).
 */
const Typewriter = ({
  text,
  speed = 100,
  deleteSpeed = 55,
  startDelay = 400,
  holdDelay = 1800,
  pauseBetween = 500,
  loop = true,
  className = '',
  cursorClassName = '',
  as: Tag = 'span',
  'aria-label': ariaLabel,
}) => {
  const [count, setCount] = useState(0);
  const [mode, setMode] = useState('idle'); // idle | typing | holding | deleting

  useEffect(() => {
    const start = setTimeout(() => setMode('typing'), startDelay);
    return () => clearTimeout(start);
  }, [startDelay]);

  useEffect(() => {
    if (mode === 'idle') return undefined;

    if (mode === 'typing') {
      if (count >= text.length) {
        const t = setTimeout(() => setMode(loop ? 'holding' : 'idle'), 0);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setCount((c) => c + 1), speed);
      return () => clearTimeout(t);
    }

    if (mode === 'holding') {
      const t = setTimeout(() => setMode(loop ? 'deleting' : 'idle'), holdDelay);
      return () => clearTimeout(t);
    }

    if (mode === 'deleting') {
      if (count <= 0) {
        const t = setTimeout(() => setMode('typing'), pauseBetween);
        return () => clearTimeout(t);
      }
      const t = setTimeout(() => setCount((c) => c - 1), deleteSpeed);
      return () => clearTimeout(t);
    }

    return undefined;
  }, [mode, count, text, speed, deleteSpeed, holdDelay, pauseBetween, loop]);

  const visible = text.slice(0, count);
  const parts = visible.split('\n');
  const blinking = mode === 'holding' || (mode === 'idle' && count >= text.length);

  return (
    <Tag className={className} aria-label={ariaLabel || text.replace('\n', ' ')}>
      {parts.map((part, i) => (
        <span key={i}>
          {i > 0 && <br />}
          {i === parts.length - 1 && i > 0 ? (
            <span className="text-gold italic font-medium">{part}</span>
          ) : (
            part
          )}
        </span>
      ))}
      <span
        className={`type-cursor ${blinking ? 'type-cursor--blink' : ''} ${cursorClassName}`}
        aria-hidden="true"
      />
    </Tag>
  );
};

export default Typewriter;
