import type { InputHTMLAttributes } from "react";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// utils
import { cn } from "~/utils/cn";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  type?: string;
  ariaLabel?: string;
  placeholder?: string;
  className?: string;
  icon?: React.ReactNode;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const TextFieldIcon = React.forwardRef<HTMLInputElement, TextFieldProps>(
  function TextFieldIcon(
    {
      id,
      name,
      type = "text",
      placeholder,
      className,
      ariaLabel,
      icon,
      onChange,
      ...rest
    },
    ref
  ) {
    return (
      <div className="relative h-10 w-full rounded-lg shadow-inner ">
        <div className="pointer-events-none absolute inset-y-0 flex items-center pl-3">
          <FontAwesomeIcon icon={icon} style={{ color: "#7B8794" }} />
        </div>
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          aria-label={ariaLabel}
          placeholder={placeholder}
          onChange={onChange}
          className={cn(
            "block h-10 w-full rounded-lg border border-mystic-80 px-3 py-2 pl-10 text-sm text-skyblue-80 transition-colors duration-200 placeholder:font-light focus:border-primary-100 focus:ring-primary-100 dark:border-mystic-100/20 dark:bg-transparent dark:text-white dark:focus:border-primary-100 dark:focus:ring-primary-100",
            className
          )}
          {...rest}
        />
      </div>
    );
  }
);

export default TextFieldIcon;
