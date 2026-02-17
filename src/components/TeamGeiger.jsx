import * as React from 'react';

const people = [
  {
    name: 'Lars de Kogel',
    role: 'Desinging Electronics, Planning, Testing',
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
    role: 'Desinging Hardware, Deadlines, Testing',
    imageUrl:
      'https://static.vecteezy.com/system/resources/previews/007/296/447/non_2x/user-icon-in-flat-style-person-icon-client-symbol-vector.jpg',
    xUrl: '#',
    linkedinUrl: '#',
  },
];

export default function Team() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 text-center lg:px-8">
        <div className="mx-auto max-w-2xl">
          <h2 className="text-4xl font-semibold tracking-tight text-balance text-gray-900 sm:text-5xl">
            RadioActiveAir
          </h2>
          <p className="mt-6 text-lg/8 text-gray-600">Three students from Kaj Munk College in Hoofddorp</p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-20 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
        >
          {people.map((person) => (
            <li key={person.name} className="rounded-2xl bg-gray-100 px-8 py-10">
              <img
                alt=""
                src={person.imageUrl}
                className="mx-auto size-48 rounded-full outline-1 -outline-offset-1 outline-black/5 md:size-56"
              />
              <h3 className="mt-6 text-base/7 font-semibold tracking-tight text-gray-900">{person.name}</h3>
              <p className="text-sm/6 text-gray-600">{person.role}</p>
              <ul role="list" className="mt-6 flex justify-center gap-x-6"></ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
