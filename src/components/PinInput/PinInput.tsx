import React, { ReactNode, useCallback, useEffect, useRef } from "react";
import {
  PinInputProps,
  allowedCharactersValues,
  propsMap,
} from "./PinInput.types";
import {
  Container,
  Wrapper,
  Input,
  Text,
  InputWrapper,
  ErrorText,
} from "./PinInput.styled";

const PinInput: React.FC<PinInputProps> = ({
  ariaLabel,
  autoFocus = true,
  disabled,
  error = false,
  helperText,
  isPassword = false,
  label,
  length = 6,
  onChange,
  placeholder,
  value,
  allowedCharacters = "numeric",
  inputValidation,
}) => {
  const inputsRef = useRef<Array<HTMLInputElement>>([]);
  const inputProps = inputValidation ?? propsMap[allowedCharacters];

  const sendResult = useCallback(() => {
    const valued = inputsRef.current.map((input) => input.value).join("");
    // console.log({ valued });
    if (onChange) {
      onChange(valued);
    }
  }, [onChange]);

  const onPasteHandler = useCallback(
    (e?: React.ClipboardEvent<HTMLInputElement>, text?: string) => {
      const pastedValue = e
        ? e?.clipboardData?.getData("Text")
        : (text as string);

      let currentInput = 0;

      for (let i = 0; i < pastedValue.length; i += 1) {
        const pastedCharacter = pastedValue.charAt(i);

        const currentValue = inputsRef.current[currentInput].value;
        if (pastedCharacter.match(inputProps.pattern)) {
          if (!currentValue) {
            inputsRef.current[currentInput].value = pastedCharacter;
            if (inputsRef.current[currentInput].nextElementSibling !== null) {
              (
                inputsRef.current[currentInput]
                  .nextElementSibling as HTMLInputElement
              ).focus();
              currentInput += 1;
            }
          }
        }
      }
      sendResult();

      if (e) {
        e.preventDefault();
      }
    },
    [inputProps.pattern, sendResult]
  );

  if (Number.isNaN(length) || length < 1) {
    throw new Error("Length should be a number and greater than 0.");
  }

  if (
    !allowedCharactersValues.some(
      (valued: string) => valued === allowedCharacters
    )
  ) {
    throw new Error(
      "Invalid value for allowedCharacters. Use alpha, numeric, or alphanumeric"
    );
  }

  useEffect(() => {
    if (autoFocus) {
      inputsRef.current[0].focus();
    }
  }, [autoFocus]);

  useEffect(() => {
    if (value) {
      onPasteHandler(undefined, value);
    }
  }, [onPasteHandler, value]);

  const onChangeHandler = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const {
        // eslint-disable-next-line @typescript-eslint/no-shadow
        target: { value, nextElementSibling },
      } = e;

      if (value.length > 1) {
        e.target.value = value.charAt(0);
        if (nextElementSibling !== null) {
          (nextElementSibling as HTMLInputElement).focus();
        }
        // eslint-disable-next-line @typescript-eslint/prefer-regexp-exec
      } else if (value.match(inputProps.pattern)) {
        if (nextElementSibling !== null) {
          (nextElementSibling as HTMLInputElement).focus();
        }
      } else {
        e.target.value = "";
      }

      sendResult();
    },
    [inputProps, sendResult]
  );

  const onKeyDownHandler = useCallback(
    (e: React.KeyboardEvent<HTMLInputElement>) => {
      const { key } = e;
      const target = e.target as HTMLInputElement;
      if (key === "Backspace") {
        if (target.value === "") {
          if (target.previousElementSibling !== null) {
            const t = target.previousElementSibling as HTMLInputElement;
            t.value = "";
            t.focus();
            e.preventDefault();
          }
        } else {
          target.value = "";
        }
        sendResult();
      }
    },
    [sendResult]
  );

  const onFocusHandler = useCallback(
    (e: React.FocusEvent<HTMLInputElement>) => {
      e.target.select();
    },
    []
  );

  const inputs: ReactNode[] = [];

  for (let i = 0; i < length; i += 1) {
    inputs.push(
      <Input
        key={i}
        type={isPassword ? "password" : inputProps.type}
        maxLength={1}
        autoComplete={i === 0 ? "one-time-code" : "off"}
        aria-label={
          ariaLabel ? `${ariaLabel}. Character ${i + 1}` : `Character ${i + 1}`
        }
        disabled={disabled}
        placeholder={placeholder}
        ref={(el: HTMLInputElement) => {
          inputsRef.current[i] = el;
        }}
        onChange={onChangeHandler}
        onKeyDown={onKeyDownHandler}
        onFocus={onFocusHandler}
        onPaste={onPasteHandler}
        isError={error}
      />
    );
  }

  return (
    <Container>
      <Wrapper>
        <Text>{label}</Text>
      </Wrapper>
      <InputWrapper>{inputs}</InputWrapper>
      {error && (
        <Wrapper>
          <ErrorText>{helperText}</ErrorText>
        </Wrapper>
      )}
    </Container>
  );
};

export default PinInput;
