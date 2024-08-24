import PlatformUsageStatics from "../../static/PlatformUsage";

const PlatformUsage = () => {
  console.log(PlatformUsageStatics);

  return (
    <section className="mt-84 pb-40">
      <div className="container">
        <div className="px-13.75 grid grid-cols-12 gap-y-29">
          <div className="col-span-12 grid grid-cols-12">
            <div className="col-span-5">
              <h2 className="font-chivo font-bold text-secondary-200 text-46px leading-14.5 tracking-tightestest">
                How simple is it to use our platform?
              </h2>
            </div>
            <div className="col-span-2"></div>
            <div className="col-span-5">
              <p className="font-dm text-secondary-100 leading-8 -tracking-tighter">
                This Innovate Con guide explores the most popular platforms and
                walks you through how to use them to grow your business.
              </p>
            </div>
          </div>
          <div className="col-span-12 grid grid-cols-12 gap-7.5">
            {PlatformUsageStatics.map(({id, title, description, image}) => (
              <div key={id} className="col-span-4 flex justify-center">
                <div className="w-80 flex flex-col items-center text-center">
                  <img src={image} alt="" />
                  <h4 className="font-chivo font-bold text-secondary-200 text-2xl mb-3 mt-6">
                    {title}
                  </h4>
                  <p className="font-dm text-secondary-100 leading-8 -tracking-tighter">
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
