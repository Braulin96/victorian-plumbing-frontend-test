import PropTypes from "prop-types";

import { formatPrice, calculateSavings } from "@utils/priceUtils";

const Price = ({ currency = "£", originalPrice, discountedPrice }) => {
    const hasDiscount = discountedPrice != null && discountedPrice < originalPrice;
    const savings = calculateSavings(originalPrice, discountedPrice);

    return (
        <div className="flex flex-col gap-1 items-start">
            <div className="flex gap-x-[0.5rem] items-center">
                <span
                    className={
                        hasDiscount
                            ? "line-through text-light-gray text-sm"
                            : "text-dark-gray text-base font-semibold"
                    }
                >
                    {currency}{formatPrice(originalPrice)}
                </span>
                {
                    hasDiscount && (<span className="font-bold text-base text-primary-red">
                        Now {currency}{formatPrice(discountedPrice)}
                    </span>)
                }
            </div>
            {hasDiscount && (
                <span className="font-bold text-xs text-primary-green">
                    Save {currency}{formatPrice(savings)}
                </span>
            )}
        </div>
    );
};

Price.propTypes = {
    currency: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number,
};

export default Price;
