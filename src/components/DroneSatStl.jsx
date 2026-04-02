import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

export default function DroneSatSTL() {
  return (
    <div className="min-h-screen bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SIDE — Downloads */}
        <div>
          <h1 className="text-3xl font-bold mb-6">DroneSat STL Files</h1>

          <p className="text-gray-400 mb-8">Download the STL files used for the DroneSat project below.</p>

          <div className="space-y-4">
            <a
              href="/files/dronesat/frame.stl"
              download
              className="block bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-lg"
            >
              Download Frame STL
            </a>

            <a
              href="/files/dronesat/cover.stl"
              download
              className="block bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-lg"
            >
              Download Cover STL
            </a>

            <a
              href="/files/dronesat/mount.stl"
              download
              className="block bg-indigo-600 hover:bg-indigo-500 px-5 py-3 rounded-lg"
            >
              Download Mount STL
            </a>
          </div>
        </div>

        {/* RIGHT SIDE — Image Preview */}
        <div className="flex justify-center">
          <StaticImage
            src="../../images/dronesat-stl-preview.png"
            alt="DroneSat STL Preview"
            placeholder="blurred"
            className="rounded-xl shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
