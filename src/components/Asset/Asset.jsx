import PropTypes from "prop-types";

const Asset = ({ image, alt, customClasses = "", variant = 'image', onClick, ariaLabel, disabled }) => {
  return (
    <div className="flex">
      {variant === 'image' ?
        <img
          src={image}
          alt={alt}
          className={`w-full object-cover ${customClasses}`}
          loading="lazy"
        /> :
        <button
          disabled={disabled}
          type="button"
          onClick={onClick}
          aria-label={ariaLabel || alt}
          className={`p-0 border-0 bg-transparent opacity-100 transition-all duration-400 ${disabled ? 'cursor-not-allowed opacity-40' : 'cursor-pointer'}`}
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
  disabled: PropTypes.bool,
};

export default Asset;
