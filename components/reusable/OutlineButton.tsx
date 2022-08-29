import Link from "../../node_modules/next/link";
import React, { MouseEventHandler } from "react";

interface OutlineButtonProps {
  title: string;
  onClick?: MouseEventHandler<HTMLDivElement>;
  link?: string;
}

const OutlineButton = ({ title, onClick, link }: OutlineButtonProps) => {
  return (
    <>
      {link ? (
        <div className="text-black font-semibold text-sm shadow-md cursor-pointer border border-black rounded-sm py-1.5 px-4 mt-3 lg:py-2 hover:text-primary hover:border-primary">
          <Link href={link}>{title}</Link>
        </div>
      ) : (
        <div
          onClick={onClick}
          className="text-black font-semibold text-sm shadow-md cursor-pointer border border-black rounded-sm py-1.5 px-4 mt-3 lg:py-2 hover:text-primary hover:border-primary"
        >
          {title}
        </div>
      )}
    </>
  );
};

export default OutlineButton;
