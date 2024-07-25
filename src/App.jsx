import React, { useState, useEffect } from "react";
import "./App.css";
import Main from "./Components/Main";
import Footer from "./Components/Footer";
import SideBar from "./Components/SideBar";
import Mars from "./assets/mars.png";
import Loading from "./assets/loading.svg";

function App() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleShowModel = () => {
    setShowModal((prev) => !prev);
  };
  useEffect(() => {
    setLoading(true);
    async function fetchApiData() {
      const NASA_KEY = import.meta.env.VITE_NASA_API_KEY;
      const url = `https://api.nasa.gov/planetary/apod?api_key=${NASA_KEY}`;
      try {
        const response = await fetch(url);
        const apiData = await response.json();
        setLoading(false);
        setData(apiData);
      } catch (error) {
        console.log(error.message);
      }
    }
    fetchApiData();
  }, []);

  return (
    <>
      <div className="w-full min-h-screen flex overflow-hidden">
        {!loading ? (
          <>
            <Main data={data} />
            <SideBar
              data={data}
              isVisible={showModal}
              handleShowModel={handleShowModel}
            />
            <Footer data={data} handleShowModel={handleShowModel} />
          </>
        ) : (
          <>
            <img
              className="w-full h-screen object-cover flex-1"
              src={Mars}
              alt="Mars"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50">
              <img className="h-28 w-28" src={Loading} alt="loading" />
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default App;
