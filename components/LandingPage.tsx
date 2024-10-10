"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { motion } from "framer-motion";
import { toast } from "react-hot-toast";
import photo1 from "@/public/photo 1.jpeg";

export default function LandingPage() {
  const [counter, setCounter] = useState(0);
  

  const handleIncrease = () => {
    const newCounter = counter + 1;
    if (newCounter === 15) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full mt-2.5"
                  src="/photo 1.jpg"
                  alt="Profile"
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-red-700">Fun fact:</p>
                <p className="mt-1 text-sm text-gray-500">
                  Clicking too much can lead to extreme high-fiving! 😃
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-lime-700 hover:text-lime-950 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    }
    if (newCounter === 30) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <img
                  className="h-10 w-10 rounded-full"
                  src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                  alt=""
                />
              </div>
              <div className="ml-3 flex-1">
                <p className="text-sm font-medium text-red-700">Alert !!</p>
                <p className="mt-1 text-sm text-gray-500">
                  You’re now a certified click wizard! 😱
                </p>
              </div>
            </div>
          </div>
          <div className="flex border-l border-gray-200">
            <button
              onClick={() => toast.dismiss(t.id)}
              className="w-full border border-transparent rounded-none rounded-r-lg p-4 flex items-center justify-center text-sm font-medium text-lime-700 hover:text-lime-950 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            >
              Close
            </button>
          </div>
        </div>
      ));
    }

    setCounter(newCounter);
  };
  const handleDecrease = () => setCounter(counter > 0 ? counter - 1 : 0);
  const handleReset = () => {
    toast.success("Successfully refreshed");
    setCounter(0);
  };

  return (
    <motion.section
      className="max-w-5xl h-128 mx-auto p-8 bg-white rounded-lg shadow-md mt-10"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.6,
      }}
    >
      <h1 className="text-5xl font-bold mb-16 mt-6 text-center text-green-800">
        Fancy Counter
      </h1>

      <span className="block p-4 mb-6 text-8xl border-gray-300 rounded-md text-center">
        {counter}
      </span>

      <div className="flex justify-center mb-10">
        <button
          onClick={handleReset}
          className="flex justify-center items-center"
        >
          <GrPowerReset className="text-3xl text-lime-800 transition-opacity duration-300 hover:opacity-70" />
        </button>
      </div>

      <div className="flex h-28 w-full">
        <div
          className="flex-1 flex justify-center items-center bg-lime-700 transition-all custom-shadow-bold rounded-md"
          onClick={handleDecrease}
        >
          <button className="flex justify-center items-center">
            <FaMinus className="text-slate-50 text-4xl" />
          </button>
        </div>
        <div
          className="flex-1 flex justify-center items-center bg-slate-50 transition-all custom-shadow rounded-md"
          onClick={handleIncrease}
        >
          <button className="flex justify-center items-center">
            <FaPlus className="text-lime-700 text-4xl" />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
