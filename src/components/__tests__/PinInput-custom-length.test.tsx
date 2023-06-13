import { PinInput } from "..";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PinInputProps } from "../PinInput/PinInput.types";

afterEach(() => {
  cleanup();
})

const PROPS: PinInputProps = { length: 8, label: 'Pin Input', value: '', allowedCharacters: 'numeric', error: false, helperText: "helper text" }

describe("Test Input custom length", () => {

  test("Input custom length", () => {
    const testRenderer = render(
      <PinInput {...PROPS} />
    );
    const allInputs: HTMLElement[] = testRenderer.getAllByRole('textbox')
    // Test number of input box
    expect(allInputs.length).toBe(PROPS.length);

  })
})
