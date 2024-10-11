// app/page.tsx
"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import toast from "react-hot-toast";
import { ImCross } from "react-icons/im";
import { FaPlus, FaMinus } from "react-icons/fa";
import { GrPowerReset } from "react-icons/gr";
import { motion } from "framer-motion";

export default function HomePage() {
  const [counter, setCounter] = useState<number | null>(null);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const storedCounter = localStorage.getItem("counter");
      setCounter(storedCounter ? parseInt(storedCounter, 10) : 0);
    }
  }, []);

  useEffect(() => {
    if (counter !== null && typeof window !== "undefined") {
      localStorage.setItem("counter", counter.toString());
    }
  }, [counter]);

  const handleIncrease = () => {
    if (counter === null) return;

    const newCount = counter + 1;
    if (newCount === 10) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white dark:bg-yellow-400 shadow-md rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <div className="rounded-full mt-2.5 outline outline-2 outline-lime-900 dark:outline-slate-800">
                  <Image
                    className="rounded-full mb-3"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                    width={60}
                    height={60}
                    quality={95}
                    alt="picture2"
                  />
                </div>
              </div>
              <div className="ml-4 flex-1 ">
                <p className="font-bold text-lime-900 dark:text-slate-800 text-md mt-2">
                  Fun fact:
                </p>
                <i className="mt-1 text-sm font-normal text-gray-700">
                  Clicking too much can lead to extreme high-fiving!
                </i>
              </div>
            </div>
          </div>
          <div
            className="flex border dark:border-slate-800 rounded-full h-12 w-12 mt-8 bg-white dark:bg-slate-800 p-2 mr-4 custom-shadow items-center justify-center"
            onClick={() => toast.dismiss(t.id)}
          >
            <button
              className="rounded-full border-transparent h-full w-full flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 dark:text-yellow-500 dark:hover:text-yellow-400 dark:bg-slate-800 focus:outline-none transition ease-in-out duration-200"
              aria-label="Close"
            >
              <ImCross className="w-4 h-4" />
            </button>
          </div>
        </div>
      ));
    }
    if (newCount === 20) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white dark:bg-yellow-400 shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <div className="rounded-full outline outline-2 outline-lime-900 dark:outline-slate-900">
                  <Image
                    className="rounded-full mt-3 mb-3 w-auto h-auto"
                    src="/photo 1.jpg"
                    width={60}
                    height={60}
                    quality={95}
                    alt="picture2"
                  />
                </div>
              </div>
              <div className="ml-3 flex-1">
                <p className="font-bold text-lime-900 text-md mt-2">
                  Whoa there!
                </p>
                <i className="mt-1 text-sm font-normal text-gray-700">
                  You are on the fast track to becoming a click legend!
                </i>
              </div>
            </div>
          </div>
          <div
            className="flex border dark:border-slate-800 rounded-full h-12 w-12 mt-8 bg-white dark:bg-slate-800 p-2 mr-4 custom-shadow items-center justify-center"
            onClick={() => toast.dismiss(t.id)}
          >
            <button
              className="rounded-full border-transparent h-full w-full flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 dark:text-yellow-500 dark:hover:text-yellow-400 dark:bg-slate-800 focus:outline-none transition ease-in-out duration-200"
              aria-label="Close"
            >
              <ImCross className="w-4 h-4" />
            </button>
          </div>
        </div>
      ));
    }
    if (newCount === 30) {
      toast.custom((t) => (
        <div
          className={`${
            t.visible ? "animate-enter" : "animate-leave"
          } max-w-md w-full bg-white dark:bg-yellow-400  shadow-lg rounded-lg pointer-events-auto flex ring-1 ring-black ring-opacity-5`}
        >
          <div className="flex-1 w-0 p-4">
            <div className="flex items-start">
              <div className="flex-shrink-0 pt-0.5">
                <div className="rounded-full outline outline-2 outline-lime-900 dark:outline-slate-900">
                  <Image
                    className="rounded-full mt-3 mb-3 w-auto h-auto"
                    src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixqx=6GHAjsWpt9&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.2&w=160&h=160&q=80"
                    width={60}
                    height={60}
                    quality={95}
                    alt="picture2"
                  />
                </div>
              </div>
              <div className="ml-3 flex-1">
                <p className="font-bold text-lime-900 text-md mt-2">
                  Hold tight
                </p>
                <i className="mt-1 text-sm font-normal text-gray-700">
                  you’re just a few clicks away from unlocking the ultimate
                  tapping mastery!
                </i>
              </div>
            </div>
          </div>
          <div
            className="flex border dark:border-slate-800 rounded-full h-12 w-12 mt-8 bg-white dark:bg-slate-800 p-2 mr-4 custom-shadow items-center justify-center"
            onClick={() => toast.dismiss(t.id)}
          >
            <button
              className="rounded-full border-transparent h-full w-full flex items-center justify-center text-sm font-medium text-red-600 hover:text-red-500 dark:text-yellow-500 dark:hover:text-yellow-400 dark:bg-slate-800 focus:outline-none transition ease-in-out duration-200"
              aria-label="Close"
            >
              <ImCross className="w-4 h-4" />
            </button>
          </div>
        </div>
      ));
    }
    setCounter(newCount);
  };

  const handleDecrease = () => {
    if (counter === null) return;

    const newCount = counter > 0 ? counter - 1 : 0;
    setCounter(newCount);
  };

  const handleReset = () => {
    toast.success("Successfully refreshed");
    setCounter(0);
    localStorage.removeItem("counter");
  };

  if (!isClient) {
    return null;
  }

  return (
    <motion.section
      className="max-w-5xl h-128 mx-auto p-8 bg-white dark:bg-slate-900 rounded-lg shadow-md mt-10"
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{
        type: "tween",
        duration: 0.6,
      }}
    >
      <h1 className="text-5xl font-bold mb-16 mt-6 text-center text-green-800 dark:text-yellow-400">
        Fancy Counter
      </h1>

      <span className="block p-4 mb-6 text-8xl border-gray-300 dark:text-slate-100 rounded-md text-center">
        {counter}
      </span>

      <div className="flex justify-center mb-10">
        <button
          onClick={handleReset}
          className="flex justify-center items-center"
        >
          <GrPowerReset className="text-3xl text-lime-800 dark:text-yellow-400 transition-opacity duration-300 hover:opacity-70" />
        </button>
      </div>

      <div className="flex h-28 w-full">
        <div
          className="flex-1 flex justify-center items-center bg-lime-700 dark:bg-yellow-400 transition-all custom-shadow-bold rounded-md"
          onClick={handleDecrease}
        >
          <button className="flex justify-center items-center">
            <FaMinus className="text-slate-100 dark:text-slate-800 hite text-4xl" />
          </button>
        </div>
        <div
          className="flex-1 flex justify-center items-center bg-slate-50 dark:bg-slate-800 transition-all custom-shadow rounded-md"
          onClick={handleIncrease}
        >
          <button className="flex justify-center items-center">
            <FaPlus className="text-lime-700 dark:text-yellow-500 text-4xl" />
          </button>
        </div>
      </div>
    </motion.section>
  );
}
