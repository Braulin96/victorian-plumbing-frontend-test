import PropTypes from "prop-types";

const Asset = ({ image }) => {
  return (
    <div>
      <img src={image} className="logo" alt="Vite logo" />
    </div>
  );
};

Asset.propTypes = {
  image: PropTypes.string.isRequired,
};

export default Asset;
