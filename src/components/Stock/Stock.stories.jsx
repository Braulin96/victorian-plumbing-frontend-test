import Stock from "./Stock";

export default {
    title: "Example/Stock",
    component: Stock,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        inStock: { control: "boolean" },
    },
};

export const StockInStock = {
    args: {
        inStock: true,
    },
};

export const StockOutOfStock = {
    args: {
        inStock: false,
    },
};