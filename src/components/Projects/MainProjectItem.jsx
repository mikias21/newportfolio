import { Link } from "react-router-dom";

const MainProjectItem = ({ img, title, desc, techs, link }) => {
  return (
    <div className="group">
      <div className="flex flex-col md:flex-row bg-white dark:bg-slate-800 rounded-xl shadow-lg overflow-hidden border border-slate-200 dark:border-slate-700 hover:shadow-xl transition-all duration-300">
        <div className="w-full md:w-1/2">
          <img 
            src={img} 
            alt={title}
            className="h-full w-full object-contain"
          />
        </div>
        
        {/* Content container */}
        <div className="flex flex-col justify-between w-full md:w-1/2 p-8">
          <div>
            <h3 className="text-xl md:text-2xl font-bold mb-4">{title}</h3>
            <p className="text-base md:text-lg text-slate-600 dark:text-slate-300 mb-6 leading-relaxed">
              {desc}
            </p>
            
            <div className="mb-8">
              <h4 className="text-lg font-semibold mb-3">Technologies Used:</h4>
              <ul className="grid grid-cols-2 gap-3">
                {techs.map((tech, index) => (
                  <li 
                    key={index} 
                    className="flex items-center text-sm md:text-base bg-slate-100 dark:bg-slate-700 rounded-full px-4 py-2"
                  >
                    <span className="w-2 h-2 bg-blue-500 rounded-full mr-2"></span>
                    {tech}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          <Link 
            to={link} 
            target="_blank"
            className="inline-flex items-center text-white font-semibold px-8 py-3 rounded-lg text-base md:text-lg transition-colors"
          >
            View Project
            <svg 
              className="ml-2 w-5 h-5" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MainProjectItem;