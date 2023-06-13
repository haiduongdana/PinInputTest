import { PinInput } from "..";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PinInputProps } from "../PinInput/PinInput.types";

afterEach(() => {
  cleanup();
})

const PROPS: PinInputProps = { length: 6, label: 'Pin Input', value: '987654', isPassword: true, allowedCharacters: 'numeric', error: false, helperText: "helper text" }

describe("Test Input was marked", () => {

  test("Input was marked", () => {
    const testRenderer = render(
      <PinInput {...PROPS} />
    );
    const allInputs: HTMLElement[] = testRenderer.getAllByRole('textbox')
    // Test number of input box
    expect(allInputs.length).toBe(PROPS.length);

    // Test default value
    for (let i = 0; i < allInputs.length; i++) {
      const inputElm = allInputs[i] as HTMLInputElement;
      expect(inputElm).toHaveAttribute('type', 'password');
    }


  })
})
