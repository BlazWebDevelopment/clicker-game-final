import type { InputHTMLAttributes } from "react";
import React from "react";
import { cn } from "~/utils/cn";

interface TextAreaProps extends InputHTMLAttributes<HTMLTextAreaElement> {
  id: string;
  name: string;
  label: string;
  placeholder?: string;
  className?: string;
  defaultValue?: string;
  required?: boolean;
  rows?: number;
  error?: string | null | undefined;
}

const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  function TextArea(
    {
      id,
      name,
      rows = 4,
      placeholder,
      required = false,
      defaultValue,
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
            className="dark:text-skyblue-10 mb-2 block text-sm tracking-wide text-white"
          >
            {label}
            {required && (
              <span
                title="This field is mandatory"
                aria-label="required"
                className="text-primary-100"
              >
                *
              </span>
            )}
          </label>
        )}

        <textarea
          ref={ref}
          id={id}
          rows={rows}
          name={name}
          required={required}
          placeholder={placeholder}
          defaultValue={defaultValue}
          className={cn(
            "border-mystic-80 text-skyblue-80 focus:border-primary-100 focus:ring-primary-100 dark:border-mystic-100/20 dark:focus:ring-primary-100 w-full rounded-lg border px-3 py-2 text-sm transition-colors duration-200 placeholder:font-light dark:bg-transparent dark:text-white",
            error
              ? "border-red-700 focus:border-red-700 focus:ring-red-700 dark:border-red-700  dark:focus:border-red-700 dark:focus:ring-red-700"
              : "border-mystic-80 focus:border-primary-100 focus:ring-primary-100 dark:border-mystic-100/20  dark:focus:border-primary-100 dark:focus:ring-primary-100",
            className
          )}
          {...rest}
        />
        {error ? (
          <span className="text-xs text-red-700 dark:text-red-700" id={id}>
            {error}
          </span>
        ) : null}
      </div>
    );
  }
);

export default TextArea;
