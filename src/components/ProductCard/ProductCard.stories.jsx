import ProductCard from "./ProductCard";

export default {
    title: "Example/ProductCard",
    component: ProductCard,
    parameters: {
        layout: "centered",
    },
    tags: ["autodocs"],
    argTypes: {
        image: { control: "text" },
        alt: { control: "text" },
        productName: { control: "text" },
        rating: { control: { type: "number", min: 0, max: 5 } },
        reviewsCount: { control: "number" },
        inStock: { control: "boolean" },
        currency: { control: "text" },
        originalPrice: { control: "number" },
        discountedPrice: { control: "number" },
        slug: { control: "text" },
    },
};

export const ProductCardDefault = {
    args: {
        image: "https://images-nonprod.victorianplumbing.co.uk/uat/products/metro-modern-close-coupled-toilet-with-soft-close-seat/mainimages/metcc_l2.png",
        alt: "Metro Modern Close Coupled Toilet with Soft Close Seat",
        productName: "Metro Modern Close Coupled Toilet with Soft Close Seat",
        rating: 4.5,
        reviewsCount: 124,
        inStock: true,
        currency: "£",
        originalPrice: 199.99,
        slug: "metro-modern-close-coupled-toilet-with-soft-close-seat",
    },
};

export const ProductCardWithDiscount = {
    args: {
        image: "https://images-nonprod.victorianplumbing.co.uk/uat/products/metro-modern-close-coupled-toilet-with-soft-close-seat/mainimages/metcc_l2.png",
        alt: "Arezzo BTW Close Coupled Toilet",
        productName: "Arezzo BTW Close Coupled Toilet with Soft Close Seat",
        rating: 4.8,
        reviewsCount: 89,
        inStock: true,
        currency: "£",
        originalPrice: 179.99,
        discountedPrice: 149.99,
        slug: "arezzo-btw-close-coupled-toilet-with-soft-close-seat",
    },
};

export const ProductCardOutOfStock = {
    args: {
        image: "https://images-nonprod.victorianplumbing.co.uk/uat/products/metro-modern-close-coupled-toilet-with-soft-close-seat/mainimages/metcc_l2.png",
        alt: "Premium Basin Mixer Tap",
        productName: "Premium Basin Mixer Tap - Chrome Finish",
        rating: 4.2,
        reviewsCount: 45,
        inStock: false,
        currency: "£",
        originalPrice: 89.99,
        discountedPrice: 69.99,
        slug: "premium-basin-mixer-tap",
    },
};

export const ProductCardLowRating = {
    args: {
        image: "https://images-nonprod.victorianplumbing.co.uk/uat/products/metro-modern-close-coupled-toilet-with-soft-close-seat/mainimages/metcc_l2.png",
        alt: "Budget Toilet Seat",
        productName: "Budget Soft Close Toilet Seat - White",
        rating: 2.5,
        reviewsCount: 12,
        inStock: true,
        currency: "£",
        originalPrice: 29.99,
        slug: "budget-soft-close-toilet-seat",
    },
};

export const ProductCardNoReviews = {
    args: {
        image: "https://images-nonprod.victorianplumbing.co.uk/uat/products/metro-modern-close-coupled-toilet-with-soft-close-seat/mainimages/metcc_l2.png",
        alt: "New Product Launch",
        productName: "Designer Wall Hung Toilet - New Release",
        rating: 0,
        reviewsCount: 0,
        inStock: true,
        currency: "£",
        originalPrice: 299.99,
        slug: "designer-wall-hung-toilet",
    },
};
