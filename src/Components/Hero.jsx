import React from "react";
import hero from "../assets/hero.png";

const Hero = () => {
  return (
    <section>
      <div className="mx-auto md:max-w-[75%] max-w-[95%] md:px-16 md:mt-40">
        <div className="md:flex md:flex-row items-center">
          <div className="md:basis-2/4">
            <div>
              <h1 className="md:text-[80px] text-[44px] custom-font font-medium leading-[53px] md:leading-[88px] mt-[40px] md:mt-0">
                <span className="text-[#00854d]">The safe place</span>
                for your coins
              </h1>
              <p className="text-[22px] text-[#545454] md:leading-[133%] mt-[32px] font-medium custom-font md:pr-16">
                Trezor hardware wallets are the ultimate in Bitcoin and
                cryptocurrency security. Connect your wallet with the Trezor
                Suite app and easily manage your assets in a secure crypto
                ecosystem.
              </p>
              <div className="flex items-center mt-8">
                <div>
                  <a
                    href="/suite.php"
                    className="items-center inline-flex align-middle custom-font px-[24px] min-h-[64px] leading-[22px] text-white bg-[#0f6148] font-bold text-[16px] rounded-full outline-none hover:bg-[#083527] transition-colors	duration-300"
                  >
                    Get your Trezor
                  </a>
                </div>
                <div className="grid">
                  <div className="flex bg-[#f4f0e5] pl-[2px] pr-[10px] rounded-full items-center ml-8 w-min">
                    <div className="bg-white rounded-full">
                      <svg
                        className="w-[14px] h-[14px] align-center text-[#afafaf]"
                        viewBox="0 0 16 18"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M13.914 14.17c-6.71 3.193-10.873.521-13.539-1.101-.165-.103-.445.023-.202.303.888 1.077 3.799 3.672 7.597 3.672 3.802 0 6.063-2.074 6.346-2.436.28-.359.082-.557-.202-.438Zm1.885-1.04c-.18-.236-1.096-.28-1.672-.209-.577.07-1.443.422-1.368.634.039.079.118.043.514.008.398-.04 1.511-.18 1.743.123.233.305-.355 1.76-.463 1.995-.103.234.04.295.235.139.192-.157.54-.561.774-1.134.232-.575.374-1.378.237-1.557Z"
                          fill="#9B9B9B"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.403 7.655c0 .838.021 1.537-.402 2.28-.342.606-.883.978-1.488.978-.826 0-1.307-.63-1.307-1.558 0-1.833 1.642-2.166 3.197-2.166v.466Zm2.169 5.242a.449.449 0 0 1-.508.051c-.714-.592-.841-.867-1.234-1.433-1.18 1.204-2.015 1.564-3.545 1.564-1.809 0-3.219-1.117-3.219-3.352 0-1.745.947-2.934 2.293-3.515 1.168-.514 2.798-.605 4.044-.747v-.278c0-.511.04-1.116-.26-1.558-.263-.396-.765-.56-1.207-.56-.82 0-1.551.421-1.73 1.292-.036.194-.178.384-.372.394L3.747 4.53c-.175-.04-.369-.182-.32-.451C3.906 1.551 6.19.79 8.235.79c1.046 0 2.413.277 3.24 1.07 1.046.977.946 2.28.946 3.7v3.35c0 1.008.417 1.45.81 1.994.14.193.17.426-.006.572a90.859 90.859 0 0 0-1.648 1.427l-.006-.006"
                          fill="#9B9B9B"
                        ></path>
                        <path
                          d="M13.914 14.17c-6.71 3.193-10.873.521-13.539-1.101-.165-.103-.445.023-.202.303.888 1.077 3.799 3.672 7.597 3.672 3.802 0 6.063-2.074 6.346-2.436.28-.359.082-.557-.202-.438Zm1.885-1.04c-.18-.236-1.096-.28-1.672-.209-.577.07-1.443.422-1.368.634.039.079.118.043.514.008.398-.04 1.511-.18 1.743.123.233.305-.355 1.76-.463 1.995-.103.234.04.295.235.139.192-.157.54-.561.774-1.134.232-.575.374-1.378.237-1.557Z"
                          fill="#9B9B9B"
                        ></path>
                        <path
                          fill-rule="evenodd"
                          clip-rule="evenodd"
                          d="M9.403 7.655c0 .838.021 1.537-.402 2.28-.342.606-.883.978-1.488.978-.826 0-1.307-.63-1.307-1.558 0-1.833 1.642-2.166 3.197-2.166v.466Zm2.169 5.242a.449.449 0 0 1-.508.051c-.714-.592-.841-.867-1.234-1.433-1.18 1.204-2.015 1.564-3.545 1.564-1.809 0-3.219-1.117-3.219-3.352 0-1.745.947-2.934 2.293-3.515 1.168-.514 2.798-.605 4.044-.747v-.278c0-.511.04-1.116-.26-1.558-.263-.396-.765-.56-1.207-.56-.82 0-1.551.421-1.73 1.292-.036.194-.178.384-.372.394L3.747 4.53c-.175-.04-.369-.182-.32-.451C3.906 1.551 6.19.79 8.235.79c1.046 0 2.413.277 3.24 1.07 1.046.977.946 2.28.946 3.7v3.35c0 1.008.417 1.45.81 1.994.14.193.17.426-.006.572a90.859 90.859 0 0 0-1.648 1.427l-.006-.006"
                          fill="#9B9B9B"
                        ></path>
                      </svg>
                    </div>
                    <span className="text-[#cd9711] ml-[6px] text-[1rem] custom-font font-medium">
                      4.6
                    </span>
                    <svg
                      className="text-[#cd9711] w-[14px] h-[14px] ml-[2px]"
                      fill="none"
                      viewBox="0 0 16 16"
                    >
                      <path
                        fill="currentColor"
                        d="M14.948 6.088a1.023 1.023 0 0 0-.908-.71l-3.712-.26-1.377-3.467A1.02 1.02 0 0 0 8.001 1h-.002a1.02 1.02 0 0 0-.949.65L5.653 5.139l-3.692.24a1.023 1.023 0 0 0-.908.71 1.043 1.043 0 0 0 .322 1.13l2.84 2.4-.845 3.322a1.149 1.149 0 0 0 .439 1.22 1.115 1.115 0 0 0 1.254.04l2.93-1.857c.003-.003.007-.005.016 0l3.152 1.997a1.008 1.008 0 0 0 1.138-.035 1.04 1.04 0 0 0 .398-1.105l-.898-3.63 2.827-2.353a1.043 1.043 0 0 0 .322-1.129Z"
                      ></path>
                    </svg>
                  </div>
                  <p className="ml-8 text-[1rem] text-[#757575] custom-font font-medium">
                    1M+ customers
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="md:basis-2/4 md:ml-10 mt-16 md:mt-0">
            <div>
              <img alt="img" src={hero} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
