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
      }, 3000);
   }, []);

   return loading ? (
      <div className="flex h-screen items-center justify-center bg-slate-800">
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
