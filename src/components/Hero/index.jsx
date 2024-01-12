import { Typing } from "react-typing-animate";

const Hero = () => {
  return (
    <div className="p-7 border-b border-b-slate-50 md:p-14 lg:p-20 xl:mx-20 dark:border-b-slate-900">
      <div className="mt-16 flex items-center space-x-4 text-3xl font-poppins sm:text-5xl lg:text-7xl">
        <h1>Hi! I'm</h1>
        <Typing text={["Mikias"]} speed={100} repeat={false} />
      </div>
      <div className="font-poppins text-xs mt-2 sm:text-lg lg:text-3xl">
        {/* <h4>Fullstack developer and Cybersecurity Engineer</h4> */}
        <Typing
          text={["Fullstack developer and Cybersecurity Engineer"]}
          speed={100}
          repeat={false}
        />
      </div>
      <div className="font-poppins text-xs mt-7 sm:text-sm lg:text-base xl:w-8/12">
        <p>
          Fusing full-stack development prowess with cybersecurity expertise, I
          specialize in crafting secure and innovative solutions. Elevating
          projects with resilience, I navigate the dynamic tech landscape to
          deliver streamlined and secure outcomes.
        </p>
      </div>
      <div className="mt-8 font-poppins">
        <button className="bg-blue-700 w-40 text-white p-3 text-xs rounded-2xl shadow-md sm:text-sm">
          Download CV
        </button>
      </div>
    </div>
  );
};

export default Hero;
