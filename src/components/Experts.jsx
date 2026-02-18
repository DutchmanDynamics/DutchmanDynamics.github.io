import * as React from 'react';

const people = [
  {
    name: 'Gabor Marosy',
    role: 'Software Expert, Electrical Engineer',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/007/296/447/non_2x/user-icon-in-flat-style-person-icon-client-symbol-vector.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Tamas Csabina',
    role: 'Software Expert, IT Solution Engineer',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/007/296/447/non_2x/user-icon-in-flat-style-person-icon-client-symbol-vector.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
];

export default function TeamDrone() {
  return (
    <div className="bg-gray-900 py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-white sm:text-5xl">Experts</h2>
          <p className="mt-6 text-lg/8 text-gray-400">
            Two software and electrical engineering experts from the European Space Agency
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li key={person.name} className="rounded-2xl bg-gray-800 px-8 py-10">
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto size-48 rounded-full outline-1 -outline-offset-1 outline-white/10 md:size-56"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-white">{person.name}</h3>
              <p className="text-sm/6 text-gray-400">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6"></ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
