import { memo } from 'react'
import PropTypes from 'prop-types'

import Asset from '@components/Asset/Asset'
import Title from '@components/Title/Title'
import Review from '@components/Review/Review'
import Stock from '@components/Stock/Stock'
import Price from '@components/Price/Price'
import Link from '@components/Link/Link'


const ProductCard = memo(({
    image,
    alt,
    productName,
    rating,
    reviewsCount,
    inStock,
    currency,
    originalPrice,
    discountedPrice,
    slug,
}) => {
    return (
        <div
            className='border border-light-gray/30 rounded-[8px] flex flex-col relative shadow-sm hover:shadow-md transition-all duration-300 hover:scale-105 bg-white'
        >
            <Asset
                alt={alt}
                image={image}
                customClasses="w-full object-cover mb-[0.5rem] rounded-t-[8px]"
            />

            <div className='p-[1rem] flex flex-col h-full'>
                <Title productName={productName} />
                <div className='flex gap-x-[4px] '>
                    {
                        reviewsCount > 0 && <Review rating={rating} reviewsCount={reviewsCount} />
                    }
                    <div className='ml-auto'> <Stock inStock={inStock} /> </div>

                </div>
                <div className='mt-auto'>
                    <Price
                        currency={currency}
                        originalPrice={originalPrice}
                        discountedPrice={discountedPrice}
                    />
                </div>
                <div className='mt-[1.5rem] flex justify-center'>
                    <Link slug={slug} />
                </div>
            </div>
        </div>
    )
})

ProductCard.propTypes = {
    image: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
    productName: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    reviewsCount: PropTypes.number,
    inStock: PropTypes.bool,
    currency: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number,
    slug: PropTypes.string.isRequired,
}

export default ProductCard