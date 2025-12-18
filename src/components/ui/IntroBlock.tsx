import { ArrowUpRight } from "lucide-react";

interface IntroBlockProps {
  eyebrow?: string;
  title: string;
  description: string;
  buttonText?: string;
  className?: string;
}

export default function IntroBlock({
  eyebrow,
  title,
  description,
  buttonText,
  className = "",
}: IntroBlockProps) {
  return (
    <div className={className}>
      {eyebrow && (
        <span className="text-sm text-slate-500">
          {eyebrow}
        </span>
      )}

      <h2 className="mt-2 max-w-xl text-4xl font-semibold leading-tight text-[#1F2E1F]">
        {title}
      </h2>

      <p className="mt-4 max-w-xl text-sm leading-relaxed text-slate-500">
        {description}
      </p>

      {buttonText && (
        <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#7CFA6B] px-6 py-3 text-sm font-medium text-black">
          {buttonText}
          <ArrowUpRight size={18} />
        </button>
      )}
    </div>
  );
}
