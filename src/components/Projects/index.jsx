import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";

const Projects = () => {
  return (
    <div
      className="p-7 flex flex-wrap border-b border-b-slate-50 md:p-14 lg:p-20 xl:mx-20 dark:border-b-slate-900"
      id="projects"
    >
      <p className="text-lg font-poppins w-full mb-5 sm:text-2xl">Projects</p>
      <div className="w-full sm:w-1/2 sm:pr-2 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-5 md:pr-3">
        <ProjectItem
          img="/images/project1.png"
          title="Passit"
          desc="Project used to store, manage and access passwords securly. Currently 20 active users."
          techs={["React js", "FastAPI", "MongoDB"]}
          link="https://passitt.netlify.app/"
        />
      </div>
      <div className="w-full sm:w-1/2 sm:pr-2 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-5 md:pr-3">
        <ProjectItem
          img="/images/project2.png"
          title="XSSVIS"
          desc="Detecting XSS attacks using deep learning and computer vision from HTTP request."
          techs={["React js", "Fastapi", "Tensorflow, Numpy, matplotlib"]}
          link="https://xssvis.netlify.app/"
        />
      </div>
      <div className="w-full sm:w-1/2 sm:pr-2 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-5 md:pr-3">
        <ProjectItem
          img="/images/covidtracker.gif"
          title="Covid-19 tracker"
          desc="Web app fetchs covid 19 data and displays it in a visual form."
          techs={["React js", "Openstreetmap", "CSS"]}
          link="https://mikias-covid-tracker-lol.netlify.app/"
        />
      </div>
      <div className="w-full sm:w-1/2 sm:pr-2 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-5 md:pr-3">
        <ProjectItem
          img="/images/facebookclone.gif"
          title="Facebook clone"
          desc="full authentication, functionality to store posts on firestore database."
          techs={["React js", "Firebase/firestore", "tailwind"]}
          link="https://mikias-facebookclone-react.netlify.app/"
        />
      </div>
      <div>
        <Link
          className="bg-blue-700 w-32 p-2 text-white text-xs rounded-2xl shadow-md font-poppins"
          target="_blank"
          to="https://github.com/mikias21"
        >
          More projects on github
        </Link>
      </div>
    </div>
  );
};

export default Projects;
