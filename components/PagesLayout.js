import Image from "next/image";
import Link from "next/link";
import React from "react";

function PagesLayout({ title }) {
  return (
    <div className="bg-amber-600/70 h-[700px] w-full relative flex justify-center items-center content-center justify-items-center">
      <Image
        alt=""
        src={
          "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240505-WA0011.jpg"
        }
        fill
        className="obejct-cover"
      />
      <div className="absolute bg-amber-600/70 w-full h-full" />
      <div className="absolute flex flex-col justify-center items-center">
        <p className="text-white tracking-[6px]  z-[99] text-center leading-[44px] py-[10px] mobile:text-[40px] laptop:text-[65px] font-bold">
          {title}
        </p>
        <p className="text-white/75 w-[50%] tracking-[2px] mt-[20px] z-[99] text-center leading-[24px] py-[10px] mobile:text-[14px] laptop:text-[16px] font-semibold">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus maximus vehicula. Sed feugiat, tellus vel tristique posuere,
          diam
        </p>
        <div className="flex mt-[20px] bg-black/70 rounded-3xl p-2 px-[20px] place-items-center space-x-[10px]">
          <Link
            href="/"
            className="text-white transition-colors cursor-pointer hover:text-[#39B54A] font-medium text-[15px]"
          >
            Home
          </Link>
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="20"
              height="20"
              fill="none"
              stroke="#39B54A"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className=""
            >
              <path d="M9 18l6-6-6-6" />
            </svg>
          </span>
          <p className="text-white transition-colors cursor-pointer hover:text-[#39B54A] font-medium text-[15px]">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
}

export default PagesLayout;
