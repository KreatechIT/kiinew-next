import React from "react";
import {
  faAddressBook,
  faArrowRightLong,
  faLocation,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import Link from "next/link";
import Image from "next/image";

function Footer() {
  return (
    <div className="mobile:mt-[20px] mobile:px-[20px] laptop:px-12 laptop:mt-[80px] pt-[70px] mobile:space-x-0 laptop:space-x-[160px] flex laptop:flex-row mobile:flex-col place-items-start pb-[20px] place-content-center w-full mobile:h-auto laptop:h-[494px] bg-slate-900">
      <div className="w-[20%] justify-center content-center items-center mobile:hidden laptop:flex space-y-[30px] flex-col place-content-center place-items-center">
        <div className="h-[100px] w-[100px]">
          <Image
            alt="Logo"
            src={`https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/kiinew_logo.png`}
            width={200}
            height={200}
          />
        </div>
        <div className="flex pl-[60px] flex-col space-y-6 place-items-start">
          <div className="flex space-x-4 place-content-center place-items-center">
            <FontAwesomeIcon
              icon={faLocation}
              color="white"
              style={{
                height: "30px",
                width: "30px",
              }}
            />
            <a
              target="https://www.google.com/maps/place/Kreatech/@23.8000239,90.421487,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c774ce336f95:0x49ae04add5f232ea!8m2!3d23.800019!4d90.4240619!16s%2Fg%2F11l22ht3nn?entry=ttu"
              href={
                "https://www.google.com/maps/place/Kreatech/@23.8000239,90.421487,17z/data=!3m1!4b1!4m6!3m5!1s0x3755c774ce336f95:0x49ae04add5f232ea!8m2!3d23.800019!4d90.4240619!16s%2Fg%2F11l22ht3nn?entry=ttu"
              }
              className="font-Nunito hover:font-bold hover:scale-105 transition-all cursor-pointer text-white w-[200px] text-left text-[17px] font-[300]"
            >
              Road 4, House 1, Baridhara J Block, Dhaka 1212
            </a>
          </div>
          <div className="flex space-x-4 place-content-center place-items-center">
            <FontAwesomeIcon
              icon={faPhone}
              color="white"
              style={{
                height: "30px",
                width: "30px",
              }}
            />
            <div className="flex flex-col ">
              <a
                target="tel:+8801836862130"
                href={"tel:+8801836862130"}
                className="font-Nunito hover:font-bold hover:scale-105 transition-all cursor-pointer text-white w-max text-left text-[17px] font-[300]"
              >
                +8801820000000
              </a>
              <a
                target="tel:+8801824442222"
                href={"tel:+8801824442222"}
                className="font-Nunito hover:font-bold hover:scale-105 transition-all cursor-pointer text-white w-max text-left text-[17px] font-[300]"
              >
                +8801820000000
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="laptop:hidden space-x-16 flex-row mobile:flex">
        <div className="flex flex-col space-y-[50px] place-items-start">
          <p className="font-[700] text-white text-[19px] font-Nunito">
            Helpful Links
          </p>
          <div className="flex flex-col space-y-[25px] place-items-start">
            {[
              {
                name: "Home",
                path: "",
              },
              {
                name: "Products",
                path: "",
              },
              {
                name: "Store",
                path: "",
              },
              {
                name: "Privacy Policy",
                path: "",
              },
              {
                name: "Designs",
                path: "",
              },
            ].map((data, index) => (
              <Link
                href={"/"}
                key={index}
                className="font-[300] text-[#E5E5E5]/70 text-[18px] font-Nunito"
              >
                {data.name}
              </Link>
            ))}
          </div>
        </div>
        <div className="flex flex-col space-y-[50px] place-items-start">
          <p className="font-[700] text-white text-[19px] font-Nunito">Shop</p>
          <div className="flex flex-col space-y-[25px] place-items-start">
            {[
              {
                name: "About Us",
                path: "",
              },
              {
                name: "Shipping Methods",
                path: "",
              },
              {
                name: "Career",
                path: "",
              },
              {
                name: "Contact Us",
                path: "",
              },
              {
                name: "Support",
                path: "",
              },
            ].map((data, index) => (
              <Link
                href={"/"}
                key={index}
                className="font-[300] text-[#E5E5E5]/70 text-[18px] font-Nunito"
              >
                {data.name}
              </Link>
            ))}
          </div>
        </div>
      </div>
      <div className="laptop:flex flex-col mobile:hidden space-y-[50px] place-items-start">
        <p className="font-[700] w-max text-white text-[19px] font-Nunito">
          Helpful Links
        </p>
        <div className="flex flex-col space-y-[25px] place-items-start">
          {[
            {
              name: "Home",
              path: "",
            },
            {
              name: "Products",
              path: "",
            },
            {
              name: "Store",
              path: "",
            },
            {
              name: "Privacy Policy",
              path: "",
            },
            {
              name: "Designs",
              path: "",
            },
          ].map((data, index) => (
            <Link
              key={index}
              href="/"
              className="font-[300] hover:font-bold hover:scale-105 transition-all text-[#E5E5E5]/70 text-[18px] font-Nunito"
            >
              {data.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="laptop:flex flex-col mobile:hidden space-y-[50px] place-items-start">
        <p className="font-[700] w-max text-white text-[19px] font-Nunito">
          Shop
        </p>
        <div className="flex flex-col space-y-[25px] place-items-start">
          {[
            {
              name: "About Us",
              path: "",
            },
            {
              name: "Shipping Methods",
              path: "",
            },
            {
              name: "Career",
              path: "",
            },
            {
              name: "Contact Us",
              path: "",
            },
            {
              name: "Support",
              path: "",
            },
          ].map((data, index) => (
            <Link
              key={index}
              href="/"
              className="font-[300] hover:font-bold hover:scale-105 transition-all text-[#E5E5E5]/70 text-[18px] font-Nunito"
            >
              {data.name}
            </Link>
          ))}
        </div>
      </div>
      <div className="flex mobile:mt-10 laptop:mt-0 flex-col space-y-[50px] place-items-start">
        <p className="font-[700] text-white text-[19px] font-Nunito">
          Newsletter
        </p>
        <div className="flex flex-col space-y-[25px] place-items-start">
          <p className="font-[300] text-[#E5E5E5]/70 text-[18px] font-Nunito">
            SUBSCRIBE TO OUR NEWSLETTER
          </p>
          <div className="w-[280px] px-5 justify-between flex place-content-center place-items-center content-center h-[48px] bg-white">
            <input
              placeholder="Enter your email here"
              className="font-Nunito outline-none text-[16px]"
            />
            <FontAwesomeIcon
              icon={faArrowRightLong}
              color="black"
              style={{
                height: "20px",
                width: "20px",
              }}
            />
          </div>
          <div className="pt-[40px] flex place-items-center space-x-5">
            <div className="hover:scale-110 transition-all cursor-pointer">
              <FontAwesomeIcon
                icon={faTwitter}
                color="white"
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </div>
            <div className="hover:scale-110 transition-all cursor-pointer">
              <FontAwesomeIcon
                icon={faInstagram}
                color="white"
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </div>
            <div className="hover:scale-110 transition-all cursor-pointer">
              <FontAwesomeIcon
                icon={faYoutube}
                color="white"
                style={{
                  height: "30px",
                  width: "30px",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
