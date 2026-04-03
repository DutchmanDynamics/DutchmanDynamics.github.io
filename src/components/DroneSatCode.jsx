import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

const includedFeatures = [
  'Source code repository',
  'Modular project structure',
  'Reusable components',
  'Documentation & comments',
];

export default function Example() {
  return (
    <div className="bg-gray-900 py-12 sm:py-16">
      {/* HEADER */}
      <div className="mx-auto max-w-4xl px-6 pt-12 pb-16 text-center">
        <h2 className="text-2xl font-semibold text-indigo-400">DroneSat Code</h2>
        <p className="mt-2 text-4xl font-semibold text-white sm:text-5xl">Source & Documentation</p>
      </div>

      <div className="mx-auto max-w-5xl px-6">
        {/* MAIN CARD */}
        <div className="rounded-3xl bg-gray-800/50 ring-1 ring-white/10 lg:flex transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
          {/* LEFT */}
          <div className="p-8 sm:p-10 lg:w-2/3">
            <h3 className="text-3xl font-semibold tracking-tight text-white max-w-xl">Project Overview</h3>

            <p className="mt-6 text-base text-gray-300 max-w-xl leading-relaxed">
              This repository holds the complete codebase for the DroneSat software implementation. It contains
              organized source code, modular code libraries, and documentation aimed at helping developers learn,
              modify, and use the system.
            </p>

            <div className="mt-10 flex items-center gap-x-4">
              <h4 className="flex-none text-sm font-semibold text-indigo-400">Included in this project</h4>
              <div className="h-px flex-auto bg-white/10" />
            </div>

            <ul className="mt-8 grid grid-cols-1 gap-4 text-sm text-gray-300 sm:grid-cols-2">
              {includedFeatures.map((feature) => (
                <li key={feature} className="flex gap-x-3 items-center">
                  <FontAwesomeIcon icon={faCircleDot} className="text-indigo-400" />
                  <span className="max-w-xs">{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* RIGHT */}
          <div className="p-8 sm:p-10 lg:w-1/3">
            {/* GitHub BOX WITH SAME GLOW */}
            <div className="rounded-2xl bg-gray-900 p-6 text-center ring-1 ring-white/10 transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
              <p className="text-base font-semibold text-gray-400">GitHub Repo</p>

              {/* GitHub Icon */}
              <div className="mt-6 flex justify-center">
                <svg className="h-12 w-12 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.018c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483
                    0-.237-.009-.868-.014-1.703-2.782.605-3.369-1.343-3.369-1.343-.455-1.158-1.11-1.466-1.11-1.466
                    -.908-.62.069-.608.069-.608 1.004.07 1.532 1.034 1.532 1.034.892 1.53 2.341 1.088 2.91.832
                    .091-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951
                    0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026
                    A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337
                    1.909-1.296 2.748-1.026 2.748-1.026.546 1.378.203 2.397.1 2.65
                    .64.7 1.028 1.595 1.028 2.688
                    0 3.848-2.338 4.695-4.566 4.942.36.31.678.923.678 1.861
                    0 1.343-.012 2.426-.012 2.756 0 .268.18.58.688.482
                    A10.02 10.02 0 0022 12.018C22 6.484 17.523 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>

              <a
                href="https://github.com/DobrilM/droneCanSat"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-8 block w-full rounded-md bg-indigo-500 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 transition"
              >
                View repository
              </a>

              <p className="mt-6 text-xs text-gray-400">
                Explore the codebase, review implementation details, and adapt the project for your own use.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
