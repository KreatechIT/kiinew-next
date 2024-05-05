"use client";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Slide } from "react-awesome-reveal";

const Paths = [
  { name: "Home", path: "/" },
  { name: "Pages", path: "/about-us" },
  {
    name: "About",
    path: "/",
    subsections: [],
  },
  { name: "Products", path: "/our-work" },
  { name: "Store", path: "/team" },
  {
    name: "Contact",
    path: "/",
    subsections: [],
  },
];

function Header() {
  const [hovered, setHovered] = useState(false);
  const [hoveredIndex, setHoveredIndex] = useState(null);
  return (
    <div className="flex w-[60%] p-[20px] justify-between items-center space-x-[30px] place-items-center">
      <div>
        <Image
          alt="Logo"
          src={`https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/WhatsApp-Image-2024-05-05-at-14.20.12_77c8b949.jpg`}
          width={100}
          height={100}
        />
      </div>
      <div className="flex place-items-center space-x-[40px]">
        <div className="flex flex-row space-x-[30px]">
          {Paths.map((data, index) => (
            <Link
              href=""
              key={index}
              className="relative overflow-hidden"
              onMouseEnter={() => {
                setHovered(true);
                setHoveredIndex(index);
              }}
              onMouseLeave={() => {
                setHovered(false);
                setHoveredIndex(null);
              }}
            >
              {hovered && hoveredIndex == index && (
                <Slide direction="left" duration={500}>
                  <div className="bg-amber-500 z-[-100] rounded-2xl top-2 h-[10px] w-full absolute transition-all duration-700" />
                </Slide>
              )}
              <h1 className="tracking-[2.5px] text-[18px] z-50">{data.name}</h1>
            </Link>
          ))}
        </div>
        <div className="flex place-items-center space-x-[15px]">
          <Link href="">
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
      {/* <div>
        <div className="w-[500px] pl-[10px] justify-between px-[6px] flex place-content-center place-items-center h-[60px] border-2 border-black rounded-[35px]">
          <input placeholder="Search" className="w-auto p-[3px] outline-none" />
          <button className="p-[3px] text-[20px] w-[120px] rounded-[25px] text-white h-[45px] bg-[#FC7457]">
            SEARCH
          </button>
        </div>
      </div> */}
    </div>
  );
}

export default Header;
