"use client";

export default function ContactUsSection() {
  return (
    <section
      className="relative bg-cover bg-center py-28"
      style={{ backgroundImage: "url('/images/contactus-bg.jpg')" }}
      id="contact"
    >
      {/* Overlay (very subtle, optional but helps contrast) */}
      <div className="absolute inset-0 bg-black/10" />

      <div className="relative mx-auto max-w-[1200px] px-6">
        <div className="rounded-3xl bg-white p-8 shadow-sm md:p-14">
          <div className="grid gap-16 md:grid-cols-2">
            {/* LEFT */}
            <div>
              <h2 className="text-3xl font-semibold text-[#1F2E1F]">
                Contact Us
              </h2>

              <p className="mt-2 text-sm text-slate-500">
                Let’s talk. We’re here to support your journey.
              </p>

              <h3 className="mt-10 text-xl font-semibold text-[#1F2E1F]">
                How to Reach Us
              </h3>

              <p className="mt-2 max-w-sm text-sm text-slate-500">
                Whether you need help, have feedback, or want to partner
                with us, we’d love to hear from you.
              </p>

              <div className="mt-6 space-y-2 text-sm">
                <p>
                  <span className="font-medium text-[#1F2E1F]">
                    General Inquiries:
                  </span>{" "}
                  <a
                    href="mailto:inquiries@inpruva.com"
                    className="text-blue-600"
                  >
                    inquiries@inpruva.com
                  </a>
                </p>

                <p>
                  <span className="font-medium text-[#1F2E1F]">
                    Support Team:
                  </span>{" "}
                  <a
                    href="mailto:support@inpruva.com"
                    className="text-blue-600"
                  >
                    support@inpruva.com
                  </a>
                </p>

                <p>
                  <span className="font-medium text-[#1F2E1F]">
                    Partnerships:
                  </span>{" "}
                  <a
                    href="mailto:partnership@inpruva.com"
                    className="text-blue-600"
                  >
                    partnership@inpruva.com
                  </a>
                </p>
              </div>
            </div>

            {/* RIGHT */}
            <div>
              <h3 className="text-xl font-semibold text-[#1F2E1F]">
                Send a Message
              </h3>

              <p className="mt-2 text-sm text-slate-500">
                Fill out the form and we will get back to you promptly
              </p>

              <form className="mt-6 space-y-5">
                <div>
                  <label className="mb-1 block text-xs text-slate-500">
                    Name
                  </label>
                  <input
                    type="text"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#7CFA6B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-500">
                    Email
                  </label>
                  <input
                    type="email"
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#7CFA6B] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-500">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#7CFA6B] focus:outline-none"
                  />
                </div>

                <div className="flex justify-end">
                  <button
                    type="submit"
                    className="inline-flex items-center gap-2 rounded-full bg-[#7CFA6B] px-6 py-3 text-sm font-medium text-black"
                  >
                    Send message
                    <span>↗</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
