import Link from "./Link";

export default {
    title: "Example/Link",
    component: Link,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        href: { control: "text" },
        text: { control: "text" },
    },
};

export const LinkDefault = {
    args: {
        slug: "arezzo-btw-close-coupled-toilet-with-soft-close-seat",
        text: "View product",
    },
};