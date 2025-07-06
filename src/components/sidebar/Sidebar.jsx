import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const Sidebar = ({ items, defaultActive }) => {
  const [activeItem, setActiveItem] = useState(defaultActive);
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <motion.div
      className={`bg-gray-800 text-white h-[150px] flex flex-col ${
        isCollapsed ? "w-5" : "w-64"
      } transition-all duration-300 rounded-xl`}
      initial={{ width: 256 }}
      animate={{ width: isCollapsed ? 60 : 256 }}
    >
      <div className="p-4 border-b border-gray-700 flex justify-between items-center">
        {!isCollapsed && <h2 className="text-xl font-bold">Menu</h2>}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-2 rounded-full hover:bg-gray-700"
        >
          {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
        </button>
      </div>

      <div className="flex-1 overflow-y-auto">
        {items.map((item) => (
          <div className="p-2" key={item.id}>
            <div
              className={`flex items-center p-3 rounded-lg cursor-pointer ${
                activeItem === item.id ? "bg-blue-600" : "hover:bg-gray-700"
              }`}
            >
              <span className="mr-3">{item.icon}</span>
              {!isCollapsed && <span>{item.label}</span>}
            </div>

            {!isCollapsed && activeItem === item.id && item.subItems && (
              <div className="ml-8 mt-2">
                {item.subItems.map((subItem) => (
                  <div
                    key={subItem.id}
                    className="p-2 rounded-lg cursor-pointer hover:bg-gray-700"
                    onClick={subItem.onClick}
                  >
                    {subItem.label}
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </motion.div>
  );
};

export default Sidebar;
