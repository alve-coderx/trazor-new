import React from "react";

const Copy = () => {
  return (
    <div className="bg-[#1f1f1f] text-[#afafaf] text-[14px] text-center font-medium py-3 leading-6 custom-font">
      <div className="mx-auto md:max-w-[75%] max-w-[95%] flex justify-between items-center">
        <div>
          Copyright belongs to Trezor company s.r.o. All rights reserved.
        </div>
        <div className="md:flex hidden items-center">
          Cookies{" "}
          <svg
            className="text-[#545454] w-[14px] h-[14px] ml-1"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              d="M1.75 10h16.5M10 1.75v16.5"
              stroke="currentColor"
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Copy;
