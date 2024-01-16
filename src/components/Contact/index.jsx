import { useState, useRef } from "react";
import ClipLoader from "react-spinners/ClipLoader";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { IoSendSharp } from "react-icons/io5";

const Contact = () => {
  const [isLoading, setIsLoading] = useState(false);
  const form = useRef();
  const notify = () =>
    toast("Email has been sent, thank you for reaching out!");

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .sendForm(
        "service_gexajaa",
        "template_9acgymg",
        form.current,
        "xurftwLJMFCeleXrZ"
      )
      .then(
        (result) => {
          if (result.text === "OK") {
            setIsLoading(false);
            notify();
          }
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div className="p-7 font-poppins md:p-14 lg:p-20 xl:mx-20" id="contact">
      <form
        className="border border-slate-200 p-7 mt-12 lg:w-6/12 mx-auto dark:border dark:p-7 dark:bg-[#111] dark:border-slate-900 dark:text-white dark:border-none"
        onSubmit={(e) => handleSubmit(e)}
        ref={form}
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
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />
      </form>
    </div>
  );
};

export default Contact;
