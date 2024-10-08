"use client";

import { useState } from "react";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";

export default function LandingPage() {
  const [counter, setCounter] = useState(0);

  const handleIncrease = () => setCounter(counter + 1);
  const handleDecrease = () => setCounter(counter > 0 ? counter - 1 : 0);
  const handleReset = () => setCounter(0);

  return (
  <section className="max-w-5xl h-128 mx-auto p-8 bg-white rounded-lg shadow-md mt-10">
  <h1 className="text-5xl font-bold mb-16 mt-6 text-center text-green-800">
    Fancy Counter
  </h1>

  <span className="block p-4 mb-6 text-8xl border-gray-300 rounded-md text-center">
    {counter}
  </span>

  <div className="flex justify-center mb-6">
    <button onClick={handleReset} className="flex justify-center items-center">
      <GrPowerReset className="text-3xl text-lime-800 transition-opacity duration-300 hover:opacity-70" />
    </button>
  </div>

  <div className="flex h-28 w-full rounded-b-lg">
    <div className="flex-1 flex justify-center items-center bg-lime-700 group transition-all" onClick={handleDecrease}>
      <button className="flex justify-center items-center">
        <FaMinus className="text-white text-4xl" />
      </button>
    </div>
    <div className="flex-1 flex justify-center items-center bg-slate-50 group transition-all" onClick={handleIncrease}>
      <button className="flex justify-center items-center">
        <FaPlus className="text-lime-700 text-4xl" />
      </button>
    </div>
  </div>
</section>
  );
}