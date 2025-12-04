import PropTypes from 'prop-types'

const Stock = ({ inStock = true }) => {
    return (
        <span
            className={`text-[0.8rem] mb-[0.5rem] text-${inStock ? 'primary-green' : 'primary-red'}`}
        >
            {inStock ? "In Stock" : "Out of Stock"}
        </span>
    )
}

Stock.propTypes = {
    inStock: PropTypes.bool,
}

export default Stock
