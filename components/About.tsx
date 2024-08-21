'use client'

import Highlight from "./Highlight";
import { CONFIG } from "@/lib";
import { motion } from "framer-motion";
import { FC } from "react";

export const About: FC = () => {
	return (
		<div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 text-center md:text-left">
			<div className="flex flex-col pt-28 mx-auto pr-10">
				<p className="text-md tracking-tightest font-bold">
					<Highlight>{CONFIG.TITLE}...</Highlight>
				</p>
				<h1 className="text-5xl text-white font-prompt">
					A personal website to test my skills.
				</h1>
				<div className="mt-4">
					<p className="text-white text-md">
						Hello there! I'm a {CONFIG.NAME} Developer with a passion for building <Highlight>software</Highlight> and web applications. With a background in <Highlight>Typescript</Highlight>, <Highlight>Java</Highlight>, and <Highlight>C++</Highlight>, I'm currently learning <Highlight>NextJs</Highlight> and <Highlight>Prisma</Highlight>.
						<br />
						<br />
						I like to build <Highlight>full-stack applications</Highlight> with scalable and responsive technologies. I'm also a fan of the <Highlight>open-source community</Highlight> and I'm always looking for new ways to improve my skills.
					</p>
				</div>
			</div>
			<h1 className="pt-16 text-3xl font-semibold md:hidden">Language Skill</h1>
			<div className="flex flex-col items-center justify-center pt-20 md:p-0">
				{codeData.map((code, index) => (
					<CodeComponent key={index} {...code} />
				))}
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
	{ lang: "typescript", level: "w-full", logo: "typescript" },
	{ lang: "java", level: "w-2/3", logo: "java" },
	{ lang: "c++", level: "w-1/3", logo: "cpp" },
];

const CodeComponent = ({ lang, level, logo }: ICodeComponent) => {
	const fLevel =
		level === "w-full" ? "100%" : level === "w-2/3" ? "66.6%" : "33.3%";

	return (
		<motion.div
			className="w-full md:w-[460px] h-20 md:h-24 items-center md:items-stretch rounded-lg md:p-2 mt-4 bg-gray-800 flex flex-row relative overflow-hidden"
			whileHover={{ scale: 1.05 }}
		>
			<img
				src={`/asset/langs/${logo}.png`}
				className={`rounded-lg h-auto w-14 md:w-20 my-auto ml-2`}
			/>
			<p className={`text-white md:mt-[21px] ml-4 flex flex-row ${logo === "java" || logo === "cpp" ? "ml-6" : ""}`}>
				{lang.charAt(0).toUpperCase() + lang.substring(1)}
			</p>
			<div className="hidden md:flex bg-gray-800 h-2 w-60 my-auto rounded-full absolute right-4 top-[48%]">
				<motion.div
					animate={{ width: fLevel }}
					transition={{ duration: 2 }}
					className="bg-teal-500 rounded-full"
				></motion.div>
			</div>
		</motion.div>
	);
};

export default About;
