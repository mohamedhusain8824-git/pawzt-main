import { useScrollReveal } from "../hooks/useScrollReveal";

/* ─────────────────────────────────────────────
   FADE-UP REVEAL WRAPPER
───────────────────────────────────────────── */
export function Reveal({ children, delay = 0, className = "", style = {} }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(32px)",
        transition: `opacity 0.6s ease ${delay}ms, transform 0.6s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────
   SLIDE-IN REVEAL WRAPPER
───────────────────────────────────────────── */
export function RevealSlide({ children, delay = 0, className = "", style = {} }) {
  const [ref, visible] = useScrollReveal();
  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateX(0)" : "translateX(40px)",
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  );
}
