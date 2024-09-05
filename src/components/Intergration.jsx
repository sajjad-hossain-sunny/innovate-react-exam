import { Button, IconLink } from "../core";

const Intergration = () => {
  return (
    <section className="pt-30.5 pb-30.75">
      <div className="container grid grid-cols-2 gap-x-7.5">
        <div className="col-span-1 flex flex-col justify-center items-start">
          <h4 className="font-dm font-medium text-xl text-customOrange">
            Integrations
          </h4>
          <h2 className="font-chivo font-bold text-secondary-200 text-46px leading-14.5 tracking-tightestest">
            Easily integrate with your favorite apps
          </h2>
          <p className="font-dm text-secondary-100 leading-8 -tracking-tighter mt-5 mb-10">
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

        <div className="col-span-1">
          <div className="grid grid-cols-12 gap-7.5">
            <IconLink name="wapkiu" className="col-span-6" />
            <IconLink name="creone" className="col-span-6" />
            <IconLink name="w" className="col-span-3" />
            <IconLink name="rainfall" className="col-span-6" />
            <IconLink name="antDesign" className="col-span-3" />
            <IconLink name="ulabs" className="col-span-5" />
            <IconLink name="antDesign" className="col-span-3" />
            <IconLink name="spiders" className="col-span-4" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intergration;
