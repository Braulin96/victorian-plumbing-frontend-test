import Asset from "./Asset";

import viteLogo from "/vite.svg";

export default {
  title: "Example/Asset",
  component: Asset,
  parameters: {
    layout: "centered",
  },
  tags: ["autodocs"],
  argTypes: {
    variant: {
      control: { type: "select" },
      options: ["image", "iconButton"],
    },
    disabled: { control: "boolean" },
  },
};

export const AssetImage = {
  args: {
    image: viteLogo,
    alt: "Vite logo",
    variant: "image",
    customClasses: "w-[100px] h-[100px]",
  },
};

export const AssetIconButton = {
  args: {
    image: viteLogo,
    alt: "Vite logo button",
    variant: "iconButton",
    ariaLabel: "Vite Logo Button",
    onClick: () => { alert("Vite Logo Button Clicked!"); },
    disabled: false,
    customClasses: "w-[100px] h-[100px]",
  },
};

export const AssetIconButtonDisabled = {
  args: {
    image: viteLogo,
    alt: "Vite logo button disabled",
    variant: "iconButton",
    ariaLabel: "Vite Logo Button (disabled)",
    disabled: true,
    customClasses: "w-[100px] h-[100px]",
  },
};