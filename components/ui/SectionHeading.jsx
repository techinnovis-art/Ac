'use client';

import Reveal from './Reveal';

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = 'center',
  className = '',
}) {
  const alignment =
    align === 'center' ? 'mx-auto text-center items-center' : 'text-left items-start';
  return (
    <div className={`flex max-w-2xl flex-col gap-4 ${alignment} ${className}`}>
      {eyebrow && (
        <Reveal>
          <span className="eyebrow">{eyebrow}</span>
        </Reveal>
      )}
      <Reveal delay={0.05}>
        <h2 className="font-display text-3xl font-bold leading-tight tracking-tight balance sm:text-4xl md:text-[2.7rem]">
          {title}
        </h2>
      </Reveal>
      {subtitle && (
        <Reveal delay={0.1}>
          <p className="text-base leading-relaxed text-muted md:text-lg">{subtitle}</p>
        </Reveal>
      )}
    </div>
  );
}
