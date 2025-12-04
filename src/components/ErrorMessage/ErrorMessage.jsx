import PropTypes from 'prop-types'

const ErrorMessage = ({ error }) => {
    return (
        <p className='text-primary-red text-[0.9rem]'>{error}</p>
    )
}

ErrorMessage.propTypes = {
    error: PropTypes.string.isRequired,
}

export default ErrorMessage
