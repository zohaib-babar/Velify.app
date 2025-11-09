"use client";
import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  return (
    <header className=" border-black/5 fixed w-full">
      <nav className="flex max-w-7xl items-center justify-between ">
        <div className="flex items-center gap-2">
          <div><img className="h-[100px] w-[100px] ml-20" src="https://valify.app/valify/logo-black.svg" alt="icon" /></div>
        </div>

        <div className="hidden md:flex items-center gap-8">
          <a href="#" className="text-sm font-bold hover:underline text-black hover:text-yellow-400">
            Home
          </a>
          <a href="#" className="text-sm font-bold hover:underline text-black hover:text-yellow-400">
            Products
          </a>
          <a href="#" className="text-sm font-bold hover:underline text-black hover:text-yellow-400">
            Solutions
          </a>
          <a href="#" className="text-sm font-bold hover:underline text-black  hover:text-yellow-400">
            Features
          </a>
        </div>
      </nav>
    </header>
        /* <div className="flex items-center gap-4">
          <a
            href="#"
            className="hidden md:inline-block text-sm font-medium text-gray-700 hover:text-gray-900"
          >
            Log in
          </a>
          <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 transition">
            <a href="#" >Get started</a>
          </button>
        </div> */

  );
}
