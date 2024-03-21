import { useState } from "react";
import { Switch as HeadlessuiSwitch } from "@headlessui/react";

type SwitchProps = {
  name: string;
  label: string;
};

export default function Switch({ name, label }: SwitchProps) {
  const [enabled, setEnabled] = useState(false);

  return (
    <HeadlessuiSwitch.Group>
      <div className="flex items-center">
        <HeadlessuiSwitch.Label className="mr-3 text-sm text-skyblue-100 dark:text-skyblue-10">
          {label}
        </HeadlessuiSwitch.Label>
        <HeadlessuiSwitch
          name={name}
          checked={enabled}
          onChange={setEnabled}
          className={`${enabled ? "bg-primary-100" : "bg-gray-500/10"}
          relative inline-flex h-[18px] w-[34px] shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ease-in-out focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
        >
          <span className="sr-only">{label}</span>
          <span
            aria-hidden="true"
            className={`${enabled ? "translate-x-4" : "translate-x-0"}
            pointer-events-none inline-block h-[14px] w-[14px] transform rounded-full bg-white shadow-lg ring-0 transition duration-200 ease-in-out`}
          />
        </HeadlessuiSwitch>
      </div>
    </HeadlessuiSwitch.Group>
  );
}
