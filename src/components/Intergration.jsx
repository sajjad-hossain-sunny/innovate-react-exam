import { Button, IconLink } from "../core";
import AppsIcons from "../../static/IntergrationStatics";

const Intergration = () => {
  return (
    <section className="pt-30.5 pb-30.75 bg-primary-50">
      <div className="container grid grid-cols-2 gap-7.5">
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

        <div className="col-span-1 grid grid-cols-12 gap-7.5">
          {AppsIcons.map(({ name, cols }, index) => (
            <IconLink key={index} name={name} cols={cols} />
          ))}

        </div>
        
      </div>
    </section>
  );
};

export default Intergration;
