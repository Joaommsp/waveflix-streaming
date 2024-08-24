/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "signin-banner": "url('./src/assets/images/signin-banner-square.png')",
        "login-banner": "url('./src/assets/images/login-banner-square.png')",
        "home-banner": "url('./src/assets/images/home-screen-banner.png')",
        "hod-poster": "url('./src/assets/images/hod-poster.png')",
        "tb-poster": "url('./src/assets/images/tb-poster.png')",
        "cover-content-gradient": "url('./src/assets/images/cover-content-image.png')",
      },
      screens: {
        tablet: "640px",
        // => @media (min-width: 640px) { ... }

        laptop: "1024px",
        // => @media (min-width: 1024px) { ... }

        desktop: "1280px",
        // => @media (min-width: 1280px) { ... }
      },
    },
  },
  plugins: [],
};
