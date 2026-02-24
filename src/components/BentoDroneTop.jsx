import React from 'react';

export default function BentoGeiger() {
  return (
    <div className="bg-gray-900 py-16 sm:py-20">
      <div className="mx-auto max-w-2xl px-6 lg:max-w-7xl lg:px-8">
        <h2 className="text-4xl font-semibold text-indigo-400">Team Drone</h2>
        <p className="mt-2 max-w-lg text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Building a satellite to land on a designated spot.
        </p>

        <div className="mt-10 grid grid-cols-1 gap-6 sm:mt-16 lg:grid-cols-2">
          {/* Primary Mission */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gray-800" />
            <div className="relative flex flex-col overflow-hidden rounded-2xl">
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
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-sm outline outline-white/15" />
          </div>

          {/* Secondary Mission */}
          <div className="relative">
            <div className="absolute inset-0 rounded-2xl bg-gray-800" />
            <div className="relative flex flex-col overflow-hidden rounded-2xl">
              <div className="p-10 pt-4">
                <p className="mt-2 text-3xl font-medium tracking-tight text-white">
                  Secondary Mission: Landing on a designated point with a GPS
                </p>
                <h3 className="text-xl font-semibold text-indigo-400">Objectives</h3>
                <p className="mt-2 max-w-lg text-lg leading-8 text-gray-400">
                  For the Secondary Mission, the CanSat will open during its descent and turn into a drone. It will use
                  GPS to navigate to a chosen point on a map. This can also serve as a prototype for space waste
                  retrieval, allowing unused rockets and satellites to safely return to Earth and keep the airspace
                  clean.
                </p>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 rounded-2xl shadow-sm outline outline-white/15" />
          </div>
        </div>
      </div>
    </div>
  );
}
