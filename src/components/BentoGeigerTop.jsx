import React, { useEffect, useState } from 'react';
import Confetti from 'react-confetti';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

// ✅ SAFE icon imports (important for Gatsby SSR)
import { faAtom } from '@fortawesome/free-solid-svg-icons/faAtom';
import { faRadiation } from '@fortawesome/free-solid-svg-icons/faRadiation';
import { faCircleCheck } from '@fortawesome/free-solid-svg-icons/faCircleCheck';

export default function BentoGeiger() {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);

  return (
    <div className="relative bg-gray-900 py-16 pt-40 overflow-hidden">
      {/* 🎉 Confetti (SSR safe) */}
      {windowSize.width > 0 && (
        <Confetti width={windowSize.width} height={windowSize.height} numberOfPieces={200} recycle={false} />
      )}

      {/* 🏆 TOP BANNER */}
      <div className="bg-indigo-600/10 border-b border-indigo-500/20">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center">
          <p className="text-indigo-300 font-semibold text-lg">🥈 Geiger CanSat earned 2nd place in the competition!</p>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* ✅ Mission Accomplished */}
        <div className="mb-12 flex items-center gap-4 rounded-xl bg-green-500/10 p-6 ring-1 ring-green-500/20 backdrop-blur-sm mt-10">
          <FontAwesomeIcon icon={faCircleCheck} className="h-10 w-10 text-green-400" />
          <div>
            <h3 className="text-xl font-semibold text-green-400">Mission Accomplished</h3>
            <p className="text-gray-300 mt-1">The Geiger CanSat mission was completed successfully.</p>
          </div>
        </div>

        {/* Header */}
        <h2 className="text-4xl font-semibold text-indigo-400">Team Geiger</h2>

        <p className="mt-2 max-w-2xl text-4xl font-semibold tracking-tight text-white sm:text-5xl">
          Building a satellite to measure radiation.
        </p>

        {/* Grid */}
        <div className="text-indigo-400 mt-10 grid grid-cols-1 gap-8 lg:grid-cols-2">
          {/* Primary Mission */}
          <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10 shadow-lg">
            <FontAwesomeIcon className="h-32 w-32 pt-1 flex-none text-indigo-400" icon={faAtom} />

            <div>
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
          <div className="flex gap-x-4 rounded-xl bg-white/5 p-6 backdrop-blur-sm ring-1 ring-white/10 shadow-lg">
            <FontAwesomeIcon className="h-32 w-32 pt-1 flex-none text-indigo-400" icon={faRadiation} />

            <div>
              <p className="text-2xl font-semibold text-white">Secondary Mission: Measuring Radiation</p>

              <h3 className="mt-2 text-lg font-semibold text-indigo-400">Objectives</h3>

              <p className="mt-4 text-gray-400 leading-relaxed">
                For the Secondary Mission, the CanSat will have a GeigerCounter onboard to measure the radiation during
                its descent. This information will be sent down to the ground station and put into a graph. The
                measurements we get will be useful to see if a planet is habitable or not.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
