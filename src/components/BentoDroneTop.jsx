import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAtom, faSatellite, faXmark } from '@fortawesome/free-solid-svg-icons';

export default function BentoGeiger() {
  return (
    <div className="bg-gray-900 py-16 pt-40">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-12 flex items-center gap-4 rounded-xl bg-amber-300/10 p-6 ring-1 ring-amber-500/20 backdrop-blur-sm">
          <FontAwesomeIcon icon={faXmark} className="h-10 w-10 text-amber-400" />
          <div>
            <h3 className="text-xl font-semibold text-amber-400">Partial Success</h3>
            <p className="text-gray-300 mt-1">
              The DroneSat mission achieved partial success. The design, tests, calibration, drone flight, and
              communication were successful; the team was able to qualify for a launch. However, on the launch day,
              there were some issues with the GeoZone. The GeoZone was set in the correct place, but the CanSat powered
              on in the wrong spot. Due to safety reasons, we could not get close enough to the launch zone where our
              GeoZone was located, and the inability to detect the launch led to a failure to wake up the drone and
              collect data.
            </p>
          </div>
        </div>

        {/* Header */}
        <h2 className="text-4xl font-semibold text-indigo-400">Team Drone</h2>
        <p className="mt-2 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Building a satellite to land on a designated spot.
        </p>

        {/* Grid */}
        <div className="text-indigo-400 mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Primary Mission */}
          <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 inset-ring inset-ring-white/5 backdrop-blur-sm ring-1 ring-white/10 shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
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
          <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 inset-ring inset-ring-white/5 backdrop-blur-sm ring-1 ring-white/10 shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
            <FontAwesomeIcon
              aria-hidden="true"
              className="h-32 w-32 pt-1 flex-none text-indigo-400 text-2xl"
              icon={faSatellite}
            />
            <div className="text-base/7">
              <p className="text-2xl font-semibold text-white">
                Secondary Mission: Landing on a designated point with a GPS
              </p>
              <h3 className="mt-2 text-lg font-semibold text-indigo-400">Objectives</h3>
              <p className="mt-4 text-gray-400 leading-relaxed">
                For the Secondary Mission, the CanSat will open during its descent and turn into a drone. It will use
                GPS to navigate to a chosen point on a map. This can also serve as a prototype for space waste
                retrieval, allowing unused rockets and satellites to safely return to Earth and keep the airspace clean.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
