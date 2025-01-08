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
            desc="Attend Bsc. In computer science and technology. Eastern Lioaning University. China, Liaoning."
          />
          <AboutItem
            time="2021 - 2024"
            desc="Attend Msc. in software engineering reasearch direction software security and testing. Northwestern Polytechnical University. China, Xian. 
            Relevant Coursework: Machine Learning, Secure coding in C and C++, IoT and Embedded Systems"
          />
        </div>
        <div className="sm:flex items-center pr-2 md:justify-between">
          <AboutItem
            time="2019 - 2020"
            desc="Conceptualized and developed an e-student platform for international students, improving digital access to
admission documents, transcripts, and semester registration. Led a team of 6 developers to build the backend using PHP, MySQL, and jQuery, streamlining the student-
teacher interaction process. Enhanced platform efficiency, simplifying access to academic records and administrative tasks, significantly
improving student-teacher engagement."
          />
          <AboutItem
            time="2021 - Present"
            desc="Led development of a project tracking tool, improving efficiency by 75% by reducing communication time from 3-4 days to 1-3 hour per project. Used FastAPI, ReactJs, MongoDB. Developed an interoperability testing product that automated VISA specification validation, reducing manual
validation from 3-6 days to just 30 minutes, improving delivery time by 90%. FastAPI and ElectronJS. Reduced storage costs and server load by 40% through Docker containerization, consolidating services and
eliminating the need for multiple VMs."
          />
        </div>
      </div>
    </div>
  );
};

export default About;
