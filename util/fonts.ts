import localFont from "next/font/local";

const synonym = localFont({
  src: "../public//fonts/Synonym-Regular.ttf",
  variable: "--font-synonym",
  weight: "400",
});

const chillaxRegular = localFont({
  src: "../public//fonts/Chillax-Regular.otf",
  variable: "--font-chillax-regular",
  weight: "400",
});

const chillaxMedium = localFont({
  src: "../public//fonts/Chillax-Medium.otf",
  variable: "--font-chillax-medium",
  weight: "500",
});

const chillaxSemiBold = localFont({
  src: "../public//fonts/Chillax-Semibold.otf",
  variable: "--font-chillax-semibold",
  weight: "600",
});

export { synonym, chillaxMedium, chillaxRegular, chillaxSemiBold };
