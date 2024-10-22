"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { NAV_LINKS } from "@/constants";
import Button from "./Button";
const NavBar = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
  };
  return (
    <nav className="flexBetween max-container padding-container relative z-30 py-5">
      <Link href="/">
        <Image src="/hilink-logo.svg" alt="logo" width={72} height={29}></Image>
      </Link>

      <ul className="hidden h-full gap-12 lg:flex">
        {NAV_LINKS.map((link) => (
          <Link
            href={link.href}
            key={link.key}
            className="regular-16 text-gray-50 flex-center cursor-pointer pb-1.5 transition-all hover:font-bold"
          >
            {link.label}
          </Link>
        ))}
      </ul>

      <div className="hidden lg:flex lg:items-center lg:justify-center">
        <Button
          type="button"
          title="Log In"
          icon="/user.svg"
          variant="btn_dark_green"
        />
      </div>

      <Image
        src="menu.svg"
        alt="menu"
        width={32}
        height={32}
        className="inline-block cursor-pointer lg:hidden"
        onClick={toggleMenu}
      />
      {isMenuOpen && (
        <div className="absolute top-16 right-0 w-64 bg-white shadow-lg z-50 rounded-lg">
          <ul className="flex flex-col items-center gap-4 p-4">
            {NAV_LINKS.map((link) => (
              <Link
                href={link.href}
                key={link.key}
                className="regular-16 text-gray-800 cursor-pointer pb-1.5 transition-all hover:font-bold"
              >
                {link.label}
              </Link>
            ))}

            <Button
              type="button"
              title="Log In"
              icon="/user.svg"
              variant="btn_dark_green"
            />
          </ul>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
