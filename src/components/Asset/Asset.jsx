import PropTypes from "prop-types";

const Asset = ({ image, alt, customClasses = "", variant = 'image', onClick, ariaLabel, }) => {
  return (
    <div>
      {variant === 'image' ?
        <img
          src={image}
          alt={alt}
          className={`w-full object-cover ${customClasses}`}
          loading="lazy"
        /> :
        <button
          type="button"
          onClick={onClick}
          aria-label={ariaLabel || alt}
          className={`p-0 border-0 bg-transparent cursor-pointer `}
        >
          <img
            src={image}
            alt={alt}
            className={`w-full object-cover ${customClasses}`}
            loading="lazy"
          />
        </button>
      }
    </div>
  );
};

Asset.propTypes = {
  image: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  customClasses: PropTypes.string,
  variant: PropTypes.oneOf(['image', 'iconButton']),
  onClick: PropTypes.func,
  ariaLabel: PropTypes.string,
};

export default Asset;
