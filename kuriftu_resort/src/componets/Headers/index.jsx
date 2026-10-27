import React from "react";
import logo from "../../assets/logo.jpeg";

function Headers() {
  return (
    <div className="w-full h-20 bg-gray-200 flex items-center justify-center fixed">
      <div className="w-1/4 h-full flex items-center justify-center gap-8 font-sans text-sm font-semibold text-gray-700">
        <button>
          <img src={logo} alt="Logo" className="h-14 w-14 rounded" />
        </button>
        <label htmlFor="" className="font-bold text-green-800 text-2xl">
          Kuriftu Resort & Spa
        </label>
      </div>
      <div className="w-1/2 h-full flex items-center justify-center gap-8 font-sans text-sm font-semibold text-gray-700">
        <button>Accomodations</button>
        <button>Spa</button>
        <button>Dining</button>
        <button>Water park</button>
        <button>Event</button>
      </div>
      <div></div>
    </div>
  );
}

export default Headers;
