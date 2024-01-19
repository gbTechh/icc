/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				lora: ['Lora', 'serif'],
				quicksand: ['Quicksand', 'sans-serif'],
				nunito: ['Nunito', 'sans-serif'],
				firasans: ['Fira Sans', 'sans-serif'],
			},
			boxShadow: {
				box: "0px 4px 26px 0px rgba(0, 0, 0, 0.10)",
			},
			backgroundImage: {
				cardlinearbg: " linear-gradient(282deg, #111 11.43%, rgba(17, 17, 17, 0.08) 33.01%, rgba(209, 209, 209, 0.02) 94.51%)",
			},
			colors: {
				primarytext: "#2DFC84",
				basetext: "#828886",
				basetextbutton: "#C0CBC7",
				whitetext: "#F5FFFA",

				customborder: "#151A18",

				cardbg: "#020D06",
				cardbghover: "#0D0602",

				primary: "#28C168", // Ejemplo de color primario
				secondary: "#00ffff", // Ejemplo de color secundario
				"custom-gray-100": "#E4E4E4",
				"custom-gray-200": "#F6F6F6",
				"custom-gray-card": "#F9f9f9",
				"custom-gray-button": "#D6D6D6",
				gray: "#494949",
				gray2: "#717171",
				"black-transparent": "rgba(0,0,0,0.4)",
			},
		},
	},
	plugins: [],
}
