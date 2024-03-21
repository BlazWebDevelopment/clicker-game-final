import React from "react";
import { Label } from "./UI/label";
import { Input, TextArea } from "./UI/input";
import { cn } from "~/utils/cn";
import {
  IconBrandGithub,
  IconBrandGoogle,
  IconBrandOnlyfans,
  IconBrandTwitter,
} from "@tabler/icons-react";
import { Form } from "@remix-run/react";

export function ContactForm({ register }) {
  return (
    <div className="mx-auto mt-20 w-full max-w-md rounded-none bg-black p-4  shadow-input max-sm:max-w-[350px]  md:rounded-2xl md:p-8 lg:min-w-[600px]">
      <h2 className="text-xl font-bold  text-neutral-200">Send me a message</h2>
      <p className="mt-2 max-w-sm text-sm  text-neutral-300">
        If you want to work with me or have a job for me, feel free to send me a
        message. I will answer as quick as possible.
      </p>

      <Form method="POST" className="my-8" noValidate>
        <div className="mb-4 flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0">
          <LabelInputContainer>
            <Label htmlFor="firstname">First name</Label>
            <Input
              id="firstname"
              placeholder="Tayrone"
              type="text"
              {...register("name")}
            />
          </LabelInputContainer>
          <LabelInputContainer>
            <Label htmlFor="lastname">Last name</Label>
            <Input
              id="lastname"
              placeholder="Tayrell"
              type="text"
              {...register("lastName")}
            />
          </LabelInputContainer>
        </div>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="email">Email Address</Label>
          <Input
            id="email"
            placeholder="portfolio@gmail.com"
            type="email"
            {...register("Email")}
          />
        </LabelInputContainer>
        <LabelInputContainer className="mb-4">
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            placeholder="message"
            {...register("Message")}
          />
        </LabelInputContainer>

        <button
          className="group/btn relative block h-10 w-full rounded-md bg-zinc-800  bg-gradient-to-br from-zinc-900 to-zinc-900 font-medium text-white shadow-[0px_1px_0px_0px_var(--zinc-800)_inset,0px_-1px_0px_0px_var(--zinc-800)_inset]"
          type="submit"
        >
          Send message &rarr;
          <BottomGradient />
        </button>

        <div className="my-8 h-[1px] w-full bg-gradient-to-r from-transparent  via-neutral-700 to-transparent" />

        <div className="flex flex-col space-y-4">
          <a
            href="https://github.com/BlazWebDevelopment"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-zinc-900 px-4 font-medium text-black shadow-[0px_0px_1px_1px_var(--neutral-800)] shadow-input"
          >
            <IconBrandGithub className="h-4 w-4  text-neutral-300" />
            <span className="text-sm text-neutral-300">GitHub</span>
            <BottomGradient />
          </a>
          <a
            href="https://twitter.com/Moxeeyy"
            target="_blank"
            rel="noopener noreferrer"
            className="group/btn relative flex h-10 w-full items-center justify-start space-x-2 rounded-md bg-zinc-900 px-4 font-medium text-black shadow-[0px_0px_1px_1px_var(--neutral-800)] shadow-input"
          >
            <IconBrandTwitter className="h-4 w-4 text-neutral-300" />
            <span className="text-sm  text-neutral-300">Twitter</span>
            <BottomGradient />
          </a>
        </div>
      </Form>
    </div>
  );
}

const BottomGradient = () => {
  return (
    <>
      <span className="absolute inset-x-0 -bottom-px block h-px w-full bg-gradient-to-r from-transparent via-cyan-600 to-transparent opacity-0 transition duration-500 group-hover/btn:opacity-100" />
      <span className="absolute inset-x-10 -bottom-px mx-auto block h-px w-1/2 bg-gradient-to-r from-transparent via-indigo-500 to-transparent opacity-0 blur-sm transition duration-500 group-hover/btn:opacity-100" />
    </>
  );
};

const LabelInputContainer = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={cn("flex w-full flex-col space-y-2", className)}>
      {children}
    </div>
  );
};
