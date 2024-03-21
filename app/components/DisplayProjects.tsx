import React from "react";
import { BentoGrid, BentoGridItem } from "../components/UI/bento-grid";
import imagineLogo from "../Images/Imagine_logo.png";
import { useNavigate } from "@remix-run/react";
export function BentoGridSecondDemo() {
  return (
    <BentoGrid className="max-w-5xl md:auto-rows-[20rem]">
      {items.map((item, i) => (
        <BentoGridItem
          key={i}
          title={item.title}
          description={item.description}
          header={item.header}
          className={item.className}
        />
      ))}
    </BentoGrid>
  );
}
const Skeleton = ({ logo, link }: any) => {
  return (
    <div className="hover:cursor-pointer">
      <img
        src={logo}
        onClick={() => {
          window.open(link, "_blank");
        }}
      />
    </div>
  );
};
const items = [
  {
    title: "Current state of my job",
    description:
      "Working for company called Imagine.si d.o.o (Building web applications for real-estate and some React-native stuff)",
    header: <Skeleton logo={imagineLogo} link={"https://inep.eu"} />,
    className: "md:col-span-2",
  },
  {
    title: "Thriving on Challenges: My Journey of Problem-Solving Mastery",
    description:
      "I approach challenges with curiosity and determination, transforming obstacles into opportunities for growth. ",
    header: (
      <iframe src="https://lottie.host/embed/cb1b5ee9-1c16-41b0-b116-f7efef6222c5/lTBlmD5zCV.json"></iframe>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Coding: A Lifelong Passion",
    description:
      "Coding isn't just my profession; it's my lifelong passion fueling creativity and innovation. With each project, I push boundaries and stay at the forefront of Front-End technologies.",
    header: (
      <iframe src="https://lottie.host/embed/9c5943d1-e784-40e8-844c-f279ba3d097f/nepcdkaqpr.json"></iframe>
    ),
    className: "md:col-span-1",
  },
  {
    title: "Balancing Act: Nurturing Wellness Amidst Work",
    description:
      "Maintaining a healthy work-life balance is paramount. I prioritize self-care, staying active, and exploring diverse interests outside of coding to fuel creativity and productivity in all aspects of life.",

    header: (
      <iframe
        className="flex h-56 justify-center"
        src="https://lottie.host/embed/e492a2bb-b9ac-4ed2-98fb-4dfd248d796b/xnMXzxXnqO.json"
      ></iframe>
    ),
    className: "md:col-span-2",
  },
];
