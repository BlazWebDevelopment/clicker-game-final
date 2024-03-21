import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";
import { BentoGridSecondDemo } from "~/components/DisplayProjects";
import { TracingBeamDemo } from "~/components/TracingBeamHome";
import { HeroParallax } from "~/components/UI/hero-parallax";
import { SparklesCore } from "~/components/UI/sparkles";
import { TextGenerateEffect } from "~/components/UI/text-generate-effect";
import { TypewriterEffectSmooth } from "~/components/UI/typewriter-effect";
export const meta: MetaFunction = () => {
  return [
    { title: "Blaz Dezman portfolio" },
    { name: "Portfolio", content: "Welcome to my portfolio!" },
  ];
};

export default function Index() {
  return (
    <div>
      <div className="relative flex h-full w-full flex-col items-center justify-center overflow-hidden rounded-md bg-black pt-32">
        <div className="absolute inset-0 h-full w-full">
          <SparklesCore
            id="tsparticlesfullpage"
            background="transparent"
            minSize={0.6}
            maxSize={1.0}
            particleDensity={20}
            className="h-full w-full"
            particleColor="#ffffff"
          />
        </div>
        <div className="lightning before:absolute before:-left-1/4 before:bottom-0 before:top-0 before:w-1/4 before:rounded-r-full before:bg-blue-400 before:opacity-30 before:blur-3xl" />
        <TracingBeamDemo />
      </div>
    </div>
  );
}
