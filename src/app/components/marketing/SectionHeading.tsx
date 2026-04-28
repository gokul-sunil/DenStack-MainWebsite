interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  centered = false,
}: SectionHeadingProps) {
  const alignment = centered ? 'text-center items-center' : 'text-left items-start';

  return (
    <div className={`flex flex-col ${alignment} mb-8 sm:mb-12`}>
      {eyebrow && (
        <div className="inline-block px-3 sm:px-4 py-1.5 bg-blue-100 text-blue-700 rounded-full text-xs sm:text-sm font-medium mb-3 sm:mb-4">
          {eyebrow}
        </div>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-gray-900 mb-3 sm:mb-4 max-w-3xl">{title}</h2>
      {description && (
        <p className="text-base sm:text-lg lg:text-xl text-gray-600 max-w-2xl leading-relaxed">{description}</p>
      )}
    </div>
  );
}