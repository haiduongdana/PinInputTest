import { PinInput } from "..";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PinInputProps } from "../PinInput/PinInput.types";

afterEach(() => {
  cleanup();
})

const PROPS: PinInputProps = { length: 6, label: 'Pin Input', value: '987654', allowedCharacters: 'numeric', error: false, helperText: "helper text" }

describe("Test Component", () => {

  test("Test Rendering", () => {
    const testRenderer = render(
      <PinInput {...PROPS} />
    );
    const allInputs: HTMLElement[] = testRenderer.getAllByRole('textbox')
    // Test number of input box
    expect(allInputs.length).toBe(PROPS.length);

    // Test default value
    for (let i = 0; i < allInputs.length; i++) {
      const inputElm = allInputs[i] as HTMLInputElement;
      const expectVal = PROPS.value ? PROPS.value[i] : null;
      expect(inputElm.value).toBe(expectVal);
    }

    // Test focus on the first input
    const firstInput = testRenderer.getByLabelText('Character 1') as HTMLInputElement;
    firstInput.focus()
    expect(firstInput).toHaveFocus();

  })
})
