import Price from "./Price";

export default {
    title: "Example/Price",
    component: Price,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        currency: { control: "text" },
        originalPrice: { control: "number" },
        discountedPrice: { control: "number" },
    },
};

export const PriceWithoutDiscount = {
    args: {
        currency: "£",
        originalPrice: 129.99,
    },
};

export const PriceWithDiscount = {
    args: {
        currency: "£",
        originalPrice: 199.99,
        discountedPrice: 149.99,
    },
};