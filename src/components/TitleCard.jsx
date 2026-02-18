import * as React from 'react';

export default function TitleCard() {
  return (
    <div className="bg-white px-6 py-24 sm:py-32 lg:px-8 dark:bg-gray-900">
      <div className="mx-auto max-w-2xl text-center">
        <p className="text-base/7 font-semibold text-indigo-600 dark:text-indigo-400">CanSat Competition 25/26</p>
        <h2 className="mt-2 text-5xl font-semibold tracking-tight text-gray-900 sm:text-7xl dark:text-white">
          DutchmanDynamics & RadioActiveAir
        </h2>
        <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8 dark:text-gray-400">
          Two teams from Kaj Munk College are participating in the CanSat Competition, where they are developing fully
          operational micro satellites within strict constraints. Each team is responsible for system integration,
          sensor implementation, data transmission, flight stability, and recovery operations. Through iterative testing
          and refinement, the students gain practical experience in systems engineering, problem-solving, and mission
          planning.
        </p>
      </div>
    </div>
  );
}
