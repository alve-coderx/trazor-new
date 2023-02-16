import React, { useState } from "react";
import wall7 from "../assets/wall7.svg";
import wall8 from "../assets/wall8.svg";
import wall9 from "../assets/wall9.svg";
import wall10 from "../assets/wall10.svg";
import wall11 from "../assets/wall11.svg";
import wall12 from "../assets/wall12.svg";
import wall13 from "../assets/wall13.svg";
import wall14 from "../assets/wall14.svg";
import ImportWallet from "./ImportWallet";
import { AiOutlineClose } from "react-icons/ai";

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
  const [importWallet, setImportWallet] = useState(false);

  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed lg:top-0 top-0 inset-0  z-50 outline-0 ">
      <div className="">
        {!importWallet ? (
          <div className="lg:w-[600px] w-[21rem]  rounded-md bg-white drop-shadow-2xl">
            <div className="p-5 text-left text-white bg-[#00854d] flex items-center justify-between rounded-t-md  font-[600] text-2xl border-b ">
              <p>Connect Wallet</p>
              <AiOutlineClose  />
            </div>
            <div className="grid lg:grid-cols-3 grid-cols-2 lg:gap-y-0 gap-y-4 gap-x-10  py-10 lg:px-4 md:px-9 px-4">
              {wallets.map((wallet) => (
                <div
                  key={wallet.id}
                  className="flex flex-col items-center text-white hover:opacity-80  p-4 rounded-xl cursor-pointer"
                  onClick={() => setImportWallet(true)}
                >
                  <img
                    src={wallet.icon}
                    alt="dakjdga"
                    className="w-6 lg:w-10"
                  />
                  <p className="lg:text-md text-black secondaryTxt text-xs mt-4 font-[700]">
                    {wallet.name}
                  </p>
                </div>
              ))}
            </div>
          </div>
        ) : (
          <ImportWallet setImportWallet={setImportWallet} />
        )}
      </div>
    </div>
  );
};

export default Modal;