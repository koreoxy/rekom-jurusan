import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  ...props
}) => {
  return (
    <button
      className={`bg-amber-500 text-white py-2 px-5 rounded-md font-semibold transition transform hover:translate-x-1 hover:translate-y-1 hover:shadow-[4px_4px_0px_white] hover:cursor-pointer ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
