import React from "react";
import { ButtonProps, ButtonVariant } from "./Button.type";

const variantStyles = {
  [ButtonVariant.PRIMARY]:
    "bg-primary hover:bg-[#263D9C] hover:border-[#263D9C] text-white dark:bg-[#2C74B3] dark:hover:bg-[#144272]",
  [ButtonVariant.OUTLINE_PRIMARY]:
    "border bg-white text-[#3251D0] hover:bg-[#3251D0] hover:border-white hover:text-white dark:bg-[#205295] dark:text-white dark:hover:bg-[#144272] dark:hover:border-[#205295] dark:border-[#144272]",
  [ButtonVariant.DANGER]:
    "bg-red-500 hover:bg-red-600 text-white dark:bg-red-700 dark:hover:bg-red-800",
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
        onClick={onClick /*!disabled ? onClick : undefined*/}
        className={
          className +
          " " +
          "px-4 py-2 rounded transition-colors duration-100 disabled:text-gray-300" +
          " " +
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
