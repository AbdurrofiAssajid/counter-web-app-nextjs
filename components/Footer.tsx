'use client'
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="text-center text-green-800 mt-8 dark:text-slate-100"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 4,
      }}
    >
      <small className="mb-2 block text-xs dark:slate-600">
        &copy; 2024 Abdurrofi | All rights reserved.
      </small>
      <p className="text-xs italic font-bold">
        <a
          href="https://github.com/AbdurrofiAssajid"
          target="_blank"
          className=" mx-1"
        >
         A web-based counter tool lets users easily increment, decrement, and reset counts, offering seamless, interactive functionality.
        </a>
      </p>
    </motion.footer>
  );
}
