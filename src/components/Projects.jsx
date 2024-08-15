import Card from "./Card";
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
    <div className="Projects ">
      <div className="intro h-10 rounded-md mx-4 mt-2 p-1 bg-white border-2 border-slate-500 text-center font-bold">
      Projects i did From Scratch 
        </div>
      <div className="h-[26rem] flex flex-col items-center rounded-md overflow-x-auto bg-white mx-4 my-2">
        {projects.map((e, index) => (
          <Card
            key={index}
            name={e.name}
            des={e.des}
            img={e.img}
            link={e.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
