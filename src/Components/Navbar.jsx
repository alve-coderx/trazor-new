import React from "react";

const Navbar = () => {
  return (
    <header className="fixed  w-full mt-4">
      <div className="mx-auto md:max-w-[75%] rounded-full drop-shadow-md max-w-[95%]">
        <div className="flex justify-between items-center bg-white rounded-full px-[32px] py-[20px] header-shadow">
          <div>
            <svg
              fill="none"
              className="h-[30px] w-auto"
              viewBox="0 0 161.768 40.771"
            >
              <path
                fill="currentColor"
                d="M24.306 9.461C24.306 4.29 19.761 0 14.228 0 8.694 0 4.148 4.292 4.148 9.46v3.025H0v21.75l14.225 6.536 14.233-6.534V12.581H24.31l-.003-3.121Zm-15.02 0c0-2.438 2.175-4.389 4.942-4.389 2.767 0 4.94 1.951 4.94 4.389v3.024H9.287V9.461Zm13.44 21.264-8.502 3.904-8.499-3.901V17.655h17v13.07z"
              ></path>
            </svg>
          </div>
          <div className="md:flex hidden">
            <div className="flex items-center mr-10">
              <a
                href="/suite.php"
                className="text-[16px] text-[#545454] custom-font font-medium"
              >
                Trezor
              </a>{" "}
              <svg
                viewBox="0 0 16 16"
                className="h-[14px] w-[14px] text-[#545454] mt-1 ml-2 opacity-30"
              >
                <path
                  d="m12.667 5.333-5 5-5-5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="transparent"
                ></path>
              </svg>
            </div>
            <div className="flex items-center mr-10">
              <a
                href="/suite.php"
                className="text-[16px] text-[#545454] custom-font font-medium"
              >
                App
              </a>
            </div>
            <div className="flex items-center mr-10">
              <a
                href="/suite.php"
                className="text-[16px] text-[#545454] custom-font font-medium"
              >
                Coins
              </a>
            </div>
            <div className="flex items-center">
              <a
                href="/suite.php"
                className="text-[16px] text-[#545454] custom-font font-medium"
              >
                Learn
              </a>{" "}
              <svg
                viewBox="0 0 16 16"
                className="h-[14px] w-[14px] text-[#545454] mt-1 ml-2 opacity-30"
              >
                <path
                  d="m12.667 5.333-5 5-5-5"
                  stroke="currentColor"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  fill="transparent"
                ></path>
              </svg>
            </div>
          </div>
          <div className="flex items-center">
            <a
              href="/suite.php"
              className="text-[16px] text-[#545454] custom-font font-medium md:mr-[12px] md:block hidden"
            >
              Cart
            </a>
            <div className="rounded-full justify-center items-center text-[12px] flex bg-[#c4c4c433] text-[#141414cc] w-[24px] h-[24px] custom-font font-medium">
              0
            </div>
            <svg
              viewBox="0 0 32 32"
              className="w-[28px] h-[28px] text-[#757575] md:hidden ml-[12px]"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 12h20"
              ></path>
              <path
                className="bottom-path"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M7 20h20"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
