import Greet from "./Greet";
import Header from "./Header";
function Hero() {
  return (
    <>
      {/* <Header /> */}
      <div
        id="about"
        className="Hero rounded-sm h-full lg:flex lg:items-center justify-center lg:h-96 bg-slate-700 sm:min-h-[100vh] text-white"
      >
        <div className="ME sm:flex gap-3 lg:gap-10 sm:items-center sm:justify-around p-4">
          <div>
            <img
              className=" rounded-full md:w-full sm:w-9/12 w-1/2 h-1/2 bg-white mx-auto"
              src="./src/assets/Mypic.png"
              alt="My Photo"
            />
          </div>
          <div className="sm:w-80 md:w-[35rem] h-1/2 ">
            <h2 className="sm:text-4xl md:text-5xl text-xl">Hi,</h2>
            <div className="sm:text-3xl md:text-4xl text-xl text-blue-200 type flex">
              <p className="mr-1">I'm</p>
              <Greet text={[" Danesh Verma", " a Web Developer"]} />
            </div>
            <hr />
            <div className=" flex my-2 gap-2">
              <a href="#contact">
                <button className="border-[1px] my-2 rounded-md px-1 md:text-2xl text-sm">
                  Contact me
                </button>
              </a>
              <a href="src\assets\Resume\Resume Danesh.pdf" target="_blank" download={true}>
                <button className="border-[1px] my-2 rounded-md px-1 md:text-2xl text-sm flex justify-center items-center">
                  Get Resume
                </button>
              </a>
            </div>
            <div className="About lg:static sm:absolute sm:bottom-6 lg:bottom-20 sm:w-fit sm:left-0 sm:text-2xl  bg-white p-2 text-gray-900 rounded-md">
              <p className="text-center font-bold text-black">A bit About Me</p>
              <ul>
                <li>So I'm natively from India Chattisgarh.</li>
                <li>
                  My journey into web development began with a curiosity to
                  understand how the digital world operates.
                </li>
                <li>
                  and Through self-study and hands-on projects, I've honed my
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
