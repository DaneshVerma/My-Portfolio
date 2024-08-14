import Card from "./Card"
function Projects(){
    const projects = [
        {   
            name: "Online Music Platform",
            img: `src/assets/Projects/Spotesh.jpg`,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae non voluptatibus iusto rem optio facilis cupiditate consequuntur, commodi excepturi ut laudantium iure quasi ea libero explicabo aliquid deserunt. Explicabo aliquid animi iure eum."
        },
        {
            name: "Blog Website",
            img: `src/assets/Projects/bloghost`,
            des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa beatae non voluptatibus iusto rem optio facilis cupiditate consequuntur, commodi excepturi ut laudantium iure quasi ea libero explicabo aliquid deserunt. Explicabo aliquid animi iure eum."
        }
    ]
    return (
       <div className="Projects bg-white mx-4 my-2">
        {projects.map((e, index)=>
         <Card key={index} name={e.name} des={e.des} img={e.img}/>
        )}
      </div>
    )
}

export default Projects