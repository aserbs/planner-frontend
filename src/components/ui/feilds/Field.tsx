import { forwardRef } from "react";

interface InputFieldProps {
  id: string;
  label: string;
  extra?: string;
  placeholder: string;
  variant?: string;
  state?: "error" | "success";
  disabled?: boolean;
  type?: string;
  isNumber?: boolean;
}

export const Field = forwardRef<HTMLInputElement, InputFieldProps>(
  (
    { label, id, extra, type, placeholder, state, disabled, isNumber, ...rest },
    ref
  ) => {
    return <div></div>;
  }
);
