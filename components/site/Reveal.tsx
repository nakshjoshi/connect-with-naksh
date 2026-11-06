/**
 * Scroll reveal with zero JavaScript.
 *
 * Content renders visible by default; where the browser supports
 * scroll-driven animations it eases in as it enters the viewport. No
 * hydration, no flash of hidden content, and nothing to break for anyone
 * without JS or with reduced motion preferred.
 */
export default function Reveal({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={`reveal ${className}`}>{children}</div>;
}
