import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper";
import { BoxArrowInUpRight } from "react-bootstrap-icons";
import { Link } from "react-scroll";
import { useThemeContext } from "../context/ThemeContext";

export default function SwiperList({ data }) {
   const { color } = useThemeContext();

   return (
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
         color={color}
      >
         {data.map((item, index) => {
            return (
               <SwiperSlide className="mb-14" key={index}>
                  <div className="swiper-slide flex justify-center items-center mb-14">
                     <div className="shadow-md w-3/4 lg:w-1/2 rounded-xl overflow-hidden bg-white dark:bg-slate-700">
                        <img
                           className="rounded-md shadow-[0_1px_2px_0_rgba(0,0,0,0.08)]"
                           src={`/img/${item.Image}`}
                           alt={item.title}
                        />
                        <div className="mt-5 px-6 pb-5">
                           <h1
                              className={`text-${color}-500 text-lg font-semibold md:text-xl`}
                           >
                              {item.title}
                           </h1>
                           <p className="mt-2 text-slate-500 text-sm md:text-base dark:text-slate-300">
                              {item.caption}
                           </p>
                           <h2 className="text-slate-600 mt-5 font-medium md:text-lg dark:text-slate-50">
                              Tools :
                           </h2>
                           <div className="flex gap-2 mt-3">
                              {item.tools.map((item, index) => {
                                 return (
                                    <img
                                       key={index}
                                       src={`/img/${item}`}
                                       className="w-6"
                                       alt={item}
                                    />
                                 );
                              })}
                           </div>
                           <div className="flex  mt-8 gap-3">
                              {item.link == "home" ? (
                                 <Link
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={50}
                                    duration={500}
                                    rel="noreferrer"
                                    className={`flex justify-center items-center gap-1 px-4 py-1 rounded-md  bg-${color}-500 text-slate-50 hover:bg-${color}-700`}
                                 >
                                    <BoxArrowInUpRight className="text-sm" />
                                    {"  "}
                                    Demo
                                 </Link>
                              ) : (
                                 <a
                                    href={item.link}
                                    className={`flex justify-center items-center gap-1 px-4 py-1 rounded-md  bg-${color}-500 text-slate-50 hover:bg-${color}-700`}
                                 >
                                    <BoxArrowInUpRight className="text-sm" />
                                    {"  "}
                                    Demo
                                 </a>
                              )}
                           </div>
                        </div>
                     </div>
                  </div>
               </SwiperSlide>
            );
         })}
      </Swiper>
   );
}
