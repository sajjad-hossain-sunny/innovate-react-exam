import PropTypes from "prop-types";

const HamburgerIcon = ({ open, onClick }) => {
  
  return (
    <>
      <div onClick={onClick} className="relative z-50 lg:hidden w-8 h-[21px] cursor-pointer">
        <div
          className={`absolute left-0 w-full h-0.75 bg-white rounded-md duration-300 ${
            open
              ? "top-1/2 -translate-y-1/2 rotate-45"
              : " top-0 translate-y-0 rotate-0"
          }`}
        />
        <div
          className={`absolute top-1/2 left-0 -translate-y-1/2 w-full h-0.75 bg-white rounded-md duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        />
        <div
          className={`absolute left-0 w-full h-0.75 bg-white rounded-md duration-300 ${
            open
              ? "bottom-1/2 translate-y-1/2 -rotate-45"
              : "bottom-0 translate-y-0 rotate-0"
          }`}
        />
      </div>
    </>
  );
};

HamburgerIcon.propTypes = {
  open: PropTypes.bool,
  onClick: PropTypes.func,
};

export default HamburgerIcon;
