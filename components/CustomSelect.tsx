"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaChevronDown } from "react-icons/fa";

interface CustomSelectProps {
  options: string[];
  value: string;
  onChange: (value: string) => void;
}

const CustomSelect: React.FC<CustomSelectProps> = ({
  options,
  value,
  onChange,
}) => {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="relative w-full md:w-auto" ref={ref}>
      <button
        className="w-full md:w-auto px-3 py-2 pr-2 rounded-lg bg-gradient-to-r from-[#BB0051] via-[#E0146F] to-[#FF3D8E] text-white font-oxanium shadow-md flex justify-between items-center hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-[#0ff0fc] transition-all"
        onClick={() => setOpen((o) => !o)}
      >
        {value}
        <FaChevronDown
          className={`ml-2 transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      {open && (
        <ul className="absolute z-50 mt-1 w-full md:w-auto bg-black rounded-lg shadow-lg max-h-80 overflow-auto hide-scrollbar ">
          {options.map((opt) => (
            <li
              key={opt}
              onClick={() => {
                onChange(opt);
                setOpen(false);
              }}
              className={`px-3 py-2 cursor-pointer text-white font-oxanium text-sm hover:bg-gradient-to-r from-[#BB0051] via-[#E0146F] to-[#FF3D8E] hover:text-white transition-all ${
                opt === value ? "bg-[#E0146F]" : ""
              }`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CustomSelect;
