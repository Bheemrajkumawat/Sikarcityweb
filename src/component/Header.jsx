import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { navigationData } from "../utils/headerdata";
function Header() {
  return (
    <header className=" bg-surface sticky top-0 z-50 shadow-[0px_4px_20px_rgba(0,35,102,0.08)]">
      <div className="flex justify-between items-center w-full px-margin-desktop py-unit max-w-container-max mx-auto">
        <div className="flex items-center gap-stack-md">
          <Link to="/">
            <span className="font-headline-md text-headline-md font-bold text-primary cursor-pointer">
              Sikar City Directory
            </span>
          </Link>
        </div>
        <nav className="hidden md:flex items-center space-x-stack-lg">
          {navigationData?.map((item) => (
            <NavLink
              key={item.id}
              to={item.path}
              end={item.path === "/"}
              className={({ isActive }) =>
                `font-body-md pb-1 border-b-2 transition-all duration-300 ease-in-out ${
                  isActive
                    ? "text-primary font-bold border-primary scale-105"
                    : "text-on-surface-variant border-transparent hover:text-secondary hover:border-secondary"
                }`
              }
            >
              {item.name}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}

export default Header;
