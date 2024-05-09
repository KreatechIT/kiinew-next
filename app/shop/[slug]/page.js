"use client";
import PagesLayout from "@/components/PagesLayout";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import {
  faArrowLeftLong,
  faArrowRightLong,
  faChevronLeft,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Avatar, ConfigProvider, InputNumber, Select, Tabs } from "antd";
import Image from "next/image";
import { useState } from "react";
import { Fade } from "react-awesome-reveal";
import { UserOutlined } from "@ant-design/icons";
import PopularProducts from "@/sections/PopularProducts";

const items = [
  {
    key: "1",
    label: "Description",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lectus id nisi interdum mollis. Nam congue tellus quis elit mattis congue. Aenean eu massa sed mauris hendrerit ornare sed eget ante. Vestibulum id eros quam. Nunc volutpat at magna gravida eleifend. Phasellus sit amet nisi tempus, tincidunt elit ac, tempor metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lectus id nisi interdum mollis. Nam congue tellus quis elit mattis congue. Aenean eu massa sed mauris hendrerit ornare sed eget ante. Vestibulum id eros quam. Nunc volutpat at magna gravida eleifend. Phasellus sit amet nisi tempus, tincidunt elit ac, tempor metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut sed lectus id nisi interdum mollis. Nam congue tellus quis elit mattis congue. Aenean eu massa sed mauris hendrerit ornare sed eget ante. Vestibulum id eros quam. Nunc volutpat at magna gravida eleifend. Phasellus sit amet nisi tempus, tincidunt elit ac, tempor metus.",
  },
  {
    key: "2",
    label: "Review",
    children: (
      <div className="flex justify-between ccenter">
        <div className="w-[70%] flex ccenter space-x-[20px]">
          <div>
            <Avatar size={64} icon={<UserOutlined />} />
          </div>
          <div>
            <p className="font-playfair text-[18px] text-black/90">
              “Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.”
            </p>
            <p className="text-[18px] text-black/90 font-semibold">
              - TYRION LANNISTER
            </p>
          </div>
        </div>
        <div>
          <p className="text-[18px] place-self-end text-black/90 font-semibold">
            Date: MAY 10, 2016
          </p>
        </div>
      </div>
    ),
  },
  {
    key: "3",
    label: "Information",
    children:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum finibus ligula a scelerisque gravida. Nullam laoreet tortor ac maximus alique met",
  },
];

