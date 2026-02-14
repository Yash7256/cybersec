import { cn } from "@/lib/utils";
import { RocketIcon, ArrowRightIcon } from "lucide-react";

export function HeroSection() {
	return (
		<section className="mx-auto w-full max-w-5xl relative">
			{/* main content */}

			<div className="relative flex flex-col items-center justify-center gap-10 pt-[100px] pb-16">

				<a
					className={cn(
						"group mx-auto flex w-fit items-center gap-3 rounded-[10px] border bg-[#0b1024] px-3 py-1 shadow",
						"fade-in slide-in-from-bottom-10 animate-in fill-mode-backwards transition-all delay-500 duration-500 ease-out"
					)}
					href="#link"
				>
					<RocketIcon className="size-3 text-muted-foreground" />
					<span className="text-xs">shipped new features!</span>
					<span className="block h-5 border-l" />

					<ArrowRightIcon className="size-3 duration-150 ease-out group-hover:translate-x-1" />
				</a>

				<h1
					className={cn(
						"fade-in slide-in-from-bottom-10 animate-in text-balance fill-mode-backwards text-center text-5xl tracking-tight delay-100 duration-500 ease-out md:text-6xl lg:text-7xl",
						"text-shadow-[0_0px_50px_theme(--color-foreground/.2)]"
					)}
				>
					Where AI and Security Intelligence Converge
				</h1>

				<p className="fade-in slide-in-from-bottom-10 mx-auto max-w-2xl animate-in fill-mode-backwards text-center text-xl text-[#FFFFFF] tracking-wider delay-200 duration-500 ease-out">
					Unified cybersecurity ecosystem bringing all your tools, AI-powered defenses, and threat intelligence into one powerful platform.
				</p>

			</div>
		</section>
	);
}

export function LogosSection() {
	return (
		<section className="relative space-y-4 py-16">
			<h2 className="text-center font-medium text-lg text-[#FFFFFF] tracking-tight md:text-xl">
				Trusted by <span className="text-foreground">experts</span>
			</h2>
			<div className="flex flex-wrap items-center justify-center gap-12 opacity-70">
				{logos.map((logo, index) => (
					<img
						key={index}
						src={logo.src}
						alt={logo.alt}
						width={logo.width}
						height={logo.height}
						className="h-12 md:h-16"
					/>
				))}
			</div>
		</section>
	);
}

const logos = [
	{
		src: "/logo.png",
		alt: "CyberSec Logo",
		width: 150,
		height: 50,
	},
	{
		src: "/logo.png",
		alt: "CyberSec Logo",
		width: 150,
		height: 50,
	},
	{
		src: "/logo.png",
		alt: "CyberSec Logo",
		width: 150,
		height: 50,
	},
	{
		src: "/logo.png",
		alt: "CyberSec Logo",
		width: 150,
		height: 50,
	},
	{
		src: "/logo.png",
		alt: "CyberSec Logo",
		width: 150,
		height: 50,
	},
	{
		src: "/logo.png",
		alt: "CyberSec Logo",
		width: 150,
		height: 50,
	},
];