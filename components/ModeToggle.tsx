"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

const ModeToggleButton = () => {
	const { theme, setTheme } = useTheme();

	return (
		<Button
			className="absolute top-10 right-10"
			variant={"link"}
			size={"icon"}
			onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
		>
			<Sun className="absolute h-12 w-12 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
			<Moon className="h-12 w-12 rotate-0 scale-100 transition-all dark:rotate-90 dark:scale-0" />
		</Button>
	);
};

export default ModeToggleButton;
