"use client";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import {
  faBars,
  faCartShopping,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";
import { usePathname } from "next/navigation";
import MobileHeader from "./MobileHeader";

const Paths = [
  { name: "Home", path: "/" },
  { name: "Shop", path: "/shop" },
  {
    name: "About",
    path: "/about",
    subsections: [],
  },
  { name: "Products", path: "/products" },
  { name: "Store", path: "/store" },
  {
    name: "Contact",
    path: "/contact",
    subsections: [],
  },
];

function Header() {
  const pathname = usePathname();
  const [hovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const [isScrolling, setIsScrolling] = useState(false);

  const [drawerOpen, setDrawerOpen] = useState(false);
  const [active, setActive] = useState(false);

  const handleToggleDrawer = () => {
    setActive(!active);
    setDrawerOpen(!drawerOpen);
    document.body.style.overflow = drawerOpen ? "auto" : "hidden"; // Prevent scrolling when drawer is open
  };

  const handleCloseDrawer = () => {
    setActive(false);
    setDrawerOpen(false);
    document.body.style.overflow = "auto"; // Enable scrolling when drawer is closed
  };

  return (
    <>
      <div className="laptop:hidden absolute top-0 left-0 p-2 mobile:flex">
        <button onClick={handleToggleDrawer}>
          <FontAwesomeIcon
            icon={faBars}
            color="black"
            style={{
              height: "40px",
              width: "40px",
            }}
            className="bg-white p-1"
          />
        </button>
        <MobileHeader
          active={active}
          drawerOpen={drawerOpen}
          handleCloseDrawer={handleCloseDrawer}
        />
      </div>
      <div
        onScroll={() => {
          setIsScrolling(true);
        }}
        className={`mobile:hidden laptop:flex ${
          isScrolling ? "h-[70px]" : "h-[80px]"
        } w-[70%] overflow-hidden rounded-2xl p-[20px] justify-center items-center fixed bg-white/60  place-items-center`}
      >
        <div className="absolute w-full h-full bg-white/50 blur-sm" />
        <div className="flex h-[70px] sticky space-x-[30px] place-items-center">
          <div className="h-[100px] w-[100px]">
            <Image
              alt="Logo"
              src={`https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/kiinew_logo.png`}
              width={200}
              height={200}
            />
          </div>
          <div className="flex place-items-center space-x-[40px]">
            <div className="flex flex-row space-x-[30px]">
              {Paths.map((data, index) => (
                <Link
                  href={data.path}
                  key={index}
                  className="relative" // Setting relative positioning for the container
                  onMouseEnter={() => {
                    setHovered(true);
                    setHoveredIndex(index);
                  }}
                  onMouseLeave={() => {
                    setHovered(false);
                    setHoveredIndex(null);
                  }}
                >
                  {/* Background div with absolute positioning and lower z-index to ensure it's behind the text */}
                  {hovered && hoveredIndex === index && (
                    <Slide direction="left" duration={500}>
                      <div className="bg-amber-400 z-0 rounded-2xl top-2 h-[10px] w-full absolute transition-all duration-700" />
                    </Slide>
                  )}
                  {pathname == data.path && (
                    <Slide direction="left" duration={500}>
                      <div className="bg-amber-400 z-0 rounded-2xl top-2 h-[10px] w-full absolute transition-all duration-700" />
                    </Slide>
                  )}

                  {/* Text with higher z-index */}
                  <h1 className="tracking-[2.5px] text-[18px] relative z-10">
                    {" "}
                    {/* Increased z-index to ensure it is on top */}
                    {data.name}
                  </h1>
                </Link>
              ))}
            </div>
            <div className="flex place-items-center space-x-[15px]">
              <Link
                href={
                  localStorage.getItem("access_token") ? "/profile" : "/login"
                }
              >
                <FontAwesomeIcon
                  icon={faUser}
                  color="black"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Link>
              <Link href="">
                <FontAwesomeIcon
                  icon={faCartShopping}
                  color="black"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Link>
              <Link href="">
                <FontAwesomeIcon
                  icon={faSearch}
                  color="black"
                  style={{
                    width: "20px",
                    height: "20px",
                  }}
                />
              </Link>
            </div>
          </div>
        </div>
        {/* <div>
        <div className="w-[500px] pl-[10px] justify-between px-[6px] flex place-content-center place-items-center h-[60px] border-2 border-black rounded-[35px]">
          <input placeholder="Search" className="w-auto p-[3px] outline-none" />
          <button className="p-[3px] text-[20px] w-[120px] rounded-[25px] text-white h-[45px] bg-[#FC7457]">
            SEARCH
          </button>
        </div>
      </div> */}
      </div>
    </>
  );
}

export default Header;
