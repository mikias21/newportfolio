import { Link } from "react-router-dom";

const ProjectItem = ({ img, title, desc, techs, link }) => {
  return (
    <div className="mt-5">
      <div className="p-5 border border-slate-100 rounded-md text-xs font-poppins shadow-lg dark:border-slate-900">
        <div>
          <img src={img} alt="PROJECT" />
        </div>
        <div className="mt-2">
          <p className="text-xs font-semibold sm:text-sm">{title}</p>
          <p className="mt-2">{desc}</p>
        </div>
        <div className="mt-2">
          <ul className="list-disc ml-4 list-item">
            {techs.map((tech, index) => (
              <li key={index}>{tech}</li>
            ))}
          </ul>
        </div>
        <div className="text-white mt-2 bg-blue-700 w-20 text-center rounded-full">
          <Link to={link} target="_blank">
            View
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
