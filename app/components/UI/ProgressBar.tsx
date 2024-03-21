import React from "react";
import { Progress } from "@nextui-org/react";

export default function ProgressBar({ value, label }: any) {
  return (
    <Progress
      size="md"
      radius="full"
      classNames={{
        base: "max-w-md",
        track: "drop-shadow-md border border-default",
        indicator: "bg-gradient-to-r from-blue-950 to-cyan-200",
        label: "tracking-wider font-medium text-default-600 text-white",
        value: "text-white",
      }}
      label={label}
      value={value}
      showValueLabel={true}
    />
  );
}
