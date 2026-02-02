"use client";

import React from "react";

interface TextButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const TextButton: React.FC<TextButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        font-md font-oxanium text-gray-400 hover:scale-105 transition shadow-lg
        ${className ?? ""}
      `}
    >
      {children}
    </button>
  );
};

export default TextButton;
