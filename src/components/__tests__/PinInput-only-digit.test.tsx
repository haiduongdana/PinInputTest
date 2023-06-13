import { PinInput } from "..";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PinInputProps } from "../PinInput/PinInput.types";

afterEach(() => {
  cleanup(); 
})

const PROPS: PinInputProps = {length: 6, label: 'Pin Input', value: '987654'}

describe("Test Input only digit", () => {

  test("Input only digit", () => {
    const testRenderer = render(
      <PinInput {...PROPS} />
    );
    const input = testRenderer.getByLabelText('Character 1') as HTMLInputElement;
    // Input character, expected empty value
    fireEvent.change(input, {target: {value: 'd'}})
    expect(input.value).toBe("")

    // Input digit, expected enterd digit
    fireEvent.change(input, {target: {value: '1'}})
    expect(input.value).toBe("1")
  })
})