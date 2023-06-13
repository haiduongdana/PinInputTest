import { PinInput } from "..";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup(); 
})

const PROPS = {length: 6, label: 'Pin Input', value: '987654', isPassword: true}

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
          expect(inputElm).toHaveAttribute('type', 'password');
      }
      

  })
})
