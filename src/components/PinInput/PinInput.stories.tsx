import { Meta, StoryObj } from "@storybook/react";
import PinInput from "./PinInput";

const meta = {
  title: "Pin Input",
  component: PinInput,
  tags: ["autodocs"],
  parameters: {
    docs: {
      page: null,
    },
  },
  argTypes: {
    length: { control: "number" },
    isPassword: { control: "boolean" },
    ariaLabel: { control: "text" },
    disabled: { control: "boolean" },
    placeholder: { control: "text" },
    autoFocus: { control: "boolean" },
    label: { control: "text" },
    value: { control: "text" },
    error: { control: "boolean" },
    helperText: { control: "text" },
    allowedCharacters: {
      control: {
        type: "inline-radio",
        options: ["alpha", "numeric", "alphanumeric"],
      },
    },
  },
  args: {
    label: "Pin Input",
    length: 6,
  },
} satisfies Meta<typeof PinInput>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultPinInput: Story = {};

export const PinInputCustomLength: Story = {
  args: {
    length: 10,
  },
};

export const MaskedPinInput: Story = {
  args: {
    isPassword: true,
    value: "123",
  },
};

export const DisabledPinInput: Story = {
  args: {
    disabled: true,
  },
};

export const PinInputWithPlaceholder: Story = {
  args: {
    placeholder: "0",
  },
};

export const PinInputWithDefaultValue: Story = {
  args: {
    value: "123456",
  },
};

export const PinInputWidthError: Story = {
  args: {
    error: true,
    helperText: "Something went wrong!",
  },
};
