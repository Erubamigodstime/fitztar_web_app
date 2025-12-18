import Image from "next/image";

export default function SupportSection() {
  return (
    <section className="bg-white pb-28">
      <div className="mx-auto max-w-[760px] px-6">
        <div className="rounded-3xl bg-slate-50 px-6 py-16 text-center">
          {/* Avatars */}
          <div className="mb-6 flex justify-center">
            <div className="flex space-y-0 -space-x-3">
              <Image
                src="/images/avatar-1.jpg"
                alt="Support team"
                width={48}
                height={48}
                className="h-10 w-10 rounded-full object-cover z-10"
              />
              <Image
                src="/images/avatar-2.jpg"
                alt="Support team"
                width={48}
                height={48}
                className="h-14 w-14 rounded-full border-4 border-white object-cover z-20"
              />
              <Image
                src="/images/avatar-3.jpg"
                alt="Support team"
                width={48}
                height={48}
                className="h-10 w-10 rounded-full object-cover z-10"
              />
            </div>
          </div>

          {/* Text */}
          <h3 className="text-lg font-semibold text-[#1F2E1F]">
            Still have questions?
          </h3>

          <p className="mt-1 text-sm text-slate-500">
            We&apos;re here to help.
          </p>

          {/* Button */}
          <button className="mt-6 inline-flex items-center gap-2 rounded-full bg-[#7CFA6B] px-6 py-3 text-sm font-medium text-black">
            Contact Support
            <span>↗</span>
          </button>
        </div>
      </div>
    </section>
  );
}
