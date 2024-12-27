import { Link } from "react-router-dom";
import { Typing } from "react-typing-animate";
import { LiaDownloadSolid } from "react-icons/lia";
import Avatar from "../Avatar";

const Hero = () => {
  return (
    <div className="p-7 border-b border-b-slate-50 md:p-14 lg:p-20 xl:mx-20 dark:border-b-slate-900">
      <div className="flex flex-col lg:flex-row items-center lg:space-x-32">
        <div className="lg:w-1/2">
          <div className="mt-16 flex items-center space-x-4 text-3xl font-poppins sm:text-5xl lg:text-7xl">
            <h1 className=" tracking-wide">Hi! I'm Mikias</h1>
            {/* <Typing text={["Mikias"]} speed={100} repeat={false} /> */}
          </div>
          <div className="font-poppins text-xs mt-2 sm:text-lg lg:text-3xl">
            <Typing
              text={["Fullstack Software Engineer"]}
              speed={100}
              repeat={false}
            />
          </div>
          <div className="font-poppins text-xs mt-7 sm:text-sm lg:text-base xl:w-12/12">
            <p>
              With 3.5+ years of experience as a Backend and Full Stack Developer, specializing in building
              scalable systems and applications. Highly motivated, quick learner, and a strong team player with leadership skills.
              Seeking a full-time position as a Software Engineer or Backend Developer to contribute to innovative projects.
            </p>
          </div>
          <div className="mt-8 font-poppins flex items-center bg-blue-700 w-48 text-white p-4 text-xs rounded-md shadow-md sm:text-sm justify-center gap-4">
            <Link
              className=""
              target="_blank"
              to="https://resume-mikias.netlify.app/"
            >
              Download CV
            </Link>
            <LiaDownloadSolid className="text-lg" />
          </div>
        </div>
        <div className="mt-8 lg:mt-0 lg:w-1/3">
          <Avatar />
        </div>
      </div>
    </div>
  );
};

export default Hero;
