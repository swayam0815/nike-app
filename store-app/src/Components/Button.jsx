import React from "react";

const Button = ({ label, iconURL, bkgColor, fullWidth }) => {
  return (
    <button
      className={`group flex justify-center items-center gap-2 px-7 py-4 font-montserrat text-lg leading-none shadow-inner shadow-white  ${
        bkgColor
          ? bkgColor
          : "hover:bg-red-500 border-coral-red bg-coral-red text-white"
      }  transition-all hover:scale-105 active:scale-95 rounded-full  ${fullWidth && 'w-full'} `}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          alt="arrow-right"
          className="ml-2 rounded-full w-5 h-5 group-hover:translate-x-2 transition-all"
        />
      )}
    </button>
  );
};

export default Button;
