"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const NavLink = ({ link }) => {
  const pathName = usePathname();

  return (
    <Link
    className={`rounded p-1 ${pathName === link.url ? "text-white" : "text-[#8C1C13]"}`}
      style={pathName === link.url ? { backgroundColor: "#8C1C13" } : {}}
      href={link.url}
    >
      {link.title}
    </Link>
  );
};

export default NavLink;
