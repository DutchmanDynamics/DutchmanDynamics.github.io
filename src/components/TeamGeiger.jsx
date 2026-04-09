import * as React from 'react';

const people = [
  {
    name: 'Lars de Kogel',
    role: 'Designing Electronics, Planning, Testing',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/007/296/447/non_2x/user-icon-in-flat-style-person-icon-client-symbol-vector.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Okke Hollander',
    role: 'Concept Development, Technical Consultation',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/007/296/447/non_2x/user-icon-in-flat-style-person-icon-client-symbol-vector.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
  {
    name: 'Rens van den Berg',
    role: 'Designing Hardware, Deadlines, Testing',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/007/296/447/non_2x/user-icon-in-flat-style-person-icon-client-symbol-vector.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
];

export default function TeamGeiger() {
  return (
    <div className="bg-gray-900 py-16 pt-40">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl">RadioActiveAir</h2>
          <p className="mt-6 text-lg text-gray-400">Three students from Kaj Munk College in Hoofddorp</p>
        </div>

        <ul className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:max-w-none lg:grid-cols-3 lg:gap-8">
          {people.map((person) => (
            <li
              key={person.name}
              className="group rounded-2xl bg-gray-800 px-8 py-10 transform transition duration-300 ease-out hover:-translate-y-2 hover:scale-[1.02] hover:shadow-2xl hover:shadow-indigo-500/30"
            >
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto size-48 rounded-full outline-1 -outline-offset-1 outline-white/10 md:size-56 transition duration-300 group-hover:scale-105"
              />

              <h3 className="mt-6 text-base font-semibold tracking-tight text-white">{person.name}</h3>

              <p className="text-sm text-gray-400">{person.role}</p>

              <ul className="mt-6 flex justify-center gap-x-6"></ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
