import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const posts = [
  {
    id: 1,
    title: 'HARDWARE',
    description: [
      'Adafruit Feather M0 LoRa for sending data',
      'AdaFruit BMP390 to measure temperature and pressure',
      'Adafruit BNO08x to measure the direction and flight stabilization',
      'Mateskys m10q-5883 GPS module for precise landing and navigation',
      'Flywoo Goku f722 pro mini v2 stack to manage motor control and flight operations',
      'Emax Eco 1404 Motors to make the CanSat be able to fly',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1520870121499-7dddb6ccbcde?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'MATERIALS',
    description: [
      'Impact-resistant plastics (PLA, Polycarbonate)',
      'Heavy duty battery connectors (XT30)',
      'Soldering can withstand 20 G-Forces',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1591478209132-e32752b9af43?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'MISSION',
    description: [
      'Measure temperature and pressure',
      'Deploy arms after falling out of the rocket',
      'Turn on motors during descent and stabilize',
      'Autonomously fly to our own chosen point on a map',
      'Land at chosen spot',
    ],
    imageUrl: 'https://blog.arduino.cc/wp-content/uploads/2025/05/CanSat-Drone-1-1024x597.png',
  },
  {
    id: 4,
    title: 'RECOVERY',
    description: [
      'GPS tracking for precise location',
      'Parachute slows descent to minimize impact',
      'Drone flight enables autonomous relocation',
      'Onboard SD card stores all flight and sensor data',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1604357209793-fca5dca89f97?q=80&w=764&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function TechSpecsDrone() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-4xl font-semibold text-white sm:text-5xl">Tech Overview</h2>
        </div>

        {/* 2x2 Grid */}
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-12 lg:max-w-none lg:grid-cols-2">
          {posts.map((post) => (
            <article key={post.id} className="flex flex-col">
              <div className="relative w-full">
                <img src={post.imageUrl} alt="" className="aspect-video w-full rounded-2xl object-cover bg-gray-800" />
              </div>

              <div className="mt-6">
                <h3 className="text-lg font-semibold text-white">{post.title}</h3>

                <ul className="mt-4 text-sm text-gray-400 space-y-2">
                  {post.description.map((item, index) => (
                    <li key={index}>- {item}</li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}
