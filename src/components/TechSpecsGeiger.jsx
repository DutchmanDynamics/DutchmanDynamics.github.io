import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

const descriptions = {
  hardware: [
    'Adafruit Feather M0 LoRa for sending data',
    'AdaFruit BMP390 to measure temperature and pressure',
    'Adafruit BNO08x to measure the direction and flight stabilization',
    'Gravity Geiger Counter (V1.0.0.) to measure radiation',
  ],
  materials: [
    'Strong impact resistant plastic (PLA)',
    'Four metal rods for extra strength',
    'Parachute made from nylon',
    'Cables connecting parachute and CanSat can whitstand 200 N',
  ],
  mission: ['Measure radiation levels', 'Track altitude', 'Log temperature and pressure', 'Transmit data in real time'],
  recovery: ['GPS tracking system', 'Parachute slows the fall to 15 m/s'],
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
                src="../images/geiger-hardware.jpeg"
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
                src="../images/materials-geiger.jpeg"
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
                src="../images/geiger.png"
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
                src="../images/geiger-in-rocket.jpeg"
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
