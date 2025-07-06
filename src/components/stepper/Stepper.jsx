import React from "react";
import { motion } from "framer-motion";

function Stepper({ steps, currentStep }) {
  return (
    <div className="flex justify-between items-center w-full max-w-3xl mx-auto">
      {steps.map((step, index) => {
        const isCompleted = index < currentStep;
        const isActive = index === currentStep;

        return (
          <React.Fragment key={step.id}>
            <div className="flex flex-col items-center relative">
              <motion.div
                className={`flex items-center justify-center w-10 h-10 rounded-full ${
                  isCompleted
                    ? "bg-green-500 text-white"
                    : isActive
                    ? "bg-blue-600 text-white"
                    : "bg-gray-200 text-gray-600"
                } font-medium`}
                initial={{ scale: 1 }}
                animate={{ scale: isActive ? 1.1 : 1 }}
                transition={{ type: "spring", stiffness: 500 }}
              >
                {isCompleted ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                ) : (
                  index + 1
                )}
              </motion.div>

              <span
                className={`mt-2 text-sm ${
                  isActive ? "font-semibold text-blue-600" : "text-gray-600"
                }`}
              >
                {step.label}
              </span>
            </div>

            {index < steps.length - 1 && (
              <div className="flex-1 h-1 mx-2 bg-gray-200 rounded-full">
                {isCompleted && (
                  <motion.div
                    className="h-1 bg-green-500 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: "100%" }}
                    transition={{ duration: 0.5 }}
                  />
                )}
              </div>
            )}
          </React.Fragment>
        );
      })}
    </div>
  );
}

export default Stepper;
