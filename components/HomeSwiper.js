"use client";
import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import {
  Pagination,
  Navigation,
  Autoplay,
  EffectCreative,
} from "swiper/modules";
import Image from "next/image";
import { useSwiper } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faChevronLeft,
  faChevronRight,
} from "@fortawesome/free-solid-svg-icons";

const sliderImages = [
  {
    modules: EffectCreative,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -400],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    effect: "creative",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240505-WA0007.jpg",
  },
  {
    modules: EffectCreative,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-120%", 0, -500],
      },
      next: {
        shadow: true,
        translate: ["120%", 0, -500],
      },
    },
    effect: "creative",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240505-WA0008.jpg",
  },
  {
    modules: EffectCreative,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-20%", 0, -1],
      },
      next: {
        translate: ["100%", 0, 0],
      },
    },
    effect: "creative",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240505-WA0009.jpg",
  },
  {
    modules: EffectCreative,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [180, 0, 0],
      },
      next: {
        shadow: true,
        translate: [0, 0, -800],
        rotate: [-180, 0, 0],
      },
    },
    effect: "creative",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240505-WA0010.jpg",
  },
  {
    modules: EffectCreative,
    creativeEffect: {
      prev: {
        shadow: true,
        translate: ["-125%", 0, -800],
        rotate: [0, 0, -90],
      },
      next: {
        shadow: true,
        translate: ["125%", 0, -800],
        rotate: [0, 0, 90],
      },
    },
    effect: "creative",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240505-WA0011.jpg",
  },
  {
    modules: EffectCreative,
    creativeEffect: {
      prev: {
        shadow: true,
        origin: "left center",
        translate: ["-5%", 0, -200],
        rotate: [0, 100, 0],
      },
      next: {
        origin: "right center",
        translate: ["5%", 0, -200],
        rotate: [0, -100, 0],
      },
    },
    effect: "creative",
    image:
      "https://blog.jrrecyclingsolutionsltd.com.bd/wp-content/uploads/2024/05/IMG-20240505-WA0012.jpg",
  },
];

function HomeSwiper() {
  const swiperRef = useRef();
  const [selectedEffect, setSelectedEffect] = useState(sliderImages[3]);

  return (
    <div className="w-full relative">
      <div
        onClick={() => {
          setSelectedEffect(sliderImages[1]);
          swiperRef.current.slidePrev();
        }}
        className="absolute bg-black/60 w-[100px] h-[100px] flex justify-center items-center top-1/2 transform -translate-y-1/2 left-0 z-[90] hover:bg-black/80 cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faChevronLeft}
          color="white"
          style={{
            width: "40px",
            height: "40px",
          }}
        />
      </div>

      <Swiper
        pagination={{ type: "progressbar" }}
        onSwiper={(swiper) => {
          swiperRef.current = swiper;
        }}
        autoplay={{
          delay: 3500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, EffectCreative]}
        loop
        effect={"creative"}
        creativeEffect={selectedEffect.creativeEffect}
        className="h-screen" // Adjust this height based on your preference
      >
        {sliderImages.map((data, index) => (
          <SwiperSlide key={index}>
            <div className="relative w-full h-full">
              <Image
                alt=""
                src={data.image}
                layout="fill"
                className="object-cover brightness-[0.5]" // Increased brightness for better visibility
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div
        onClick={() => {
          swiperRef.current.slideNext();
          setSelectedEffect(sliderImages[2]);
        }}
        className="absolute bg-black/60 w-[100px] h-[100px] flex justify-center items-center top-1/2 transform -translate-y-1/2 right-0 z-[90] hover:bg-black/80 cursor-pointer"
      >
        <FontAwesomeIcon
          icon={faChevronRight}
          color="white"
          style={{
            width: "40px",
            height: "40px",
          }}
        />
      </div>
    </div>
  );
}

export default HomeSwiper;
