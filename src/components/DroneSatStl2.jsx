import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { StaticImage } from 'gatsby-plugin-image';
import { faCircleDot } from '@fortawesome/free-solid-svg-icons';

const sections = [
  {
    name: 'STL Files (Parts)',
    id: 'stl-parts',
    description: 'Download individual STL files for each component of the DroneSat.',
    features: ['Lock', 'Top Part', 'Pin', 'Arm', 'Bottom Part'],
    imageType: 'stl',
  },
  {
    name: 'Fusion 360 File',
    id: 'fusion-file',
    description: 'Download the full Fusion 360 project file to view or modify the design.',
    features: ['Editable design', 'All components included', 'Ready for modification'],
    buttonText: 'Download .F3D',
    href: '/CanSat%20Whole.f3d',
    imageType: 'fusion',
  },
  {
    name: 'Assembly Guide',
    id: 'assembly-guide',
    description: 'Step-by-step guide to assemble all DroneSat components correctly.',
    features: ['Still in development'],
    buttonText: 'View Guide',
    href: '/dronesat/assembly',
    imageType: 'guide',
  },
];

export default function DroneSatStl2() {
  return (
    <div className="bg-gray-900 min-h-screen">
      {/* HEADER */}
      <div className="mx-auto max-w-7xl px-6 pt-32 pb-20 text-center lg:px-8">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-2xl font-semibold text-indigo-400">DroneSat Resources</h2>
          <p className="mt-2 text-4xl font-semibold text-white sm:text-5xl">Files & Documentation</p>
        </div>

        <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-400">
          As our mission was not successfully completed, we chose to share all of our work so others can continue
          developing and improving the project.
        </p>
      </div>

      {/* CARDS */}
      <div className="mx-auto max-w-7xl px-6 pb-24 lg:px-8">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 items-stretch">
          {sections.map((section) => (
            <div
              key={section.id}
              className="flex flex-col justify-between h-full rounded-2xl bg-gray-800 p-8 ring-1 ring-white/10 shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20"
            >
              <div>
                <h3 className="text-lg font-semibold text-indigo-400">{section.name}</h3>

                {/* IMAGE */}
                <div className="mt-6">
                  <div className="w-full aspect-square rounded-xl overflow-hidden bg-gray-900 flex items-center justify-center">
                    {section.imageType === 'stl' && (
                      <StaticImage
                        src="../images/cansat-closed.png"
                        alt="STL Parts"
                        className="w-full h-full object-cover"
                        placeholder="none"
                      />
                    )}

                    {section.imageType === 'fusion' && (
                      <StaticImage
                        src="../images/cansat-open.png"
                        alt="Fusion 360 Preview"
                        className="w-full h-full object-cover"
                        placeholder="none"
                      />
                    )}

                    {section.imageType === 'guide' && (
                      <StaticImage
                        src="../images/assembly-guide-stock.jpeg"
                        alt="Assembly Guide"
                        className="w-full h-full object-cover"
                        placeholder="none"
                      />
                    )}
                  </div>
                </div>

                <p className="mt-6 text-gray-300">{section.description}</p>

                <ul className="mt-6 space-y-3 text-sm text-gray-300">
                  {section.features.map((feature) => (
                    <li key={feature} className="flex gap-x-3">
                      <FontAwesomeIcon icon={faCircleDot} className="h-10 w-10 text-indigo-400" />
                      {feature}
                    </li>
                  ))}
                </ul>

                {section.id === 'stl-parts' && (
                  <details className="mt-6">
                    <summary className="list-none cursor-pointer block w-full rounded-md bg-indigo-500 px-4 py-2 text-center text-sm font-semibold text-white transition duration-300 hover:bg-indigo-400 hover:shadow-lg hover:shadow-indigo-500/40 hover:-translate-y-0.5">
                      View Parts List
                    </summary>

                    <div className="mt-4 space-y-2 bg-gray-900 rounded-lg p-4">
                      <a href="/CanSat Whole.f3d" download className="block text-indigo-400 hover:underline">
                        Lock
                      </a>
                      <a href="/files/dronesat/cover.stl" download className="block text-indigo-400 hover:underline">
                        Top Part
                      </a>
                      <a href="/files/dronesat/mount.stl" download className="block text-indigo-400 hover:underline">
                        Pin
                      </a>
                      <a
                        href="/files/dronesat/parachute.stl"
                        download
                        className="block text-indigo-400 hover:underline"
                      >
                        Arm
                      </a>
                      <a
                        href="/files/dronesat/electronics.stl"
                        download
                        className="block text-indigo-400 hover:underline"
                      >
                        Bottom Part
                      </a>
                    </div>
                  </details>
                )}
              </div>

              {section.id !== 'stl-parts' && (
                <a
                  href={section.href}
                  className="mt-8 block rounded-md bg-indigo-500 px-4 py-2 text-center text-sm font-semibold text-white hover:bg-indigo-400 transition duration-300 hover:shadow-lg hover:shadow-indigo-500/40"
                >
                  {section.buttonText}
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
