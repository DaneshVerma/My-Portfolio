import Card from "./Card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css";

function Projects() {
  let slide = screen.width > 768 ? 3 : 1;

  const projects = [
    {
      name: "Blog Website",
      img: "assets/Project/bloghost.jpg",
      des: "This project serves as a simple yet functional blog management system, demonstrating the basics of web development with Node.js and Express.js. It provides users with essential features for creating, viewing, and deleting blog posts while showcasing fundamental concepts such as routing, data handling, and view rendering.",
      link: "https://bloghost-3ehk.onrender.com/",
    },
    {
      name: "Link Shortner",
      img: "assets/Project/ur.jpg",
      des: "a custom-built web application for URL shortening! Designed from scratch, a URL shortening web application crafted with Node.js, JavaScript, EJS, Express, CSS, and Axios. Leveraging the free API of cleanuri.com, this application offers a seamless solution for transforming lengthy URLs into concise, shareable links. Check out my portfolio to explore how this project combines cutting-edge technologies to simplify online link sharing.",
      link: "https://shortlink-zvr5.onrender.com/",
    },
    {
      name: "Note's Managing Web App",
      img: "assets/Project/mm.jpg",
      des: "Memo's Manager, a user-friendly note-taking application that I've designed to help in efficiently creating, editing, and deleting notes. This project is a direct demonstration of my skills in full-stack development, featuring the utilization of the MERN stack (MongoDB, Express, React, Node.js) to create practical web applications.",
      link: "https://memos-manager.onrender.com/",
    },
    {
      name: "QR-code Generator Web App",
      img: "assets/Project/qr.jpg",
      des: "Very simple and reliable Qr code Generator for evrey one You can use it for generating Qr code for any link Or also you can use it for any secrete, text message whatever you want.To bind that in the form of a Qr code.",
      link: "https://my-qr-734o.onrender.com/",
    },
    {
      name: "Personal Book Library",
      img: "assets/Project/bl.jpg",
      des: "BookLogs is a personal book catalog this project integrates public APIs, utilizes Express/Node.js for server-side programming, and demonstrates CRUD operations in a PostgreSQL database. Additional features include password verification for added security and the use of dotenv to secure unnecessary data manupulation.",
      link: "https://booklogs.onrender.com/",
    },
  ];
  return (
    <div id="projects" className="projects rounded-sm">
      <div data-aos="fade"  className="intro h-10 rounded-md mx-4 mt-2 p-1 md:text-2xl text-center font-bold">
        Projects i did From Scratch
      </div>
      <hr />
      {/* <div className="h-[28rem] flex flex-col items-center rounded-md overflow-x-auto bg-white mx-4 my-2"> */}
      <div
        data-aos="fade-up"
        data-aos-delay="300"
        data-aos-duration="500"
        className=" rounded-md bg-white mx-4 my-2"
      >
        <Swiper
          spaceBetween={30}
          slidesPerView={slide}
          centeredSlides={true}
          modules={[Autoplay, Navigation, Pagination]}
          loop={true}
          autoplay={{
            delay: 2500,
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
