import { chillaxMedium, chillaxSemiBold, synonym } from "@/util/fonts";
import Image from "next/image";
import phoneImage from "@/public/phones.png";
import Link from "next/link";

export default function Home() {
  const listOfPills1 = [
    "Unlimited Content",
    "24/7 mentorship",
    "Exclusive Network",
  ];

  const listOfPills2 = ["Immersive Experience", "Online Income System"];

  return (
    <>
      <header className="flex md:justify-center justify-between items-center w-full md:px-10 px-5 lg:py-28 md:py-20 py-10 relative">
        <span
          className={`${chillaxSemiBold.className}  uppercase lg:text-[24px] text-[20px] leading-[24px] text-white`}
        >
          Money Minds
        </span>
        <Link
          href="/form"
          className="from-[#DBDBFF99] block md:hidden to-[#2A3439] bg-gradient-to-b text-center rounded-[16px] p-[1px] "
        >
          <div className="bg-[#191970] w-full h-full rounded-[16px]">
            <div
              className={`${synonym.className} text-white text-[14px] from-[#FFFFFF33] to-[#FFFFFF00] bg-gradient-to-b rounded-[16px] py-2 px-4 `}
            >
              Join Waitlist
            </div>
          </div>
        </Link>
      </header>

      <main className="flex flex-col lg:w-[80%] md:w-[90%] w-full justify-center items-center lg:gap-24 md:gap-16 gap-12 p-5">
        <div className="flex flex-col justify-center items-center gap-5">
          <span
            className={` text-center w-fit bg-gradient-to-r lg:text-[69px] md:text-[50px] text-[35px] from-white to-[#71717A] inline-block text-transparent bg-clip-text`}
          >
            EMBARK ON THE DIGITAL REVOLUTION
          </span>
        </div>
        <Image
          src={phoneImage}
          alt="app display"
          priority
          className="animation-loadIn xl:w-[50%] lg:w-[60%] md:w-[70%] w-auto"
        />
        <div className="flex flex-col justify-center items-center md:gap-10 gap-5">
          <div className="flex lg:gap-10 md:gap-6 gap-3 flex-wrap items-center justify-center">
            {listOfPills1.map((ele, index) => {
              return (
                <div
                  key={index}
                  className={`from-[#DBDBFF99] to-[#2A3439] bg-gradient-to-b md:p-[2px] p-[1px] rounded-[38px]`}
                >
                  <div className="bg-black w-full h-full rounded-[38px]">
                    <div
                      className={`${chillaxMedium.className} text-white lg:text-[24px] md:text-[16px] text-[11px] pill-gradient rounded-[38px] md:py-3 py-2 md:px-6 px-2 `}
                    >
                      {ele}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="flex lg:gap-10 md:gap-6 gap-3 flex-wrap items-center justify-center">
            {listOfPills2.map((ele, index) => {
              return (
                <div
                  key={index}
                  className={`from-[#DBDBFF99] to-[#2A3439] bg-gradient-to-b md:p-[2px] p-[1px] rounded-[38px] `}
                >
                  <div className="bg-black w-full h-full rounded-[38px]">
                    <div
                      className={`${chillaxMedium.className} text-white lg:text-[24px] md:text-[16px] text-[11px] pill-gradient rounded-[38px] md:py-3 py-2 md:px-6 px-2`}
                    >
                      {ele}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
        <div className="flex flex-col items-center justify-center md:gap-10 gap-5  bg-[url('/Gradient2.png')] bg-contain bg-bottom bg-no-repeat">
          <Link
            href="/form"
            className="from-[#DBDBFF99] md:block hidden to-[#2A3439] bg-gradient-to-b md:w-[289px] w-[240px] text-center rounded-[16px] p-[1px] "
          >
            <div className="bg-[#191970] w-full h-full rounded-[16px]">
              <div
                className={`${synonym.className} text-white md:text-[18px] text-[16px] from-[#FFFFFF33] to-[#FFFFFF00] bg-gradient-to-b rounded-[16px] py-3 px-10 `}
              >
                Join Waitlist
              </div>
            </div>
          </Link>
          <div className="xl:w-[80%] lg:w-[90%] w-full max-w-[1500px] md:text-[24px] text-[16px] md:px-5 md:py-10 py-5 text-[#B6B6B6] md:gap-10 gap-5 flex flex-col text-center items-center justify-center leading-[33px]">
            {/* <span className="md:text-[36px] text-[24px] md:leading-[50px] text-white">
              Welcome To The New Era Of Financial Mastery.
            </span> */}
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
          <div className=" w-full flex flex-col justify-center gap-10 md:mt-16 mt-10 items-center text-center">
            <Link
              href="/form"
              className="from-[#DBDBFF99] to-[#2A3439] bg-gradient-to-b md:w-[289px] w-[240px] rounded-[16px] p-[1px] "
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
            <div className="md:block hidden md:h-20 h-5 w-full" />
          </div>
        </div>
      </main>

      <footer
        className={`${synonym.className} w-full flex flex-col justify-center items-center md:px-10 px-5 py-10 md:gap-10 gap-5 border-t border-t-[#83838340]`}
      >
        <div className=" lg:text-[20px] md:text-[16px] text-[12px] flex flex-wrap items-center justify-center md:gap-5 gap-3 leading-[21px] text-white">
          <Link href="https://x.com/MONEYMINDSAPP" target="_blank">
            X
          </Link>
          <div className="h-5 w-[1px] bg-white" />
          <Link href="https://www.instagram.com/moneymindsapp/" target="_blank">
            Instagram
          </Link>
          <div className="h-5 w-[1px] bg-white" />
          <Link href="https://www.youtube.com/@MONEYMINDSAPP" target="_blank">
            YouTube
          </Link>
          <div className="h-5 w-[1px] bg-white" />
          <Link
            href="https://www.linkedin.com/company/moneymindsllc/"
            target="_blank"
          >
            Linked In
          </Link>
        </div>
        <span className="lg:text-[18px] md:text-[15px] text-[12px] text-center text-[#D1D1D1]">
          ©2024 MONEY MINDS. All Rights Reserved.
        </span>
      </footer>
    </>
  );
}
