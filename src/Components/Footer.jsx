import React from 'react'

function Footer({ handleShowModel, data }) {
  return (
    <>
      <footer className="fixed left-0 bottom-0 w-full px-5 md:px-16 py-9 flex items-center justify-between bg-gradient-to-b from-transparent to-gray-900">
        <div className="leading-loose">
          <h1 className="lg:text-6xl text-3xl font-bold text-white opacity-60">
            APOD PROJECT
          </h1>
          <h2 className="lg:text-3xl text-xl font-semibold text-white">
            {data?.title}
          </h2>
          <h1 className="lg:text-3xl text-xl font-semibold text-white">
            {data?.date}
          </h1>
        </div>
        <button onClick={handleShowModel}>
          <i className="fa-solid fa-circle-info text-white text-xl md:text-3xl hover:opacity-40"></i>
        </button>
      </footer>
    </>
  );
}

export default Footer
