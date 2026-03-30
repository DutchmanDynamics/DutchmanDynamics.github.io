import React from 'react';

const product = {
  step: 2,
};

const steps = ['Proposal', 'Progress Report', 'Final Report', 'Final Paper', 'Space Expo'];

export default function ProgressBar() {
  return (
    <div className="w-full py-8 bg-transparent">
      {/* Title */}
      <p className="text-lg sm:text-xl font-semibold text-white text-center">Project Milestones</p>

      {/* Progress bar */}
      <div className="mt-8 px-4 sm:px-6">
        <div className="overflow-hidden rounded-full bg-gray-700 h-3 w-full">
          <div
            style={{
              width: `${(product.step / (steps.length - 1)) * 100}%`,
            }}
            className="h-3 rounded-full bg-indigo-500 transition-all duration-500"
          />
        </div>
      </div>

      {/* Steps (scrollable on mobile) */}
      <div className="mt-6 overflow-x-auto px-2">
        <div className="flex min-w-max justify-between gap-6 sm:grid sm:grid-cols-5 sm:gap-0">
          {steps.map((stepName, index) => (
            <div
              key={index}
              className={`text-center text-sm font-medium whitespace-nowrap ${
                index <= product.step ? 'text-indigo-400' : 'text-gray-500'
              }`}
            >
              {stepName}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
