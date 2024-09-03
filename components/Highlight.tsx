import React from "react";

type HighlightProps = {
  children: React.ReactNode;
  color?: 'teal' | 'pink' | 'yellow' | 'blue'; // เพิ่มสีที่นี่
};

export default function Highlight({ children, color = 'teal' }: HighlightProps) {
  const colorClassMap: Record<string, string> = {
    teal: 'text-teal-500',
    pink: 'text-pink-500',
    yellow: 'text-yellow-500',
	blue: 'text-blue-700',
  };

  const textColorClass = colorClassMap[color];

  return <span className={textColorClass}>{children}</span>;
};
