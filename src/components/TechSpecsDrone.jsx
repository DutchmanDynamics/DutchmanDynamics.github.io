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
    image: (
      <StaticImage
        src="../images/full-drone.jpeg"
        alt="Hardware"
        className="aspect-video w-full rounded-2xl object-cover bg-gray-800"
        placeholder="none"
      />
    ),
  },
  {
    id: 2,
    title: 'MATERIALS',
    description: [
      'Impact-resistant plastics (PLA, PLA-CF)',
      'Heavy duty battery connectors (XT30)',
      'Soldering can withstand 20 G-Forces',
      'Metal rods for extra strength',
    ],
    image: (
      <StaticImage
        src="../images/materials.jpg"
        alt="Materials"
        className="aspect-video w-full rounded-2xl object-cover bg-gray-800"
        placeholder="none"
      />
    ),
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
    image: (
      <StaticImage
        src="../images/mission.jpg"
        alt="Mission"
        className="aspect-video w-full rounded-2xl object-cover bg-gray-800"
        placeholder="none"
      />
    ),
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
    image: (
      <StaticImage
        src="../images/recovery.jpg"
        alt="Recovery"
        className="aspect-video w-full rounded-2xl object-cover bg-gray-800"
        placeholder="none"
      />
    ),
  },
];

export default function TechSpecsDrone() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {posts.map((post) => (
          <div key={post.id} className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text */}
            <div>
              <h2 className="text-2xl font-bold mb-4">{post.title}</h2>
              <ul className="list-disc pl-5 space-y-2 text-gray-300">
                {post.description.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>

            {/* Image */}
            <div>{post.image}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