function Page({ params }) {
  const [currentThumb, setCurrentThumb] = useState("rotate-0");
  const [currentIndex, setCurrentIndex] = useState("opa");
  return (
    <div>
      <PagesLayout title={params.slug} />
      <div className="mt-[10%]">
        <div className="flex mx-[5%] space-x-5 justify-center items-center">
          <div className="h-[900px] relative ">
            <Fade>
              <div className="h-[600px] w-[700px]">
                <Image
                  alt=""
                  src={
                    "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-3.jpg"
                  }
                  layout="responsive"
                  height={600}
                  width={700}
                  className={currentThumb}
                />
              </div>
            </Fade>
            <div className="absolute flex right-[5%] space-x-4 bottom-[-1%] ">
              {[
                "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-3.jpg",
                "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-3.jpg",
                "https://demos.webicode.com/html/eco-shop-html/Single_Img_Demo/images/item-img-1-3.jpg",
              ].map((url, index) => (
                <div
                  key={index}
                  className="h-[200px] hover:scale-110 ctrans cursor-pointer overflow-hidden  shadow-2xl shadow-black  w-[200px]"
                >
                  <Image
                    alt=""
                    src={url}
                    layout="responsive"
                    height={200}
                    width={200}
                    className=""
                  />
                </div>
              ))}
            </div>
            <div className="mt-[350px] space-x-[40px]  flex justify-center items-center">
              <FontAwesomeIcon
                icon={faArrowLeftLong}
                color="black"
                style={{
                  height: "50px",
                  width: "50px",
                }}
                className="opacity-50 hover:opacity-100 ctrans"
              />
              <FontAwesomeIcon
                icon={faArrowRightLong}
                color="black"
                style={{
                  height: "50px",
                  width: "50px",
                }}
                className="opacity-50 hover:opacity-100 ctrans"
              />
            </div>
          </div>
          <div className="relative h-[900px] w-[40%]">
            <div className="flex absolute top-0 right-0 flex-col text-[25px] justify-center items-center size-[90px] bg-amber-600 text-white">
              <p>{10}%</p>
              <p>OFF</p>
            </div>
            <p className="text-[24px] text-black font-bold tracking-[4px]">
              Wood Washer
            </p>
            <p className="text-[20px] text-black font-bold mt-5">$ 987</p>
            <div className="mt-8">
              <div className="h-[2px] w-full bg-black/30" />
              <p className="text-[20px] tracking-wider mt-3 font-semibold text-black">
                Designer: <span className="text-amber-600">ABC</span>
              </p>
              <div className="h-[2px] mt-5 w-full bg-black/30" />
              <p className="text-[20px] tracking-wider mt-3 font-semibold text-black">
                Brand: <span className="text-amber-600">XYZ</span>
              </p>
              <div className="h-[2px] mt-5 w-full bg-black/30" />
            </div>
            <div className="my-6">
              <p className="font-playfair text-[18px] text-black/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum finibus ligula a scelerisque gravida. Nullam laoreet
                tortor ac maximus alique met, consectetur adipiscing elit.
                Vestibulum finibus ligula a scelerisque gravida. Nullam
              </p>
            </div>
            <div className="flex space-x-5">
              <div>
                <p className="text-[20px] tracking-wider my-3 font-semibold text-black">
                  Select Size
                </p>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#D97706",
                      colorBorder: "#D97706",
                    },
                  }}
                >
                  <Select
                    defaultValue="Medium"
                    showSearch
                    style={{
                      width: 200,
                    }}
                    placeholder="Select or Search Quantity"
                    optionFilterProp="children"
                    filterOption={(input, option) =>
                      (option?.label ?? "").includes(input)
                    }
                    filterSort={(optionA, optionB) =>
                      (optionA?.label ?? "")
                        .toLowerCase()
                        .localeCompare((optionB?.label ?? "").toLowerCase())
                    }
                    options={[
                      {
                        value: "1",
                        label: "Small",
                      },
                      {
                        value: "2",
                        label: "Medium",
                      },
                      {
                        value: "3",
                        label: "Large",
                      },
                      {
                        value: "4",
                        label: "Extra Large",
                      },
                      {
                        value: "5",
                        label: "Huge",
                      },
                      {
                        value: "6",
                        label: "Ultra Large",
                      },
                    ]}
                  />
                </ConfigProvider>
              </div>
              <div>
                <p className="text-[20px] tracking-wider my-3 font-semibold text-black">
                  Select Quantity
                </p>
                <ConfigProvider
                  theme={{
                    token: {
                      colorPrimary: "#D97706",
                      colorBorder: "#D97706",
                    },
                  }}
                >
                  <InputNumber min={1} defaultValue={1} type="number" />
                </ConfigProvider>
              </div>
            </div>
            <div className="mt-5 flex justify-between ccenter">
              <button className="w-auto hover:scale-105 ctrans text-white text-[22px] py-[5px] px-[20px] font-bold bg-slate-900">
                <p>ADD TO CART</p>
              </button>
              <button className="flex ccenter space-x-3">
                <p className="text-[18px] tracking-wider my-3 font-semibold text-black">
                  ADD TO FAVOURITE
                </p>
                <FontAwesomeIcon
                  icon={faHeart}
                  style={{
                    height: "30px",
                    width: "30px",
                  }}
                  color="#D97706"
                />
              </button>
            </div>
            <div className="mt-5">
              <p className="text-[20px] tracking-wider mt-3 font-semibold text-black">
                DELIVERY INFORMATION
              </p>
              <div className="h-[2px] my-4 w-full bg-black/30" />
              <p className="font-playfair text-[18px] text-black/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum finibus ligula a scelerisque gravida. Nullam laoreet
                tortor ac maximus alique met, consectetur adipiscing elit.
                Vestibulum finibus ligula a scelerisque gravida. Nullam
              </p>
            </div>
            <div className="mt-5">
              <p className="text-[20px] tracking-wider mt-3 font-semibold text-black">
                SHIPPING & RETURNS
              </p>
              <div className="h-[2px] my-4 w-full bg-black/30" />
              <p className="font-playfair text-[18px] text-black/90">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Vestibulum finibus ligula a scelerisque gravida. Nullam laoreet
                tortor ac maximus alique met
              </p>
            </div>
          </div>
        </div>
        <div className="mx-[8%] mt-[200px]">
          <ConfigProvider
            theme={{
              token: {
                colorPrimary: "#D97706",
                colorBorder: "#D97706",
                fontSize: "20px",
              },
            }}
          >
            <Tabs defaultActiveKey="1" items={items} />
          </ConfigProvider>
        </div>
        <div className="mx-[8%] mt-[100px]">
          <p className="text-[20px] tracking-wider mt-3 font-semibold text-black">
            ADD A REVIEW
          </p>
          <div className="mt-6 w-full">
            <div className="flex flex-row space-x-6 w-full">
              <div className="w-1/2">
                <p>Name</p>
                <input
                  placeholder="Name"
                  // value={details.email}
                  // onChange={(e) =>
                  //   setDetails({ ...details, email: e.target.value })
                  // }
                  type="text"
                  className="outline-0 mt-[15px] w-full px-[20px] border-2 border-amber-500  h-[70px] rounded-xl text-[20px]"
                />
              </div>
              <div className="w-1/2">
                <p>Email</p>
                <input
                  placeholder="Email"
                  // value={details.email}
                  // onChange={(e) =>
                  //   setDetails({ ...details, email: e.target.value })
                  // }
                  type="email"
                  className="outline-0 w-full mt-[15px] px-[20px] border-2 border-amber-500  h-[70px] rounded-xl text-[20px]"
                />
              </div>
            </div>
            <div className="mt-6">
              <p>Your Review</p>
              <textarea
                placeholder="Your Review"
                // value={details.email}
                // onChange={(e) =>
                //   setDetails({ ...details, email: e.target.value })
                // }
                type="text"
                className="outline-0 py-5 mt-[15px] px-[20px] border-2 border-amber-500 w-full min-h-[270px] h-auto rounded-xl text-[20px]"
              />
            </div>
          </div>
          <button className="w-auto mt-6 hover:scale-105 ctrans text-white text-[22px] py-[5px] px-[20px] font-bold bg-slate-900">
            <p>Post Review</p>
          </button>
        </div>
      </div>
      <PopularProducts />
    </div>
  );
}

export default Page;
