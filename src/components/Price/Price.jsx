import PropTypes from 'prop-types'

const Price = ({ currency, originalPrice, discountedPrice }) => {
    return (
        <div
            className='flex flex-col gap-[0.2rem] items-start'>
            <span
                className={`${discountedPrice ? "line-through text-light-gray text-[0.9rem]" : "text-dark-gray text-[1rem]"}`}>
                {currency}{originalPrice?.toFixed(2)}
            </span>
            {
                discountedPrice && <div className='flex flex-col gap-[0.2rem] items-start'>
                    <span
                        className='font-bold text-[1rem] text-primary-red'>
                        Now {currency}{discountedPrice?.toFixed(2)}
                    </span>
                    <span
                        className='font-bold text-[0.8rem] text-primary-green'
                    >
                        Save {currency}{(originalPrice - discountedPrice).toFixed(2)}
                    </span>
                </div>
            }
        </div>
    )
}

Price.propTypes = {
    currency: PropTypes.string.isRequired,
    originalPrice: PropTypes.number.isRequired,
    discountedPrice: PropTypes.number
}

export default Price
