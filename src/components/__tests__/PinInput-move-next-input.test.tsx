import { PinInput } from "..";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PinInputProps } from "../PinInput/PinInput.types";

afterEach(() => {
  cleanup();
})

const PROPS: PinInputProps = { length: 6, label: 'Pin Input', value: '', allowedCharacters: 'numeric', error: false, helperText: "helper text" }

describe("Test move next input", () => {

  test("Move next input", () => {
    const testRenderer = render(
      <PinInput {...PROPS} />
    );
    const input1 = testRenderer.getByLabelText('Character 1') as HTMLInputElement;
    const input2 = testRenderer.getByLabelText('Character 2') as HTMLInputElement;
    // Input wrong value in first input, still focus on current input
    fireEvent.change(input1, { target: { value: 'd' } })
    expect(input1).toHaveFocus()

    // Input in first input, auto focus on next one
    fireEvent.change(input1, { target: { value: '1' } })
    expect(input2).toHaveFocus()
  })
})