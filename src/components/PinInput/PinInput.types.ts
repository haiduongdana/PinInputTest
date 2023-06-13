export interface PinInputProps {
  length?: number;
  isPassword?: boolean;
  ariaLabel?: string;
  disabled?: boolean;
  placeholder?: string;
  autoFocus?: boolean;
  label?: string;
  value?: string;
  error?: boolean;
  helperText?: string;
  onChange?: (value: string) => void;
  allowedCharacters?: (typeof allowedCharactersValues)[number];
}

export const allowedCharactersValues = [
  "alpha",
  "numeric",
  "alphanumeric",
] as const;

export type InputType = "text" | "tel" | "password";

export type InputMode = "text" | "numeric";

export type InputProps = {
  type: InputType;
  inputMode: InputMode;
  pattern: string;
  min?: string;
  max?: string;
};

export const propsMap: { [key: string]: InputProps } = {
  alpha: {
    type: "text",
    inputMode: "text",
    pattern: "[a-zA-Z]{1}",
  },
  alphanumeric: {
    type: "text",
    inputMode: "text",
    pattern: "[a-zA-Z0-9]{1}",
  },
  numeric: {
    type: "tel",
    inputMode: "numeric",
    pattern: "[0-9]{1}",
    min: "0",
    max: "9",
  },
};
