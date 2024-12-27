import SkillIndicator from "./SkillIndicator";
import SkillContainer from "./SkillContainer";

const Skills = () => {
  return (
    <div
      className="p-7 font-poppins border-b border-b-slate-50 md:p-14 lg:p-20 xl:mx-20 dark:border-b-slate-900"
      id="skills"
    >
      <p className="text-lg font-poppins w-full mb-5">Skills</p>
      {/* Skill indicator */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
        <SkillContainer image={"/images/icons/python.png"} caption={"Python"}/>
        <SkillContainer image={"/images/icons/programing.png"} caption={"NodeJs"}/>
        <SkillContainer image={"/images/icons/Java.png"} caption={"Java"}/>
        <SkillContainer image={"/images/icons/mysql.png"} caption={"MySQL"}/>
        <SkillContainer image={"/images/icons/physics.png"} caption={"ReactJs"}/>
        <SkillContainer image={"/images/icons/mongo.svg"} caption={"MongoDB"}/>
        <SkillContainer image={"/images/icons/js.png"} caption={"Javascript"}/>
        <SkillContainer image={"/images/icons/web.png"} caption={"PHP"}/>
        <SkillContainer image={"/images/icons/c-.png"} caption={"C++"}/>
        <SkillContainer image={"/images/icons/database.png"} caption={"Postgresql"}/>
        <SkillContainer image={"/images/icons/document.png"} caption={"VueJs"}/>
        <SkillContainer image={"/images/icons/docker.png"} caption={"Docker"}/>
        <SkillContainer image={"/images/icons/aws.png"} caption={"AWS Cloud"}/>
      </div>

      <div className="mt-7">
        <p className="text-md">Additional</p>
        <div className="flex items-center gap-7 mt-2 text-xs">
          <p className="text-white bg-slate-700 p-1 rounded-lg w-40">
            # Redux
          </p>
          <p className="text-white bg-slate-700 p-1 rounded-lg w-40">
            # Context API
          </p>
          <p className="text-white bg-slate-700 p-1 rounded-lg w-40">
            # Next JS
          </p>
          <p className="text-white bg-slate-700 p-1 rounded-lg w-40">
            # Tailwind
          </p>
          <p className="text-white bg-slate-700 p-1 rounded-lg w-40">
            # fastapi
          </p>
          <p className="text-white bg-slate-700 p-1 rounded-lg w-40">
            # flask
          </p>
          <p className="text-white bg-slate-700 p-1 rounded-lg w-40">
            # React Native
          </p>
        </div>
        <div className="flex items-center gap-7 mt-2 text-xs">
          <p className="text-white bg-slate-700 p-1 rounded-lg w-32">
            # Web security 
          </p>
          <p className="text-white bg-slate-700 p-1 rounded-lg w-32">
            # Cloud Pentesting
          </p>
        </div>
        <div className="flex items-center gap-7 mt-2 text-xs">
          <p className="text-white bg-slate-700 p-1 rounded-lg w-40">
            # Machine Learning
          </p>
          <p className="text-white bg-slate-700 p-1 rounded-lg w-52">
            # IT Infrastrcture Managment
          </p>
        </div>
        <div className="flex items-center gap-7 mt-2 text-xs">
          <p className="text-white bg-slate-700 p-1 rounded-lg w-32">
            # Active Directory
          </p>
          <p className="text-white bg-slate-700 p-1 rounded-lg w-56">
            # Linux Server Management
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
