import React from "react";
import AOS from 'aos';
import { useNavigate } from "react-router-dom";

export default function Error() {
  let Navigate = useNavigate();
  const HandleClick = () => {
    Navigate("/");
  };
  return (
    <div>
      <h1 className="mt-[150px] text-center">
        This page is not found <br /> Error.404
      </h1>

      <div className="w-full">
        {" "}
        <button
          className="btn bg-indigo-500 text-center p-2 rounded-md text-white mx-auto block" data-aos="flip-up"
          onClick={HandleClick}
        >
          Back Home
        </button>
      </div>
    </div>
  );
}