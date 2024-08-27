import svgIcons from "./svgIcons";
import PropTypes from "prop-types";

const IconLink = ({name, cols}) => {
  const IconComponent = svgIcons[name];
  return (
    <a
      href="#"
      className={`group h-35.5 col-span-${cols} bg-white rounded-xl grid place-items-center`}
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
  cols: PropTypes.number,
};

export default IconLink;
