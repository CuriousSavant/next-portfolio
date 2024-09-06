'use client'

import Highlight from "./Highlight";
import { CONFIG } from "@/lib";
import { motion } from "framer-motion";
import { FC } from "react";

export const About: FC = () => {
	return (
		<div className="w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 text-center md:text-left">
			<div className="flex flex-col justify-center pt-16 md:pr-10 px-2 md:px-0 font-thai">
				<h1 className="text-3xl md:text-5xl text-gray-900 dark:text-white">
					About Me
				</h1>
				<div className="mt-4 text-black dark:text-white text-md">
					สวัสดีอีกครั้งครับ ผม <Highlight>{CONFIG.NAME}</Highlight>, ผมชอบสร้าง <Highlight>software</Highlight>, <Highlight>web applications.</Highlight> ด้วยภาษา และ เครื่องมือต่างๆเช่น typescript, Java, และ C++, ช่วงนี้กำลังเรียนรู้เครื่องมืออย่าง nestjs และ prisma.
					ส่วนเป้าหมายคือ <Highlight>senior developer</Highlight> สาเหตุมีอยู่สองส่วน <br />
					<div className="mt-6 space-y-2">
						<div>
							<Highlight color="pink">1.</Highlight>ไม่อยากไปขายหมู ขายไก่หรืออะไรก็ตาม ด้วยความที่ผมเป็นคนไม่ชอบออกนอกหน้าเลยไม่ค่อยชอบอะไรแบบนี้สักเท่าไหร่
						</div>
						<div>
							<Highlight color="pink">2.</Highlight> อยากรู้ว่าคนที่ไม่ได้จบตรงสาย หรือ เริ่มจาก 0 เรียนจาก Youtube หาความรู้เพิ่มเดิมจาก internet สามารถเป็นถึง senior ได้มั้ย?
						</div>
					</div>
					<br /><br />
					<div className="space-y-2">
						<p>For anyone who wants to build upon what I've done, feel free to do so. I give my permission.</p>
						<p>สำหรับใครที่ต้องการต่อยอดเว็บนี้ หรือ นำไปต่อยอดเป็นของตัวเองสามารถนำ template นี้ไปใช้ได้เลยครับ😊</p>
					</div>
				</div>
			</div>

			{/* Skills and Tools Section */}
			<div className="flex flex-col justify-center pt-16 px-6">
				<div className="flex flex-col gap-4 mt-4">
					{codeData.map((code, index) => (
						<CodeComponent key={index} {...code} />
					))}
				</div>
			</div>
		</div >
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
			className="w-full md:w-[400px] h-16 md:h-20 bg-gray-200 dark:bg-gray-900 flex items-center rounded-lg p-2"
			whileHover={{ scale: 1.05 }}
		>
			<img
				src={`/asset/langs/${logo}.png`}
				alt={`${lang} logo`}
				className="w-12 md:w-16 h-auto mr-4"
			/>
			<div className="flex flex-1 flex-col">
				<p className="text-gray-900 dark:text-white text-lg font-semibold">{lang}</p>
				<div className="relative w-full h-2 bg-gray-500 dark:bg-gray-600 rounded-full mt-1">
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

interface LanguageLinkProps {
	name: string;
	href: string;
	color: string
}

const LanguageLink = ({ name, href, color }: LanguageLinkProps) => {
	return (
		<span
			className={color + " " + "hover:cursor-pointer"}
			onClick={() => (window.location.href = href)}
		>
			{name}
		</span>
	);
};