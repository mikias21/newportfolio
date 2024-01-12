import { IoSendSharp } from "react-icons/io5";

const Contact = () => {
  return (
    <div className="p-7 font-poppins md:p-14 lg:p-20 xl:mx-20" id="contact">
      <form className=" mt-12 lg:w-6/12 mx-auto dark:border dark:p-7 dark:bg-[#111] dark:border-slate-900 dark:text-white dark:border-none">
        <p className="text-lg font-poppins w-full mb-5">Let's connect</p>
        <div className="text-xs flex flex-col">
          <label htmlFor="name" className="mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="border-b border-b-slate-300 outline-none dark:border-none dark:bg-[#191919] dark:p-4"
          />
        </div>
        <div className="text-xs flex flex-col mt-3">
          <label htmlFor="email" className="mb-2 font-semibold">
            Email
          </label>
          <input
            type="email"
            id="email"
            placeholder="johndoe@email.com"
            className="border-b border-b-slate-300 outline-none  dark:border-none dark:bg-[#191919] dark:p-4"
          />
        </div>
        <div className="text-xs flex flex-col mt-3">
          <label htmlFor="message" className="mb-2 font-semibold">
            Message
          </label>
          <textarea
            name="description"
            id="message"
            cols="30"
            rows="5"
            placeholder="Say Hi"
            className="w-full border p-2 mt-2 rounded-sm border-slate-300 text-xs outline-none resize-none dark:border-none dark:bg-[#191919] dark:p-4"
          ></textarea>
        </div>
        <div className="mt-3">
          <button className="bg-blue-700 w-40 text-white p-3 rounded-3xl shadow-md flex items-center justify-center gap-4 text-sm">
            <p>Shoot</p>
            <IoSendSharp />
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
