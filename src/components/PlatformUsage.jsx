import PlatformUsageStatics from "../../static/PlatformUsage";

const PlatformUsage = () => {
  return (
    <section className="mt-36 lg:mt-84 mb-24 lg:mb-40">
      <div className="container">
        <div className="lg:px-13.75 grid grid-cols-12 gap-y-14 md:gap-y-29">
          <div className="col-span-12 grid grid-cols-12">
            <div className="col-span-12 lg:col-span-5">
              <h2 className="font-chivo font-bold text-secondary-200 text-4xl lg:landscape:text-4xl xl:landscape:text-46px lg:text-46px md:leading-14.5 xl:landscape:leading-14.5 tracking-tightestest text-center lg:text-start mb-4 md:mb-0">
                How simple is it to use our platform?
              </h2>
            </div>
            <div className="col-span-2 hidden lg:block"></div>
            <div className="col-span-12 lg:col-span-5 ">
              <p className="font-dm text-secondary-100 lg:landscape:text-base xl:landscape:text-lg lg:text-lg lg:leading-8 -tracking-tighter text-center lg:text-start">
                This Innovate Con guide explores the most popular platforms and
                walks you through how to use them to grow your business.
              </p>
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-7.5">
            {PlatformUsageStatics.map(({id, title, description, image}) => (
              <div key={id} className="col-span-12 potrait:col-span-12 md:portrait:col-span-6 landscape:col-span-6 lg:landscape:col-span-4 md:col-span-4 flex justify-center">
                <div className="w-80 flex flex-col items-center text-center">
                  <img src={image} alt="" className="w-20 md:w-24" />
                  <h4 className="font-chivo font-bold text-secondary-200 text-2xl mb-3 mt-6">
                    {title}
                  </h4>
                  <p className="font-dm text-secondary-100 md:leading-8 -tracking-tighter">
                    {description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlatformUsage;
