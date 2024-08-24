const Banner = () => {
  return (
    <>
      <section className="pt-48.75 pb-139.5 bg-banner bg-no-repeat bg-center bg-cover relative">
        <div className="container flex flex-col items-center ">
          <div className="w-199 text-white mx-auto text-center">
            <h1 className="font-chivo font-bold text-56px">
              Get your work done with Management Tool
            </h1>
            <p className="font-dm text-lg mt-5 w-116.75 mx-auto">
              The world&apos;s first project management platform that connects
              everything
            </p>
          </div>
          <form action="" className="relative mt-8">
            <input
              type="text"
              className="py-5 pr-42.75 pl-6 w-120 rounded-md font-dm text-secondary-50 focus:outline-none focus:text-secondary-200 border border-solid border-secondary-50"
              placeholder="Your business email"
            />
            <button
              type="button"
              className="px-7 py-3.75 rounded-md bg-tertiary font-dm font-medium text-lg text-secondary-200 capitalize leading-5 absolute top-1/2 -translate-y-1/2 right-2"
            >
              Try for free
            </button>
          </form>
        </div>
        <div className="absolute bottom-0 left-1/2 translate-y-1/4 -translate-x-1/2 max-w-300">
          <img
            src="/Laptop_Screen.png"
            alt="laptop"
            className="w-full"
          />
          <div className="absolute top-6.5% left-1/2 -translate-x-1/2 w-69.4% h-82% bg-teal-500"></div>
        </div>
      </section>
    </>
  );
};

export default Banner;
