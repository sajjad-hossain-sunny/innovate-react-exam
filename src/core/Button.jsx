import PropTypes from "prop-types";

const Button = ({ title, className }) => {
  return (
    <button
      className={`${className} font-dm font-medium text-lg lg:text-xl leading-5 text-secondary-200 capitalize px-8 lg:px-12 py-3 lg:py-5 bg-primary-100 rounded-md border border-solid border-primary-100 duration-300 hover:bg-transparent hover:text-primary-100`}
      type="button"
    >
      {title}
    </button>
  );
};

Button.propTypes = {
  title: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Button;
