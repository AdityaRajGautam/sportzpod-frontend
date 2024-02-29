import React from "react";

const sizes = {
  "5xl": "text-[63px] font-normal leading-[77px]",
  xs: "text-sm font-normal",
  lg: "text-[19px] font-normal",
  "6xl": "text-[65px] font-medium",
  s: "text-[15px] font-normal leading-[23px]",
  "2xl": "text-2xl font-medium",
  "3xl": "text-[41px] font-medium",
  "4xl": "text-5xl font-medium",
  xl: "text-[23px] font-normal leading-[34px]",
  md: "text-lg font-normal",
};

const Text = ({ children, className = "", as, size = "2xl", ...restProps }) => {
  const Component = as || "p";

  return (
    <Component className={`text-white-A700 font-poppins ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Text };
