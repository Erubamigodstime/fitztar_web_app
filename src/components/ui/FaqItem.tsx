"use client";

import { useState } from "react";

interface FaqItemProps {
  question: string;
  answer: string;
  defaultOpen?: boolean;
}

export default function FaqItem({
  question,
  answer,
  defaultOpen = false,
}: FaqItemProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div className="rounded-2xl border border-slate-200 bg-white">
      <button
        onClick={() => setOpen(!open)}
        className="flex w-full items-center gap-4 px-6 py-5 text-left"
      >
        {/* Toggle */}
        <span
          className={`flex h-8 w-8 items-center justify-center rounded-full border text-lg transition ${
            open
              ? "border-[#7CFA6B] bg-[#7CFA6B] text-black"
              : "border-slate-300 text-slate-500"
          }`}
        >
          {open ? "−" : "+"}
        </span>

        {/* <span className="text-sm font-medium text-black"> */}
          <span className={`${ open ? "text-black" : "text-[#1F2E1F]"}text-sm `}>
          {question}
        </span>
      </button>

      {open && (
        <div className="px-6 pb-5 text-sm leading-relaxed text-slate-500">
          {answer}
        </div>
      )}
    </div>
  );
}
