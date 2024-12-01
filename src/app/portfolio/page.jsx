"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const items = [
  {
    id: 1,
    color: "from-red-50 to-red-50",
    title: "",
    desc: "",
  },
  {
    id: 2,
    color: "from-red-50 to-red-300",
    title: "the POGODO",
    desc: "An adjustable and modular water bottle holder crafted from eco-conscious French leather. Designed and developed by a team of four, it was successfully launched on Kickstarter following an in-depth pricing analysis. This project strengthened skills in both project and team management, highlighting a strong entrepreneurial spirit. Through a targeted social media strategy, we achieved 200% of our initial sales goal, surpassing expectations.",
    img: "/ppogodo2.png",
  },
  {
    id: 3,
    color: "from-red-300 to-violet-300",
    title: "the BioCorset",
    desc: "The BioCorset project combines design and technical innovation to create a unique, sustainable corset made from algae-based bioplastic. The material is processed into a PLA filament, which is then 3D-printed to form the final structure. This project merges aesthetics and eco-friendly technology, resulting in a wearable piece that not only showcases advanced fabrication techniques but also highlights sustainable materials.",
    video: "/videocorset.mp4",
  },
  {
    id: 4,
    color: "from-violet-300 to-blue-300",
    title: "Art of Life",
    desc: "Art of Life is an immersive, interactive tunnel designed to capture real-time physiological data—like heart rate (BPM), breathing patterns, and perspiration. These inputs are translated into a dynamic 3D visual that responds to each user’s unique physiological state. By visualizing the user’s biometrics, the project aims to create a personalized, calming experience intended to reduce stress. The reactive 3D visuals adjust fluidly based on the user’s data, allowing for an evolving aesthetic that promotes relaxation and mindfulness as it responds to their changing physical state.",
    video: "/video rendu.mp4",
  },
  {
    id: 5,
    color: "from-blue-300 to-red-10",
    title: "",
    desc: "",
  },
];

const PortfolioPage = () => {
  const ref = useRef();
  const { scrollYProgress } = useScroll({ target: ref });
  const x = useTransform(scrollYProgress, [0, 1], ["0%", "-100%"]);

  return (
    <motion.div
      className="h-full"
      initial={{ y: "-200vh" }}
      animate={{ y: "0%" }}
      transition={{ duration: 1 }}
    >
      <div className="h-[600vh] relative" ref={ref}>
        <div className="w-screen h-[calc(100vh-6rem)] flex items-center justify-center text-8xl text-center" style={{ color: "#8C1C13" }}>
          My Projects
        </div>
        <div className="sticky top-0 flex h-screen gap-4 items-center overflow-hidden">
          <motion.div style={{ x }} className="flex">
            {items.map((item) => (
              <div
                className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r ${item.color}`}
                key={item.id}
              >
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center text-white p-4 md:p-12">
                  {/* Spécifique pour POGODO */}
                  {item.title === "the POGODO" && item.img && (
                    <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[800px] lg:h-[350px] xl:w-[600px] xl:h-[420px] group overflow-hidden">
                      {/* Image avec hover */}
                      <Image
                        src={item.img}
                        alt=""
                        fill
                        className="rounded-lg transform transition duration-300 ease-in-out group-hover:scale-105 group-hover:brightness-125"
                      />
                      {/* Overlay avec texte */}
                      <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center opacity-0 transition-opacity duration-300 ease-in-out group-hover:opacity-100">
                        <Link href="/pogodo" passHref>
                          <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.3 }}
                            className="text-white text-center"
                          >
                            <h2 className="text-2xl font-bold">POGODO</h2>
                            <p className="text-sm">View More</p>
                          </motion.div>
                        </Link>
                      </div>
                    </div>
                  )}
                  {/* Vidéo ou Image pour les autres projets */}
                  {item.title !== "the POGODO" && (
                    <>
                      {item.img && (
                        <div className="relative w-80 h-56 md:w-96 md:h-64 lg:w-[800px] lg:h-[350px] xl:w-[600px] xl:h-[420px]">
                          <Image src={item.img} alt="" fill className="rounded-lg" />
                        </div>
                      )}
                      {item.video && (
                        <video
                          src={item.video}
                          controls
                          autoPlay
                          muted
                          loop
                          playsInline
                          className="rounded-lg w-full h-full object-cover"
                        />
                      )}
                    </>
                  )}
                  {/* Description */}
                  <div className="flex flex-col gap-4">
                    <h1 className="text-xl font-bold md:text-4xl lg:text-6xl xl:text-8xl">
                      {item.title}
                    </h1>
                    <p className="text-sm md:text-base lg:text-lg">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
      <div className="w-screen h-screen flex flex-col gap-16 items-center justify-center text-center">
        <h1 className="text-8xl">Are you interested by my profil ?</h1>
        <div className="relative">
          <motion.svg
            animate={{ rotate: 360 }}
            transition={{ duration: 8, ease: "linear", repeat: Infinity }}
            viewBox="0 0 300 300"
            className="w-64 h-64 md:w-[500px] md:h-[500px]"
          >
            <defs>
              <path
                id="circlePath"
                d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 "
              />
            </defs>
            <Link
            href="/CV Philomène Lamonnerie EN.pdf "
            target="_blank"
            rel="noopener noreferrer"
            >
              <text fill="#000">
                <textPath xlinkHref="#circlePath" className="text-xl">
                  Creative Engineer ¤ Project Manager ¤
                </textPath>
              </text>
            </Link>
          </motion.svg>
          <Link
            href="/CV Philomène Lamonnerie EN.pdf "
            target="_blank"
            rel="noopener noreferrer"
            className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center"
          >
            Download CV
          </Link>
        </div>
      </div>
    </motion.div>
  );
};

export default PortfolioPage;
