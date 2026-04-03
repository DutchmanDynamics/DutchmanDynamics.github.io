import React from 'react';

const stats = [
  { id: 1, name: 'Launched Altitude', value: '1 km' },
  { id: 2, name: 'Descent', value: '14 m/s' },
  { id: 3, name: 'Telemerty Range', value: '2.3 km' },
  { id: 4, name: 'Team Members Total', value: '7' },
  { id: 5, name: 'Total CanSats', value: '2' },
];

export default function Example() {
  const cardClass =
    'mx-auto flex max-w-xs flex-col gap-y-4 rounded-xl bg-white/5 p-6 ring-1 ring-white/10 backdrop-blur-sm transition duration-300 hover:shadow-lg hover:shadow-indigo-500/10 hover:-translate-y-1';

  return (
    <div className="bg-transparent py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 space-y-10">
        {/* Top row (3 items) */}
        <dl className="grid grid-cols-1 gap-x-8 gap-y-8 text-center lg:grid-cols-3">
          {stats.slice(0, 3).map((stat) => (
            <div key={stat.id} className={cardClass}>
              <dt className="text-base/7 text-gray-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>

        {/* Divider / middle section */}
        <div className="flex items-center gap-4">
          <div className="h-px flex-1 bg-white/10" />
          <p className="text-sm text-gray-400">Stats</p>
          <div className="h-px flex-1 bg-white/10" />
        </div>

        {/* Bottom row (2 centered items) */}
        <dl className="grid grid-cols-1 gap-x-8 gap-y-8 text-center lg:grid-cols-2 lg:max-w-3xl lg:mx-auto">
          {stats.slice(3).map((stat) => (
            <div key={stat.id} className={cardClass}>
              <dt className="text-base/7 text-gray-400">{stat.name}</dt>
              <dd className="order-first text-3xl font-semibold tracking-tight text-white sm:text-5xl">{stat.value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
