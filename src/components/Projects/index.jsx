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
          desc="Project for detecting Cross-site scripting attacks using deep learning and computer vision."
          techs={["React js", "Fastapi", "Tensorflow, Numpy, matplotlib"]}
          link="https://xssvis.netlify.app/"
        />
      </div>
      <div className="w-full sm:w-1/2 sm:pr-2 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-5 md:pr-3">
        <ProjectItem
          img="/images/project2.png"
          title="Here is title"
          desc="This will be the description about the project and some"
          techs={["React js", "Node", "Redux"]}
          link="/"
        />
      </div>
      <div className="w-full sm:w-1/2 sm:pr-2 md:w-1/2 lg:w-1/2 xl:w-1/4 mb-5 md:pr-3">
        <ProjectItem
          img="/images/project2.png"
          title="Here is title"
          desc="This will be the description about the project and some"
          techs={["React js", "Node", "Redux"]}
          link="/"
        />
      </div>
      <div>
        <button className="bg-blue-700 w-32 p-1 text-white text-xs rounded-2xl shadow-md sm:text-sm">
          More projects
        </button>
      </div>
    </div>
  );
};

export default Projects;
