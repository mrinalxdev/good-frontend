import React from "react";
import { BiChevronRight } from "react-icons/bi";
import { motion, AnimatePresence } from "framer-motion";

const Breadcrumbs = ({
  items,
  separator = <BiChevronRight className="mx-2 h-3 w-3" />,
}) => {
  const itemVariants = {
    initial: { opacity: 0, y: 10 },
    animate: (index) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, delay: index * 0.1 },
    }),
    hover: { scale: 1.1, color: "#1F2937" },
    tap: { scale: 0.95 },
  };

  const separatorVariants = {
    initial: { opacity: 0, x: -5 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.2 } },
  };

  return (
    <motion.nav
      className="flex items-center text-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <AnimatePresence>
        {items.map((item, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <motion.div
                variants={separatorVariants}
                initial="initial"
                animate="animate"
              >
                {separator}
              </motion.div>
            )}
            <motion.span
              variants={itemVariants}
              initial="initial"
              animate="animate"
              whileHover="hover"
              whileTap="tap"
              className={`${
                index === items.length - 1
                  ? "font-semibold text-gray-800"
                  : "text-gray-500 cursor-pointer"
              }`}
              onClick={item.onClick}
            >
              {item.label}
            </motion.span>
          </React.Fragment>
        ))}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Breadcrumbs;
