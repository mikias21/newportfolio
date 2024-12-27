import { Link } from "react-router-dom";
import ProjectItem from "./ProjectItem";
import MainProjectItem from "./MainProjectItem";

const Projects = () => {
  return (
    <div
      className="p-7 flex flex-wrap border-b border-b-slate-50 md:p-14 lg:p-20 xl:mx-20 dark:border-b-slate-900"
      id="projects"
    >
      <p className="text-lg font-poppins w-full mb-5 sm:text-2xl">Projects</p>
      <section>
      <h2 className="text-xl font-semibold mb-4 mt-5 text-green-500">active projects</h2>
        <div className="grid grid-cols-1 gap-8">
          <MainProjectItem 
            img="/images/project1.png"
            title="Passit"
            desc="Project used to store, manage and access passwords securly. Currently 20 active users."
            techs={["React js", "FastAPI", "MongoDB"]}
            link="https://passitt.netlify.app/"
          />
          <MainProjectItem 
            img="/images/project1.png"
            title="Passit"
            desc="Project used to store, manage and access passwords securly. Currently 20 active users."
            techs={["React js", "FastAPI", "MongoDB"]}
            link="https://passitt.netlify.app/"
          />
          <MainProjectItem 
            img="/images/project1.png"
            title="Passit"
            desc="Project used to store, manage and access passwords securly. Currently 20 active users."
            techs={["React js", "FastAPI", "MongoDB"]}
            link="https://passitt.netlify.app/"
          />
        </div>
      </section>


      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mt-5 text-slate-700">Archived projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProjectItem
            img="/images/project1.png"
            title="Passit"
            desc="Project used to store, manage and access passwords securly. Currently 20 active users."
            techs={["React js", "FastAPI", "MongoDB"]}
            link="https://passitt.netlify.app/"
          />
          <ProjectItem
            img="/images/project2.png"
            title="XSSVIS"
            desc="Detecting XSS attacks using deep learning and computer vision from HTTP request."
            techs={["React js", "Fastapi", "Tensorflow, Numpy, matplotlib"]}
            link="https://xssvis.netlify.app/"
          />
          <ProjectItem
            img="/images/covidtracker.gif"
            title="Covid-19 tracker"
            desc="Web app fetchs covid 19 data and displays it in a visual form."
            techs={["React js", "Openstreetmap", "CSS"]}
            link="https://mikias-covid-tracker-lol.netlify.app/"
          />
          <ProjectItem
            img="/images/facebookclone.gif"
            title="Facebook clone"
            desc="full authentication, functionality to store posts on firestore database."
            techs={["React js", "Firebase/firestore", "tailwind"]}
            link="https://mikias-facebookclone-react.netlify.app/"
          />
        </div>
      </section>

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
