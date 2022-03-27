import React from "react";
import classNames from "classnames";

const Button = React.forwardRef((props, ref) => {
  const { className, children, secondary, ...restProps } = props;
  return (
    <button
      ref={ref}
      className={classNames(
        "inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white focus:outline-none focus:ring-1 focus:ring-offset-1",
        { "bg-yellow-500 hover:bg-yellow-600": !secondary },
        { "bg-black hover:bg-[#333]": secondary },
        className
      )}
      {...restProps}
    >
      {children}
    </button>
  );
});

export default Button;
