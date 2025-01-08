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
        <div className="grid grid-cols-1 gap-8">
          <MainProjectItem 
            img="/images/project1.png"
            title="Passit"
            desc="A secure, fast, and user-friendly password management application designed for storing, sharing, and managing passwords with flexibility."
            techs={["React js", "FastAPI", "MongoDB"]}
            link="https://passitt.netlify.app/"
          />
          <MainProjectItem 
            img="/images/project2.png"
            title="XSSVIS"
            desc="A deep learning-based malicious web request detection system focused on XSS vulnerabilities. The model converts HTTP URLs into images to analyze anomalies and detect injection attempts, offering flexibility for other vulnerabilities and deployment as a standalone validator, proxy, or browser plugin."
            techs={["Tensorflow", "Numpy", "Pandas", "FastAPI", "React JS"]}
            link="https://passitt.netlify.app/"
          />
          <MainProjectItem 
            img="/images/project3.png"
            title="Dorkitall"
            desc="A lightweight Google Dorking query app for pentesters, enabling search by tags, categorization of queries, and success ratings to assist in identifying effective dorks for streamlined assessments."
            techs={["NextJS", "Flask", "MongoDB"]}
            link="https://passitt.netlify.app/"
          />
          <MainProjectItem 
            img="/images/project4.png"
            title="Fintrack"
            desc="Lightweight mobile app for tracking expenses, allowing users to easily manage incomes, savings, and daily expenses while providing detailed reports across daily, weekly, monthly, and yearly timelines."
            techs={["React Native", "Node Js", "MongoDB"]}
            link="https://passitt.netlify.app/"
          />
        </div>
      </section>


      <section className="container mx-auto px-4 py-8">
        <h2 className="text-xl font-semibold mt-5 text-slate-400">Archived projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <ProjectItem
            img="/images/project1.png"
            title="Passit"
            desc="A secure, fast, and user-friendly password management application designed for storing, sharing, and managing passwords with flexibility."
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

      <div className="flex items-center justify-center space-x-3 bg-blue-700 w-48 p-2 text-white text-xs rounded-2xl shadow-md font-poppins dark:bg-transparent dark:border dark:border-gray-100">
        <Link
          className=""
          target="_blank"
          to="https://github.com/mikias21"
        >
          Checkout my Git
        </Link>
        <img src="/images/icons/git.png" alt="GIT" className="w-10 h-10 bg-white rounded-full"/>
      </div>
    </div>
  );
};

export default Projects;
