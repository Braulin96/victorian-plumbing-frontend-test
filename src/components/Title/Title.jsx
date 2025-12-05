import PropTypes from 'prop-types'

const Title = ({ productName }) => {
    return (
        <h3 className='text-[1rem] text-light-gray font-semibold mb-[0.5rem]'
        >
            {productName}
        </h3>
    )
}

Title.propTypes = {
    productName: PropTypes.string.isRequired,
}

export default Title
