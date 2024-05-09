"use client";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faCartShopping, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ConfigProvider, Pagination, Select } from "antd";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Fade, Slide } from "react-awesome-reveal";
import { PhotoProvider, PhotoView } from "react-photo-view";

const DummyProducts = [
  {
    id: 1,
    name: "WOODEN CHAIR",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-1.jpg",
    price: "1999",
    desc: "Lorem ipsum dolor sit amet",
    discount: 0,
  },
  {
    id: 2,
    name: "MINIMALIST WOO TOYS",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-2.jpg",
    price: "9399",
    desc: "Lorem ipsum dolor sit amet",
    discount: 0,
  },
  {
    id: 3,
    name: "CONCRETE SHAVING KIT",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-3.jpg",
    price: "9959",
    desc: "Lorem ipsum dolor sit amet",
    discount: 60,
  },
  {
    id: 4,
    name: "PARAGON PENDANT",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-4.jpg",
    price: "9919",
    desc: "Lorem ipsum dolor sit amet",
    discount: 0,
  },
  {
    id: 5,
    name: "WOODEN CHAIR",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-1.jpg",
    price: "9959",
    desc: "Lorem ipsum dolor sit amet",
    discount: 90,
  },
  {
    id: 6,
    name: "MINIMALIST WOO TOYS",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-2.jpg",
    price: "929",
    desc: "Lorem ipsum dolor sit amet",
    discount: 0,
  },
  {
    id: 7,
    name: "CONCRETE SHAVING KIT",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-3.jpg",
    price: "939",
    desc: "Lorem ipsum dolor sit amet",
    discount: 10,
  },
  {
    id: 8,
    name: "PARAGON PENDANT",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-4.jpg",
    price: "989",
    desc: "Lorem ipsum dolor sit amet",
    discount: 0,
  },
  {
    id: 9,
    name: "WOODEN CHAIR",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-1.jpg",
    price: "9959",
    desc: "Lorem ipsum dolor sit amet",
    discount: 0,
  },
  {
    id: 10,
    name: "MINIMALIST WOO TOYS",
    image:
      "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-2.jpg",
    price: "929",
    desc: "Lorem ipsum dolor sit amet",
    discount: 0,
  },
];

const categoryNumbers = [
  {
    name: "Chair",
    num: 23,
  },
  {
    name: "Bag",
    num: 32,
  },
  {
    name: "Sofa",
    num: 87,
  },
  {
    name: "Bed",
    num: 34,
  },
  {
    name: "Shoes",
    num: 56,
  },
  {
    name: "Table",
    num: 78,
  },
];

function ShopProducts() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div className="flex">
      <div className="laptop:flex  items-center flex-col mobile:hidden w-[20%] ml-[2%] mt-[60px]">
        <div className="flex flex-col w-[90%] items-start">
          <div className="flex mb-[30px] place-items-center space-x-4 place-content-center">
            <div className="bg-amber-600 size-[10px]" />
            <p className="text-[23px] tracking-[5px]">Categories</p>
          </div>
          {categoryNumbers.map((data, index) => (
            <div
              key={index}
              className="flex cursor-pointer hover:text-amber-600 transition-all w-full px-[15px] py-[10px] border-b-2 border-black/40 text-[20px] text-black/70 justify-between place-items-center place-content-center"
            >
              <div>
                <div className="bg-black h-[2px] w-[1px]" />
                <p>{data.name}</p>
              </div>
              <div>
                <p>{data.num}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col w-[90%] mt-[60px] items-start">
          <div className="flex mb-[30px] place-items-center space-x-4 place-content-center">
            <div className="bg-amber-600 size-[10px]" />
            <p className="text-[23px] tracking-[5px]">Popular Tags</p>
          </div>
          <div className="flex flex-wrap gap-3">
            {categoryNumbers.map((data, index) => (
              <div
                key={index}
                className="flex cursor-pointer hover:text-amber-600 transition-all w-auto px-[15px] py-[10px] border-2 border-black/40 text-[20px] text-black/70 justify-between place-items-center place-content-center"
              >
                <div>
                  <div className="bg-black h-[2px] w-[1px]" />
                  <p>{data.name}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex flex-col w-[90%] mt-[60px] items-start">
          <div className="flex mb-[30px] place-items-center space-x-4 place-content-center">
            <div className="bg-amber-600 size-[10px]" />
            <p className="text-[23px] tracking-[5px]">BRANDS</p>
          </div>
          {categoryNumbers.map((data, index) => (
            <div
              key={index}
              className="flex cursor-pointer hover:text-amber-600 transition-all w-full px-[15px] py-[10px] border-b-2 border-black/40 text-[20px] text-black/70 justify-between place-items-center place-content-center"
            >
              <div>
                <div className="bg-black h-[2px] w-[1px]" />
                <p>{data.name}</p>
              </div>
              <div>
                <p>{data.num}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="flex laptop:w-[80%] mobile:w-full flex-col justify-center items-center">
        <div className="h-auto flex mobile:w-full laptop:w-[85%] flex-row py-[60px] mobile:justify-center laptop:justify-between items-center">
          <p className="mobile:text-[14px] mobile:hidden laptop:flex laptop:text-[20px] text-black/40">
            Showing 1 - 10 of 30 products
          </p>
          <div className="mobile:space-x-0 laptop:space-x-[40px] flex flex-row">
            <Select
              className=""
              defaultValue="Sort By"
              style={{ width: 150, outline: "0px" }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled" },
              ]}
            />
            <Select
              className=""
              defaultValue="Filter By"
              style={{ width: 150, outline: "0px" }}
              options={[
                { value: "jack", label: "Jack" },
                { value: "lucy", label: "Lucy" },
                { value: "Yiminghe", label: "yiminghe" },
                { value: "disabled", label: "Disabled" },
              ]}
            />
          </div>
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
                  className="w-[320px] overflow-hidden relative h-[490px] border-2 border-black/20"
                >
                  {hoveredIndex == index && isHovered && (
                    <Fade className="w-full h-[75%] shadow-amber-600/70 shadow-3xl bg-amber-600/70 absolute z-[9]">
                      <div className="">
                        <Slide direction="down">
                          <h1
                            className={`text-white place-self-end p-5 text-right text-[22px] font-normal`}
                          >
                            $ {product.price}
                          </h1>
                        </Slide>
                        <Fade className="flex mt-[100px] justify-center items-center">
                          <div className="bg-white px-[20px] justify-between hover:scale-110 transition-all rounded-3xl w-[150px] h-[50px] flex place-items-center place-content-center">
                            <Link href={`/shop/${product.id}`}>
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
                  <div className="relative">
                    <Image
                      alt=""
                      src={product.image}
                      height={400}
                      width={400}
                      className={`${
                        hoveredIndex == index && isHovered && "scale-110"
                      } transition-all duration-700`}
                    />
                    {product.discount > 0 ? (
                      <div className="flex absolute top-0 right-0 flex-col text-[25px] justify-center items-center size-[90px] bg-amber-600 text-white">
                        <p>{product.discount}%</p>
                        <p>OFF</p>
                      </div>
                    ) : null}
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
            ))}
          </div>

          <section className="mt-[40px]">
            <ConfigProvider
              theme={{
                components: {
                  Pagination: {
                    itemActiveBg: "#E29E4E",
                  },
                },
                token: {
                  colorPrimary: "black",
                },
              }}
            >
              <Pagination defaultCurrent={1} total={50} />
            </ConfigProvider>
          </section>
        </PhotoProvider>
      </div>
    </div>
  );
}

export default ShopProducts;
