"use client";

import React, { useState, useEffect, useRef } from "react";

import { usePathname } from "next/navigation";
import Image from "next/image";
import Link from "next/link";

import MenuButton from "./MenuButton";

import navData from "../data/navData.json";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const lastScroll = useRef(0);

  const pathname = usePathname();
  const prevPathRef = useRef(pathname);

  const menuOpenRef = useRef(menuOpen);

  // Keep ref up-to-date
  useEffect(() => {
    menuOpenRef.current = menuOpen;
  }, [menuOpen]);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (menuOpenRef.current) return;
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(() => {
          const current = window.scrollY;
          setVisible(current <= 0 ? true : current < lastScroll.current);
          lastScroll.current = current;
          ticking = false;
        });
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      const isNowMobile = window.innerWidth < 1024;
      if (!isNowMobile) setMenuOpen(false);
    };

    handleResize(); // Set initial value after hydration
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Whenever the pathname changes, close the menu
  useEffect(() => {
    if (menuOpen && pathname !== prevPathRef.current) {
      setMenuOpen(false);
    }
    prevPathRef.current = pathname;
  }, [pathname, menuOpen]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50 w-full bg-[#0a0a0a] shadow transition-transform duration-300
        ${visible ? "translate-y-0" : "-translate-y-full"}
      `}
      style={{ willChange: "transform" }}
    >
      <nav className="w-full flex items-center justify-between px-4 md:px-6 lg:px-8 mx-auto py-5">
        {/* Mobile Menu Button */}
        <div className="lg:hidden">
          <MenuButton isOpened={menuOpen} setIsOpened={setMenuOpen} />
        </div>

        {/* Logo */}
        <div className="flex-1 flex justify-center items-center lg:justify-start lg:flex-none">
          <Link
            href="/"
            className="flex-none rounded-xl text-xl inline-block font-semibold focus:outline-none focus:opacity-80"
            aria-label="Preline"
          >
            <Image
              src="/EF-full-logo-white.png"
              height={120}
              width={180}
              alt="Emmanuel Fombu Logo"
            />
          </Link>
        </div>

        {/* Navigation Links (hidden on mobile, show on lg) */}
        <div
          className={`absolute top-full left-0 w-full bg-[#0a0a0a] z-40
                      overflow-hidden transition-all duration-600 ease-out
                      lg:static lg:w-auto lg:bg-transparent text-center py-10 text-4xl
                      ${
                        menuOpen
                          ? "pointer-events-auto opacity-100 translate-y-0 h-[100vh] overflow-y-auto"
                          : "pointer-events-none opacity-0 -translate-y-4 h-0"
                      }
                      lg:opacity-100 lg:translate-y-0 lg:pointer-events-auto lg:h-auto lg:text-base lg:pt-3 lg:block`}
          style={{
            maxHeight: menuOpen ? "calc(100vh - 80px)" : "0", // Adjust height dynamically
            overflowY: menuOpen ? "auto" : "hidden", // Enable scrolling when open
          }}
        >
          <div className="flex flex-col items-center justify-center gap-y-6 lg:flex-row lg:gap-y-0 lg:gap-x-4 lg:mt-0">
            {navData.map(({ label, link }, index) => {
              const isActive = pathname === link;
              return (
                <div
                  key={label}
                  className={`flex flex-col justify-center items-center ${
                    menuOpen ? "w-full" : "lg:ps-6"
                  }`}
                >
                  {menuOpen && index !== 0 && (
                    <div className="w-[30%] border-t border-[#d0bfa150] border-solid mb-3" />
                  )}

                  {isActive ? (
                    <span
                      className="animated-underline text-white cursor-default pointer-events-none transition block py-0"
                      aria-current="page"
                    >
                      {label}
                    </span>
                  ) : (
                    <Link
                      href={link}
                      className="animated-underline text-white hover:text-primary-400 focus:outline-none focus:text-primary-400 transition block py-0"
                    >
                      {menuOpen ? <h1 className="mt-3">{label}</h1> : label}
                    </Link>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Action Icons */}
        <div className="flex items-center gap-x-4 lg:gap-x-6 py-1 lg:ps-6">
          <Link
            href="/contact"
            target="_self"
            className="group inline-block text-white px-6 md:px-8 py-2 border border-white font-medium text-center text-sm"
          >
            <span className="animated-underline">Contact</span>
          </Link>
        </div>
      </nav>
    </header>
  );
}
