import svgIcons from "./svgIcons";
import { HiMiniArrowLongRight } from "react-icons/hi2";
import PropTypes from "prop-types";

const ServicesCard = ({ title, description }) => {
  return (
    <div className="group col-span-12 sm:col-span-6 lg:col-span-3 border border-secondary-border rounded-5 px-8 py-9 duration-300 hover:bg-primary-300 hover:border-primary-300">
      <div className="size-23 rounded-full bg-[#FAEAE8] grid place-content-center mb-6.5 duration-300 group-hover:bg-white mx-auto md:mx-0">
        <svgIcons.flowChart
          className={``}
          hoverClass={"group-hover:fill-primary-300 duration-300"}
        />
      </div>

      <div className="">
        <h4 className="font-chivo font-bold text-xl md:text-22px lg:leading-8.5 text-secondary-200 duration-300 group-hover:text-white">
          {title}
        </h4>
        <p className="mt-2 mb-6.5 font-dm text-base sm:text-sm md:text-base leading-6.5 text-secondary-100 duration-300 group-hover:text-white">
          {description}
        </p>
        <button
          type="button"
          className="flex items-center font-dm font-medium text-primary-300  capitalize leading-6.5 duration-300 group-hover:text-white"
        >
          read more{" "}
          <HiMiniArrowLongRight className="mt-0.5 ml-1 text-2xl group-hover:translate-x-2 delay-50 duration-500" />
        </button>
      </div>
    </div>
  );
};

ServicesCard.propTypes = { 
  title: PropTypes.string,
  description: PropTypes.string,
  iconClass: PropTypes.string,
};


export default ServicesCard;
