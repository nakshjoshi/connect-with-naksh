import Link from "next/link";

/**
 * Every section opens the same way: an indexed label, a real heading,
 * an optional one-line frame. Consistency here is what makes the page
 * scannable in the Z-pattern.
 */
export default function SectionHeader({
  index,
  label,
  title,
  intro,
  action,
}: {
  index: string;
  label: string;
  title: string;
  intro?: string;
  action?: { href: string; text: string };
}) {
  return (
    <header className="mb-10 lg:mb-14">

      <div className="mb-5 flex items-center gap-3">
        <span className="font-jet text-label text-accent">{index}</span>
        <span className="eyebrow">{label}</span>
        <span className="hairline flex-1" />
        {action && (
          <Link
            href={action.href}
            className="font-jet text-label uppercase text-fg-dim transition-colors hover:text-fg"
          >
            {action.text} →
          </Link>
        )}
      </div>

      <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <h2 className="max-w-xl text-display-sm font-medium">{title}</h2>
        {intro && (
          <p className="max-w-md text-sm leading-relaxed lg:text-right">{intro}</p>
        )}
      </div>

    </header>
  );
}
