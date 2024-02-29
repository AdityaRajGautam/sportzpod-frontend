import React from "react";

const sizes = {
  s: "text-base font-semibold leading-[19px]",
  md: "text-7xl font-bold",
  xs: "text-sm font-semibold",
};

const Heading = ({ children, className = "", size = "xs", as, ...restProps }) => {
  const Component = as || "h6";

  return (
    <Component className={`text-white-A700 font-sourcesanspro ${className} ${sizes[size]}`} {...restProps}>
      {children}
    </Component>
  );
};

export { Heading };
