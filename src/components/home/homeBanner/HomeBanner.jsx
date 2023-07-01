import bannerImg from "../../../assets/img/homeBanner.png";
import indicatorArrow from "../../../assets/icons/indicatorArrow.png";
import { Link } from "react-router-dom";
import { BsGithub } from "react-icons/bs";

const HomeBanner = () => {
  return (
    <>
      <section className="my-20">
        <div className="container font-preahvihear pt-10 sm:pt-0">
          <div className="flex gap-8 md:gap-0 flex-col md:flex-row items-center">
            <div
              className="w-72 lg:w-[23rem] h-80 lg:h-[26rem] shrink-0 relative flex justify-center items-center"
              style={{
                background:
                  "radial-gradient(50% 50.00% at 50% 50.00%, #763CAC 0%, rgba(50, 15, 133, 0.00) 100%)",
              }}
            >
              <img
                className="rounded-full w-52 h-52 lg:w-60 lg:h-60"
                style={{
                  //   background:
                  //     "radial-gradient(at 50% 50%, #FFF 0.01%, rgba(67, 67, 67, 0.00) 100%)",
                  background:
                    "radial-gradient(at 50% 58%, rgb(255, 255, 255) 0.01%, rgba(67, 67, 67, 0) 70%)",
                }}
                src={bannerImg}
                alt="Banner Image"
              />
              <p className="capitalize absolute -mt-10 sm:mt-0 sm:-right-1/2 top-0">
                Hello! I am <span className="text-primaryLight2">Md. Minhaj Kobir</span>
                <span
                  className="absolute w-24 h-24 left-1/4 sm:-left-24 -top-5"
                  style={{ backgroundImage: `url(${indicatorArrow})` }}
                ></span>
              </p>
            </div>
            <div className="md:-ml-7 lg:-ml-10 text-center md:text-start">
              <h5 className="text-xl underline mb-4 md:mb-2">A Web Developer who</h5>
              <h1 className="text-4xl lg:text-5xl leading-relaxed lg:leading-loose">
                Transforming Ideas into
                <br />
                <span className="border-2 border-primaryLight2 rounded-[50%] px-6 whitespace-nowrap">
                  Digital Reality
                </span>
                ...
              </h1>
              <p className="mt-8 md:mt-6">
                Elevating Businesses through Web Innovation, Designing the Future, One Line at
                a Time.
              </p>
            </div>
          </div>

          <div className="xl:w-3/4 mt-16">
            <h1 className="text-5xl">I'm a Web Developer.</h1>
            <h5 className="text-xl group underline mt-4 mb-10">
              <Link to="https://github.com/minhaj06/" target="_blank">
                Check out my GitHub profile
                <BsGithub
                  size={24}
                  className="inline-block ml-2 text-primaryLight2 group-hover:text-primaryLight duration-150"
                />
              </Link>
            </h5>

            <p className="text-lg leading-relaxed">
              Ambitious junior MERN developer with a hunger for learning and a drive to excel.
              Dedicated to delivering exceptional web solutions. Eager to contribute to
              collaborative teams and make a lasting impact in the world of web development.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default HomeBanner;
