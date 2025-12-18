"use client";

import { useState } from "react";
import { Loader2 } from "lucide-react";

export default function ContactUsSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<{
    type: "idle" | "loading" | "success" | "error";
    message: string;
  }>({ type: "idle", message: "" });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (status.type === "loading") return;

    setStatus({ type: "loading", message: "" });

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok) throw new Error(data.error || "Something went wrong");

      setStatus({ type: "success", message: "Message sent successfully!" });
      setFormData({ name: "", email: "", message: "" });
      setTimeout(() => setStatus({ type: "idle", message: "" }), 5000);
    } catch (error) {
      setStatus({ type: "error", message: error instanceof Error ? error.message : "Failed to send message" });
    }
  };

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

              <form className="mt-6 space-y-5" onSubmit={handleSubmit}>
                <div>
                  <label className="mb-1 block text-xs text-slate-500">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={status.type === "loading"}
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#7CFA6B] focus:outline-none disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-500">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={status.type === "loading"}
                    className="w-full rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#7CFA6B] focus:outline-none disabled:opacity-50"
                  />
                </div>

                <div>
                  <label className="mb-1 block text-xs text-slate-500">
                    Message
                  </label>
                  <textarea
                    rows={4}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    disabled={status.type === "loading"}
                    className="w-full resize-none rounded-lg border border-slate-200 px-4 py-3 text-sm focus:border-[#7CFA6B] focus:outline-none disabled:opacity-50"
                  />
                </div>

                <div className="flex flex-col items-end gap-3">
                  {status.message && (
                    <p className={`text-sm ${status.type === 'error' ? 'text-red-500' : 'text-green-600'}`}>
                      {status.message}
                    </p>
                  )}
                  <button
                    type="submit"
                    disabled={status.type === "loading"}
                    className="inline-flex items-center gap-2 rounded-full bg-[#7CFA6B] px-6 py-3 text-sm font-medium text-black disabled:opacity-70"
                  >
                    {status.type === "loading" ? "Sending..." : "Send message"}
                    {status.type === "loading" ? (
                      <Loader2 className="h-4 w-4 animate-spin" />
                    ) : (
                      <span>↗</span>
                    )}
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
