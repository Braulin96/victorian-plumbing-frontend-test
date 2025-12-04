import ErrorMessage from "./ErrorMessage";

export default {
    title: "Example/ErrorMessage",
    component: ErrorMessage,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        error: { control: "text" },
        id: { control: "text" },
    },
};

export const ErrorMessageDefault = {
    args: {
        error: "An unexpected error occurred. Please try again later.",
    },
};