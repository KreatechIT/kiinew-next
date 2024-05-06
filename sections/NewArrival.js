"use client";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { PhotoProvider, PhotoView } from "react-photo-view";

const DummyProducts = [
  {
    name: "WOODEN CHAIR",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-1.jpg",
    price: "1999",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    name: "MINIMALIST WOO TOYS",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-2.jpg",
    price: "9399",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    name: "CONCRETE SHAVING KIT",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-3.jpg",
    price: "9959",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    name: "PARAGON PENDANT",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-4.jpg",
    price: "9919",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    name: "WOODEN CHAIR",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-1.jpg",
    price: "9959",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    name: "MINIMALIST WOO TOYS",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-2.jpg",
    price: "929",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    name: "CONCRETE SHAVING KIT",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-3.jpg",
    price: "939",
    desc: "Lorem ipsum dolor sit amet",
  },
  {
    name: "PARAGON PENDANT",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-4.jpg",
    price: "989",
    desc: "Lorem ipsum dolor sit amet",
  },
];

function NewArrival() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-auto flex w-1/2 flex-col py-[60px] justify-center items-center">
        <h1 className="text-black text-center text-[40px] font-semibold tracking-[6px]">
          NEW ARRIVAL
        </h1>
        <p className="text-black mt-[20px] text-center text-[16px] tracking-[4px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus maximus vehicula. Sed feugiat, tellus vel tristique posuere,
          diam
        </p>
      </div>
      <PhotoProvider>
        <div className="flex justify-center items-center flex-row flex-wrap">
          {DummyProducts.map((product, index) => (
            <PhotoView key={index} src={product.image}>
              <div
                onMouseEnter={() => {
                  setIsHovered(true);
                  setHoveredIndex(index);
                }}
                onMouseLeave={() => {
                  setIsHovered(false);
                  setHoveredIndex(null);
                }}
                className="w-[320px] overflow-hidden relative h-[480px] border-2 border-black/20"
              >
                {hoveredIndex == index && isHovered && (
                  <Fade className="w-full h-[75%] shadow-amber-600/70 shadow-3xl bg-amber-600/70 absolute z-[9]">
                    <div className="">
                      <Slide direction="down">
                        <h1
                          className={`text-white place-self-end p-5 text-right text-[18px] font-semibold`}
                        >
                          $ {product.price}
                        </h1>
                      </Slide>
                      <Fade className="flex mt-[100px] justify-center items-center">
                        <div className="bg-white hover:scale-110 transition-all cursor-pointer rounded-full size-[90px] flex place-items-center place-content-center">
                          <FontAwesomeIcon
                            icon={faSearch}
                            color="black"
                            style={{
                              width: "20px",
                              height: "20px",
                            }}
                          />
                        </div>
                      </Fade>
                    </div>
                  </Fade>
                )}
                <div>
                  <Image
                    src={product.image}
                    height={400}
                    width={400}
                    className={`${
                      hoveredIndex == index && isHovered && "scale-110"
                    } transition-all duration-700`}
                  />
                </div>
                <div className="h-auto left-0 right-0 absolute z-[99] flex flex-col py-[40px] justify-center items-center">
                  <h1
                    className={`text-black ${
                      hoveredIndex == index && isHovered && "text-white"
                    } text-center text-[15px] font-semibold tracking-[4px]`}
                  >
                    {product.name}
                  </h1>
                  <p
                    className={`text-black ${
                      hoveredIndex == index && isHovered && "text-black"
                    } mt-[10px] font-playfair text-center text-[16px]`}
                  >
                    {product.desc}
                  </p>
                  <h1
                    className={`text-black ${
                      hoveredIndex == index &&
                      isHovered &&
                      "text-black scale-110"
                    } text-center laptop:hidden mobile:flex mt-3 text-[15px] font-semibold`}
                  >
                    $ {product.price}
                  </h1>
                </div>
              </div>
            </PhotoView>
          ))}
        </div>
      </PhotoProvider>
    </div>
  );
}

export default NewArrival;
