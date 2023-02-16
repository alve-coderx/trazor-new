import React from "react";

const Footer = () => {
  return (
    <footer className="mt-8 bg-[#141414] rounded-t-[20px]">
      <div className="mx-auto md:max-w-[75%] max-w-[95%]">
        <div className="md:flex md:flex-row md:pt-12 pt-4 md:pb-8 pb-4">
          <div className="md:basis-1/4">
            <div>
              <div className="md:mb-32 mb-4">
                <svg
                  className="text-white w-auto h-[32px]"
                  fill="none"
                  viewBox="0 0 161.768 40.771"
                >
                  <path
                    fill="currentColor"
                    d="M24.306 9.461C24.306 4.29 19.761 0 14.228 0 8.694 0 4.148 4.292 4.148 9.46v3.025H0v21.75l14.225 6.536 14.233-6.534V12.581H24.31l-.003-3.121Zm-15.02 0c0-2.438 2.175-4.389 4.942-4.389 2.767 0 4.94 1.951 4.94 4.389v3.024H9.287V9.461Zm13.44 21.264-8.502 3.904-8.499-3.901V17.655h17v13.07z"
                  ></path>
                  <path
                    fill="currentColor"
                    d="M40.019 12.485h17.886v5.17h-6.127v16.678h-5.731V17.655h-6.028ZM78.46 19.8c0-4.39-3.064-7.218-7.609-7.218H60.474v21.75h5.732v-7.314h2.174l4.051 7.314h6.627l-4.842-8.094c2.07-.78 4.244-2.83 4.244-6.438zm-8.296 2.146h-3.958v-4.39h3.953c1.482 0 2.47.879 2.47 2.147 0 1.365-.988 2.243-2.47 2.243zm10.963-9.461h16.009v5.072H86.858v3.219h9.982v4.974h-9.982v3.51h10.278v5.073H81.127Zm48.125-.294c-6.719 0-11.46 4.78-11.46 11.218 0 6.437 4.839 11.22 11.46 11.22s11.562-4.779 11.562-11.217c0-6.438-4.842-11.22-11.562-11.22zm0 17.363c-3.359 0-5.633-2.536-5.633-6.14 0-3.707 2.274-6.142 5.633-6.142 3.36 0 5.732 2.537 5.732 6.141 0 3.605-2.372 6.14-5.732 6.14zm27.67-3.316c2.074-.78 4.25-2.83 4.25-6.438 0-4.39-3.064-7.218-7.61-7.218h-10.375v21.75h5.731v-7.314h2.178l4.051 7.314h6.621zm-4.052-4.292h-3.952v-4.39h3.952c1.484 0 2.471.879 2.471 2.147 0 1.365-.987 2.243-2.471 2.243zm-52.967-9.461h16.898v4.389l-9.19 12.29h9.19v5.169H99.903v-4.39l9.19-12.288h-9.19z"
                  ></path>
                </svg>
                <p className="text-[#757575] text-[16px] custom-font mt-2">
                  a part of{" "}
                  <b className="text-white font-medium">SatoshiLabs Group</b>
                </p>
              </div>
              <div className="flex justify-center md:justify-start">
                <a href="/suite.php">
                  <svg
                    className="text-white h-[32px] w-[32px] hover:text-[#afafaf]"
                    fill="none"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M25 10.677a7.92 7.92 0 0 1-2.124.55 3.586 3.586 0 0 0 1.629-1.951 7.602 7.602 0 0 1-2.349.86 3.743 3.743 0 0 0-2.097-1.087 3.84 3.84 0 0 0-2.355.367 3.595 3.595 0 0 0-1.627 1.666 3.381 3.381 0 0 0-.221 2.27 10.861 10.861 0 0 1-4.213-1.072A10.4 10.4 0 0 1 8.25 9.663a3.455 3.455 0 0 0-.495 1.78c-.001.58.148 1.15.434 1.662.285.512.7.948 1.204 1.27a3.777 3.777 0 0 1-1.674-.439v.043c.004.813.302 1.599.844 2.226a3.725 3.725 0 0 0 2.126 1.214 3.687 3.687 0 0 1-.99.146 4.607 4.607 0 0 1-.693-.06c.238.699.697 1.31 1.315 1.747.618.438 1.363.68 2.132.695A7.62 7.62 0 0 1 7 21.409a10.77 10.77 0 0 0 5.661 1.59 10.86 10.86 0 0 0 4.044-.735c1.283-.5 2.45-1.239 3.43-2.174a9.947 9.947 0 0 0 2.284-3.272 9.58 9.58 0 0 0 .781-3.862V12.5a7.4 7.4 0 0 0 1.8-1.823Z"
                    ></path>
                  </svg>
                </a>
                <a href="/suite.php">
                  <svg
                    className="text-white h-[32px] w-[32px] hover:text-[#afafaf]"
                    fill="none"
                    viewBox="0 0 32 32"
                  >
                    <g fill="currentColor" clipPath="url(#a)">
                      <path d="m13.25 17.062-.688-.002v.002h.688Zm6.188 0h.687l-.688-.002v.002Z"></path>
                      <path d="M27.096 15a2.753 2.753 0 0 0-2.75-2.75c-.606 0-1.182.198-1.652.557-1.535-1.065-3.545-1.7-5.683-1.861l1.153-2.706 3.357.783a2.058 2.058 0 0 0 2.041 1.853 2.065 2.065 0 0 0 2.063-2.063 2.065 2.065 0 0 0-2.063-2.062c-.72 0-1.354.372-1.722.935l-3.923-.918a.688.688 0 0 0-.79.4l-1.596 3.74c-2.309.08-4.508.73-6.17 1.864A2.754 2.754 0 0 0 5 15a2.722 2.722 0 0 0 1.39 2.38c-.01.123-.016.246-.015.37 0 3.79 4.318 6.874 9.625 6.874 5.306 0 9.625-3.084 9.625-6.875 0-.107-.004-.213-.011-.319a2.723 2.723 0 0 0 1.482-2.43Zm-3.534-6.874a.689.689 0 1 1-.002 1.377.689.689 0 0 1 .003-1.377Zm-12.375 8.937c0-.758.618-1.375 1.376-1.375.757 0 1.374.617 1.374 1.375a1.377 1.377 0 0 1-2.75 0Zm7.988 4.56a5.412 5.412 0 0 1-6.35 0 .688.688 0 1 1 .806-1.113 4.033 4.033 0 0 0 4.738 0 .688.688 0 1 1 .806 1.114Zm.262-3.185a1.375 1.375 0 1 1 0-2.75 1.375 1.375 0 0 1 0 2.75Z"></path>
                    </g>
                    <defs>
                      <clipPath id="a">
                        <path
                          fill="currentColor"
                          d="M0 0h22v22H0z"
                          transform="translate(5 4)"
                        ></path>
                      </clipPath>
                    </defs>
                  </svg>
                </a>
                <a href="/suite.php">
                  <svg
                    className="text-white h-[32px] w-[32px] hover:text-[#afafaf]"
                    fill="none"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M16 9.467c2.133 0 2.4 0 3.267.066 2.2.067 3.2 1.134 3.266 3.267.067.867.067 1.067.067 3.2s0 2.4-.067 3.2c-.066 2.133-1.133 3.2-3.266 3.267-.867.066-1.067.066-3.267.066-2.133 0-2.4 0-3.2-.066-2.2-.067-3.2-1.134-3.267-3.267-.066-.867-.066-1.067-.066-3.2s0-2.4.066-3.2c.067-2.133 1.134-3.2 3.267-3.267.8-.066 1.067-.066 3.2-.066ZM16 8c-2.2 0-2.467 0-3.267.067C9.8 8.2 8.2 9.8 8.067 12.733 8 13.533 8 13.8 8 16s0 2.467.067 3.267C8.2 22.2 9.8 23.8 12.733 23.933 13.533 24 13.8 24 16 24s2.467 0 3.267-.067C22.2 23.8 23.8 22.2 23.933 19.267 24 18.467 24 18.2 24 16s0-2.467-.067-3.267C23.8 9.8 22.2 8.2 19.267 8.067 18.467 8 18.2 8 16 8Zm0 3.867c-2.267 0-4.133 1.866-4.133 4.133s1.866 4.133 4.133 4.133 4.133-1.866 4.133-4.133-1.866-4.133-4.133-4.133Zm0 6.8A2.675 2.675 0 0 1 13.333 16c0-1.467 1.2-2.667 2.667-2.667 1.467 0 2.667 1.2 2.667 2.667 0 1.467-1.2 2.667-2.667 2.667Zm4.267-7.867c-.534 0-.934.4-.934.933 0 .534.4.934.934.934.533 0 .933-.4.933-.934 0-.533-.4-.933-.933-.933Z"
                    ></path>
                  </svg>
                </a>
                <a href="/suite.php">
                  <svg
                    className="text-white h-[32px] w-[32px] hover:text-[#afafaf]"
                    fill="none"
                    viewBox="0 0 32 32"
                  >
                    <path
                      fill="currentColor"
                      d="M14.022 13.636H12v2.819h2.022v8.454h3.37v-8.454h2.425l.27-2.819h-2.696V12.44c0-.634.135-.916.742-.916h1.954V8h-2.56c-2.427 0-3.505 1.127-3.505 3.24v2.396Z"
                    ></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="md:basis-1/4 md:block hidden">
            <p className="text-[#757575] text-[16px] custom-font mb-[16px] font-base">
              Products
            </p>
            <p className="text-white text-[28px] mb-[12px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Trezor Model T</a>
            </p>
            <p className="text-white text-[28px] mb-[12px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Trezor Model One</a>
            </p>
            <p className="text-white text-[28px] mb-[12px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Compare Trezors</a>
            </p>
            <p className="text-white text-[16px] mb-[10px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Trezor Suite</a>
            </p>
            <p className="text-white text-[16px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Accessories</a>
            </p>
          </div>
          <div className="md:basis-1/4 md:block hidden">
            <p className="text-[#757575] text-[16px] custom-font mb-[16px] font-base">
              Learn
            </p>
            <p className="text-white text-[16px] mb-[10px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Supported Coins</a>
            </p>
            <p className="text-white text-[16px] mb-[10px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Blog</a>
            </p>
            <p className="text-white text-[16px] mb-[10px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Privacy and Security</a>
            </p>
            <p className="text-white text-[16px] mb-[10px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">About Company</a>
            </p>
            <p className="text-white text-[16px] mb-[10px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Support</a>
            </p>
            <p className="text-white text-[16px] mb-[10px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Knowledge Base</a>
            </p>
            <p className="text-white text-[16px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Forum</a>
            </p>
          </div>
          <div className="md:basis-1/4 md:block hidden">
            <p className="text-[#757575] text-[16px] custom-font mb-[16px] font-base">
              Other
            </p>
            <p className="text-white text-[16px] mb-[10px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">FAQs</a>
            </p>
            <p className="text-white text-[16px] mb-[10px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Terms of Use</a>
            </p>
            <p className="text-white text-[16px] mb-[10px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Affiliate Program</a>
            </p>
            <p className="text-white text-[16px] mb-[10px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Reseller Program</a>
            </p>
            <p className="text-white text-[16px] custom-font font-medium hover:text-[#afafaf] transition-color duration-200">
              <a href="/suite.php">Resellers</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
