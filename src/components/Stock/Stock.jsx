import PropTypes from 'prop-types'

const Stock = ({ inStock = true }) => {
    return (
        <span
            className={`text-[0.9rem] text-${inStock ? 'primary-green' : 'primary-red'}`}
        >
            {inStock ? "In Stock" : "Out of Stock"}
        </span>
    )
}

Stock.propTypes = {
    inStock: PropTypes.bool.isRequired,
}

export default Stock
