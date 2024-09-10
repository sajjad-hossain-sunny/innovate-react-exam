import { Button, ServicesCard } from "../core";
import ServiceCards from "../../static/Services";

const Services = () => {
  return (
    <section className="my-35">
      <div className="container">
        <h4 className="font-dm font-medium text-xl text-customOrange text-center">
          Our Services
        </h4>
        <h2 className="font-chivo font-bold text-secondary-200 text-46px leading-14.5 tracking-tightestest text-center">
          How It Works
        </h2>

        <div className="my-20 grid grid-cols-12 gap-5 lg:gap-7.5">
          {ServiceCards?.map(({ id, title, description, icon }) => (
            <ServicesCard
              key={id}
              title={title}
              description={description}
              icon={icon}
            />
          ))}
        </div>

        <div className="flex justify-center">
          <Button
            title="Start Now"
            className="bg-primary-300 text-white border-primary-300 hover:text-primary-300"
          />
        </div>
      </div>
    </section>
  );
};

export default Services;
