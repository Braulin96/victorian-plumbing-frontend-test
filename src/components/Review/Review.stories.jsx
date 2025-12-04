import Review from "./Review";

export default {
    title: "Example/Review",
    component: Review,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
};

export const ReviewDefault = {
    args: {
        rating: 3.5,
    },
};
