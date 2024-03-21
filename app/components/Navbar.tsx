"use client";
import React, { useState } from "react";
import {
  HoveredLink,
  Menu,
  MenuItem,
  ProductItem,
} from "../components/UI/navbar-menu";
import { cn } from "~/utils/cn";
import { Button } from "./UI/moving-border";

export function NavbarDisplay() {
  return (
    <div className="relative flex w-full  items-center justify-center">
      <Navbar className="top-5" />
    </div>
  );
}

function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div
      className={cn(
        "fixed left-0 right-0 top-0 z-50 mx-auto flex max-w-md items-center justify-center gap-4 rounded-xl bg-black/80 p-3",
        className
      )}
    >
      <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink to="/">Home</HoveredLink>
      </div>

      <div className="flex flex-col space-y-4 text-sm">
        <HoveredLink to="about">About me</HoveredLink>
      </div>
      <div className="flex flex-col space-y-4 rounded-xl bg-blue-500 p-2 text-sm">
        <HoveredLink to="contact-me" preventScrollReset>
          Contact me
        </HoveredLink>
      </div>
    </div>
  );
}
