// @ts-check
import { defineConfig, fontProviders } from "astro/config";

// https://astro.build/config
export default defineConfig({
	fonts: [
		{
			provider: fontProviders.local(),
			name: "Instrument Serif",
			cssVariable: "--font-instrument-serif",
			options: {
				variants: [
					{
						src: ["./src/assets/fonts/InstrumentSerif-Regular.woff2"],
						weight: "normal",
						style: "normal",
					},
					{
						src: ["./src/assets/fonts/InstrumentSerif-Italic.woff2"],
						weight: "normal",
						style: "italic",
					},
				],
			},
			fallbacks: ["Times New Roman", "Times", "serif"],
		},
		{
			provider: fontProviders.fontshare(),
			name: "Switzer",
			cssVariable: "--font-switzer",
			options: {
				variants: [
					{
						weight: ["200 600"],
						style: "normal",
					},
					{
						weight: ["200 600"],
						style: "italic",
					},
				],
			},
			fallbacks: [
				"system-ui",
				"-apple-system",
				"BlinkMacSystemFont",
				"sans-serif",
			],
		},
	],
});
