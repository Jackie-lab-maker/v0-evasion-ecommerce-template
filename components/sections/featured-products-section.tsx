"use client";

import { FadeImage } from "@/components/fade-image";

const features = [
  {
    title: "AI-Powered Navigation",
    description: "Intelligence",
    image: "/images/drone-ai-system.jpg",
  },
  {
    title: "Aerospace-Grade Materials",
    description: "Engineering",
    image: "/images/aviation-materials.jpg",
  },
  {
    title: "Advanced Propulsion",
    description: "Power",
    image: "/images/aviation-propulsion.jpg",
  },
  {
    title: "Precision Sensor Systems",
    description: "Safety",
    image: "/images/drone-collision.jpg",
  },
  {
    title: "Modular Power Systems",
    description: "Endurance",
    image: "/images/drone-battery.jpg",
  },
  {
    title: "Real-Time Flight Control",
    description: "Control",
    image: "/images/aviation-flight-deck.jpg",
  },
];

export function FeaturedProductsSection() {
  return (
    <section id="technology" className="bg-background">
      {/* Section Title */}
      <div className="px-6 py-20 text-center md:px-12 md:py-28 lg:px-20 lg:py-32 lg:pb-20">
        <h2 className="text-3xl font-medium tracking-tight text-foreground md:text-4xl lg:text-5xl">
          Built for Performance.
          <br />
          Designed to Evolve.
        </h2>
        <p className="mx-auto mt-6 max-w-md text-sm text-muted-foreground">
          Core Technology
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 gap-4 px-6 pb-20 md:grid-cols-3 md:px-12 lg:px-20">
        {features.map((feature) => (
          <div key={feature.title} className="group">
            {/* Image */}
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
              <FadeImage
                src={feature.image || "/placeholder.svg"}
                alt={feature.title}
                fill
                className="object-cover group-hover:scale-105"
              />
            </div>

            {/* Content */}
            <div className="py-6">
              <p className="mb-2 text-xs uppercase tracking-widest text-muted-foreground">
                {feature.description}
              </p>
              <h3 className="text-foreground text-xl font-semibold">
                {feature.title}
              </h3>
            </div>
          </div>
        ))}
      </div>

      {/* CTA Link */}
      <div className="flex justify-center px-6 pb-28 md:px-12 lg:px-20">
        
      </div>
    </section>
  );
}
