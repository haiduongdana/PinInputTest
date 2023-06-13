import { PinInput } from "..";
import { cleanup, fireEvent, render } from "@testing-library/react";
import "@testing-library/jest-dom";
import { PinInputProps } from "../PinInput/PinInput.types";

afterEach(() => {
  cleanup(); 
})

const PROPS: PinInputProps = {length: 6, label: 'Pin Input', value: ''}

describe("Pass the regex allow custom character", () => {

  test("Pass the regex allow alphanumeric character ", () => {
    const testRenderer = render(
      <PinInput {...PROPS} allowedCharacters="alphanumeric" />
    );
    const input1 = testRenderer.getByLabelText('Character 1') as HTMLInputElement;
    const input2 = testRenderer.getByLabelText('Character 2') as HTMLInputElement;
    // 
    fireEvent.change(input1, {target: {value: 'd'}})
    expect(input1.value).toBe('d');

    expect(input2).toHaveFocus()

    fireEvent.change(input2, {target: {value: '1'}})
    expect(input2.value).toBe('1');

  })

  test("Pass the regex allow alpha character ", () => {
    const testRenderer = render(
      <PinInput {...PROPS} allowedCharacters="alpha" />
    );
    const input1 = testRenderer.getByLabelText('Character 1') as HTMLInputElement;
    const input2 = testRenderer.getByLabelText('Character 2') as HTMLInputElement;
    
    // input wrong value (number), still focus on
    fireEvent.change(input1, {target: {value: '1'}})
    expect(input1).toHaveFocus()
    
    // input alpha, move to next input
    fireEvent.change(input1, {target: {value: 'a'}})
    expect(input1.value).toBe('a');
    expect(input2).toHaveFocus()

  })
})