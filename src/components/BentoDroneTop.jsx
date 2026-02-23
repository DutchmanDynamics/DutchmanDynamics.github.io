import React from 'react';

export default function BentoGeiger() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-semibold text-indigo-400">Team Drone</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-pretty text-white sm:text-5xl">
          Building a satellite to land on a designated spot.
        </p>
        <div className="mt-10 grid grid-cols-1 gap-4 sm:mt-16 lg:grid-cols-6 lg:grid-rows-2">
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-gray-800 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] max-lg:rounded-t-[calc(2rem+1px)] lg:rounded-tl-[calc(2rem+1px)]">
              <div className="p-10 pt-4">
                <p className="mt-2 text-3xl font-medium tracking-tight text-white">Primary Mission</p>

                <h3 className="text-xl font-semibold text-indigo-400">Objectives</h3>

                <p className="mt-2 max-w-lg text-lg leading-8 text-gray-400">
                  Step one of the Primary Mission is to build the shell of the CanSat which will contain all its
                  components. The CanSat will have a temperature and air pressure sensor onboard. Pressure and
                  temperature shall be measured at least at 1Hz. The measurements will be transmitted to a ground
                  station. At the ground station the data will be converted into graphs.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 max-lg:rounded-t-4xl lg:rounded-tl-4xl" />
          </div>
          <div className="relative lg:col-span-3">
            <div className="absolute inset-0 rounded-lg bg-gray-800 lg:rounded-tr-4xl" />
            <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(var(--radius-lg)+1px)] lg:rounded-tr-[calc(2rem+1px)]">
              <div className="p-10 pt-4">
                <p className="mt-2 text-3xl font-medium tracking-tight text-white">
                  Secondary Mission: Landing on a designated point with a GPS
                </p>

                <h3 className="text-xl font-semibold text-indigo-400">Objectives</h3>
                <p className="mt-2 max-w-lg text-lg leading-8 text-gray-400">
                  For the Secondary Mission, the CanSat will have a GeigerCounter onboard to measure the radiation
                  during it's descent. This information will be sent down to the ground station and put into a graph.
                  The measurements we get will be usefull to see if a planet is habitable or not.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-lg shadow-sm outline outline-white/15 lg:rounded-tr-4xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
