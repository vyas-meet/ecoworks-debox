import React, { MouseEventHandler } from "react";

interface EssentialButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  active: boolean;
}

const EssentialButton = ({ title, onClick, active }: EssentialButtonProps) => {
  return (
    <div
      onClick={onClick}
      className={`text-grey-900 text-center font-semibold text-lg shadow-sm hover:bg-accentGreen border-2 cursor-pointer py-1.5 w-48 my-3 lg:py-3 rounded-2xl z-10 ${active ? "bg-accentGreen border-accentGreen " : "border-accentGreen shadow-xl"
        }`}
    >
      {title}
    </div>
  );
};

export default EssentialButton;
