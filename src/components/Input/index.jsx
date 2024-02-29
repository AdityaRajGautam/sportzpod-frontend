import React from "react";
import PropTypes from "prop-types";

const shapes = {
  round: "rounded-lg",
  square: "rounded-[0px]",
};
const variants = {
  outline: {
    gray_400_02: "border-gray-400_02 border border-solid text-gray-400_02",
  },
  fill: {
    gray_900_01: "bg-gray-900_01",
  },
};
const sizes = {
  sm: "h-[54px] pl-5 pr-[35px] text-sm",
  xs: "h-10 pl-3 pr-[7px] text-base",
};

const Input = React.forwardRef(
  (
    {
      className = "",
      name = "",
      placeholder = "",
      type = "text",
      children,
      label = "",
      prefix,
      suffix,
      onChange,
      shape = "round",
      variant = "outline",
      size = "sm",
      color = "gray_400_02",
      ...restProps
    },
    ref,
  ) => {
    const handleChange = (e) => {
      if (onChange) onChange(e?.target?.value);
    };

    return (
      <>
        <div
          className={`${className} flex items-center justify-center border border-solid ${shapes[shape] || ""} ${variants[variant]?.[color] || variants[variant] || ""} ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input ref={ref} type={type} name={name} onChange={handleChange} placeholder={placeholder} {...restProps} />
          {!!suffix && suffix}
        </div>
      </>
    );
  },
);

Input.propTypes = {
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  prefix: PropTypes.node,
  suffix: PropTypes.node,
  shape: PropTypes.oneOf(["round", "square"]),
  size: PropTypes.oneOf(["sm", "xs"]),
  variant: PropTypes.oneOf(["outline", "fill"]),
  color: PropTypes.oneOf(["gray_400_02", "gray_900_01"]),
};

export { Input };
