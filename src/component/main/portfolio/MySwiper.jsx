import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { BoxArrowInUpRight } from "react-bootstrap-icons";

export default function MySwiper() {
   return (
      <>
         <Swiper
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            loopFillGroupWithBlank={true}
            pagination={{
               clickable: true,
            }}
            navigation={true}
            modules={[Pagination, Navigation]}
            className="mySwiper"
         >
            <SwiperSlide>
               {" "}
               <div className="swiper-slide flex justify-center items-center mb-14">
                  <div className="shadow-md w-3/4 lg:w-1/2 rounded-xl overflow-hidden dark:bg-slate-700">
                     <img
                        className="rounded-md shadow-[0_1px_2px_0_rgba(0,0,0,0.08)]"
                        src="/img/demo3.png"
                        alt=""
                     />
                     <div className="mt-5 px-6 pb-5">
                        <h1 className="text-slate-700 text-lg font-semibold md:text-xl dark:text-indigo-500">
                           Muhammad Asrul Portfolio
                        </h1>
                        <p className="mt-2 text-slate-500 text-sm md:text-base dark:text-slate-300">
                           This is my first Portfolio website, using TailwindCSS
                           as the CSS Framework and using some additional
                           libraries such as Swiper JS and ScrollReveal JS
                        </p>
                        <h2 className="text-slate-600 mt-5 font-medium md:text-lg dark:text-slate-50">
                           Tools :
                        </h2>
                        <div className="flex gap-2 mt-3">
                           <img src="/img/react.svg" className="w-6" alt="" />
                           <img src="/img/vite.svg" className="w-6" alt="" />
                           <img
                              src="/img/tailwindcss.png"
                              className="w-6"
                              alt=""
                           />
                        </div>
                        <div className="flex  mt-8 gap-3">
                           <a
                              href="#home"
                              rel="noreferrer"
                              className="flex justify-center items-center gap-1 px-4 py-1 rounded-md  bg-indigo-500 text-slate-50 hover:bg-indigo-700"
                           >
                              <BoxArrowInUpRight className="text-sm" />
                              {"  "}
                              Demo
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               {" "}
               <div className="swiper-slide flex justify-center items-center mb-14">
                  <div className="shadow-md w-3/4 lg:w-1/2 rounded-xl overflow-hidden dark:bg-slate-700">
                     <img
                        className="rounded-md shadow-[0_1px_2px_0_rgba(0,0,0,0.08)]"
                        src="/img/demo1.png"
                        alt=""
                     />
                     <div className="mt-5 px-6 pb-5">
                        <h1 className="text-slate-700 text-lg font-semibold md:text-xl dark:text-indigo-500">
                           Sabreena Construction
                        </h1>
                        <p className="mt-2 text-slate-500 text-sm md:text-base dark:text-slate-300">
                           Sabreena Construction is a web profile of a
                           construction company, there are darkmode and
                           scrollreveal features using Javascript and Also
                           Responsive to all devices
                        </p>
                        <h2 className="text-slate-600 mt-5 font-medium md:text-lg dark:text-slate-50">
                           Tools :
                        </h2>
                        <div className="flex gap-2 mt-3">
                           <img src="/img/html.png" className="w-6" alt="" />
                           <img src="/img/sass.png" className="w-6" alt="" />
                           <img src="/img/js.png" className="w-6" alt="" />
                        </div>
                        <div className="flex  mt-8 gap-3">
                           <a
                              href="https://lviathannn.github.io/Sabreena-Construction/"
                              rel="noreferrer"
                              className=" px-4 py-1 rounded-md  bg-indigo-500 text-slat flex justify-center items-center gap-1 text-slate-50 hover:bg-indigo-700"
                              target="_blank"
                           >
                              <BoxArrowInUpRight className="text-sm" />
                              {"  "}
                              Demo
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
            <SwiperSlide>
               {" "}
               <div className="swiper-slide flex justify-center items-center mb-14">
                  <div className="shadow-md w-3/4 lg:w-1/2 rounded-xl overflow-hidden dark:bg-slate-700">
                     <img
                        className="rounded-md shadow-[0_1px_2px_0_rgba(0,0,0,0.1)] "
                        src="/img/demo2.png"
                        alt=""
                     />
                     <div className="mt-5 px-6 pb-5">
                        <h1 className="text-slate-700 text-lg font-semibold md:text-xl dark:text-indigo-500">
                           Oishi UI Design
                        </h1>
                        <p className="mt-2 text-slate-500 text-sm md:text-base dark:text-slate-300">
                           Oishi is an App for ordering food online made using
                           Figma, this design is a final project for semester 2
                           at my campus
                        </p>
                        <h2 className="text-slate-600 mt-5 font-medium md:text-lg dark:text-slate-50">
                           Tools :
                        </h2>
                        <div className="flex gap-2 mt-3">
                           <img src="/img/figma.png" className="w-6" alt="" />
                        </div>
                        <div className="flex  mt-8 gap-3">
                           <a
                              href="https://www.figma.com/file/JRhYzEEZE6kaZ1pMOiFNiA/Tugas-IMK?node-id=0%3A1"
                              rel="noreferrer"
                              className=" px-4 py-1 rounded-md  bg-indigo-500 text-slate-50 hover:bg-indigo-7 flex justify-center items-center gap-100"
                              target="_blank"
                           >
                              <BoxArrowInUpRight className="text-sm" />
                              Demo
                           </a>
                        </div>
                     </div>
                  </div>
               </div>
            </SwiperSlide>
         </Swiper>
      </>
   );
}
