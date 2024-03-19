import React from "react";

type CalculatorButtonProps = {
  value: string;
  onClick: (value: string) => void;
  className?: string;
};

const CalculatorButton: React.FC<CalculatorButtonProps> = ({
  value,
  onClick,
  className,
}) => {
  return (
    <button
      className={`col-span-1 bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded ${className}`}
      onClick={() => onClick(value)}
    >
      {value}
    </button>
  );
};

export default CalculatorButton;
