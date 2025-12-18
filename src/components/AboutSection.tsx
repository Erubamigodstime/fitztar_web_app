import Image from "next/image";
import IntroBlock from "@/components/ui/IntroBlock";
import { Plane, Eye, Heart } from "lucide-react";

const values = [
  {
    title: "Our Mission",
    description:
      "To help you stay consistent by giving them clarity, structure, community support, and meaningful rewards for every effort they put in.",
    icon: Plane,
  },
  {
    title: "Our Vision",
    description:
      "A world where staying active feels natural, where technology supports your goals, and where your consistency is recognized and rewarded.",
    icon: Eye,
  },
  {
    title: "Our Values",
    description:
      "Consistency, Community, Clarity, Well-Being, and Rewards. FitzTar is more than an app, it's a support system that grows with you.",
    icon: Heart,
  },
];

export default function AboutSection() {
  return (
    <section id="about" className="bg-white font-creato pb-14">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Top Intro */}
        <IntroBlock
          eyebrow="About Us"
          title="Fitness should fit your life and reward your effort."
          description="People often struggle to maintain consistent fitness habits due to lack of motivation, accountability, and tangible rewards. FitzTar bridges this gap by turning activity into value, combining fitness tracking, community engagement, and monetary incentives into one simple experience."
          buttonText="Get started"
        />

        {/* Middle Content */}
        <div className="mt-20 grid gap-12 md:grid-cols-2">
          {/* Image */}
          <div className="overflow-hidden rounded-2xl">
            <Image
              src="/images/four-people-training-together.jpg"
              alt="Group fitness"
              width={600}
              height={400}
              className="h-full w-full object-cover"
            />
          </div>

          {/* Story */}
          <div>
            <h3 className="text-2xl font-semibold text-[#1F2E1F]">
              Our Story
            </h3>

            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Everyone wants to be consistent but sometimes life gets in the way.
              We realized the real problem wasn't willpower but lack of
              organization and motivation.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              So we built FitzTar:
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              A clean, intelligent platform that tracks your activities, provides
              workouts and nutrition plans, shows your progress, connects you to
              a community, and rewards you for being active and with this you stay
              motivated.
            </p>

            <p className="mt-4 text-sm leading-relaxed text-slate-500">
              Fitness finally feels like a lifestyle, not a struggle.
            </p>
          </div>
        </div>

        {/* Mission / Vision / Values */}
        <div className="mt-24 grid gap-12 md:grid-cols-3">
          {values.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title}>
                <div className="flex  justify-start">
                  <Icon className="h-8 w-8 text-black" />
                </div>

                <h4 className="mt-4 text-sm font-semibold text-[#1F2E1F]">
                  {item.title}
                </h4>

                <p className="mt-2 text-xs leading-relaxed text-slate-500">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
