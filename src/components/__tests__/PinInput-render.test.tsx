import { PinInput } from "..";
import { cleanup, render } from "@testing-library/react";
import "@testing-library/jest-dom";

afterEach(() => {
  cleanup(); 
})

const PROPS = {length: 6, label: 'Pin Input', value: '987654'}

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
          const expectVal = PROPS.value[i] || null;
          expect(inputElm.value).toBe(expectVal);
      }
      
      // Test focus on the first input
      const firstInput = testRenderer.getByLabelText('Character 1') as HTMLInputElement;
      firstInput.focus()
      expect(firstInput).toHaveFocus(); 

  })
})
