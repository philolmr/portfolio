"use client";
import Image from "next/image";
import Link from "next/link";

const POGODOPage = () => {
  return (
    <div className="container mx-auto p-4">
      {/* En-tête */}
      <header className="flex justify-between items-center py-4">
        {/* Logo à gauche */}
        <div className="w-32">
          <Image src="/logoTeam.png" alt="Logo POGODO" width={120} height={40} />
        </div>

        {/* Titre centré */}
        <h1 className="text-5xl font-bold text-[#FF2E50] text-center">
          POGODO
        </h1>

        {/* Lien Instagram à droite */}
        <div className="w-8">
          <Link
            href="https://www.instagram.com/pogodo_paris/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="/instagram.png"
              alt="Instagram"
              width={32}
              height={32}
              className="hover:opacity-75 transition-opacity"
            />
          </Link>
        </div>
      </header>

      {/* Image principale */}
      <div className="relative mb-8">
        <Image
          src="/bandeEmma.png"
          alt="Photo principale"
          width={1500}
          height={670}

        />
      </div>

      {/* Section avec texte à gauche et deux photos à droite */}
      <div className="flex flex-wrap md:flex-nowrap mb-12">
        {/* Texte à gauche */}
        <div className="md:w-2/3 pr-4">          
          <p className="text-lg leading-7">
          Why POGODO?
          </p>
          <p className="text-lg leading-7">
          ✅ Adaptability: POGODO is designed to accommodate all types of bottles and even cups. POGODO adapts to all your needs!
          </p>
          <p className="text-lg leading-7">
          ✨ Stress-Free Parties: With POGODO, you no longer have to worry about spilling your drinks. Our innovative design provides maximum stability, allowing you to fully enjoy your festive moments.
          </p>
          <p className="text-lg leading-7">
          🏞️ Adventure: Whether you're hiking, work at the office, or on the go, POGODO accompanies you everywhere. Stay hydrated at all times. Its resistance and durability make it the perfect companion for your daily activities.
          </p>
          <p className="text-lg leading-7">
          🌈 Design: Our discreet and elegant design blends perfectly with all your outfits. Turn every sip into a visual pleasure!
          </p>
          <p className="text-lg leading-7">
          🌞 Summer : A must-have gadget, especially in the summer when it's hot or the sun is beating down, what better way to keep your water bottle with you! 
          </p>
          <p className="text-lg leading-7">
          Don't let your water bottle ruin your days anymore. POGODO simplifies your life, whether you're on the move, at parties with friends, or just during a busy day.
          </p>

        </div>

        {/* Deux photos à droite */}
        <div className="md:w-1/3 flex flex-col gap-4">
          <div className="relative" >
            <Image
              src="/anneju.png"
              alt="Photo portrait 1"
              width={250}
              height={670}
              className="rounded-lg"
            />
          </div>
          {/* <div className="relative ">
            <Image
              src="/photoCV3.png"
              alt="Photo portrait 1"
              width={200}
              height={300}
              className="rounded-lg"
            />
          </div> */}
        </div>
      </div>

      {/* Section avec photo à gauche et texte à droite */}
      <div className="flex flex-wrap md:flex-nowrap mb-12">
        {/* Photo à gauche */}
        <div className="md:w-1/2 pr-4">
          <div className="relative">
            <Image
              src="/TheTeam.png"
              alt="Photo large"
              width={600}
              height={300}
              className="rounded-lg"              
            />
          </div>
        </div>

        {/* Texte à droite */}
        <div className="md:w-1/2 pl-4">
          <p className="text-lg leading-7">
            The POGODO team implemented a successful Kickstarter campaign,
            achieving 200% of our initial sales target. This success stems from
            a detailed pricing analysis, effective marketing strategies, and a
            commitment to delivering a high-quality product that meets the
            needs of eco-conscious consumers.
          </p>
        </div>
      </div>

      {/* Section "Sell in Kit" et "How to build it?" */}
      <div className="text-center my-12">
        <h2 className="text-3xl font-semibold mb-4">Sell in Kit</h2>
      </div>

      {/* Deux images côte à côte */}
      <div className="flex flex-wrap md:flex-nowrap gap-4">
        <div className="relative ">
          <Image
            src="/tuto pogodo.png"
            alt="Photo portrait 1"
            width={600}
            height={900}
            className="rounded-lg"
          />
        </div>
        <div className="relative">
          <Image
            src="/tuto pogodo2.png"
            alt="Photo portrait 1"
            width={600}
            height={900}
            className="rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default POGODOPage;
