/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            colors: {
                "red-button": "#ED3833",
                "special-blue": "#10294C",
                "aboutme-blue": "#44AFE0",
                "good-gray":"#809FB8"
            },
            backgroundImage: {
                mobile: "url('./resources/bg-mobile.png')",
                desktop: "url('./resources/bg-desktop.png')",
                "menu-icon": "url('./resources/menu-icon.png')",
                logo: "url('./resources/logo.png')",
                "contact-section": "url('./resources/bg-contact-section.png')",
                "contact-section-desktop":
                    "url('./resources/bg-contact-section-desktop.png')",
            },
            fontFamily: {
                sulphur: ["MyFont", "sans-serif"],
            },
            gridTemplateColumns: {
                "portfolio-col": "repeat(2, minmax(200px, 400px))",
            },
            gridTemplateRows: {
                "portfolio-row": "repeat(auto-fit, minmax(400px, 0.8fr))",
            },
        },
    },
    plugins: [],
};
