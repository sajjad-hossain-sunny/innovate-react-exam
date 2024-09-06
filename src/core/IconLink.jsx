import svgIcons from "./svgIcons";
import PropTypes from "prop-types";

const IconLink = ({name, className, iconClass}) => {
  const IconComponent = svgIcons[name];
  return (
    <a
      href="#"
      className={`group h-20 md:h-35.5 landscape:h-32 xl:landscape:h-35.5 ${className} bg-white rounded-xl flex justify-center items-center shadow-intergrateIcon`}
    >
      <IconComponent
        className={`group-hover:scale-110 duration-300 w-4/6 xl:w-auto ${iconClass}`}
        hoverClass="group-hover:fill-primary-200 duration-300"
      />
    </a>
  );
};

IconLink.propTypes = { 
  name: PropTypes.string,
  className: PropTypes.string,
  iconClass: PropTypes.string,
};

export default IconLink;
