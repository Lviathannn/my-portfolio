import Header from "./header/Header";
import Footer from "./footer/Footer";
import Main from "./main/Main";
import { React, useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";

export default function App() {
   const [loading, setLoading] = useState(true);
   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 5000);
   }, []);

   return loading ? (
      <div className="h-screen bg-white dark:bg-slate-800 flex justify-center items-center">
         <HashLoader
            loading={loading}
            size={50}
            color="#6366f1"
            aria-label="Loading Spinner"
         />
      </div>
   ) : (
      <>
         <Header />
         <Main />
         <Footer />
      </>
   );
}
