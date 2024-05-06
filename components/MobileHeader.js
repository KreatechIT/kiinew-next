import Image from "next/image";
import React from "react";

const Paths = [
  { name: "Home", path: "/" },
  { name: "Pages", path: "/pages" },
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

function MobileHeader({ active, drawerOpen, handleCloseDrawer }) {
  return (
    <div>
      <div
        className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${
          drawerOpen ? "block" : "hidden"
        }`}
        onClick={handleCloseDrawer}
      ></div>
      <div
        className={`fixed inset-y-0 left-0 mobile:w-[400px] laptop:w-[25%] bg-white z-[99999999999999] transform ${
          drawerOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform overflow-hidden duration-300 ease-in-out`}
      >
        <div className="flex justify-end p-4">
          <button className="text-xl" onClick={handleCloseDrawer}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>

        <div className="px-[30px]">
          <div className="h-[100px] w-[100px]">
            <Image
              alt="Logo"
              src={`https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/kiinew_logo.png`}
              width={200}
              height={200}
            />
          </div>
          <ul
            className={` z-30 top-0 mobile:flex laptop:right-0 ${
              active ? "ml-[14px] text-2xl" : "-translate-x-[400px]"
            } laptop:translate-x-0 transition-transform laptop:hidden justify-center mobile:flex-col text-2xl  text-start items-start space-y-[20px] py-[40px] font-medium`}
          >
            {Paths.map((el, index) => (
              <div>
                <h1>{el.name}</h1>
              </div>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;
