import React from "react";
import { GeoAlt, Envelope, Telephone, Send } from "react-bootstrap-icons";
import { useThemeContext } from "../context/ThemeContext";

export default function Contact() {
   const { color } = useThemeContext;
   return (
      <section className=" mt-20 mb-20 relative" id="contact">
         <h1 className="contact__caption font-bold md:text-4xl text-2xl text-center">
            Contact{" "}
            <span
               className={
                  color == "indigo"
                     ? "text-indigo-500"
                     : color == "blue"
                     ? "text-blue-500"
                     : color == "red"
                     ? "text-red-500"
                     : color == "cyan"
                     ? "text-cyan-500"
                     : color == "green"
                     ? "text-green-500"
                     : "text-rose-500"
               }
            >
               Me
            </span>
         </h1>
         <div className="flex justify-center lg:flex-row gap-3 lg:gap-10 items-center flex-col mt-10">
            <div className=" contact__info flex flex-col justify-center items-center p-10 py-10 rounded-xl shadow-md w-11/12 sm:w-2/3 lg:w-2/6 lg:px-0 lg:py-10 overflow-hidden dark:bg-slate-700 bg-white">
               <div className="flex flex-col gap-5 justify-center">
                  <div className="flex gap-4">
                     <Telephone
                        className={`md:text-4xl text-2xl text-${color}-500`}
                     ></Telephone>
                     <div className="flex flex-col">
                        <h1 className="md:text-lg font-medium text-slate-600 dark:text-slate-50 ">
                           Call Me
                        </h1>
                        <p className="text-slate-500 text-sm md:text-base dark:text-slate-400">
                           +62-858-6525-7441
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <Envelope
                        className={`md:text-4xl text-2xl text-${color}-500`}
                     ></Envelope>
                     <div className="flex flex-col">
                        <h1 className="md:text-lg font-medium text-slate-600 dark:text-slate-50">
                           Email
                        </h1>
                        <p className="text-slate-500 text-sm md:text-base dark:text-slate-400">
                           muhammad.asrul.rifa@gmail.com
                        </p>
                     </div>
                  </div>
                  <div className="flex gap-4">
                     <GeoAlt
                        className={`md:text-4xl text-2xl text-${color}-500`}
                     ></GeoAlt>
                     <div className="flex flex-col">
                        <h1 className="md:text-lg font-medium text-slate-600 dark:text-slate-50">
                           Location
                        </h1>
                        <p className="text-slate-500 text-sm md:text-base dark:text-slate-400">
                           Ciamis - Jawabarat - Indonesia
                        </p>
                     </div>
                  </div>
               </div>
            </div>

            <form
               action="https://formspree.io/f/xoqbjzeo"
               method="POST"
               className="contact__form flex flex-col md:mt-5 justify-center items-center p-7 py-10 rounded-xl shadow-md mt-10 w-3/4 lg:w-1/3 gap-3 dark:bg-slate-700 bg-white"
            >
               <div className="w-full">
                  <label className="text-slate-500 dark:text-slate-200 md:text-lg">
                     Your Name :
                  </label>
                  <input
                     type="text"
                     id="name"
                     name="name"
                     placeholder="Name"
                     className={`mt-2 block w-full px-2 py-1 rounded-md focus:ring-2 focus:ring-${color}-500 focus:outline-none text-sm md:text-base bg-slate-100 dark:bg-slate-500`}
                     required
                  />
               </div>
               <div className="w-full">
                  <label className="text-slate-500 dark:text-slate-200 md:text-lg">
                     Your Email :
                  </label>
                  <input
                     type="email"
                     id="email"
                     name="email"
                     placeholder="email"
                     className={`mt-2 block w-full px-2 py-1 rounded-md focus:ring-2 focus:ring-${color}-500 focus:outline-none text-sm md:text-base bg-slate-100 dark:bg-slate-500`}
                     required
                  />
               </div>
               <div className="w-full">
                  <label className=" text-slate-500 dark:text-slate-200 md:text-lg">
                     Message :
                  </label>
                  <textarea
                     id="message"
                     name="message"
                     rows="4"
                     className={`bg-slate-100 dark:bg-slate-500 mt-2 block w-full px-2 py-1 rounded-md focus:ring-2 focus:ring-${color}-500 focus:outline-none text-sm md:text-base resize-none`}
                     placeholder="Your message..."
                     required
                  ></textarea>
               </div>
               <button
                  type="submit"
                  className={`px-3 py-1 bg-${color}-500 text-slate-50 rounded-md self-start mt-5 flex justify-center items-center gap-1`}
               >
                  <p>Send</p> <Send className=" ml-1"></Send>
               </button>
            </form>
         </div>
      </section>
   );
}
