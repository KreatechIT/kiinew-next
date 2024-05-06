import Image from "next/image";
import Link from "next/link";
import React from "react";

function Header() {
  return (
    <div className="flex w-full p-[20px]">
      <div>
        {/* <Image
          alt="Logo"
          src={`https://jrenterprise.com.bd/_next/image?url=%2F_next%2Fstatic%2Fmedia%2Fjr-logo-white.e0360d2b.png&w=384&q=75`}
          width={200}
          height={200}
        /> */}
      </div>
      <div>
        <div className="w-[500px] pl-[10px] justify-between px-[6px] flex place-content-center place-items-center h-[60px] border-2 border-black rounded-[35px]">
          <input placeholder="Search" className="w-auto p-[3px] outline-none" />
          <button className="p-[3px] text-[20px] w-[120px] rounded-[25px] text-white h-[45px] bg-[#FC7457]">
            SEARCH
          </button>
        </div>
        <div>
          <div></div>
        </div>
      </div>
    </div>
  );
}

export default Header;
