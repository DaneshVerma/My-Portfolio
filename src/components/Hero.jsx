import Greet from "./Greet";
import Header from "./Header";
function Hero() {
  return (
    <>
   <Header/>
      <div className="Hero bg-slate-700 text-white">
        <div className="ME p-4">
          <img
            className=" rounded-full w-1/2 h-1/2 bg-white mx-auto"
            src="./src/assets/Mypic.png"
            alt="My Photo"
          />
          <div className="text h-1/2 ">
            <h2 className="text-xl">Hi,</h2>
            <div className=" text-xl text-blue-200 type flex">
              <p className="mr-1">I'm</p>
              <Greet text={[" Danesh Verma", " a Web Developer"]} />
            </div>
            <hr />
            <div className=" mt-1 About bg-white p-2 text-gray-900 rounded-md">
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
