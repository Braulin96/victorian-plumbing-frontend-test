import PropTypes from 'prop-types'

const Link = ({ slug, text = 'View product' }) => {
    return (
        <a
            href={`https://www.victorianplumbing.co.uk/${slug}`}
            target="_blank"
            rel="noopener noreferrer"
            className="
                py-1.5 px-6 rounded-full border border-primary-green
                no-underline text-[0.9rem] text-center text-primary-green
                hover:bg-primary-green hover:text-white
                transition-all duration-500"
        >
            {text}
        </a>
    )
}

Link.propTypes = {
    slug: PropTypes.string.isRequired,
    text: PropTypes.string,
}

export default Link
