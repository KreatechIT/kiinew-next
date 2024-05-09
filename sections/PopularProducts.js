"use client";
import {
  faCartShopping,
  faChevronLeft,
  faChevronRight,
  faSearch,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Image from "next/image";
import React, { useRef, useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { PhotoProvider, PhotoView } from "react-photo-view";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Autoplay, EffectCreative } from "swiper/modules";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import Link from "next/link";

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

function PopularProducts() {
  const swiperRef = useRef();
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="h-auto flex w-1/2 flex-col py-[60px] justify-center items-center">
        <h1 className="text-black text-center text-[40px] font-semibold tracking-[6px]">
          YOU MAY LIKE IT
        </h1>
        <p className="text-black mt-[20px] text-center text-[16px] tracking-[4px]">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
          faucibus maximus vehicula. Sed feugiat, tellus vel tristique posuere,
          diam
        </p>
      </div>
      <div className="w-full relative flex laptop:flex-row mobile:flex-col content-center  pl-[5%] justify-center items-center mb-[100px]">
        <div
          onClick={() => {
            swiperRef.current.slidePrev();
          }}
          className="absolute bg-black/60 size-[60px] flex justify-center items-center top-1/2 transform -translate-y-1/2 left-0 z-[9000000] hover:bg-black/80 cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faChevronLeft}
            color="white"
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        </div>

        <PhotoProvider className="laptop:h-[580px] mobile:h-0">
          <Swiper
            slidesPerView={4}
            pagination={{ type: "progressbar" }}
            onSwiper={(swiper) => {
              swiperRef.current = swiper;
            }}
            spaceBetween={5}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop
            className="laptop:h-[580px] mobile:h-0 w-[90%] flex laptop:flex-row mobile:flex-col justify-center items-center " // Adjust this height based on your preference
          >
            {DummyProducts.map((product, index) => (
              <SwiperSlide key={index}>
                <PhotoView src={product.image}>
                  <div
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setHoveredIndex(index);
                    }}
                    onMouseLeave={() => {
                      setIsHovered(false);
                      setHoveredIndex(null);
                    }}
                    className="w-[96%] overflow-hidden relative h-full border-2 border-black/20"
                  >
                    {hoveredIndex == index && isHovered && (
                      <Fade className="w-full h-[100%] shadow-amber-600/70 shadow-3xl bg-amber-600/70 absolute z-[9]">
                        <div className="">
                          <Slide direction="down">
                            <h1
                              className={`text-white place-self-end p-5 text-right text-[18px] font-semibold`}
                            >
                              $ {product.price}
                            </h1>
                          </Slide>
                          <Fade className="flex mt-[100px] justify-center items-center">
                            <div className="bg-white px-[20px] justify-between hover:scale-110 transition-all rounded-3xl w-[150px] h-[50px] flex place-items-center place-content-center">
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
                                  icon={faHeart}
                                  color="black"
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                  }}
                                />
                              </Link>
                            </div>
                          </Fade>
                        </div>
                      </Fade>
                    )}
                    <div>
                      <Image
                        alt=""
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
                        } text-center mt-3 text-[15px] font-semibold`}
                      >
                        $ {product.price}
                      </h1>
                    </div>
                  </div>
                </PhotoView>
              </SwiperSlide>
            ))}
          </Swiper>
        </PhotoProvider>
        <PhotoProvider className="laptop:hidden mobile:flex justify-center items-center">
          <Swiper
            slidesPerView={1}
            pagination={{ type: "progressbar" }}
            spaceBetween={5}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
            modules={[Autoplay]}
            loop
            className="laptop:h-0 mobile:h-[560px] mobile:w-[90%] laptop:w-0 flex laptop:flex-row mobile:flex-col justify-center items-center " // Adjust this height based on your preference
          >
            {DummyProducts.map((product, index) => (
              <SwiperSlide key={index}>
                <PhotoView src={product.image}>
                  <div
                    onMouseEnter={() => {
                      setIsHovered(true);
                      setHoveredIndex(index);
                    }}
                    onMouseLeave={() => {
                      setIsHovered(false);
                      setHoveredIndex(null);
                    }}
                    className="w-full overflow-hidden relative h-full border-2 border-black/20"
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
                            <div className="bg-white px-[20px] justify-between hover:scale-110 transition-all rounded-3xl w-[150px] h-[50px] flex place-items-center place-content-center">
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
                                  icon={faHeart}
                                  color="black"
                                  style={{
                                    width: "20px",
                                    height: "20px",
                                  }}
                                />
                              </Link>
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
                        } text-center mt-3 text-[15px] font-semibold`}
                      >
                        $ {product.price}
                      </h1>
                    </div>
                  </div>
                </PhotoView>
              </SwiperSlide>
            ))}
          </Swiper>
        </PhotoProvider>
        <div
          onClick={() => {
            swiperRef.current.slideNext();
          }}
          className="absolute bg-black/60 size-[60px] flex justify-center items-center top-1/2 transform -translate-y-1/2 right-0 z-[9000000] hover:bg-black/80 cursor-pointer"
        >
          <FontAwesomeIcon
            icon={faChevronRight}
            color="white"
            style={{
              width: "20px",
              height: "20px",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default PopularProducts;
