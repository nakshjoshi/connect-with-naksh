type Props = {
  title: string;
  subtitle?: string;
};

export default function SectionTitle({ title, subtitle }: Props) {
  return (
    <div className="space-y-2">

      {/* Main Title */}
      <div className="flex items-center gap-2 text-3xl font-semibold">

        <span className="text-primary">/</span>
        <span>{title}</span>

      </div>

      {/* Subtitle */}
      {subtitle && (
        <p className="text-gray text-sm">
          {subtitle}
        </p>
      )}

    </div>
  );
}
