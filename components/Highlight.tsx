'use client'

import React from "react";

type HighlightProps = {
	children: React.ReactNode;
};

export default function Highlight(props: HighlightProps) {
	return <span className="text-teal-500">{props.children}</span>;
};