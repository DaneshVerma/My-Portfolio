import Card from "./Card";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css/autoplay';
import 'swiper/css';
function Projects() {
  const projects = [
    {
      name: "Online Music Platform",
      img: `src/assets/Projects/Spotesh.jpg`,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae non voluptatibus iusto rem optio facilis cupiditate consequuntur, commodi excepturi ut laudantium iure quasi ea libero explicabo aliquid deserunt. Explicabo aliquid animi iure eum.",
      link: "https://spotesh.freewebhostmost.com/",
    },
    {
      name: "Blog Website",
      img: `src/assets/Projects/bloghost.jpg`,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae non voluptatibus iusto rem optio facilis cupiditate consequuntur, commodi excepturi ut laudantium iure quasi ea libero explicabo aliquid deserunt. Explicabo aliquid animi iure eum.",
      link: "https://bloghost-3ehk.onrender.com/",
    },
    {
      name: "Blog Website",
      img: `src/assets/Projects/bloghost.jpg`,
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae non voluptatibus iusto rem optio facilis cupiditate consequuntur, commodi excepturi ut laudantium iure quasi ea libero explicabo aliquid deserunt. Explicabo aliquid animi iure eum.",
      link: "https://bloghost-3ehk.onrender.com/",
    },
  ];
  return (
    <div id="projects" className="projects rounded-sm">
      <div className="intro h-10 rounded-md mx-4 mt-2 p-1 bg-white border-2 border-slate-500 text-center font-bold">
        Projects i did From Scratch
      </div>
      {/* <div className="h-[28rem] flex flex-col items-center rounded-md overflow-x-auto bg-white mx-4 my-2"> */}
      <div className=" rounded-md bg-white mx-4 my-2">
        <Swiper
           spaceBetween={30}
           centeredSlides={true}
           modules={[Autoplay]}
           autoplay={{
             delay: 2000,
             pauseOnInteraction: false
           }}
           pagination={{
             clickable: true,
           }}
           navigation={true}
          //  modules={[Autoplay, Pagination, Navigation]}
           className="mySwiper"
        >
          {projects.map((e, index) => (
            <SwiperSlide  key={index}>
              <Card
                name={e.name}
                des={e.des}
                img={e.img}
                link={e.link}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}

export default Projects;
