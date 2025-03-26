import { cn } from "@/lib/utils";
import Image, { StaticImageData } from "next/image";
import React from "react";

type ButtonProps = {
  className?: string;
  leftIcon?: React.ReactNode | StaticImageData; // Supports React nodes or imported SVGs
  rightIcon?: React.ReactNode | StaticImageData;
  text: string;
  primaryCta?: boolean;
  secondaryCta?: boolean;
  tertiaryCta?: boolean;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
};

const Button: React.FC<ButtonProps> = ({
  leftIcon,
  text,
  rightIcon,
  className = "",
  primaryCta = false,
  secondaryCta = false,
  tertiaryCta = false,
  onClick,
  type = "button",
}) => {
  return (
    <button
      type={type}
      className={cn(
        "flex items-center justify-center transition-all rounded duration-300 py-[10px] px-[71px]",
        {
          // Primary CTA Styles
          "bg-purple-200 text-white text-base font-normal hover:bg-purple-200/80 hover:shadow-md":
            primaryCta,

          // Secondary CTA Styles
          "flex bg-white hover:bg-white/80 hover:shadow-md text-purple-100 text-xl font-normal":
            secondaryCta,

          // Secondary CTA Styles
          "flex !bg-yellow-100 hover:!bg-yellow-100/80 hover:shadow-md text-black text-xl font-normal":
            tertiaryCta,

          // Default (fallback) styles
          "bg-transparent border border-black text-black":
            !primaryCta && !secondaryCta,
        },
        className
      )}
      onClick={onClick}
    >
      {/* Render Left Icon */}
      {leftIcon &&
        (typeof leftIcon === "string" || leftIcon instanceof Object ? (
          <Image
            src={leftIcon as StaticImageData} // Use Image for imported icons
            alt=""
            className="mr-2 w-6 h-6"
          />
        ) : (
          <span className="mr-2">{leftIcon}</span> // Inline React node
        ))}

      {text}

      {/* Render Right Icon */}
      {rightIcon &&
        (typeof rightIcon === "string" || rightIcon instanceof Object ? (
          <Image
            src={rightIcon as StaticImageData} // Use Image for imported icons
            alt=""
            className="ml-2 w-6 h-6"
          />
        ) : (
          <span className="ml-2">{rightIcon}</span> // Inline React node
        ))}
    </button>
  );
};

export default Button;
