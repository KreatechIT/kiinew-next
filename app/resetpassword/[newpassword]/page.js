"use client";
import { Checkbox, ConfigProvider, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Page({ params }) {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);

  const [buttonText, setButtonText] = useState("Reset Password");
  const [details, setDetails] = useState({
    password: "",
    confirmed_password: "",
  });
  const [messageApi, contextHolder] = message.useMessage();

  const handleReset = async () => {
    if (details.password === details.confirmed_password) {
      setButtonText("Resetting password...");
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/wp-json/custom/v1/reset-password/${params.newpassword}/`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: localStorage.getItem("user_email"),
              new_password: details.confirmed_password,
            }),
          }
        );

        if (!response.ok) {
          setButtonText("Something went wrong");
          throw new Error("Network response was not ok");
        }
        setButtonText("Reset Successful");
        const data = await response.json();
        router.push("/login");
        console.log("Response:", data);
      } catch (error) {
        console.error("Error:", error);
      }
    } else {
      messageApi.open({
        type: "error",
        content: "Password is not same as confirmed password",
      });
    }
  };
  return (
    <div className="justify-center my-[40px] items-center flex flex-col">
      {contextHolder}
      <h1 className="text-[40px] font-bold text-amber-600">Reset Password</h1>
      <div className="mt-[40px]">
        <div className="mt-[20px] flex flex-col">
          <p>Password</p>
          <input
            placeholder="Password"
            value={details.password}
            onChange={(e) =>
              setDetails({ ...details, password: e.target.value })
            }
            type={showPass ? "text" : "password"}
            className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-[300px] h-[70px] rounded-xl text-[20px]"
          />
          <p className="mt-5">Confirm Password</p>
          <input
            placeholder="Confirm Password"
            value={details.confirmed_password}
            onChange={(e) =>
              setDetails({ ...details, confirmed_password: e.target.value })
            }
            type={showPass ? "text" : "password"}
            className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-[300px] h-[70px] rounded-xl text-[20px]"
          />
          <ConfigProvider
            theme={{
              token: {
                colorPrimaryActive: "#D97706",
                colorPrimary: "#D97706",
              },
            }}
          >
            <Checkbox
              value={showPass}
              onChange={() => setShowPass(!showPass)}
              className="mt-4"
            >
              Show Password
            </Checkbox>
          </ConfigProvider>
        </div>
        <button
          onClick={handleReset}
          className="w-[300px] mt-[20px] transition-all hover:scale-105 text-[20px] text-white bg-amber-600 h-auto min-h-[50px] rounded-xl"
        >
          <p>{buttonText}</p>
        </button>
      </div>
    </div>
  );
}

export default Page;
