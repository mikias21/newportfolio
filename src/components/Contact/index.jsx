import { useState } from "react";
import ClipLoader from "react-spinners/ClipLoader";

import { IoSendSharp } from "react-icons/io5";

// Services
import send_email from "../../services/emailSender";

const Contact = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    send_email(name, email, message)
      .then((res) => {
        console.log(res);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  };

  return (
    <div className="p-7 font-poppins md:p-14 lg:p-20 xl:mx-20" id="contact">
      <form
        className="border border-slate-200 p-7 mt-12 lg:w-6/12 mx-auto dark:border dark:p-7 dark:bg-[#111] dark:border-slate-900 dark:text-white dark:border-none"
        onSubmit={(e) => handleSubmit(e)}
      >
        <p className="text-lg font-poppins w-full mb-5">Let's connect</p>
        <div className="text-xs flex flex-col">
          <label htmlFor="name" className="mb-2 font-semibold">
            Name
          </label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="border border-slate-200 p-4 rounded-sm outline-none dark:border-none dark:bg-[#191919] dark:p-4"
            required
            onChange={(e) => setName(e.target.value)}
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
            className="border border-slate-200 p-4 rounded-sm outline-none  dark:border-none dark:bg-[#191919] dark:p-4"
            required
            onChange={(e) => setEmail(e.target.value)}
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
            className="w-full border border-slate-200 p-4 rounded-sm text-xs outline-none resize-none dark:border-none dark:bg-[#191919] dark:p-4"
            required
            onChange={(e) => setMessage(e.target.value)}
          ></textarea>
        </div>
        <div className="mt-3">
          <button className="bg-blue-700 w-40 text-white p-3 rounded-3xl shadow-md flex items-center justify-center gap-4 text-sm">
            {isLoading ? (
              <ClipLoader
                color="#fff"
                loading={isLoading}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            ) : (
              <>
                <p>Shoot</p>
                <IoSendSharp />
              </>
            )}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Contact;
