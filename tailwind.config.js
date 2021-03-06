module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        vazir: ["Vazir-Medium", "arial", "sans-serif"],
        vazirBold: ["Vazir-Bold", "impact", "serif"],
      },
      colors: {
        primaryTint: "#3588b9",
        primary: "#026aa7",
        primaryShade: "#014a75",
        silver: "#091e420a",
        textColor: "#5e6c84",
        bgColor: "#fafbfc",
        whiteHover:'#ebecf0',
        light:'#e6e6e6',
        lightShade:'#cccccc',
        dark:'#2e3038',
        darkTint:'#43454c',
        lightWhite:"rgba(255,255,255,20%)",
        lightBlack:"rgba(0,0,0,16%)",
      },
    },
  },
  plugins: [],
};
