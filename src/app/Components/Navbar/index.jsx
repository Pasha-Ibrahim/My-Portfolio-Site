"use client";

import { useState } from "react";
import Link from "next/link";
import { Home, User, Info, Menu, X } from "lucide-react";

const Navbar = () => {
  // Menu açılıb-bağlanması üçün state
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { id: 0, title: "Home", path: "/" },
    { id: 1, title: "About", path: "/about" },
    { id: 2, title: "Contact", path: "/contact" },
    { id: 3, title: "Users", path: "/users" },
  ];

  return (
    <nav className="bg-slate-900 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          PashaDev
        </Link>

        {/* Hamburger for mobile */}
        {/* <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button> */}

        {/* Menu */}
        <div
        // className={`flex-col md:flex-row md:flex items-center gap-6 md:static absolute top-full left-0 w-full md:w-auto bg-slate-900 md:bg-transparent transition-all ${
        //   menuOpen ? "flex" : "hidden"
        // }`}
        >
          {links.map(({ id, title, path }) => {
            return (
              <Link key={id} href={path}>
                {title}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
