"use client";
import { Checkbox, ConfigProvider } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

function Page() {
  const router = useRouter();
  const [showPass, setShowPass] = useState(false);
  const [details, setDetails] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async () => {
    try {
      const response = await fetch(
        "http://localhost:8000/wp-json/wp/v2/users/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        }
      );

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      await localStorage.setItem("access_token", data.access);
      router.push("/");
      console.log("Response:", data);
    } catch (error) {
      console.error("Error:", error);
    }
  };
  return (
    <div className="justify-center my-[40px] items-center flex flex-col">
      <h1 className="text-[40px] font-bold text-amber-600">Login</h1>
      <div className="mt-[40px]">
        <div>
          <p>Email</p>
          <input
            placeholder="Email"
            value={details.email}
            onChange={(e) => setDetails({ ...details, email: e.target.value })}
            type="email"
            className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-[300px] h-[70px] rounded-xl text-[20px]"
          />
        </div>
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
          onClick={handleLogin}
          className="w-[300px] mt-[20px] transition-all hover:scale-105 text-[20px] text-white bg-amber-600 h-[50px] rounded-xl"
        >
          <p>Login</p>
        </button>
        <div className="mt-[14px]">
          <p>
            Don&apos;t have an account ?{" "}
            <Link
              href={"/register"}
              className="cursor-pointer text-amber-600 hover:scale-105"
            >
              Register Now !
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Page;
