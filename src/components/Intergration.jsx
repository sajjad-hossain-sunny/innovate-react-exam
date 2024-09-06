import { Button, IconLink } from "../core";

const Intergration = () => {
  return (
    <section className="md:pt-30.5 md:pb-30.75">
      <div className="container grid grid-cols-2 gap-7.5">
        <div className="col-span-2 lg:col-span-1 flex flex-col justify-center items-center lg:items-start">
          <h4 className="font-dm font-medium text-xl text-customOrange">
            Integrations
          </h4>
          <h2 className="font-chivo font-bold text-secondary-200 text-4xl lg:landscape:text-4xl xl:landscape:text-46px lg:text-46px md:leading-14.5 xl:landscape:leading-14.5 tracking-tightestest text-center lg:text-start mb-4 md:mb-0">
            Easily integrate with your favorite apps
          </h2>
          <p className="font-dm text-secondary-100 text-base lg:landscape:text-base xl:landscape:text-lg lg:text-lg lg:leading-8 -tracking-tighter text-center lg:text-start mt-3 md:mt-5 mb-7 md:mb-10">
            App integration, in a general sense, is the process of bringing
            resources or capabilities from one application to another. As the
            world of apps continues to evolve, app integration is becoming
            expected in many contexts.
          </p>
          <Button
            title="Get Started"
            className="bg-primary-300 text-white border-primary-300 hover:text-primary-300"
          />
        </div>

        <div className="col-span-2 lg:col-span-1">
          <div className="grid grid-cols-12 gap-4 md:gap-7.5">
            <IconLink name="wapkiu" className="col-span-6" iconClass="" />
            <IconLink name="creone" className="col-span-6" iconClass="" />
            <IconLink name="w" className="col-span-3" iconClass="" />
            <IconLink name="rainfall" className="col-span-6" iconClass="" />
            <IconLink name="antDesign" className="col-span-3" iconClass="" />
            <IconLink name="ulabs" className="col-span-5" iconClass="!w-5/6" />
            <IconLink name="antDesign" className="col-span-3" iconClass="" />
            <IconLink name="spiders" className="col-span-4" iconClass="!w-80%" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intergration;
