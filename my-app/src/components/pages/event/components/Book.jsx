import React from "react";
import { GlareCard } from "./ui/GlareCard";
import { Link } from "react-scroll";
import { TextGenerateEffectDemo } from "./TextGenerateEffectDemo";

export default function () {
  return (
    <>
      <div className="grid grid-cols-2">
        <div className="px-8 py-5 flex  flex-col">
          <GlareCard />
          <div className="pt-5 px-3 font-serif font-bold text-4xl">
            Pushpa: The Rise
          </div>
          <div className="pt-4 px-3 font-serif font-semibold text-3xl">
            Location: Kalyani Govt. Engineering College
          </div>
          <div className="grid grid-cols-4 gap-4">
            <div className="text-2xl font-serif font-semibold px-3 py-1">
              Date: 12/2/50
            </div>
            <div className="text-2xl font-serif font-semibold px-3 py-1">
              Time: 23-45 am
            </div>
          </div>
          <div className="px-3 5 pt-5  ">
            <button
              class="middle none center rounded-lg bg-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none "
              data-ripple-light="true"
            >
              Confirm
            </button>

            <div class="w-full pt-5 px-4 mb-8 mx-auto "></div>

            <link
              rel="stylesheet"
              href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
            />

            <script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
          </div>
          <div className="px-3 ">
            <button className="bg-red-600 px-2 py-2 text-xs font-bold text-white rounded-md hover:bg-zinc-700">
              <a href="/">Dashboard</a>
            </button>
          </div>
        </div>
        <div className="">
          <div className="px-5 pt-5 font-mono text-3xl pr-3">
            Details: Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Cfuga quo, hic consequuntur atque non facere.
            Odit sapiente dolorum ut iure ipsum.
          </div>
        </div>
      </div>
    </>
  );
}
