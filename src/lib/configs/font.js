// <import next font
import localFont from "next/font/local";
// import next font>

const myFont = localFont({
  src: [
    {
      path: "../../assets/fonts/Ubuntu-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Ubuntu-Medium.ttf",
      weight: "500",
      style: "normal",
    },
    {
      path: "../../assets/fonts/Ubuntu-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--ubuntu",
});

export default myFont;
