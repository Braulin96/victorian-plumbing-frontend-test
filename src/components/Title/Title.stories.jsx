import Title from "./Title";

export default {
    title: "Example/Title",
    component: Title,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        productName: { control: "text" },
    },
};

export const TitleDefault = {
    args: {
        productName: "Arezzo BTW Close Coupled Toilet with Soft Close Seat",
    },
};

