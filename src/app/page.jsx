"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";


const Homepage = () => {
  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-full flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-48">
        {/* IMAGE CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 relative">
          <Image src="/photoCV3.png" alt="" fill className="object-contain" />
        </div>
        {/* TEXT CONTAINER */}
        <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
          {/* TITLE */}
          <h1 className="text-4xl md:text-6xl font-bold" style={{ color: "#8C1C13" }}>
            Philomène 
            Lamonnerie
          </h1>
          {/* DESC */}
          <p className="md:text-xl" style={{ color: "#000000" }}>
            Engineer specialized in Energies, Human-Computer Interaction, and Sustainable Technologies
          </p>
          {/* BUTTONS */}
          <div className="w-full flex gap-4">
            <Link href="/portfolio" passHref>
              <button className="p-4 rounded-lg text-white" style={{ backgroundColor : "#8C1C13"}}>
                View My Work
              </button>
            </Link>
            <Link href="/contact" passHref>
              <button className="p-4 rounded-lg ring-1 ring-red-900">
                Contact Me
              </button>
            </Link>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default Homepage;
