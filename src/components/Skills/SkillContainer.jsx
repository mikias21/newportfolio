const SkillContainer = ({image, caption}) => {
    return(
        <div className="border border-1 border-slate-300 w-56 p-4 flex flex-col items-center hover:border-blue-500 rounded-md transition-all">
            <img src={image} alt="python" className="w-10 h-10 mb-2"/>
            <p><small>{caption}</small></p>
        </div>
    );
}

export default SkillContainer;