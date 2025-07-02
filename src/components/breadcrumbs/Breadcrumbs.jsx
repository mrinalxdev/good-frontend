import React from "react";
import { BiChevronRight } from "react-icons/bi";

const Breadcrumbs = ({
  items,
  separator = <BiChevronRight className="mx-2 h-3 w-3" />,
}) => {
  return (
    <nav className="flex items-center text-sm">
      {items.map((item, index) => (
        <React.Fragment key={index}>
          {index > 0 && separator}
          <span
            className={`${
              index === items.length - 1
            } ? 'font-semibold text-gray-800' : 'text-gray-500 hover:text-gray-700 cursor-pointer'`}
            onClick={item.inClick}
          >
            {item.label}
          </span>
        </React.Fragment>
      ))}
    </nav>
  );
};


export default Breadcrumbs