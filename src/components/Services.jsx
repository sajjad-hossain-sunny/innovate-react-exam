import { Button, ServicesCard } from "../core";
import ServiceCards from "../../static/Services";

const Services = () => {
  return (
    <section className="my-20 md:my-35">
      <div className="container">
        <h4 className="font-dm font-medium text-xl text-customOrange text-center">
          Our Services
        </h4>
        <h2 className="font-chivo font-bold text-secondary-200 text-46px leading-14.5 tracking-tightestest text-center">
          How It Works
        </h2>

        <div className="my-20 grid grid-cols-12 gap-5 lg:gap-7.5">
          {ServiceCards?.map(({ id, title, description, icon, iconBG }) => (
            <ServicesCard
              key={id}
              title={title}
              description={description}
              icon={icon}
              iconBG={iconBG}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            title="View More"
            className="bg-white hover:bg-[#3639A4] text-primary-300 border-primary-300 hover:text-white"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
