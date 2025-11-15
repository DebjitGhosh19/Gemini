import React, { useState } from "react";
import user from "../assets/user_icon.png";
import compass from "../assets/compass_icon.png";
import bulb from "../assets/bulb_icon.png";
import message from "../assets/message_icon.png";
import code from "../assets/code_icon.png";
import gallery from "../assets/gallery_icon.png";
import mic from "../assets/mic_icon.png";
import send from "../assets/send_icon.png";
// import run from "../../config/gemini.js";
import main from "../../config/gemini.js";
import { useContext } from "react";
import { Context } from "../../context/Context.jsx";
const Main = ({ visiable, setVisiable }) => {
  const {
    input,
    setInput,
    recentPromt,
    setRecentPromt,
    setPreviousPromt,
    setShowResult,
    setLoading,
    previousPromt,
    showResult,
    loading,
    onSend,resultData
  } = useContext(Context);
  console.log(input);

  return (
    <div
      className={`p-5 w-full flex   flex-col ${visiable ? "ml-40" : "ml-20"}`}
    >
      <nav className="flex items-center justify-between w-full px-4">
        <h1 className="text-2xl text-slate-500">Gemini</h1>
        <img src={user} alt="" className="w-10 rounded-4xl" />
      </nav>
      <main className="lg:mx-50 mt-20 ">
        {!showResult ? (
          <>
            <section className="mb-20">
              <h1 className="text-5xl  font-semibold mb-6">
                <span className="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
                  Hello, Dev.
                </span>
              </h1>
              <h2 className="text-6xl font-semibold text-gray-300">
                How can I help you today?
              </h2>
            </section>
            <section className="grid grid-cols-2  lg:grid-cols-4  mt-10  ">
              <div className="bg-gray-200 m-2 p-4 min-h-[200px] flex flex-col rounded-2xl justify-between hover:bg-gray-300 transition-all duration-200 cursor-pointer">
                <p>Suggest beautiful places to see on an uncoming road trip</p>
                <div>
                  <img
                    src={compass}
                    alt=""
                    className="w-6 justify-self-end   bg-white rounded-4xl "
                  />
                </div>
              </div>

              <div className="bg-gray-200 m-2 p-4 min-h-[200px] flex flex-col rounded-2xl justify-between hover:bg-gray-300 transition-all duration-200 cursor-pointer">
                <p>Briefly summarize this concept: urban planning</p>
                <div>
                  <img
                    src={bulb}
                    alt=""
                    className="w-6 justify-self-end   bg-white rounded-4xl "
                  />
                </div>
              </div>

              <div className="bg-gray-200 m-2 p-4 min-h-[200px] flex flex-col rounded-2xl justify-between hover:bg-gray-300 transition-all duration-200 cursor-pointer">
                <p>Brainstorm team bonding activities for our work retreat</p>
                <div>
                  <img
                    src={message}
                    alt=""
                    className="w-6 justify-self-end   bg-white rounded-4xl "
                  />
                </div>
              </div>
              <div className="bg-gray-200 m-2 p-4 min-h-[200px] flex flex-col rounded-2xl justify-between hover:bg-gray-300 transition-all duration-200 cursor-pointer">
                <p>Tell me about React js and React native</p>
                <div>
                  <img
                    src={code}
                    alt=""
                    className="w-6 justify-self-end bg-white rounded-4xl  "
                  />
                </div>
              </div>
            </section>
          </>
        ) : (
          <div className="max-h-[70vh] overflow-y-scroll p-5  hide-scrollbar">
            <div className="flex gap-4 items-center mb-4">
              <img src={user} alt=""  className="w-15 rounded-4xl "/>
              <p className="text-2xl font-bold ">{recentPromt}</p>
            </div>
            { loading&&
              <div class="animate-spin inline-block size-6 border-4 border-current border-t-transparent text-blue-500 rounded-full" role="status" aria-label="loading">
  <span class="sr-only">Loading...</span>
</div>
            }
            <div dangerouslySetInnerHTML={{__html:resultData}}></div>
          </div>
        )}
        <section className={`w-full bg-gray-200 rounded-4xl p-5 flex justify-between gap-4 `}>
          <input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            type="text"
            placeholder="Enter a prompt here"
            className="w-full outline-none"
          />
          <div className="flex gap-1">
            <img
              src={gallery}
              alt=""
              className="w-8 cursor-pointer bg-white rounded-4xl items-center justify-center p-1 "
            />
            <img
              src={mic}
              alt=""
              className="w-8 cursor-pointer bg-white rounded-4xl items-center justify-center p-1 "
            />
            <img
              onClick={() => onSend()}
              src={send}
              alt=""
              className="w-8 cursor-pointer bg-white rounded-4xl items-center justify-center p-1 "
            />
          </div>
        </section>
        <p className="text-gray-800 text-sm text-center mt-2">
          Gemini may display inaccurate info, including about people, so
          double-check its responses. Your privacy and Gemini Apps
        </p>
      </main>
    </div>
  );
};

export default Main;
