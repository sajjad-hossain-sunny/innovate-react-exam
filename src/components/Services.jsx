import { Button } from "../core";

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

        <div className="my-20"></div>

        <div className="flex justify-center">
          <Button title="Start Now" className="bg-transparent border-primary-300 text-primary-300 hover:bg-primary-300 hover:text-white" />
        </div>
      </div>
    </section>
  );
};

export default Services;
