import { chillaxMedium, chillaxSemiBold, synonym } from "@/util/fonts";
import Image from "next/image";
import phoneImage from "@/public/phones.png";
import Link from "next/link";

export default function Home() {
  const listOfPills = [
    "Unlimited Content",
    "Immersive Experience",
    "24/7 mentorship",
    "Exclusive Network",
  ];

  const animation = [
    "animation-wiggle-1s",
    "animation-wiggle-reverse-2s",

    "animation-wiggle-reverse-1s",
    "animation-wiggle-2s",
  ];

  return (
    <>
      <header className="flex justify-center items-center w-full md:px-10 px-5 lg:py-28 md:py-20 py-14 relative">
        <span
          className={`${chillaxSemiBold.className}  uppercase md:text-[24px] text-[20px] leading-[24px] text-white`}
        >
          Money Minds
        </span>
      </header>

      <main className="flex flex-col lg:w-[80%] md:w-[90%] w-full justify-center items-center lg:gap-24 md:gap-16 gap-12 px-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <span
            className={` text-center w-fit bg-gradient-to-r lg:text-[69px] md:text-[54px] text-[48px] from-white to-[#71717A] inline-block text-transparent bg-clip-text`}
          >
            EMBARK ON THE DIGITAL REVOLUTION
          </span>
          <span
            className={`text-center text-white lg:text-[36px] md:text-[24px] text-[20px]`}
          >
            Affordable to all, Taught by the best
          </span>
        </div>
        <div className="flex flex-col justify-center items-center md:gap-10 gap-5">
          <div className="flex gap-x-2 gap-y-5 flex-wrap items-center justify-center">
            {listOfPills.map((ele, index) => {
              return (
                <div
                  key={index}
                  className={`from-[#DBDBFF99] to-[#2A3439] bg-gradient-to-b p-[2px] rounded-[38px] ${animation[index]}`}
                >
                  <div className="bg-black w-full h-full rounded-[38px]">
                    <div
                      className={`${chillaxMedium.className} text-white lg:text-[24px] md:text-[18px] text-[14px] pill-gradient rounded-[38px] py-3 px-6 `}
                    >
                      {ele}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="from-[#DBDBFF99] to-[#2A3439] bg-gradient-to-b p-[2px] rounded-[38px]">
            <div className="bg-black w-full h-full rounded-[38px]">
              <div
                className={`${chillaxMedium.className} text-white lg:text-[24px] md:text-[18px] text-[14px] pill-gradient rounded-[38px] py-3 px-6 `}
              >
                Online Income System
              </div>
            </div>
          </div>
        </div>
        <Image src={phoneImage} alt="app display" priority />
        <div className="flex flex-col items-center justify-center md:gap-10 gap-5 pb-16  bg-[url('/Gradient2.png')] bg-contain bg-bottom bg-no-repeat">
          <div className="xl:w-[80%] lg:w-[90%] w-full md:text-[24px] text-[16px] md:px-5 md:py-10 py-5 text-[#B6B6B6] md:gap-10 gap-5 flex flex-col text-center items-center justify-center leading-[33px]">
            <span className="md:text-[36px] text-[24px] md:leading-[50px] text-white">
              Welcome To The New Era Of Financial Mastery.
            </span>
            <span>
              <span className={`${chillaxMedium.className}`}>
                INTRODUCING MONEY MINDS
              </span>
              , the ultimate platform designed exclusively for like-minded
              individuals who are all focused on one mission: <br />
              <span className={`${chillaxMedium.className}`}>
                MAKING MONEY.
              </span>
            </span>
            <span>
              <span className={`${chillaxMedium.className}`}>
                At MONEY MINDS
              </span>
              , we don&apos;t just teach you how to make money; we reveal the
              cutting-edge strategies and insider secrets that the world&apos;s
              top entrepreneurs and financial minds use to build their empires.
            </span>
            <span>
              Gain insights on proven, high-impact strategies that are reserved
              for the elite.
            </span>
            <span>
              Immerse yourself in an endless stream of content, strategies, and
              expert insights at your fingertips, all for a price that&apos;s
              accessible to everyone.
            </span>
            <span>
              <span className={`${chillaxMedium.className}`}>
                DON&apos;T JUST WATCH FROM THE SIDELINES
              </span>{" "}
              be the first to access our powerful tools and knowledge to help
              you capitalize on the endless opportunities in the digital world.
            </span>
            <span>
              <span className={`${chillaxMedium.className}`}>
                JOIN OUR WAITLIST NOW
              </span>{" "}
              and secure your spot at the forefront of wealth creation.
            </span>
          </div>
          <div className=" w-full flex flex-col justify-center gap-10 items-center text-center">
            <Link
              href="/form"
              className="from-[#DBDBFF99] to-[#2A3439] bg-gradient-to-b rounded-[16px] p-[1px] "
            >
              <div className="bg-[#191970] w-full h-full rounded-[16px]">
                <div
                  className={`${synonym.className} text-white md:text-[18px] text-[16px] from-[#FFFFFF33] to-[#FFFFFF00] bg-gradient-to-b rounded-[16px] py-3 px-10 `}
                >
                  Join Waitlist
                </div>
              </div>
            </Link>
            <span
              className={`${synonym.className} lg:text-[24px] md:text-[20px] text-[16px] tracking-[0.26px] text-center text-white`}
            >
              Your gateway to transformation awaits in your email inbox.
            </span>
          </div>
        </div>
      </main>

      <footer
        className={`${synonym.className} w-full flex flex-col justify-center items-center md:px-10 px-5 py-10 md:gap-10 gap-5 border-t border-t-[#83838340]`}
      >
        <div className=" lg:text-[24px] md:text-[20px] text-[16px] flex flex-wrap items-center justify-center gap-5 leading-[21px] text-white">
          <Link href="">X</Link>
          <div className="h-5 w-[1px] bg-white" />
          <Link href="">Instagram</Link>
          <div className="h-5 w-[1px] bg-white" />
          <Link href="">YouTube</Link>
          <div className="h-5 w-[1px] bg-white" />
          <Link href="">LinkedIn</Link>
        </div>
        <span className="md:text-[18px] text-[16px] text-center text-[#D1D1D1]">
          ©2024 MONEY MINDS. All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
