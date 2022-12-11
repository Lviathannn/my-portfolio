import { React, useEffect, useState } from "react";
import HashLoader from "react-spinners/HashLoader";
import Header from "./pages/Header";
import Main from "./pages/Main";
import Footer from "./pages/Footer";

export default function App() {
   const [loading, setLoading] = useState(true);

   useEffect(() => {
      setTimeout(() => {
         setLoading(false);
      }, 5000);
   }, []);

   return loading ? (
      <div className="h-screen bg-slate-50 dark:bg-slate-800 flex justify-center items-center">
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
