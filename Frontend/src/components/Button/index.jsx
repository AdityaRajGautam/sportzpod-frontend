import React from "react";
import PropTypes from "prop-types";

const shapes = {
  circle: "rounded-[50%]",
  square: "rounded-[0px]",
  round: "rounded-tl-[15px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[15px]",
};
const variants = {
  fill: {
    gray_900_04: "bg-gray-900_04 text-white-A700",
    white_A700: "bg-white-A700 text-gray-900",
    blue_A200: "bg-blue-A200 text-white-A700",
  },
  outline: {
    blue_A200: "border-blue-A200 border-2 border-solid text-blue-A200",
    white_A700: "border-white-A700 border border-solid text-white-A700",
  },
};
const sizes = {
  "3xl": "h-[68px] px-[15px] text-sm",
  "2xl": "h-[66px] px-[35px] text-2xl",
  md: "h-[54px] px-[34px] text-sm",
  xl: "h-[63px] px-[35px] text-lg",
  xs: "h-9 px-[7px]",
  sm: "h-11 px-5 text-base",
  lg: "h-[54px] px-[35px] text-lg",
};

const Button = ({
  children,
  className = "",
  leftIcon,
  rightIcon,
  shape = "round",
  variant = "fill",
  size = "lg",
  color = "blue_A200",
  ...restProps
}) => {
  return (
    <button
      className={`${className} flex items-center justify-center text-center cursor-pointer ${(shape && shapes[shape]) || ""} ${(size && sizes[size]) || ""} ${(variant && variants[variant]?.[color]) || ""}`}
      {...restProps}
    >
      {!!leftIcon && leftIcon}
      {children}
      {!!rightIcon && rightIcon}
    </button>
  );
};

Button.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  leftIcon: PropTypes.node,
  rightIcon: PropTypes.node,
  shape: PropTypes.oneOf(["circle", "square", "round"]),
  size: PropTypes.oneOf(["3xl", "2xl", "md", "xl", "xs", "sm", "lg"]),
  variant: PropTypes.oneOf(["fill", "outline"]),
  color: PropTypes.oneOf(["gray_900_04", "white_A700", "blue_A200"]),
};

export { Button };
