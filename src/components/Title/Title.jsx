import PropTypes from 'prop-types'

const Title = ({ productName }) => {
    return (
        <h3 className='text-[1rem] text-dark-gray font-semibold mb-[0.5rem] line-clamp-2'
        >
            {productName}
        </h3>
    )
}

Title.propTypes = {
    productName: PropTypes.string.isRequired,
}

export default Title
