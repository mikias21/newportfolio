import { SlCalender } from "react-icons/sl";

const AboutItem = ({ time, desc }) => {
  return (
    <div className="mb-4 xl:w-2/5">
      <div className="flex items-center gap-2">
        <p className="text-sm font-semibold font-poppins">{time}</p>
        <SlCalender />
      </div>
      <p className="text-xs font-poppins mt-1">{desc}</p>
    </div>
  );
};

export default AboutItem;
