import { fn } from "storybook/test";

import Asset from "./Asset";
import viteLogo from "/vite.svg";

// More on how to set up stories at: https://storybook.js.org/docs/writing-stories#default-export
export default {
  title: "Example/Asset",
  component: Asset,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: "centered",
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ["autodocs"],
  // More on argTypes: https://storybook.js.org/docs/api/argtypes
  argTypes: {
    backgroundColor: { control: "color" },
  },
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#story-args
  args: { onClick: fn() },
};

// More on writing stories with args: https://storybook.js.org/docs/writing-stories/args
export const Image = {
  args: {
    image: viteLogo,
  },
};

export const IconButton = {
  args: {
    variant: 'iconButton',
    image: viteLogo,
    ariaLabel: 'Vite Logo Button',
    onClick: () => alert('Vite logo button clicked!'),
    customClasses: 'w-[100px] h-[100px] bg-primary-green p-5',

  },
};
