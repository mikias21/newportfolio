const SkillIndicator = ({ title, stat }) => {
  return (
    <div className="mt-5 sm:w-full pr-2 xl:mx-8">
      <p className="text-xs">{title}</p>
      <div className="mt-2 w-full bg-slate-300 h-1 rounded-xl overflow-hidden">
        <div className="h-full bg-blue-700" style={{ width: `${stat}%` }}></div>
      </div>
    </div>
  );
};

export default SkillIndicator;
