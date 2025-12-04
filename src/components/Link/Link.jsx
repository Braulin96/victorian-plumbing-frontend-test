import PropTypes from 'prop-types'

const Link = ({ href, text = 'View product' }) => {
    return (
        <a
            href={`https://www.victorianplumbing.co.uk/${href}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
                py-1 px-4 rounded-full border border-primary-green
                no-underline text-[0.9rem] text-center text-primary-green
                focus:outline-none focus-visible:ring-2 focus-visible:ring-primary-green
                transform translate-y-0 hover:-translate-y-0.5
                hover:bg-primary-green hover:text-white
                transition-all duration-400"
        >
            {text}
        </a>
    )
}

Link.propTypes = {
    href: PropTypes.string.isRequired,
    text: PropTypes.string,
}

export default Link
