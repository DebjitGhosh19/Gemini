import React, { useState } from "react";
import user from "../assets/user_icon.png";
import compass from "../assets/compass_icon.png";
import gallery from "../assets/gallery_icon.png";
const Main = () => {
  return (
    <div className="p-5 w-full  flex gap-20 flex-col ml-40">
      <nav className="flex items-center justify-between w-full px-4">
        <h1 className="text-2xl text-slate-500">Gemini</h1>

        <img src={user} alt="" className="w-10 rounded-4xl" />
      </nav>
      <main className="lg:mx-50">
        <section>
          <h1 class="text-5xl  font-semibold mb-6">
            <span class="text-transparent bg-clip-text bg-linear-to-r from-blue-400 via-purple-500 to-pink-500">
              Hello, Dev.
            </span>
          </h1>
          <h2 className="text-6xl font-semibold text-gray-300">
            How can I help you today?
          </h2>
        </section>
        <section className="grid grid-cols-2  lg:grid-cols-4  my-10  ">
         
         <div className="bg-gray-200 m-2 p-4 min-h-[200px] flex flex-col rounded-2xl justify-between hover:bg-gray-300 transition-all duration-200 cursor-pointer">
            <p>Suggest beautiful places to see on an uncoming road trip</p>
            <div>
              <img src={compass} alt="" className="w-6 justify-self-end  " />
            </div>
          </div>
           <div className="bg-gray-200 m-2 p-4 min-h-[200px] flex flex-col rounded-2xl justify-between hover:bg-gray-300 transition-all duration-200 cursor-pointer">
            <p>Suggest beautiful places to see on an uncoming road trip</p>
            <div>
              <img src={compass} alt="" className="w-6 justify-self-end  " />
            </div>
          </div>

           <div className="bg-gray-200 m-2 p-4 min-h-[200px] flex flex-col rounded-2xl justify-between hover:bg-gray-300 transition-all duration-200 cursor-pointer">
            <p>Suggest beautiful places to see on an uncoming road trip</p>
            <div>
              <img src={compass} alt="" className="w-6 justify-self-end  " />
            </div>
          </div>

           <div className="bg-gray-200 m-2 p-4 min-h-[200px] flex flex-col rounded-2xl justify-between hover:bg-gray-300 transition-all duration-200 cursor-pointer">
            <p>Suggest beautiful places to see on an uncoming road trip</p>
            <div>
              <img src={compass} alt="" className="w-6 justify-self-end  " />
            </div>
          </div>
        </section>
        <section>
          <input type="text" placeholder="Enter a prompt here"/>
          <img src={gallery} alt="" className="w-6" />
         
        </section>
      </main>
    </div>
  );
};

export default Main;
