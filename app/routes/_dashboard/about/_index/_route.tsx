import React, { useRef } from "react";
import { motion } from "framer-motion";
import { LampContainer } from "~/components/UI/lamp";
import { CardBody, CardContainer, CardItem } from "~/components/UI/3d-card";
import { Button } from "~/components/UI/moving-border";
import { Form } from "@remix-run/react";
import { MovingElements } from "~/components/MovingElements";
import { SparklesCore } from "~/components/UI/sparkles";
import { TextGenerateEffect } from "~/components/UI/text-generate-effect";
import { TypewriterEffectSmooth } from "~/components/UI/typewriter-effect";

function AboutPage() {
  const cardContainerRef = useRef(null);

  const scrollToCardContainer = () => {
    cardContainerRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const about = [
    {
      text: "About",
      className: "text-white ",
    },
    {
      text: "B",
      className: "text-blue-200 ",
    },
    {
      text: "L",
      className: "text-blue-300 ",
    },
    {
      text: "A",
      className: "text-blue-400 ",
    },
    {
      text: "Ž",
      className: "text-blue-500 ",
    },
  ];
  return (
    <div className=" max-sm:mx-6 ">
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
        <div>
          <TypewriterEffectSmooth words={about} className="max-sm:mt-20" />
        </div>
        <button
          onClick={scrollToCardContainer}
          className="mt-24 inline-flex h-12 translate-y-20 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#088cff,55%,#000103)] bg-[length:200%_100%] px-12  py-8 text-2xl font-medium text-slate-300 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
        >
          Explore
        </button>
        <div className="mt-44 ">
          <MovingElements direction="left" />
        </div>
        <div ref={cardContainerRef}>
          <div className="mb-20 flex justify-center gap-10 pt-16 max-md:flex-col max-sm:flex-col max-sm:pt-8 md:flex-col lg:flex-row">
            <div>
              <CardContainer className="inter-var rounded-xl shadow-sm shadow-blue-500 max-sm:mt-20 max-sm:h-[500px]">
                <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-transparent p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
                  <CardItem
                    translateZ="50"
                    className="text-3xl font-bold text-white dark:text-white max-sm:text-4xl"
                  >
                    Who is Blaž Dežman
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-2 max-w-sm text-sm font-bold text-blue-400 dark:text-neutral-300 max-sm:text-lg"
                  >
                    Something about my life recently
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    className="mt-4 w-full max-sm:h-[500px]"
                  >
                    <div className="h-80 w-full rounded-xl bg-black object-cover p-5 group-hover/card:shadow-xl max-sm:p-0">
                      <p className="text-justify font-semibold text-white max-sm:text-lg">
                        Hey there! I'm thrilled to announce that I've recently
                        graduated from a computer engineering program in
                        Maribor, Slovenia. Since then, I've embarked on an
                        exhilarating journey as a junior Front-End developer.
                        Currently, I'm honing my skills and gaining valuable
                        experience at Imagine.si, where I've been contributing
                        for the past six months. Additionally, I've also founded
                        my own programming company, adding an extra layer of
                        excitement to my professional endeavors.
                      </p>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
              <CardContainer className="inter-var rounded-xl shadow-sm shadow-blue-500 max-sm:mt-20 max-sm:h-[650px]">
                <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-transparent p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
                  <CardItem
                    translateZ="50"
                    className="text-3xl font-bold text-white dark:text-white max-sm:text-4xl"
                  >
                    A Passion for Precision
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-2 max-w-sm text-sm font-bold text-blue-400 dark:text-neutral-300 max-sm:text-lg"
                  >
                    My Approach to Organization and Hard Work
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    className="mt-4 w-full max-sm:h-[600px]"
                  >
                    <div className="h-80 w-full rounded-xl bg-black object-cover p-5 group-hover/card:shadow-xl max-sm:p-0">
                      <p className="text-justify font-semibold text-white max-sm:text-lg">
                        Problem-solving isn't just a skill for me—it's a mindset
                        that I wholeheartedly embrace. I approach challenges
                        with a sense of curiosity and determination, viewing
                        each obstacle as an opportunity for growth. Whether it's
                        debugging code or overcoming fitness plateaus, I relish
                        the chance to analyze problems from different angles and
                        develop innovative solutions. This relentless pursuit of
                        solutions has not only sharpened my problem-solving
                        skills but has also instilled in me a resilience that
                        fuels my drive for continuous improvement.
                      </p>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
            <div className="inline-block min-h-[1em] w-0.5 self-stretch bg-neutral-400 bg-[linear-gradient(110deg,#000103,25%,#3ca5fb,75%,#000103)] bg-[length:200%_100%] opacity-100 dark:opacity-50 max-md:hidden max-sm:hidden md:hidden "></div>
            <div>
              <CardContainer className="inter-var rounded-xl shadow-sm shadow-blue-500 max-sm:mt-10 max-sm:h-[600px]">
                <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-transparent p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
                  <CardItem
                    translateZ="50"
                    className="text-3xl font-bold text-white dark:text-white max-sm:text-4xl"
                  >
                    Embracing Challenges{" "}
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-2 max-w-sm text-sm font-bold text-blue-400 dark:text-neutral-300 max-sm:text-lg"
                  >
                    My Problem-Solving Journey{" "}
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    className="mt-4 w-full  max-sm:h-[550px]"
                  >
                    <div className="h-80 w-full rounded-xl bg-black object-cover p-5 group-hover/card:shadow-xl max-sm:p-0">
                      <p className="text-justify font-semibold text-white max-sm:text-lg">
                        In both my professional and personal life, I've
                        cultivated a reputation for being meticulously organized
                        and tirelessly hardworking. Whether it's meeting project
                        deadlines or sticking to my fitness regimen, I thrive on
                        structure and discipline. I believe that a
                        well-organized approach not only enhances efficiency but
                        also fosters a sense of clarity and control, allowing me
                        to tackle tasks with confidence and precision. From
                        meticulously planning my coding projects to maintaining
                        a detailed workout schedule, I prioritize consistency
                        and dedication in all aspects of my life.
                      </p>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
              <CardContainer className="inter-var rounded-xl shadow-sm shadow-blue-500 max-sm:mt-28 max-sm:h-[600px]">
                <CardBody className="group/card relative h-auto  w-auto rounded-xl border border-black/[0.1] bg-transparent p-6 dark:border-white/[0.2] dark:bg-black dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] sm:w-[30rem]  ">
                  <CardItem
                    translateZ="50"
                    className="text-3xl font-bold text-white dark:text-white max-sm:text-4xl"
                  >
                    Coding in my life
                  </CardItem>
                  <CardItem
                    as="p"
                    translateZ="60"
                    className="mt-2 max-w-sm text-sm font-bold text-blue-400 dark:text-neutral-300 max-sm:text-lg"
                  >
                    A Lifelong Love Affair with Coding
                  </CardItem>
                  <CardItem
                    translateZ="100"
                    className="mt-4 w-full  max-sm:h-[650px]"
                  >
                    <div className="h-80 w-full rounded-xl bg-black object-cover p-5 group-hover/card:shadow-xl max-sm:p-0">
                      <p className="text-justify font-semibold text-white max-sm:text-lg">
                        Programming isn't just a profession for me—it's a
                        lifelong passion that fuels my creativity and drive for
                        innovation. From crafting elegant user interfaces to
                        optimizing website performance, I find joy in the
                        intricacies of Front-End development. Every line of code
                        is an opportunity to bring ideas to life and create
                        seamless user experiences. As technology evolves, so too
                        does my enthusiasm for learning new languages,
                        frameworks, and design principles. With each project, I
                        strive to push the boundaries of what's possible,
                        constantly honing my skills to stay at the forefront of
                        Front-End technologies.
                      </p>
                    </div>
                  </CardItem>
                </CardBody>
              </CardContainer>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutPage;
