import SkillIndicator from "./SkillIndicator";

const Skills = () => {
  return (
    <div
      className="p-7 font-poppins border-b border-b-slate-50 md:p-14 lg:p-20 xl:mx-20 dark:border-b-slate-900"
      id="skills"
    >
      <p className="text-lg font-poppins w-full mb-5">Skills</p>
      {/* Skill indicator */}
      <div className="sm:flex items-center">
        <SkillIndicator title="Python" stat={90} />
        <SkillIndicator title="Javascript" stat={80} />
      </div>
      <div className="sm:flex items-center">
        <SkillIndicator title="NodeJS" stat={80} />
        <SkillIndicator title="PHP" stat={90} />
      </div>
      <div className="sm:flex items-center">
        <SkillIndicator title="Java" stat={70} />
        <SkillIndicator title="C++" stat={60} />
      </div>
      <div className="sm:flex items-center">
        <SkillIndicator title="DevOps" stat={70} />
        <SkillIndicator title="Pentesting" stat={75} />
      </div>
      <div className="sm:flex items-center">
        <SkillIndicator title="MySQL" stat={90} />
        <SkillIndicator title="Postgresql" stat={80} />
      </div>
      <div className="sm:flex items-center">
        <SkillIndicator title="React" stat={90} />
        <SkillIndicator title="Vue" stat={60} />
      </div>
      <div className="sm:flex items-center">
        <SkillIndicator title="MongoDB" stat={90} />
        <SkillIndicator title="SQLite" stat={95} />
      </div>

      <div className="mt-7">
        <p className="text-md">Additional</p>
        <div className="flex items-center gap-7 mt-2 text-xs">
          <p className="text-white bg-slate-700 p-1 rounded-lg w-20"># AWS</p>
          <p className="text-white bg-slate-700 p-1 rounded-lg w-20">
            # Docker
          </p>
        </div>
        <div className="flex items-center gap-7 mt-2 text-xs">
          <p className="text-white bg-slate-700 p-1 rounded-lg w-32">
            # Web Pentesting
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
          <p className="text-white bg-slate-700 p-1 rounded-lg w-96">
            # Redux, Context, Next JS, Tailwind, fastapi, flask, React Native
          </p>
        </div>
      </div>
    </div>
  );
};

export default Skills;
