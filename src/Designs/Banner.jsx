import banner from "../assets/Chef.jpg";
const Banner = () => {
  return (
    <section>
      <div className="mt-10 relative">
        <div>
          <img
            className="mx-auto w-[1320px] h-[600px] rounded-2xl brightness-50"
            src={banner}
            alt=""
          />
        </div>
        <div className="absolute top-[130px] inset-x-0">
          <h1 className="text-7xl font-semibold text-white text-center">
            Discover an exceptional cooking <br /> class tailored for you!
          </h1>
          <p className="text-white text-center mt-9">
            Learn and gain knowledge about cooking and get more experience with
            cooking.
          </p>
          <div className="text-center mt-8">
            <button className="btn btn-lg bg-[#0BE58A] border-none px-14 rounded-full">
              Explore Now
            </button>
            <button className="btn btn-outline text-white btn-xs sm:btn-sm md:btn-md lg:btn-lg px-16 ml-5 rounded-full">
              Our Feedback
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
