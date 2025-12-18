import FaqItem from "@/components/ui/FaqItem";

const faqs = [
  {
    question: "What makes Fitztar different from other fitness apps?",
    answer:
      "Fitztar combines workouts, nutrition, habits, community, and a built-in reward system, giving you a complete ecosystem that motivates you to stay consistent.",
  },
  {
    question: "Is Fitztar free to use?",
    answer:
      "Yes, Fitztar offers a free plan with access to core features. Premium features may be available through optional upgrades.",
  },
  {
    question: "Can beginners use Fitztar?",
    answer:
      "Absolutely. Fitztar is designed for all fitness levels, including beginners, with guided plans and progressive challenges.",
  },
  {
    question:
      "Do I need gym equipment to follow the workout plans?",
    answer:
      "No. Fitztar offers both equipment-free workouts and gym-based plans, depending on your preference.",
  },
  {
    question: "Is my data secure?",
    answer:
      "Yes. We take data security seriously and use industry-standard encryption and best practices to protect your information.",
  },
  {
    question:
      "Can I connect my smartwatch to the Fitztar app?",
    answer:
      "Yes. Fitztar integrates with popular smartwatches and wearable devices to track your activity seamlessly.",
  },
  {
    question: "How do the rewards work?",
    answer:
      "You earn reward points by staying active, completing workouts, joining challenges, and maintaining healthy habits.",
  },
];

export default function FaqSection() {
  return (
    <section id="faq" className="bg-white py-28">
      <div className="mx-auto max-w-[760px] px-6">
        {/* Heading */}
        <div className="mb-16 text-center">
          <span className="text-sm text-slate-500">
            Hey! Got Any Questions?
          </span>

          <h2 className="mt-3 text-4xl font-semibold text-[#1F2E1F]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* FAQ Items */}
        <div className="space-y-5">
          {faqs.map((faq, index) => (
            <FaqItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
              defaultOpen={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
