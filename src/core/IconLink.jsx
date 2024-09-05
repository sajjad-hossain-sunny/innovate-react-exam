import svgIcons from "./svgIcons";
import PropTypes from "prop-types";

const IconLink = ({name, className}) => {
  const IconComponent = svgIcons[name];
  return (
    <a
      href="#"
      className={`group h-35.5 ${className} bg-white rounded-xl grid place-items-center shadow-intergrateIcon`}
    >
      <IconComponent
        className="group-hover:scale-110 duration-300"
        hoverClass="group-hover:fill-primary-100 duration-300"
      />
    </a>
  );
};

IconLink.propTypes = { 
  name: PropTypes.string,
  className: PropTypes.string,
};

export default IconLink;
