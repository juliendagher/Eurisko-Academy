import React from "react";
import { ButtonProps, ButtonVariant } from "./Button.type";

const variantStyles = {
  [ButtonVariant.PRIMARY]: "bg-[#3251D0] hover:bg-[#263D9C] text-white",
  [ButtonVariant.OUTLINE_PRIMARY]:
    "border border-[#3251D0] bg-white text-[#3251D0] hover:bg-[#263D9C] hover:text-white",
  [ButtonVariant.DANGER]: "bg-red-500 hover:bg-red-600 text-white",
};

const Button: React.FC<ButtonProps> = React.memo(
  ({
    onClick,
    children,
    variant = ButtonVariant.PRIMARY,
    disabled,
    type = "button",
    className,
  }) => {
    return (
      <button
        type={type}
        onClick= {onClick/*!disabled ? onClick : undefined*/}
        className={
          className + " " +
          "px-4 py-2 rounded transition-colors duration-100 disabled:text-gray-300" + " " +
          variantStyles[variant]
          //disabled button styling?
        }
        disabled={disabled}
      >
        {children}
      </button>
    );
  }
);

export { Button };

