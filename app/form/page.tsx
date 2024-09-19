import { chillaxSemiBold, synonym } from "@/util/fonts";
import ClientComponent from "./components/ClientComponent";

export default function page() {
  return (
    <div className="min-h-screen bg-[url('/Gradient3.png')] bg-contain bg-bottom bg-no-repeat w-full flex items-center justify-center md:p-10 p-5">
      <div className="from-[#DBDBFF99] to-[#2A3439] md:bg-gradient-to-b bg-transparent p-[1.5px] rounded-[24px]">
        <div className="flex flex-col items-center rounded-[24px] justify-evenly md:gap-10 gap-5 lg:w-[800px] md:w-[650px] w-full md:px-10 px-0 py-10 md:bg-custom-gradient bg-transparent">
          <span
            className={`${chillaxSemiBold.className} uppercase md:text-[24px] text-[20px] leading-[24px] text-white`}
          >
            Money Minds
          </span>
          <div className="flex flex-col items-center text-center gap-1">
            <span
              className={` text-center w-fit bg-gradient-to-r lg:text-[69px] md:text-[50px] text-[35px] from-white to-[#71717A] inline-block text-transparent bg-clip-text`}
            >
              JOIN WAITLIST
            </span>
            <span
              className={`${synonym.className} text-white md:text-[18px] text-[16px]`}
            >
              Skip the line.
            </span>
          </div>
          <ClientComponent />
        </div>
      </div>
    </div>
  );
}
