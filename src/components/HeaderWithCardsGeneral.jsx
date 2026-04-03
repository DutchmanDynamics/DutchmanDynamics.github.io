import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRocket, faAtom } from '@fortawesome/free-solid-svg-icons';

const cards = [
  {
    name: 'Primary Mission',
    description:
      'The Primary Mission consists of measuring two things: The air pressure and the temperature, these will be sent back with the CanSat every second during its descent.',
    icon: faAtom,
  },
  {
    name: 'Secondary Mission',
    description:
      'The Secondary Mission is open for your own ideas, as long as it is helping society. Our two teams brainstormed a lot and landed on two ideas: one team is making a satellite that turns into a drone while descending, and the other team is putting a Geiger counter inside their CanSat.',
    icon: faRocket,
  },
];

export default function HeaderWithCardsGeneral() {
  return (
    <div className="relative overflow-hidden bg-transparent py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">What are our missions?</h2>
          <p className="mt-8 text-lg font-medium text-pretty text-gray-400 sm:text-xl/8">
            Because our team consists of seven people we decided to make two teams. Here you will read about the
            missions in general.
          </p>
        </div>

        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:gap-8">
          {cards.map((card) => (
            <div
              key={card.name}
              className="flex gap-x-4 rounded-xl bg-white/5 p-6 inset-ring inset-ring-white/5 backdrop-blur-sm
                         shadow-lg transition duration-300 transform
                         hover:-translate-y-2
                         hover:shadow-2xl
                         hover:shadow-indigo-500/20"
            >
              <FontAwesomeIcon
                icon={card.icon}
                aria-hidden="true"
                className="h-32 w-32 flex-none pt-1 text-indigo-400 text-2xl"
              />
              <div className="text-base/7">
                <h3 className="text-2xl font-semibold text-white">{card.name}</h3>
                <p className="mt-4 text-gray-400 leading-relaxed">{card.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
