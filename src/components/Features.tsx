import Image from "next/image";
import IntroBlock from "@/components/ui/IntroBlock";

interface FeatureItem {
  title: string;
  description: string;
  points: string[];
  image: string;
}

const features: FeatureItem[] = [
  {
    title: "Activity Tracking",
    description:
      "Every move counts and every step matters. FitzTar captures your daily effort by tracking key metrics that help you get the most out of your fitness journey.",
    points: [
      "Real-time activity tracking",
      "Daily movement insights",
      "Calories burned & step count",
      "In-app progress visualizations",
      "Reward points for movement and daily activity",
    ],
    image: "/images/activity-tracking.jpg",
  },
  {
    title: "Challenge Participation",
    description:
      "With Fitztar, you can compete, improve, and get rewarded. Join fitness challenges designed to push you forward and keep you motivated.",
    points: [
      "Fun community-driven challenges",
      "Daily & weekly goals",
      "Friendly leaderboard competition",
      "Earn reward points for consistency",
    ],
    image: "/images/challenge-participation.jpg",
  },
  {
    title: "Reward Points System",
    description:
      "Turn effort into achievement and achievement into rewards. FitzTar gamifies fitness by rewarding everything you do.",
    points: [
      "Workout completion rewards",
      "Challenge participation points",
      "Habit streaks",
      "Savings & perks",
      "Community engagement rewards",
    ],
    image: "/images/reward-point-system.jpg",
  },
  {
    title: "Social Feed",
    description:
      "Your fitness tribe lives here. Stay inspired by sharing your workouts, cheering others on, and staying connected to people on the same journey.This is where motivation becomes contagious",
    points: [
      "Share progress updates",
      "Celebrate wins together",
      "Follow friends & trainers",
      "Stay accountable through community",
      "Earn points for participating in the community"
    ],
    image: "/images/social-feeds.jpg",
  },
  {
    title: "Notifications & Reminders",
    description:
      "The support you need, exactly when you need it. No pressure. No noise. Just smart reminders designed to help you follow through on your goals without overwhelming you.",
    points: [
      "Personalized workout reminders",
      "Habit-maintenance nudges",
      "Challenge alerts",
      "Inactivity notifications",
      "Support that helps you keep your reward streak alive"
    ],
    image: "/images/notifications-reminder.jpg",
  },
    {
    title: "Wallet System",
    description:
      "Your rewards. Your perks. All in one place. The Fitztar Wallet manages your points, redemptions, and perks with zero friction.",
    points: [    
    "Earn points",
    "Store points",
    "Redeem perks",
    "Track your rewards",
    "Enjoy seamless, secure transactions"
    ],
    image: "/images/wallet-system.jpg",
  },
    {
    title: "Workout Plan Suggestions",
    description:
      "Personalized workouts backed by reward-driven consistency. Get smart recommendations tailored to your goals and earn points as you complete them.",
    points: [    
      "Personalized routines",
      "Gym or home–friendly plans",
      "Evolving programs that grow with you",
      "Rewards each time you complete recommended workouts",
    ],
    image: "/images/workout-plan.jpg",
  },
    {
    title: "Nutrition Plan Suggestions",
    description:
      "Smarter eating made simple. Receive meal suggestions aligned with your goals. This includes:",
    points: [    
      "Easy meal plans",
      "Simple nutrition guidance",
      "Real-life friendly advice"
    ],
    image: "/images/nutrition-plan.jpg",
  },
    {
    title: "Progress Dashboard",
    description:
      "See your growth. Celebrate your streaks. Earn your rewards. Your progress is transformed into clear insights that show your wins and your reward milestones.",
    points: [    
     "Weekly & monthly charts",
      "Habit streaks",
      "Badges and achievements displayed proudly"
    ],
    image: "/images/progress-dashboard.jpg",
  },

  
];

export default function Features() {
  return (
    <section id="feature" className="bg-white ">
      <div className="mx-auto max-w-[1200px] px-6">
        {/* Intro */}
        <IntroBlock
          eyebrow="Our Features"
          title="We give you the tools you need, the motivation you feel and the rewards you deserve."
          description="Every feature FitzTar built is to remove friction, boost consistency, and keep you excited about showing up."
          buttonText="Start free today"
          className="max-w-2xl"
        />

        {/* Feature Rows */}
        <div className="mt-12">
          {features.map((feature, index) => {
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={feature.title}
                className={`grid items-center  md:grid-cols-2 ${
                  isReversed ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Image */}
                <div
                  className={`overflow-hidden ${
                    isReversed ? "md:order-2" : ""
                  }`}
                >
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    width={560}
                    height={420}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Text */}
                <div className="flex-col items-center justify-center">
                  <div className={`${isReversed ? "md:order-1" : ""} md:px-10` }>
                  <h3 className="text-2xl font-semibold text-[#1F2E1F]">
                    {feature.title}
                  </h3>

                  <p className="mt-4 text-sm leading-relaxed text-slate-500">
                    {feature.description}
                  </p>

                  <ul className="mt-6 space-y-2 text-sm text-slate-500">
                  <p className="text-left"> you will get:</p>
                    {feature.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 h-1.5 w-1.5 rounded-full bg-[#7CFA6B]" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </div>
                </div>

              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
