const { fontFamily } = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx}",
        "./pages/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        // Or if using `src` directory:
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                primary: "#666666",
            },
            fontSize: {
                "10xl": "10rem",
            },
            fontFamily: {
                sans: ["var(--font-inter)", ...fontFamily.sans],
            },
            borderRadius: {
                "4xl": "2rem",
                inner: "32px",
                outer: "38px",
            },
            height: {
                88: "22rem",
                104: "28rem",
                112: "32rem",
                120: "36rem",
                128: "40rem",
            },
        },
    },
    plugins: [require("@tailwindcss/typography")],
};
