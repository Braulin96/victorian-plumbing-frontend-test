export const mapProductToCard = (product) => {
        const isInStock = product.stockStatus?.status === 'G';
        const isOnSale = product.price?.isOnPromotion;

        // Currency symbol considering possible GPB, EUR, USD:
        const currencySymbol = product.price?.currencyCode === 'GBP' ? '£' :
            product.price?.currencyCode === 'EUR' ? '€' :
                product.price?.currencyCode === 'USD' ? '$' : '£';

        const hasWasPrice = product.price?.wasPriceIncTax
        const hasNowPrice = product.price?.priceIncTax

        return {
            image: product.image?.url || '',
            alt: product.image?.attributes?.imageAltText || product.productName,
            productName: product.productName,
            rating: product.averageRating || 0,
            reviewsCount: product.reviewsCount || 0,
            inStock: isInStock,
            currency: currencySymbol,
            originalPrice: isOnSale ? hasWasPrice : hasNowPrice,
            discountedPrice: isOnSale ? hasNowPrice : null,
            slug: product.slug || '',
        };
    };
