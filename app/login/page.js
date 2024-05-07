"use client";
import { Checkbox, ConfigProvider } from "antd";
import React, { useState } from "react";

function Page() {
  const [showPass, setShowPass] = useState(false);
  return (
    <div className="justify-center my-[40px] items-center flex flex-col">
      <h1 className="text-[40px] font-bold text-amber-600">Login</h1>
      <div className="mt-[40px]">
        <div>
          <p>Email</p>
          <input
            placeholder="Email"
            type="email"
            className="outline-0 mt-[15px] px-[20px] border-2 border-amber-500 w-[300px] h-[70px] rounded-xl text-[20px]"
          />
        </div>
        <div className="mt-[20px] flex flex-col">
          <p>Password</p>
          <input
            placeholder="Password"
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
        <button className="w-[300px] mt-[20px] transition-all hover:scale-105 text-[20px] text-white bg-amber-600 h-[50px] rounded-xl">
          <p>Login</p>
        </button>
      </div>
    </div>
  );
}

export default Page;
