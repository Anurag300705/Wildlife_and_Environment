import React from "react";
import { GlareCard } from "./ui/GlareCard";
import { CiShare2 } from "react-icons/ci";
import { Link, useNavigate } from "react-router-dom";

export default function Tickets() {
  const nevigate = useNavigate;
  return (
    <>
      <div className="mt-3 grid grid-cols-1 md:grid-cols-4 gap-3">
        <div>
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Unsplash image"
            />
          </GlareCard>
          <div className="text-zinc-900 font-semibold mt-2  mx-4 text-2xl">
            <div className="">Pushpa:The Rise</div>
            <div className="">Scheduled:Date</div>
            <div className="flex justify-between px-3 py-2 mt-2">
              <div>
                <CiShare2 />
              </div>
              <button className="bg-red-700 text-white rounded-md px-2 py-1 hover:bg-black  hover:text-yellow-400 cursor-pointer transform hover:scale-110 transition-transform duration-300 font-serif text-xl ">
                <Link to="/book">Book Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div>
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Unsplash image"
            />
          </GlareCard>
          <div className="text-zinc-900 font-semibold mt-2  mx-4 text-2xl">
            <div className="">Pushpa:The Rise</div>
            <div className="">Scheduled:Date</div>
            <div className="flex justify-between px-3 py-2 mt-2">
              <div>
                <CiShare2 />
              </div>
              <button className="bg-red-700 text-white rounded-md px-2 py-1 hover:bg-black  hover:text-yellow-400 cursor-pointer transform hover:scale-110 transition-transform duration-300 font-serif text-xl ">
                <Link to="/book">Book Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div>
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Unsplash image"
            />
          </GlareCard>
          <div className="text-zinc-900 font-semibold mt-2  mx-4 text-2xl">
            <div className="">Pushpa:The Rise</div>
            <div className="">Scheduled:Date</div>
            <div className="flex justify-between px-3 py-2 mt-2">
              <div>
                <CiShare2 />
              </div>
              <button className="bg-red-700 text-white rounded-md px-2 py-1 hover:bg-black  hover:text-yellow-400 cursor-pointer transform hover:scale-110 transition-transform duration-300 font-serif text-xl ">
                <Link to="/book">Book Now</Link>
              </button>
            </div>
          </div>
        </div>
        <div>
          <GlareCard className="flex flex-col items-center justify-center">
            <img
              className="h-full w-full absolute inset-0 object-cover"
              src="https://images.unsplash.com/photo-1512618831669-521d4b375f5d?q=80&w=3388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Unsplash image"
            />
          </GlareCard>
          <div className="text-zinc-900 font-semibold mt-2  mx-4 text-2xl">
            <div className="">Pushpa:The Rise</div>
            <div className="">Scheduled:Date</div>
            <div className="flex justify-between px-3 py-2 mt-2">
              <div>
                <CiShare2 />
              </div>
              <button className="bg-red-700 text-white rounded-md px-2 py-1 hover:bg-black  hover:text-yellow-400 cursor-pointer transform hover:scale-110 transition-transform duration-300 font-serif text-xl">
                <Link to="/book">Book Now</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
