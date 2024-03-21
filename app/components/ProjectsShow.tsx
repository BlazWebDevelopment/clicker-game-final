import React from "react";
import ProgressBar from "./UI/ProgressBar";
import { Spotlight } from "./UI/Spotlight";
function ProjectsShow() {
  return (
    <div className=" ">
      <div className="relative h-[50rem] w-full overflow-hidden rounded-md py-20 antialiased max-sm:h-auto  md:items-center md:justify-center">
        <Spotlight
          className="-top-80 left-0 md:-top-20 md:left-60"
          fill="skyblue"
        />
        <div className="pt-10 max-md:flex max-md:flex-col max-md:justify-center max-sm:flex max-sm:flex-col max-sm:justify-center md:mx-8">
          <h1 className="pb-10 text-6xl font-extrabold text-white  max-md:px-10 max-sm:mx-6 max-sm:text-5xl ">
            MY KNOWLEDGE
          </h1>

          <div className="flex flex-col gap-20 max-md:mx-8 max-sm:mx-6 max-sm:gap-10 ">
            <div className="flex gap-10 max-sm:flex-col ">
              <ProgressBar label={"React"} value={100} />
              <ProgressBar label={"Remix"} value={100} />
            </div>
            <div className="flex gap-10 max-sm:flex-col">
              <ProgressBar label={"TypeScript"} value={100} />
              <ProgressBar label={"Next.JS"} value={70} />
            </div>
            <div className="flex gap-10 max-sm:flex-col">
              <ProgressBar label={"React Native"} value={70} />
              <ProgressBar label={"React"} value={100} />
            </div>
            <div className="flex gap-10 max-sm:flex-col">
              <ProgressBar label={"TwilwindCSS"} value={100} />
              <ProgressBar label={"PostgreSQL"} value={50} />
            </div>
            <div className="flex gap-10 max-sm:flex-col">
              <ProgressBar label={"Teamwork"} value={100} />
              <ProgressBar label={"Prisma"} value={100} />
            </div>{" "}
          </div>
        </div>
      </div>
    </div>

    // <div className="relative flex h-[40rem] w-full overflow-hidden rounded-md bg-black/[0.96] antialiased bg-grid-white/[0.02] md:items-center md:justify-center">
    //   <Spotlight
    //     className="-top-40 left-0 md:-top-20 md:left-60"
    //     fill="white"
    //   />
    //   <div className=" relative z-10  mx-auto w-full max-w-7xl  p-4 pt-20 md:pt-0">
    //     <h1 className="bg-opacity-50 bg-gradient-to-b from-neutral-50 to-neutral-400 bg-clip-text text-center text-4xl font-bold text-transparent md:text-7xl">
    //       Spotlight <br /> is the new trend.
    //     </h1>
    //     <p className="mx-auto mt-4 max-w-lg text-center text-base font-normal text-neutral-300">
    //       Spotlight effect is a great way to draw attention to a specific part
    //       of the page. Here, we are drawing the attention towards the text
    //       section of the page. I don&apos;t know why but I&apos;m running out of
    //       copy.
    //     </p>
    //   </div>
    // </div>
  );
}

export default ProjectsShow;
