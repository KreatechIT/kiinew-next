"use client";
import { Checkbox, ConfigProvider } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button, Upload, message, Avatar } from "antd";
import {
  UserOutlined,
  LogoutOutlined,
  UploadOutlined,
} from "@ant-design/icons";

function Page() {
  const router = useRouter();
  const [profilePicture, setProfilePicture] = useState(null);
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleProfilePictureChange = (info) => {
    if (info.file.status === "done") {
      setProfilePicture(info.file.originFileObj);
    } else if (info.file.status === "error") {
      message.error("Failed to upload profile picture.");
    }
  };

  const handlePhoneNumberChange = (e) => {
    setPhoneNumber(e.target.value);
  };

  const handleUpdateProfile = () => {
    // Implement update profile logic here
    // You can send profilePicture and phoneNumber to your backend API
    console.log("Updating profile:", { profilePicture, phoneNumber });
    message.success("Profile updated successfully.");
  };

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    router.push("/login");
    console.log("Logging out...");
    message.success("Logged out successfully.");
  };

  return (
    <div className="justify-center my-[40px] items-center flex flex-col">
      <h1 className="text-[40px] font-bold text-amber-600">Profile</h1>
      <div className="mt-[40px] flex flex-col space-y-4 place-items-center place-content-center">
        <Avatar size={64} icon={<UserOutlined />} src={profilePicture} />
        <ConfigProvider
          theme={{
            token: {
              colorPrimary: "#D97706",
            },
          }}
        >
          <Upload
            name="profilePicture"
            showUploadList={false}
            action=""
            onChange={handleProfilePictureChange}
          >
            <Button icon={<UploadOutlined />}>Upload Profile Picture</Button>
          </Upload>
        </ConfigProvider>
        <div className="my-[20px]">
          <p>Phone Number</p>
          <input
            placeholder="Phone Number"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            type="tel"
            className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-[300px] h-[70px] rounded-xl text-[20px]"
          />
        </div>
        <button
          onClick={handleUpdateProfile}
          disabled={!profilePicture && !phoneNumber}
          className={`w-[300px] ${
            !profilePicture && !phoneNumber
              ? "cursor-not-allowed"
              : "cursor-pointer"
          } mt-[20px] transition-all hover:scale-105 text-[20px] text-white bg-amber-600 h-[50px] rounded-xl`}
        >
          <p>Update</p>
        </button>
        <button
          onClick={handleLogout}
          className="w-[300px] space-x-4 flex flex-row place-items-center place-content-center mt-[20px] transition-all hover:scale-105 text-[20px] text-white bg-red-500 h-[50px] rounded-xl"
        >
          <LogoutOutlined />
          <p>Logout</p>
        </button>
      </div>
    </div>
  );
}

export default Page;
