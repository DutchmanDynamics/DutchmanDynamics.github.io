import React from 'react';

const posts = [
  {
    id: 1,
    title: 'HARDWARE',
    description: [
      'AdaFruit Feather M0 LoRa for sending data',
      'AdaFruit BMP390 to measure temperature and pressure',
      'AdaFruit Ultimate GPS Breakout to measure altitude and recovery',
      'Gravity Geiger Counter (V1.0.0) to measure radiation',
      'SDcard to have a BlackBox if the radio transmission fails',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1562408590-e32931084e23?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 2,
    title: 'MATERIALS',
    description: [
      'Strong impact resistant plastic (PLA)',
      'Four metal rods for extra strength',
      'Parachute made from nylon',
      'Cables connecting parachute and CanSat withstand 200 N',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1645084102549-e766a3a24827?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 3,
    title: 'MISSION',
    description: [
      'Measure radiation levels',
      'Track altitude',
      'Log temperature and pressure',
      'Transmit data in real time',
    ],
    imageUrl:
      'https://images.unsplash.com/photo-1590355200005-5ed2b8877edf?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
  {
    id: 4,
    title: 'RECOVERY',
    description: ['GPS tracking system', 'Parachute slows the fall to 15 m/s'],
    imageUrl:
      'https://images.unsplash.com/photo-1585401757873-e5edaf94e9b2?q=80&w=1474&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  },
];

export default function TechSpecsGeiger() {
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
