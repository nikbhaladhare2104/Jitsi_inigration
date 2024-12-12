"use client";

import { useEffect, useState, useRef } from "react";
import { useWindowScroll } from "react-use";
import clsx from "clsx";
import gsap from "gsap";
import Link from "next/link";

const navItems: string[] = ["Home", "Services", "Products", "About", "Contact"];

const Header = () => {
  const [isNavVisible, setIsNavVisible] = useState<boolean>(true);
  const [lastScrollY, setLastScrollY] = useState<number>(0);
  const { y: currentScrollY } = useWindowScroll();
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Effect to detect scroll direction and hide/show navbar
  useEffect(() => {
    if (currentScrollY === 0) {
      setIsNavVisible(true); // When at the top of the page, show the navbar
    } else if (currentScrollY > lastScrollY) {
      setIsNavVisible(false); // Scrolling down, hide navbar
    } else if (currentScrollY < lastScrollY) {
      setIsNavVisible(true); // Scrolling up, show navbar
    }

    setLastScrollY(currentScrollY);
  }, [currentScrollY, lastScrollY]);

  // GSAP animation for navbar sliding in and out
  useEffect(() => {
    gsap.to(navContainerRef.current, {
      y: isNavVisible ? 0 : -80, // Adjust the navbar's vertical position
      opacity: isNavVisible ? 1 : 0, // Fade the navbar in and out
      duration: 0.3, // Duration for the transition
    });
  }, [isNavVisible]);

  return (
    <div
      ref={navContainerRef}
      className={clsx(
        "fixed inset-x-0 top-4 z-50 h-16 border-none transition-all duration-700 sm:inset-x-6",
        {
          "opacity-100": isNavVisible,
          "opacity-0": !isNavVisible,
        }
      )}
    >
      <header className="absolute top-1/2 w-full -translate-y-1/2">
        <nav className="flex size-full items-center justify-between p-4">
          {/* Logo */}
          <div className="flex items-center gap-7">
            <p>Nikhil</p>
          </div>

          {/* Navigation Links */}
          <div className="flex h-full items-center space-x-8">
            {navItems.map((item, index) => (
              <Link
                key={index}
                href={`#${item.toLowerCase()}`}
                className="text-white hover:opacity-75"
              >
                {item}
              </Link>
            ))}
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
