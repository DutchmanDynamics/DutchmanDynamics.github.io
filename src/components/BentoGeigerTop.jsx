import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faRadiation } from '@fortawesome/free-solid-svg-icons';

export default function BentoGeiger() {
  return (
    <div className="bg-gray-900 py-16 pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Header */}
        <h2 className="text-4xl font-semibold text-indigo-400">Team Geiger</h2>

        <p className="mt-2 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Building a satellite to measure radiation.
        </p>

        {/* Grid */}
        <div className="text-indigo-400 mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Primary Mission */}

          <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 inset-ring inset-ring-white/5 backdrop-blur-sm">
            <FontAwesomeIcon
              aria-hidden="true"
              className="h-32 w-32 pt-1 flex-none text-indigo-400 text-2xl"
              icon={faAtom}
            />
            <div className="text-base/7">
              <p className="text-2xl font-semibold text-white">Primary Mission</p>

              <h3 className="mt-2 text-lg font-semibold text-indigo-400">Objectives</h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                Step one of the Primary Mission is to build the shell of the CanSat which will contain all its
                components. The CanSat will have a temperature and air pressure sensor onboard. Pressure and temperature
                shall be measured at least at 1Hz. The measurements will be transmitted to a ground station. At the
                ground station the data will be converted into graphs.
              </p>
            </div>
          </div>

          {/* Secondary Mission */}
          <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 inset-ring inset-ring-white/5 backdrop-blur-sm">
            <FontAwesomeIcon
              aria-hidden="true"
              className="h-32 w-32 pt-1 flex-none text-indigo-400 text-2xl"
              icon={faRadiation}
            />
            <div className="text-base/7">
              <p className="text-2xl font-semibold text-white">Secondary Mission: Measuring Radiation</p>

              <h3 className="mt-2 text-lg font-semibold text-indigo-400">Objectives</h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                For the Secondary Mission, the CanSat will have a GeigerCounter onboard to measure the radiation during
                it's descent. This information will be sent down to the ground station and put into a graph. The
                measurements we get will be usefull to see if a planet is habitable or not.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
