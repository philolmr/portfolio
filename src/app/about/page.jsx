"use client";
import Brain from "@/components/brain";
import { motion, useInView, useScroll } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

const AboutPage = () => {
  const containerRef = useRef();

  const { scrollYProgress } = useScroll({ container: containerRef });

  const skillRef = useRef();
  // const isSkillRefInView = useInView(skillRef, {once:true});
  const isSkillRefInView = useInView(skillRef, { margin: "-100px" });

  const experienceRef = useRef();
  const isExperienceRefInView = useInView(experienceRef, { margin: "-100px" });

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      {/* CONTAINER */}
      <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
        {/* TEXT CONTAINER */}
        <div className="p-4 sm:p-8 md:p-12 lg:p-20 xl:p-48 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2">
          {/* BIOGRAPHY CONTAINER */}
          <div className="flex flex-col gap-12 justify-center">
            {/* BIOGRAPHY IMAGE */}
            <Image
              src="/photoCV3.png"
              alt="Profile Photo"
              width={112}
              height={112}
              className="w-40 h-40 rounded-full object-cover"
            />
            
            {/* BIOGRAPHY TITLE */}
            <h1 className="font-bold text-2xl" style={{ color: "#000000" }}>PROFILE</h1>
            {/* BIOGRAPHY DESC */}
            <p className="text-lg text-black" >
            As a creative engineer currently in my final year of engineering school, I specialize in innovative technologies and project management. My passion lies in product development, where I blend my technical skills with creativity. I am eager to contribute to dynamic teams that value collaboration and innovation.
            </p>
            {/* BIOGRAPHY QUOTE */}
            <a 
              href="/CV Philomène Lamonnerie EN.pdf" 
              target="_blank" 
              rel="noopener noreferrer"
              className="italic hover:underline"
              style={{ color: "#8C1C13" }}
            >
              Download CV
            </a>
            {/* BIOGRAPHY SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#8C1C13"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#8C1C13" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#8C1C13"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* SKILLS CONTAINER */}
          <div className="flex flex-col gap-12 justify-center" ref={skillRef}>
            {/* SKILL TITLE */}
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              PROGRAMMING SKILLS
            </motion.h1>
            {/* PROGRAMMING SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Python
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                SQL
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                C#
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                C++
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                HTML
              </div>
            </motion.div>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              DESIGN SKILLS
            </motion.h1>
            {/* DESIGN SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Suite Adobe
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Fusion 360
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Microsoft Office 365 (Excel, PowerPoint)
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Figma
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Canva
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Rhino 3D
              </div>
            </motion.div>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              MANUFACTURING SKILLS
            </motion.h1>
            {/* MANUFACTURING SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                3D Printing
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Laser Cutting
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                PCB Design (KiCad)
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Electronic Soldering
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Leatherworking
              </div>
            </motion.div>
            <motion.h1
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              transition={{ delay: 0.2 }}
              className="font-bold text-2xl"
            >
              SOFT SKILLS
            </motion.h1>
            {/* SOFT SKILL LIST */}
            <motion.div
              initial={{ x: "-300px" }}
              animate={isSkillRefInView ? { x: 0 } : {}}
              className="flex gap-4 flex-wrap"
            >
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Creativity
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Negotiation
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Critical Thinking
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Leadership
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Innovation
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Entrepreneurship
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Research
              </div>
              <div className="rounded  p-2 text-sm cursor-pointer bg-red-900 text-white hover:bg-white hover:text-red-900">
                Project Management
              </div>

            </motion.div>
            {/* SKILL SCROLL SVG */}
            <motion.svg
              initial={{ opacity: 0.2, y: 0 }}
              animate={{ opacity: 1, y: "10px" }}
              transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width={50}
              height={50}
              style={{ color: "#8C1C13" }}
            >
              <path
                d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z"
                stroke="#8C1C13"
                strokeWidth="1"
              ></path>
              <path d="M12 6V14" stroke="#8C1C13" strokeWidth="1"></path>
              <path
                d="M15 11L12 14L9 11"
                stroke="#8C1C13"
                strokeWidth="1"
              ></path>
            </motion.svg>
          </div>
          {/* EXPERIENCE CONTAINER */}
          <div 
          className="flex flex-col gap-12 justify-center pb-48"
          ref={experienceRef}
          > 
          {/* profetionnal EXPERIENCE TITLE */}
          <motion.h1
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            transition={{ delay: 0.2 }}
            className="font-bold text-2xl"
          >
            PROFESSIONAL EXPERIENCE 
          </motion.h1>
          
          {/* profetionnal EXPERIENCE LIST */}
          <motion.div
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            className="w-11/12 mx-auto" // Augmenter la largeur de la zone de la frise
          >
            {/* BASSETTI */}
            <div className="flex h-48">
              {/* Left Column (e.g., 70% width) */}
              <div className="flex-none w-[70%] pr-4 flex flex-col items-start text-left">
                <div className="p-1 bg-red-900 text-white text-sm font-semibold rounded-lg w-fit">
                  BASSETTI GROUP - Paris
                </div>
                <div className="text-red-900 text-sm font-semibold">
                  April 2024 - August 2024
                </div>
              </div>

              {/* Timeline Line (e.g., 15% width for central line) */}
              <div className="flex-none w-[15%] flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>

              {/* Right Column (e.g., 20% w3dh) */}
              <div className="flex-none w-[30%] pl-4 flex flex-col text-right">
                <div className="text-red-500 font-semibold">
                  Business / Sales Engineer Assistant
                </div>
              </div>
            </div>
          </motion.div>

          {/* asso EXPERIENCE TITLE */}
          <motion.h1
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            transition={{ delay: 0.2 }}
            className="font-bold text-2xl"
          >
            ASSOCIATIVE EXPERIENCES 
          </motion.h1>
          
          {/* asso EXPERIENCE LIST */}
          <motion.div
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            className="w-11/12 mx-auto" // Augmenter la largeur de la zone de la frise
          >

            {/* CELEST */}
            <div className="flex h-48">
              {/* Left Column (70% width) */}
              <div className="flex-none w-[70%] pr-4 flex flex-col items-start text-left">
                <div className="p-1 bg-red-900 text-white text-sm font-semibold rounded-lg w-fit">
                  CELEST - Students' Union (24/25) - Pôle Léonard de Vinci
                </div>
                <div className="text-red-900 text-sm font-semibold">
                  May 2023 - March 2025
                </div>
              </div>

              {/* Timeline Line (15% width for central line) */}
              <div className="flex-none w-[15%] flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>

              {/* Right Column (30% width) */}
              <div className="flex-none w-[30%] pl-4 flex flex-col text-right">
                <div className="text-red-500 font-semibold">
                  Community Manager & Event Manager
                </div>
              </div>
            </div>

            {/* LéoSurvival */}
            <div className="flex h-48">
              {/* Left Column (70% width) */}
              <div className="flex-none w-[70%] pr-4 flex flex-col items-start text-left">
                <div className="p-1 bg-red-900 text-white text-sm font-semibold rounded-lg w-fit">
                  LeoSurvival - Sports association - Pôle Léonard de Vinci
                </div>
                <div className="text-red-900 text-sm font-semibold">
                  March 2023 - March 2024
                </div>
              </div>

              {/* Timeline Line (15% width for central line) */}
              <div className="flex-none w-[15%] flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>

              {/* Right Column (30% width) */}
              <div className="flex-none w-[30%] pl-4 flex flex-col text-right">
                <div className="text-red-500 font-semibold">
                  Secretary
                </div>
              </div>
            </div>

            {/* VEGAS */}
            <div className="flex h-48">
              {/* Left Column (70% width) */}
              <div className="flex-none w-[70%] pr-4 flex flex-col items-start text-left">
                <div className="p-1 bg-red-900 text-white text-sm font-semibold rounded-lg w-fit">
                  VEGAS - Students' Union (23/24) - Pôle Léonard de Vinci
                </div>
                <div className="text-red-900 text-sm font-semibold">
                  January 2023 - February 2024
                </div>
              </div>

              {/* Timeline Line (15% width for central line) */}
              <div className="flex-none w-[15%] flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>

              {/* Right Column (30% width) */}
              <div className="flex-none w-[30%] pl-4 flex flex-col text-right">
                <div className="text-red-500 font-semibold">
                  Event Manager
                </div>
              </div>
            </div>

            {/* LaVagueDeVinci */}
            <div className="flex h-48">
              {/* Left Column (70% width) */}
              <div className="flex-none w-[70%] pr-4 flex flex-col items-start text-left">
                <div className="p-1 bg-red-900 text-white text-sm font-semibold rounded-lg w-fit">
                  LaVague DeVinci - Surf Association - Pôle Léonard de Vinci
                </div>
                <div className="text-red-900 text-sm font-semibold">
                  Novembre 2022 - March 2023
                </div>
              </div>

              {/* Timeline Line (15% width for central line) */}
              <div className="flex-none w-[15%] flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>

              {/* Right Column (30% width) */}
              <div className="flex-none w-[30%] pl-4 flex flex-col text-right">
                <div className="text-red-500 font-semibold">
                  Manufacturing Project Manager & Communication Manager
                </div>
              </div>
            </div>


            {/* Other experiences continue in the same way */}
          </motion.div>

          {/* jobs EXPERIENCE TITLE */}
          <motion.h1
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            transition={{ delay: 0.2 }}
            className="font-bold text-2xl"
          >
            OTHER JOBS 
          </motion.h1>
          
          {/* jobs EXPERIENCE LIST */}
          <motion.div
            initial={{ x: "-300px" }}
            animate={isExperienceRefInView ? { x: "0" } : {}}
            className="w-11/12 mx-auto" // Augmenter la largeur de la zone de la frise
          >
            {/* ETE 2023 Vendeuse en supermarché */}
            <div className="flex h-48">
                {/* Left Column (70% width) */}
                <div className="flex-none w-[70%] pr-4 flex flex-col items-start text-left">
                  <div className="p-1 bg-red-900 text-white text-sm font-semibold rounded-lg w-fit">
                    LA COOP - LA BREE OLERON
                  </div>
                  <div className="text-red-900 text-sm font-semibold">
                    Summer 2023
                  </div>
                </div>

                {/* Timeline Line (15% width for central line) */}
                <div className="flex-none w-[15%] flex justify-center">
                  <div className="w-1 h-full bg-gray-600 rounded relative">
                    <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                  </div>
                </div>

                {/* Right Column (30% width) */}
                <div className="flex-none w-[30%] pl-4 flex flex-col text-right">
                  <div className="text-red-500 font-semibold">
                    Supermarket Sales Clerk
                  </div>
                </div>
            </div>

            {/* Hôtesse d’accueil */}
            <div className="flex h-48">
              {/* Left Column (70% width) */}
              <div className="flex-none w-[70%] pr-4 flex flex-col items-start text-left">
                <div className="p-1 bg-red-900 text-white text-sm font-semibold rounded-lg w-fit">
                  DSD - PARIS
                </div>
                <div className="text-red-900 text-sm font-semibold">
                  2022 - 2023
                </div>
              </div>

              {/* Timeline Line (15% width for central line) */}
              <div className="flex-none w-[15%] flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>

              {/* Right Column (30% width) */}
              <div className="flex-none w-[30%] pl-4 flex flex-col text-right">
                <div className="text-red-500 font-semibold">
                  Hostess
                </div>
              </div>
            </div>

            {/* Garde d’enfants et Professeur particulier */}
            <div className="flex h-48">
              {/* Left Column (70% width) */}
              <div className="flex-none w-[70%] pr-4 flex flex-col items-start text-left">
                <div className="p-1 bg-red-900 text-white text-sm font-semibold rounded-lg w-fit">
                  Bordeaux & Paris
                </div>
                <div className="text-red-900 text-sm font-semibold">
                  2019 - 2024
                </div>
              </div>

              {/* Timeline Line (15% width for central line) */}
              <div className="flex-none w-[15%] flex justify-center">
                <div className="w-1 h-full bg-gray-600 rounded relative">
                  <div className="absolute w-5 h-5 rounded-full ring-4 ring-red-400 bg-white -left-2"></div>
                </div>
              </div>

              {/* Right Column (30% width) */}
              <div className="flex-none w-[30%] pl-4 flex flex-col text-right">
                <div className="text-red-500 font-semibold">
                  Garde d’enfants et Professeur particulier
                </div>
              </div>
            </div>
          </motion.div>


        </div>

        </div>
        
        {/* SVG CONTAINER */}
        <div className="hidden lg:block w-1/3 sticky top-0 z-30 xl:w-1/2">
          <Brain scrollYProgress={scrollYProgress} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
