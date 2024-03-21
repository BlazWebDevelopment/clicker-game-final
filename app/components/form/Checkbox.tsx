import type { InputHTMLAttributes } from "react";
import React from "react";

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  name: string;
  label: string;
  ariaLabel?: string;
  placeholder?: string;
  className?: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  function Checkbox(
    { id, name, required = false, className, label, onChange, ...rest },
    ref
  ) {
    return (
      <div className="space-x-2">
        <input
          ref={ref}
          type="checkbox"
          id={id}
          name={label}
          required={required}
          onChange={onChange}
          className="focus:ring-primary-70 h-5 w-5 rounded border-mystic-100 bg-transparent text-primary-100 shadow-sm hover:cursor-pointer focus:border-primary-80 focus:ring-primary-100/50 focus:ring-offset-0"
          {...rest}
        />
        <label
          htmlFor={id}
          className="mb-2 text-sm tracking-wide text-skyblue-100 dark:text-skyblue-10"
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
  }
);

export default Checkbox;
