'use client'
import React from "react";
import { motion } from "framer-motion";

export default function Footer() {
  return (
    <motion.footer
      className="text-center text-green-800 mt-20"
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
      <small className="mb-2 block text-xs">
        &copy; 2024 Abdurrofi | All rights reserved.
      </small>
      <p className="text-xs italic font-bold">
        <a
          href="https://word-analytics-site.vercel.app"
          target="_blank"
          className=" mx-1"
        >
          A web-based counter tool, allows users to perform functions such as
          incrementing, decrementing, and resetting the count.
        </a>
      </p>
    </motion.footer>
  );
}
