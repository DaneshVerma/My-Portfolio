import Greet from "./Greet";
import Header from "./Header";
function Hero() {
  return (
    <>
      {/* <Header /> */}
      <div id="about" className="Hero rounded-sm bg-slate-700 sm:h-[100vh] text-white">
        <div className="ME sm:flex sm:items-center sm:justify-between p-4">
          <div>
            <img
              className=" rounded-full sm:w-9/12 w-1/2 h-1/2 bg-white mx-auto"
              src="./src/assets/Mypic.png"
              alt="My Photo"
            />
          </div>
          <div className="sm:w-80 h-1/2 ">
            <h2 className="sm:text-4xl text-xl">Hi,</h2>
            <div className="sm:text-3xl text-xl text-blue-200 type flex">
              <p className="mr-1">I'm</p>
              <Greet text={[" Danesh Verma", " a Web Developer"]} />
            </div>
            <hr />
            <div className="buttons flex gap-2">
              <a href="#contact"><button className="border-2 my-2 rounded-md px-1 text-sm">Contact me</button></a>
              <a href="#contact"><button className="border-2 my-2 rounded-md px-1 text-sm flex">Resume<img src="src\assets\Icons\download.svg" alt="" /></button></a>
            </div>
            <div className="About mt-1 sm:absolute sm:bottom-0 sm:w-[90vw] sm:left-10 sm:text-2xl  bg-white p-2 text-gray-900 rounded-sm">
              <p className="text-center font-bold text-black">About Me</p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Doloribus, vero recusandae enim quibusdam voluptatum voluptatibus
              officiis praesentium esse blanditiis dolore? Atque velit
              perferendis iusto libero vitae iste dolorum at maxime?
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero;
