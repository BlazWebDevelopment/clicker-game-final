import type { InputHTMLAttributes } from "react";
import React from "react";
// utils
import { cn } from "~/utils/cn";

interface SelectFieldProps extends InputHTMLAttributes<HTMLSelectElement> {
  id: string;
  name: string;
  label?: string;
  ariaLabel?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  options: Record<string, any>[];
}
const SelectField = React.forwardRef<HTMLSelectElement, SelectFieldProps>(
  function TextField(
    {
      id,
      name,
      placeholder,
      required = false,
      options,
      className,
      label,
      ...rest
    },
    ref
  ) {
    return (
      <div>
        {label && (
          <label
            htmlFor={id}
            className="mb-1 block text-sm tracking-wide text-primary-100 dark:text-primary-40"
          >
            {label}
            {required && (
              <span
                title="This field is mandatory"
                aria-label="required"
                className="text-primary-100 "
              >
                *
              </span>
            )}
          </label>
        )}

        <select
          ref={ref}
          id={id}
          name={name}
          required={required}
          className={cn(
            "h-10 w-full rounded-lg border border-transparent px-3 py-2 text-sm text-skyblue-80 transition-colors duration-200 placeholder:font-light focus:border-primary-100  dark:border-gray-50/10 dark:bg-transparent dark:text-white dark:focus:ring-primary-100",
            className
          )}
          {...rest}
        >
          {options?.map((option) => (
            <option key={option.id} value={option.id}>
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  }
);

export default SelectField;
