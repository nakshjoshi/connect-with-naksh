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
            /* This is a real destination, so it gets a real affordance:
               a bordered target at readable size, not dim micro-text. */
            className="group inline-flex flex-shrink-0 items-center gap-2 border border-line-strong
                       bg-surface px-3 py-1.5 font-jet text-xs uppercase tracking-wider text-fg
                       transition-colors hover:border-accent hover:bg-surface-2 hover:text-accent"
          >
            {action.text}
            <span className="transition-transform duration-200 group-hover:translate-x-0.5">→</span>
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
