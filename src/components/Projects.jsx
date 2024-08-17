import Card from "./Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination} from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";
function Projects() {
  let slide = screen.width >768?3:1;

  const projects = [
    {
      name: "Online Music Platform",
      img: "src/assets/Project/sp.jpg",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae non voluptatibus iusto rem optio facilis cupiditate consequuntur, commodi excepturi ut laudantium iure quasi ea libero explicabo aliquid deserunt. Explicabo aliquid animi iure eum.",
      link: "src/assets/Projects/Spotesh.jpg",
    },
    {
      name: "Blog Website",
      img: "src/assets/Project/bloghost.jpg",
      des: "This project serves as a simple yet functional blog management system, demonstrating the basics of web development with Node.js and Express.js. It provides users with essential features for creating, viewing, and deleting blog posts while showcasing fundamental concepts such as routing, data handling, and view rendering.",
      link: "https://bloghost-3ehk.onrender.com/",
    },
    {
      name: "Link Shortner",
      img: "src/assets/Project/ur.jpg",
      des: "a custom-built web application for URL shortening! Designed from scratch, a URL shortening web application crafted with Node.js, JavaScript, EJS, Express, CSS, and Axios. Leveraging the free API of cleanuri.com, this application offers a seamless solution for transforming lengthy URLs into concise, shareable links. Check out my portfolio to explore how this project combines cutting-edge technologies to simplify online link sharing.",
      link: "https://bloghost-3ehk.onrender.com/",
    },
    {
      name: "Note's Managing Web App",
      img: "src/assets/Project/mm.jpg",
      des: "Memo's Manager, a user-friendly note-taking application that I've designed to help in efficiently creating, editing, and deleting notes. This project is a direct demonstration of my skills in full-stack development, featuring the utilization of the MERN stack (MongoDB, Express, React, Node.js) to create practical web applications.",
      link: "https://memos-manager.onrender.com/",
    },
    {
      name: "QR-code Generator Web App",
      img: "src/assets/Project/qr.jpg",
      des: "Very simple and reliable Qr code Generator for evrey one You can use it for generating Qr code for any link Or also you can use it for any secrete, text message whatever you want.To bind that in the form of a Qr code.",
      link: "https://my-qr-734o.onrender.com/",
    },
    {
      name: "Personal Book Library",
      img: "src/assets/Project/bl.jpg",
      des: "BookLogs is a personal book catalog this project integrates public APIs, utilizes Express/Node.js for server-side programming, and demonstrates CRUD operations in a PostgreSQL database. Additional features include password verification for added security and the use of dotenv to secure unnecessary data manupulation.",
      link: "https://booklogs.onrender.com/",
    },
  ];
  return (
    <div id="projects" className="projects rounded-sm">
      <div className="intro h-10 rounded-md mx-4 mt-2 p-1 md:text-2xl text-center font-bold">
        Projects i did From Scratch
      </div>
      {/* <div className="h-[28rem] flex flex-col items-center rounded-md overflow-x-auto bg-white mx-4 my-2"> */}
      <div className=" rounded-md bg-white mx-4 my-2">
        <Swiper
          spaceBetween={30}
          slidesPerView={slide}
          centeredSlides={true}
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          autoplay={{
            delay: 1500,
            pauseOnMouseEnter: true,
          }}
          pagination={{
            dynamicBullets: true,
          }}
          //  navigation={true}
          className="mySwiper"
        >
          {projects.map((e, index) => (
            <SwiperSlide key={index}>
              <Card name={e.name} des={e.des} img={e.img} link={e.link} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
