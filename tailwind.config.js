/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./app/**/*.{js,ts,jsx,tsx,mdx}",     // App Router 폴더
        "./components/**/*.{js,ts,jsx,tsx,mdx}", // 컴포넌트 폴더
    ],
    theme: {
        extend: {
            screens: {
                'pc': '1366px',
            },
            colors: {
                'red': '#DE2021',
            },
            fontFamily: {
                "notosans": ["Noto Sans KR", "sans-serif"],
                "myeongjo-b": ["myeongjo-B", "serif"],
                "myeongjo-ex": ["myeongjo-EX", "serif"],
            },
        },
    },
    plugins: [],
}