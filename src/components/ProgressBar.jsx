import React from 'react';

const product = {
  step: 3, //Change this for new progress 3=Final Paper 4=Final at Space Expo
};

const steps = ['Proposal', 'Progress Report', 'Final Report', 'Final Paper', 'Final at Space Expo'];

export default function ProgressBar() {
  const completedSteps = steps.slice(0, product.step + 1);
  const remainingSteps = steps.slice(product.step + 1);

  return (
    <div className="w-full py-8 bg-transparent">
      {/* Title */}
      <p className="text-lg sm:text-xl sm: font-semibold text-white text-center">Project Milestones</p>

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

      {/* Steps */}
      <div className="mt-6 px-2 grid sm:grid-cols-5 gap-3 text-center">
        {/* Completed steps (left first visually) */}
        {completedSteps.map((stepName, index) => (
          <div key={`completed-${index}`} className="hidden sm:inline text-sm font-medium text-indigo-400">
            {stepName}
          </div>
        ))}

        {
          <div key={`completed`} className="sm:hidden inline text-sm font-medium text-indigo-400">
            {completedSteps.at(-1)}
          </div>
        }

        {/* Remaining steps */}
        {remainingSteps.map((stepName, index) => (
          <div key={`remaining-${index}`} className="hidden sm:inline text-sm font-medium text-gray-500 ">
            {stepName}
          </div>
        ))}
      </div>
    </div>
  );
}
