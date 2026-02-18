import React from 'react';
import { LifebuoyIcon, NewspaperIcon, PhoneIcon } from '@heroicons/react/20/solid';
import { StaticImage } from 'gatsby-plugin-image';
const cards = [
  {
    name: 'Primary Mission',
    description:
      'The Primary Mission consits of measuring two things: The air pressure and the temperature, these will be sent back with the CanSat every second during its descent, this mission is the same for every team and is mandatory ',
    icon: PhoneIcon,
  },
  {
    name: 'Secondary Mission',
    description:
      'The Secondary Mission is open for your own ideas, as long as it is helping society, our two teams brainstormed a lot and landed on two ideas, one team is making a satellite that turns into a drone while descending, and the other team is putting a geigercounter inside there CanSat',
    icon: LifebuoyIcon,
  },
];

export default function HeaderWithCardsGeneral() {
  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
      <StaticImage placeholder="none" layout="fixed" src="../images/space-nebula" alt="CanSat Logo" height={120} />
      <div className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:-top-112 sm:ml-16 sm:translate-x-0">
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="aspect-1097/845 w-274.25 bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">What are our missions?</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Because our team consits of seven people we decided to make to teams. Here you will read about the mission
            in general.
          </p>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 inset-ring inset-ring-white/5 backdrop-blur-sm"
            >
              <card.icon aria-hidden="true" className="h-7 w-5 flex-none text-indigo-400" />
              <div className="text-base/7">
                <h3 className="font-semibold text-white">{card.name}</h3>
                <p className="mt-2 text-gray-300">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
