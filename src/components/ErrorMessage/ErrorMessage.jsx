import PropTypes from 'prop-types'

const ErrorMessage = ({ error }) => {
    return (
        <div role="alert">
            <p className='text-primary-red text-[0.9rem]'>{error}</p>
        </div>
    )
}

ErrorMessage.propTypes = {
    error: PropTypes.string.isRequired,
}

export default ErrorMessage
