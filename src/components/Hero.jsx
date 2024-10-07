import Greet from "./Greet";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
function Hero() {
    useEffect(() => {
      AOS.init({
        duration: 500,
        easing: "ease-out-cubic",
      });
    }, []);
  return (
    <>
      {/* <Header /> */}
      <div
        id="about"
        className="Hero  lg:min-h-[100vh] bg-slate-600 sm:min-h-[100vh] text-white"
      >
        <div  className="ME lg:pt-16 sm:flex gap-3 lg:gap-10 sm:items-center sm:justify-around p-4">
          <div className="z-10"  data-aos="fade-left" data-aos-delay="500"  data-aos-duration="1000">
            <img
              className="rounded-full shadow-slate-950 shadow-2xl md:w-full sm:w-9/12 w-1/2 h-1/2 bg-white mx-auto"
              src="assets/Mypic.png"
              alt="My Photo"
            />
          </div>
          <div  className="sm:w-80 md:w-[35rem] h-1/2 ">
            <h2 className="sm:text-4xl md:text-5xl text-xl">Hi,</h2>
            <div data-aos="fade-down" data-aos-delay="300" data-aos-duration="1000" className="sm:text-3xl md:text-4xl text-xl text-blue-200 type flex">
              <p className="mr-1">I'm</p>
              <Greet text={[" Danesh Verma", " a Web Developer"]} />
            </div>
            <hr />
            <div data-aos="fade-up" data-aos-delay="300" data-aos-duration="1000" className=" flex my-2 gap-2">
              <a href="mailto:techydanesh@gmail.com">
                <button className="border-[1px] my-2 rounded-md px-1 md:text-xl text-sm">
                  Contact me
                </button>
              </a>
              <a
                href="assets\Resume\Resume Danesh.pdf"
                target="_blank"
                download={true}
              >
                <button className="border-[1px] my-2 box-border rounded-md px-1 md:text-xl text-sm flex justify-center items-center">
                  Resume
                </button>
              </a>
            </div>
            <div
              data-aos="fade-right"
              data-aos-delay="500"
               data-aos-duration="1000"
              className="About lg:static shadow-black drop-shadow-2xl sm:absolute sm:bottom-6 lg:bottom-20 sm:w-fit sm:left-0 sm:text-2xl  bg-white p-2 text-gray-900 rounded-md"
            >
              <p className="text-center font-bold text-black">A bit About Me</p>
              <ul>
                <li>So I'm natively from Chattisgarh, India.</li>
                <li>
                  My journey into web development began with a curiosity to
                  understand how the digital world operates.
                </li>
                <li>
                  and through self-study and hands-on projects, I've honed my
                  skills With a solid foundation in both front-end and back-end
                  development, I excel in creating responsive and intuitive web
                  applications
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
