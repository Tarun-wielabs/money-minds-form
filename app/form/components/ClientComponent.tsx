"use client";

import { chillaxRegular, synonym } from "@/util/fonts";
import { FormEvent, useState } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

export default function ClientComponent() {
  const [email, setEmail] = useState("");
  const [username, setUsername] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [click, setClick] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BACKEND_URL}/api/waitlist/create`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username,
            email,
            phoneNumber: `+${phoneNumber}`,
          }),
        }
      );
      if (!response.ok) {
        throw new Error("HTTP error! Status: " + response.status);
      }
      alert("Successful!\nYour details have been noted!");
      setEmail("");
      setUsername("");
      setPhoneNumber("+1");
      setClick(false);
    } catch (e) {
      console.error(e);
      alert("Oops! Error occurred. Try again.");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center md:mt-0 mt-5 items-center md:gap-10 gap-5 lg:w-2/3 sm:w-10/12 w-full"
    >
      <div className="flex flex-col justify-center md:gap-2 gap-1 items-start w-full">
        <label
          htmlFor="username"
          className={`text-white ${synonym.className} md:text-[16px] text-[14px]`}
        >
          User Name
        </label>
        <div className="flex item-center gap-3 border border-[#1C2326] rounded-[16px] w-full px-5 py-4 bg-[#0E1113] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M12 12C14.7614 12 17 9.76142 17 7C17 4.23858 14.7614 2 12 2C9.23858 2 7 4.23858 7 7C7 9.76142 9.23858 12 12 12Z"
              stroke="#BBBBF0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.5901 22C20.5901 18.13 16.7402 15 12.0002 15C7.26015 15 3.41016 18.13 3.41016 22"
              stroke="#BBBBF0"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="eg. johnfrans"
            className="bg-transparent focus:outline-none w-full text-white"
            required
          />
        </div>
      </div>
      <div className="flex flex-col justify-center md:gap-2 gap-1 items-start w-full">
        <label
          htmlFor="email"
          className={`text-white ${synonym.className} md:text-[16px] text-[14px]`}
        >
          Email
        </label>
        <div className="flex item-center gap-3 border border-[#1C2326] w-full rounded-[16px] px-5 py-4 bg-[#0E1113] ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
          >
            <path
              d="M17 20.5H7C4 20.5 2 19 2 15.5V8.5C2 5 4 3.5 7 3.5H17C20 3.5 22 5 22 8.5V15.5C22 19 20 20.5 17 20.5Z"
              stroke="#BBBBF0"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M17 9L13.87 11.5C12.84 12.32 11.15 12.32 10.12 11.5L7 9"
              stroke="#BBBBF0"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="eg. johnfrans@gmail.com"
            className="bg-transparent focus:outline-none w-full text-white"
            required
          />
        </div>
      </div>
      <div className="flex flex-col justify-center md:gap-2 gap-1 items-start w-full">
        <label
          htmlFor="phonenumber"
          className={`text-white ${synonym.className} md:text-[16px] text-[14px]`}
        >
          Phone Number
        </label>
        <PhoneInput
          value={phoneNumber}
          inputProps={{
            required: true,
            name: "phonenumber",
            id: "phonenumber",
          }}
          country={"us"}
          onChange={(phone) => setPhoneNumber(phone)}
          inputStyle={{
            borderWidth: 1,
            borderColor: "#1C2326",
            backgroundColor: "#0E1113",
            paddingTop: 27,
            paddingBottom: 27,
            paddingLeft: 85,
            paddingRight: 20,
            color: "#ffffff",
            borderRadius: 16,
            width: "calc(100%)",
            fontSize: 16,
            ...chillaxRegular.style,
          }}
          buttonStyle={{
            borderTopWidth: 1,
            borderLeftWidth: 1,
            borderBottomWidth: 1,
            borderRightWidth: 0,
            borderColor: "#1C2326",
            backgroundColor: "#0E1113",
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 16,
            borderBottomRightRadius: 0,
            borderTopRightRadius: 0,
            fontSize: 14,
            ...chillaxRegular.style,
          }}
          dropdownStyle={{
            borderWidth: 1,
            borderColor: "#1C2326",
            backgroundColor: "#0E1113",
            paddingTop: 5,
            paddingBottom: 5,
            paddingLeft: 10,
            paddingRight: 10,
            borderRadius: 16,
            fontSize: 14,
            color: "#ffffff",
            maxWidth: 250,
            ...chillaxRegular.style,
          }}
          dropdownClass="no-scrollbar"
        />
      </div>

      <div
        className={`text-[#D1D1D1] flex pl-3 ${synonym.className} md:text-[16px] text-[14px] `}
      >
        <input
          type="checkbox"
          checked={click}
          id="checkbox"
          onChange={() => setClick((prevState) => !prevState)}
          className={
            "appearance-none w-[25px] h-[18px] bg-[url('/checkbox-untick.svg')] cursor-pointer bg-cover checked:bg-[url('/checkbox-tick.svg')] checked:bg-cover "
          }
          required
        />
        <span className="ml-2">
          I agree to receive marketing communications from Money Minds via email
          and phone, using the contact information I&apos;ve provided.
        </span>
      </div>

      <button
        type="submit"
        className="from-[#DBDBFF99] mt-5 to-[#2A3439] bg-gradient-to-b w-full rounded-[16px] p-[1px] "
      >
        <div className="bg-[#191970] w-full h-full rounded-[16px]">
          <div
            className={`${synonym.className} text-white md:text-[18px] text-[16px] from-[#FFFFFF33] to-[#FFFFFF00] bg-gradient-to-b rounded-[16px] py-3 px-10 `}
          >
            Claim
          </div>
        </div>
      </button>
    </form>
  );
}
