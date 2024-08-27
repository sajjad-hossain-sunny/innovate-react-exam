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

          {/* <a
            href="#"
            className="group h-35.5 col-span-6 bg-white rounded-xl grid place-items-center"
          >
            <SvgIcons.wapkiu
              className="group-hover:scale-110 duration-300"
              hoverClass="group-hover:fill-primary-100 duration-300"
            />
          </a>

          <a
            href="#"
            className="group h-35.5 col-span-6 bg-white rounded-xl grid place-items-center"
          >
            <SvgIcons.creone
              className="group-hover:scale-110 duration-300"
              hoverClass="group-hover:fill-primary-100 duration-300"
            />
          </a>

          <a
            href="#"
            className="group h-35.5 col-span-3 bg-white rounded-xl grid place-items-center"
          >
            <SvgIcons.w
              className="group-hover:scale-110 duration-300"
              hoverClass="group-hover:fill-primary-100 duration-300"
            />
          </a>

          <a
            href="#"
            className="group h-35.5 col-span-6 bg-white rounded-xl grid place-items-center"
          >
            <SvgIcons.rainfall
              className="group-hover:scale-110 duration-300"
              hoverClass="group-hover:fill-primary-100 duration-300"
            />
          </a>

          <a
            href="#"
            className="group h-35.5 col-span-3 bg-white rounded-xl grid place-items-center"
          >
            <SvgIcons.antDesign
              className="group-hover:scale-110 duration-300"
              hoverClass="group-hover:fill-primary-100 duration-300"
            />
          </a>

          <a
            href="#"
            className="group h-35.5 col-span-5 bg-white rounded-xl grid place-items-center"
          >
            <SvgIcons.ulabs
              className="group-hover:scale-110 duration-300"
              hoverClass="group-hover:fill-primary-100 duration-300"
            />
          </a>

          <a
            href="#"
            className="group h-35.5 col-span-3 bg-white rounded-xl grid place-items-center"
          >
            <SvgIcons.antDesign
              className="group-hover:scale-110 duration-300"
              hoverClass="group-hover:fill-primary-100 duration-300"
            />
          </a>

          <a
            href="#"
            className="group h-35.5 col-span-4 bg-white rounded-xl grid place-items-center"
          >
            <SvgIcons.spiders
              className="group-hover:scale-110 duration-300"
              hoverClass="group-hover:fill-primary-100 duration-300"
            />
          </a> */}
        </div>
        
      </div>
    </section>
  );
};

export default Intergration;
