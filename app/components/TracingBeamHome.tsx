import { twMerge } from "tailwind-merge";
import { TracingBeam } from "./UI/tracing-beam";
import { Link } from "@remix-run/react";
import { BentoGridSecondDemo } from "~/components/DisplayProjects";
import { HeroParallax } from "~/components/UI/hero-parallax";
import { TextGenerateEffect } from "~/components/UI/text-generate-effect";
import { TypewriterEffectSmooth } from "~/components/UI/typewriter-effect";
import ProjectsShow from "./ProjectsShow";
import ProgressBar from "./UI/ProgressBar";
import { MovingElements } from "./MovingElements";

const words = [
  {
    text: "Front End",
    className: "text-white ",
  },
  {
    text: "web",
    className: "text-white ",
  },
  {
    text: "developer",
    className: "text-white ",
  },
];
const words2 = [
  {
    text: "Blaž Dežman.",
    className: "text-blue-400 ",
  },
];

export function TracingBeamDemo() {
  return (
    <TracingBeam className="">
      <div className="">
        <div className=" justify-center max-md:mx-10 max-md:flex max-md:flex-col max-sm:hidden md:flex md:flex-col md:items-center md:justify-center lg:items-start ">
          <TypewriterEffectSmooth words={words} />
          <TypewriterEffectSmooth words={words2} />
        </div>
        <div className="mt-5  flex flex-col items-center justify-center sm:hidden">
          <p className="align-middle text-3xl font-extrabold text-white">
            Front End web developer
          </p>
          <p className="align-middle text-5xl font-extrabold text-blue-400">
            Blaž Dežman
          </p>{" "}
        </div>
        <div className="mt-12 max-w-[800px] max-md:flex max-md:justify-center max-sm:mx-6 md:flex md:justify-center lg:justify-normal">
          <p className="max-w-[650px] text-justify text-xl font-bold text-white">
            Hey folks, welcome to my portfolio! I'm your go-to guy for front-end
            React development, where I blend creativity and code to build
            top-notch web apps. Check out my projects to see the magic I create
            with every line of code. Let's dive into the thrilling world of web
            development together!
          </p>
        </div>
        <div className="mt-16 flex gap-8 max-md:flex max-md:justify-center max-sm:flex max-sm:justify-center md:flex md:justify-center lg:justify-normal">
          <Link
            to={"about"}
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border border-none bg-blue-500 px-6 py-4 text-lg font-extrabold  text-white max-sm:h-16 max-sm:w-40"
          >
            Learn more about me
          </Link>
          <Link
            preventScrollReset
            to={"contact-me"}
            className="inline-flex h-12 animate-shimmer items-center justify-center rounded-md border px-6 py-4 text-lg  font-extrabold text-white max-sm:h-16 max-sm:w-40"
          >
            Contact me
          </Link>
        </div>
        <div className="mt-28 max-md:mx-8 max-sm:mx-4 max-sm:mt-20 md:mx-8">
          <BentoGridSecondDemo />
        </div>
        <div className="mt-0">
          <ProjectsShow />
        </div>
        <div className="mt-20 max-md:mx-10 max-md:flex max-md:flex-col max-md:items-center max-sm:mx-6 max-sm:mt-5 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center  md:mx-8 md:flex md:flex-col md:items-center md:justify-center lg:flex-none lg:items-start lg:justify-normal">
          <h1 className="pb-5 text-6xl  font-extrabold text-white max-sm:text-5xl">
            WORK WITH ME
          </h1>
          <div className="pb-20">
            <div className="max-sm:flex max-sm:flex-col max-sm:justify-center">
              <span className="text-xl font-extrabold text-blue-400 ">
                Got any questions?
              </span>
              <p className="mt-2 max-w-96  text-justify font-bold text-white">
                I'm a front-end developer dedicated to crafting immersive
                digital experiences. Specializing in building responsive
                websites and dynamic user interfaces, I thrive on pushing
                boundaries and enhancing user satisfaction through innovative
                design and seamless functionality.
              </p>
            </div>
            <Link
              preventScrollReset
              to={"contact-me"}
              className="mt-4 inline-flex h-12 animate-shimmer items-center justify-center rounded-md border px-6 py-4  text-lg font-extrabold text-white max-sm:h-16 max-sm:w-40"
            >
              Contact me
            </Link>
          </div>
          <div className="mt-0 pb-20">
            <MovingElements direction="left" />
          </div>
        </div>
      </div>
    </TracingBeam>
  );
}
