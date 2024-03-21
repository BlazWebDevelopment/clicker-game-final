import type { InputHTMLAttributes } from "react";
import React from "react";
import { cn } from "~/utils/cn";

interface RadioProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  className?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string | null;
}
const Radio = React.forwardRef<HTMLInputElement, RadioProps>(function Radio(
  { id, name, label, required = false, className, onChange, error, ...rest },
  ref
) {
  return (
    <div className="space-x-2">
      <input
        ref={ref}
        type="radio"
        id={id}
        name={name}
        value={label}
        onChange={onChange}
        className={cn(
          "focus:ring-primary-70 h-5 w-5 border-mystic-100 bg-transparent text-primary-100 shadow-sm focus:border-primary-80 focus:ring-primary-100/50 focus:ring-offset-0",
          error
            ? "border-red-700 focus:border-red-700 focus:ring-red-700 dark:border-red-700  dark:focus:border-red-700 dark:focus:ring-red-700"
            : "border-mystic-80 focus:border-primary-100 focus:ring-primary-100 dark:border-mystic-100/20  dark:focus:border-primary-100 dark:focus:ring-primary-100"
        )}
        {...rest}
      />
      <label
        htmlFor={id}
        className={cn(
          "mb-2 text-sm tracking-wide ",
          error ? "text-red-700" : "text-skyblue-100 dark:text-skyblue-10"
        )}
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
    </div>
  );
});

export default Radio;
