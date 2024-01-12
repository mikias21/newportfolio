import AboutItem from "./AboutItem";

const About = () => {
  return (
    <div
      className="p-7 border-b border-b-slate-50 md:p-14 lg:p-20 xl:mx-20 dark:border-b-slate-900"
      id="about"
    >
      <p className="text-lg font-poppins w-full mb-5">About</p>
      <div>
        <div className="sm:flex items-center pr-2 md:justify-between">
          <AboutItem
            time="2017 - 2021"
            desc="Attend Bsc. In computer science and technology. Eastern Lioaning University. China, Liaoning"
          />
          <AboutItem
            time="2021 - 2024"
            desc="Attend Msc. in software engineering reasearch direction software security and testing. Northwestern Polytechnical University. China, Xian"
          />
        </div>
        <div className="sm:flex items-center pr-2 md:justify-between">
          <AboutItem
            time="2019 - 2020"
            desc="Backend developer at eastern liaoning university. China Liaoning. Created a system where students can create account , get the scores, access semester transcript, contact their professor. "
          />
          <AboutItem
            time="2023"
            desc="Internship as software developer and cyber security engineer. Internal Tool automation with python, IT Infrastructure Management, Software product development, Penetration Testing, IOT Security Evaluation and UAS Security Evaluation"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
