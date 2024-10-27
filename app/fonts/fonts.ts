import localFont from "next/font/local";

export const geistSans = localFont({
	src: "./GeistVF.woff",
	variable: "--font-geist-sans",
	weight: "100 900"
});

export const geistMono = localFont({
	src: "./GeistMonoVF.woff",
	variable: "--font-geist-mono",
	weight: "100 900"
});

export const recursive = localFont({
	src: "./Recursive.woff2",
	variable: "--recursive",
	weight: "100 300 600 900"
});

export const recMonoCasual = localFont({
	src: "./RecMonoCasual.ttf",
	variable: "--recMonoCasual",
	weight: "100 300 600 900"
});
