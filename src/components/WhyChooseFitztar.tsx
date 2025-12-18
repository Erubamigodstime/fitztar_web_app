import Image from "next/image";
import { User, Users, Smartphone, Gift } from "lucide-react";

const features = [
  {
    title: "Personalization",
    description:
      "Smart workout plans and science backed nutrition plans that adapts to your needs.",
    icon: User,
  },
  {
    title: "Fitness Community",
    description:
      "Daily monitoring to build discipline and join a motivating community that cheers you on.",
    icon: Users,
  },
  {
    title: "Sync Devices",
    description:
      "Seamless integration with your smart wearable devices to effectively track your activity.",
    icon: Smartphone,
  },
  {
    title: "Earn Rewards",
    description:
      "Fitztar gives you a reward system that turns your effort into points and real benefits.",
    icon: Gift,
  },
];

export default function WhyChooseFitztar() {
  return (
    <section id="choose" className="bg-white py-10 font-creato">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Heading */}
        <div className="max-w-2xl">
          <span className="text-sm font-normal text-slate-500">
            The Fitness app for you
          </span>

          <h2 className="mt-6 text-4xl font-bold text-slate-900">
            Why Choose FitzTar?
          </h2>

          <p className="mt-2 text-sm font-normal leading-relaxed text-slate-500">
            Fitness shouldn’t feel overwhelming, it should feel achievable and rewarding. Fitztar makes staying healthy feel natural, enjoyable, and rewarding.
          </p>
        </div>

        {/* Image */}
        <div className="mt-7 overflow-hidden rounded-2xl">
          <Image
            src="/images/lady-running.png"
            alt="Why Choose FitzTar"
            width={1200}
            height={600}
            className="w-full object-cover"
          />
        </div>

        {/* Features */}
        <div className="mt-16 grid grid-cols-1 gap-12 text-center md:grid-cols-4">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <div key={feature.title}>
                <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center">
                  <Icon className="h-9 w-9 text-black" />
                </div>

                <h3 className="text-sm font-bold text-slate-900">
                  {feature.title}
                </h3>

                <p className="mt-2 text-xs font-normal leading-relaxed text-slate-500">
                  {feature.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
