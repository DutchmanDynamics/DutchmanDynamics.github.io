import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const descriptions = {
  hardware: [
    'Adafruit Feather M0 LoRa for sending data',
    'AdaFruit BMP390 to measure temperature and pressure',
    'Adafruit BNO08x to measure the direction and flight stabilization',
    'Mateskys m10q-5883 GPS module for precise landing and navigation',
    'Flywoo Goku f722 pro mini v2 stack to manage motor control and flight operations',
    'Emax Eco 1404 Motors to make the CanSat be able to fly',
  ],
  materials: [
    'Impact-resistant plastics (PLA, PLA-CF)',
    'Heavy duty battery connectors (XT30)',
    'Soldering can withstand 20 G-Forces',
    'Metal rods for extra strength',
  ],
  mission: [
    'Measure temperature and pressure',
    'Deploy arms after falling out of the rocket',
    'Turn on motors during descent and stabilize',
    'Autonomously fly to our own chosen point on a map',
    'Land at chosen spot',
  ],
  recovery: [
    'GPS tracking for precise location',
    'Drone flight enables autonomous relocation',
    'Onboard SD card stores all flight and sensor data',
  ],
};

function Card({ title, items, image }) {
  return (
    <div className="bg-gray-800 rounded-2xl p-6 space-y-4 ring-1 ring-white/10 shadow-lg transition duration-300 transform hover:-translate-y-2 hover:shadow-2xl hover:shadow-indigo-500/20">
      <div className="w-full h-64 rounded-xl overflow-hidden">{image}</div>
      <h2 className="text-2xl font-bold">{title}</h2>
      <ul className="list-disc pl-5 space-y-2 text-gray-300">
        {items.map((item, i) => (
          <li key={i}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

export default function TechSpecsDrone() {
  return (
    <section className="bg-gray-900 text-white py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <Card
            title="HARDWARE"
            items={descriptions.hardware}
            image={
              <StaticImage
                src="../images/cansat-closed2.png"
                alt="Hardware"
                layout="fullWidth"
                objectFit="cover"
                style={{ height: '100%' }}
                placeholder="none"
              />
            }
          />
          <Card
            title="MATERIALS"
            items={descriptions.materials}
            image={
              <StaticImage
                src="../images/materials.jpeg"
                alt="Materials"
                layout="fullWidth"
                objectFit="cover"
                style={{ height: '100%' }}
                placeholder="none"
              />
            }
          />
          <Card
            title="MISSION"
            items={descriptions.mission}
            image={
              <StaticImage
                src="../images/drone-in-rocket.jpeg"
                alt="Mission"
                layout="fullWidth"
                objectFit="cover"
                style={{ height: '100%' }}
                placeholder="none"
              />
            }
          />
          <Card
            title="RECOVERY"
            items={descriptions.recovery}
            image={
              <StaticImage
                src="../images/full-drone.jpeg"
                alt="Recovery"
                layout="fullWidth"
                objectFit="cover"
                style={{ height: '100%' }}
                placeholder="none"
              />
            }
          />
        </div>
      </div>
    </section>
  );
}
