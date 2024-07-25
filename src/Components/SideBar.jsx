import React from "react";

function SideBar({ isVisible, handleShowModel,data }) {
  return (
    <>
      <div
        className={`fixed transition-transform duration-1000 ease-in-out z-10 right-0 w-[320px] lg:w-[400px] xl:w-[500px] h-screen bg-slate-950 px-5 md:px-9 lg:px-14 text-white transform ${
          isVisible ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="no-scrollbar h-full py-20 w-full overflow-y-auto">
          <h2 className="text-3xl font-bold text-center">{data?.title}</h2>
          <div>
            <p className="text-xl pt-3 font-medium underline">description</p>
            <p className="text-md pt-3 leading-relaxed font-light overflow-y-auto">
              {data?.explanation}
            </p>
          </div>
        </div>
        <button
          onClick={handleShowModel}
          className={`group absolute bottom-10 hover:bg-gray-800 py-2 px-3.5 rounded-full bg-white ${
            isVisible ? "rotate-0" : "rotate-180"
          }`}
        >
          <i className="fa-solid fa-arrow-right text-xl font-semibold text-black group-hover:text-white"></i>
        </button>
      </div>
    </>
  );
}

export default SideBar;
