import React from "react";
import type { InputHTMLAttributes } from "react";
// utils
import { cn } from "~/utils/cn";

interface TextFieldProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  type?: string;
  ariaLabel?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  error?: string | null | undefined;
}

const TextField = React.forwardRef<HTMLInputElement, TextFieldProps>(
  function TextField(
    {
      id,
      name,
      type = "text",
      required = false,
      placeholder,
      className,
      label,
      error,
      ...rest
    },
    ref
  ) {
    return (
      <div>
        {label && (
          <label
            htmlFor={id}
            className="text-primary-100 dark:text-skyblue-10 mb-2 block text-sm tracking-wide text-white"
          >
            {label}{" "}
            {required && (
              <span
                title="This field is mandatory"
                aria-label="required"
                className="text-icon-100"
              >
                *
              </span>
            )}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          name={name}
          type={type}
          required={required}
          placeholder={placeholder}
          className={cn(
            "border-skyblue-80 text-skyblue-80 block h-12 w-full border border-solid px-3 py-2 text-sm transition-colors duration-200 placeholder:font-light dark:bg-transparent dark:text-white",
            error
              ? "border-red-700 focus:border-b-red-700 focus:ring-0 dark:border-red-700 dark:focus:border-b-red-700"
              : "dark:focus:border-primary-100 bg-transparent focus:border-orange-300 focus:ring-0",
            className
          )}
          {...rest}
        />
        {error ? (
          <span
            className="text-xs text-red-700 dark:text-red-700"
            id={id + "-error"}
          >
            {error}
          </span>
        ) : null}
      </div>
    );
  }
);

export default TextField;
