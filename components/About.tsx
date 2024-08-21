'use client'

import Highlight from "./Highlight";
import { CONFIG } from "@/lib";
import { motion } from "framer-motion";
import { FC } from "react";

export const About: FC = () => {
	return (
		<div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
			<div className="flex flex-col justify-center pt-16 md:pr-10">
				<p className="text-md font-bold">
					<Highlight>{CONFIG.TITLE}...</Highlight>
				</p>
				<h1 className="text-4xl md:text-5xl text-white font-prompt">
					A personal website to showcase my skills.
				</h1>
				<p className="mt-4 text-white text-md">
					Hello! I'm {CONFIG.NAME}, a passionate Developer specializing in <Highlight>software</Highlight> and web applications. With experience in <Highlight>TypeScript</Highlight>, <Highlight>Java</Highlight>, and <Highlight>C++</Highlight>, I am currently enhancing my skills with <Highlight>Next.js</Highlight> and <Highlight>Prisma</Highlight>.
					<br /><br />
					For anyone who wants to build upon what I've done, feel free to do so. I give my permission.
				</p>
			</div>

			{/* Skills and Tools Section */}
			<div className="flex flex-col justify-center pt-16 px-6">
				<h1 className="text-2xl md:text-3xl font-semibold">Language Skills</h1>
				<div className="flex flex-col gap-4 mt-4">
					{codeData.map((code, index) => (
						<CodeComponent key={index} {...code} />
					))}
				</div>
			</div>
		</div>
	);
};

type ICodeComponent = {
	lang: string;
	level: "w-full" | "w-2/3" | "w-1/3";
	logo: string;
};

const codeData: ICodeComponent[] = [
	{ lang: "TypeScript", level: "w-full", logo: "typescript" },
	{ lang: "Java", level: "w-2/3", logo: "java" },
	{ lang: "C++", level: "w-1/3", logo: "cpp" },
];

const CodeComponent = ({ lang, level, logo }: ICodeComponent) => {
	const fLevel =
		level === "w-full" ? "100%" : level === "w-2/3" ? "66.6%" : "33.3%";

	return (
		<motion.div
			className="w-full md:w-[400px] h-16 md:h-20 bg-gray-800 flex items-center rounded-lg p-2"
			whileHover={{ scale: 1.05 }}
		>
			<img
				src={`/asset/langs/${logo}.png`}
				alt={`${lang} logo`}
				className="w-12 md:w-16 h-auto mr-4"
			/>
			<div className="flex flex-1 flex-col">
				<p className="text-white text-lg font-semibold">{lang}</p>
				<div className="relative w-full h-2 bg-gray-600 rounded-full mt-1">
					<motion.div
						animate={{ width: fLevel }}
						transition={{ duration: 1 }}
						className="bg-teal-500 h-full rounded-full"
					/>
				</div>
			</div>
		</motion.div>
	);
};

export default About;
