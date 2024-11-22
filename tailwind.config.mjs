/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
                primary: '#2df',
                secondary: '#72f',
                tertiary: 'hsl(20, 20, 90)',
                quaternary: '#dee2e6',
                dark: '#111111',
                light: '#f8f9fa',
                gray: {
                    lightest: '#f3f4f6',
                    light: '#e9ecef',
                    DEFAULT: '#dee2e6',
                    dark: '#ced4da',
                },
            },
            fontFamily: {
                sans: ['Inter', 'ui-sans-serif', 'system-ui'],
            },
			backgroundImage: {
				game: "url('/1.webp')",
				gradientcolor: "linear-gradient(to bottom, #2fe, #52f)",
				logo: "url('/Dot.webp')",
				progr: "url('/channels4_banner.webp')",
				guitar: "url('/guitar.webp')",
				music: "url('/channels_music_banner.webp')",
				clips: "url('/channel_clips_banner.webp')",
				antro: "url('/channel_antro_banner.webp')"
			},
			textColor: {
				colortext: "hsl(20, 20, 90)"
			},
			backgroundColor: {
				
			}
		},
	},
	plugins: [],
} 