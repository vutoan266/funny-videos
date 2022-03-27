import React from "react";
import classNames from "classnames";

const Input = React.forwardRef((props, ref) => {
  const { className, ...inputProps } = props;
  return (
    <input
      type="text"
      ref={ref}
      className={classNames(
        "text-black focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md py-2 px-2",
        className
      )}
      {...inputProps}
    />
  );
});

export default Input;
