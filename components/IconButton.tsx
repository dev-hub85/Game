"use client";

import React from "react";

interface IconButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  className?: string;
}

const IconButton: React.FC<IconButtonProps> = ({
  onClick,
  children,
  className,
}) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-8 h-8 rounded-full text-white shadow-lg hover:scale-110 transition
        flex items-center justify-center
        bg-gradient-to-r from-[#BB0051] to-[#E0146F]
        ${className ?? ""}
      `}
    >
      {children}
    </button>
  );
};

export default IconButton;
