"use client";
import { Checkbox, ConfigProvider, message } from "antd";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

function Page() {
  const [details, setDetails] = useState({
    email: "",
  });
  const [time, setTime] = useState();
  const [buttonText, setButtonText] = useState("Send OTP");
  const [messageApi, contextHolder] = message.useMessage();
  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const [timeLeft, setTimeLeft] = useState(300);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    let timer;
    if (isRunning && timeLeft > 0) {
      timer = setInterval(() => {
        setTimeLeft((prevTime) => prevTime - 1);
      }, 1000);
    } else {
      setIsRunning(false);
      setButtonText("Send OTP");
    }
    const inTime = formatTime(timeLeft);
    setTime(inTime);
    return () => clearInterval(timer); // Clean up timer when component is unmounted or isRunning changes
  }, [isRunning, timeLeft]);

  const handleSend = async () => {
    setTimeLeft(300);
    try {
      setButtonText("Sending OTP...");
      const response = await fetch(
        "http://127.0.0.1:8000/wp-json/custom/v1/forgot-password/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(details),
        }
      );

      if (!response.ok) {
        setIsRunning(false);
        setTimeLeft(300);
        messageApi.open({
          type: "error",
          content: "Please write email correctly",
        });
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      await localStorage.setItem("user_email", details.email);
      setIsRunning(true);

      console.log("Response:", data);
    } catch (error) {
      setIsRunning(false);
      setTimeLeft(300);
      console.error("Error:", error);
    }
  };
  return (
    <div className="justify-center my-[40px] items-center flex flex-col">
      {contextHolder}
      <h1 className="text-[40px] font-bold text-amber-600">Reset Password</h1>
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
        <button
          disabled={isRunning}
          onClick={handleSend}
          className={`w-[300px] ${
            isRunning ? "cursor-not-allowed" : "cursor-pointer"
          } mt-[20px] transition-all hover:scale-105 text-[20px] text-white bg-amber-600 h-auto min-h-[50px] rounded-xl`}
        >
          {isRunning ? (
            <p>{`You can resend OTP in ${time} . Please check before ending the time.`}</p>
          ) : (
            <p>{buttonText}</p>
          )}
        </button>
      </div>
    </div>
  );
}

export default Page;
