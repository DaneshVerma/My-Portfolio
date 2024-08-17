import Tile from "./Tile";
function Resume() {
  const skills = [{
    name: "React",
    logo: "https://www.vectorlogo.zone/logos/reactjs/reactjs-icon.svg"
  },
  {
    name:"NodeJS",
    logo:"https://www.vectorlogo.zone/logos/nodejs/nodejs-icon.svg"
  },
  {
    name:"MongoDB",
    logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-plain.svg"
  },
  {
    name: "JavaScript",
    logo: "https://cdn.worldvectorlogo.com/logos/logo-javascript.svg",
  },
  {
    name: "PostgreSQL",
    logo:"https://www.vectorlogo.zone/logos/postgresql/postgresql-icon.svg"
  },
  {
    name:"Express",
    logo:"https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg"
  },
  {
    name:"TailwindCSS",
    logo: "https://www.vectorlogo.zone/logos/tailwindcss/tailwindcss-icon.svg"
  },
  {
    name:"Postman",
    logo:"https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg"
  },
  {
    name:"Bootstrap",
    logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-plain.svg"
  },
  {
    name:"Html",
    logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
  },
  {
    name: "CSS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-plain.svg"
  },
  {
    name:"Git",
    logo:"https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-plain.svg"
  },
  {
    name:"Python",
    logo:"https://s3.dualstack.us-east-2.amazonaws.com/pythondotorg-assets/media/community/logos/python-logo-only.png"
  },
  {
    name:"Flask",
    logo:"https://www.vectorlogo.zone/logos/pocoo_flask/pocoo_flask-icon.svg"
  }
]
  return (
    <div id="resume" className="resume rounded-md bg-slate-700 py-2 ">
      <div className=" rounded-md bg-white mx-4 ">
        <p className="text-center rounded-md md:text-2xl font-bold p-2">Technologies I know</p>
        <div className="tileContainer justify-center items-center flex flex-wrap pb-1">
          {
            skills.map((e, index)=>(
              <Tile name={e.name} logo={e.logo} key={index} />
            ))
          }
          </div>
      </div>
    </div>
  );
}
export default Resume;
