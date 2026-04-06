import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserAstronaut } from '@fortawesome/free-solid-svg-icons';

const navigation = [
  { name: 'Home', to: '/' },
  { name: 'GeigerSat', to: '/geigersat' },
  { name: 'DroneSat', to: '/dronesat' },
  { name: 'Our Teams', to: '/our_team' },
  { name: 'Contact', to: '/contact' },
];

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">CanSat Kajmunk</span>
              <StaticImage
                placeholder="none"
                layout="fixed"
                src="../images/cansat-logo.png"
                alt="CanSat Logo"
                height={120}
              />
            </Link>
          </div>

          {/* Mobile button */}
          <div className="flex lg:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="-m-2.5 p-2.5 text-gray-200">
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-12">
            {navigation.map((item) => (
              <React.Fragment key={item.name}>
                <Link to={item.to} className="text-sm/6 font-semibold text-white hover:text-indigo-500">
                  {item.name}
                </Link>

                {item.name === 'DroneSat' && (
                  <Menu as="div" className="relative inline-block text-left">
                    <MenuButton className="inline-flex items-center gap-x-1 text-sm font-semibold text-white hover:text-indigo-500">
                      Resources
                      <ChevronDownIcon className="h-4 w-4 text-gray-400" />
                    </MenuButton>

                    <MenuItems className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5 focus:outline-none">
                      <div className="py-1">
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              to="/dronesat_stl"
                              className={`block px-4 py-2 text-white ${active ? 'bg-gray-700' : ''}`}
                            >
                              DroneSat STL
                            </Link>
                          )}
                        </MenuItem>
                        <MenuItem>
                          {({ active }) => (
                            <Link
                              to="/dronesat_code"
                              className={`block px-4 py-2 text-white ${active ? 'bg-gray-700' : ''}`}
                            >
                              DroneSat Code
                            </Link>
                          )}
                        </MenuItem>
                      </div>
                    </MenuItems>
                  </Menu>
                )}
              </React.Fragment>
            ))}
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />
          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <StaticImage
                  placeholder="none"
                  layout="fixed"
                  src="../images/cansat-logo.png"
                  alt="CanSat Logo"
                  height={120}
                />
              </Link>
              <button onClick={() => setMobileMenuOpen(false)}>
                <XMarkIcon className="h-6 w-6 text-white" />
              </button>
            </div>

            <div className="mt-6 space-y-2">
              {navigation.map((item) => (
                <Link key={item.name} to={item.to} className="block text-white">
                  {item.name}
                </Link>
              ))}
            </div>

            <div className="mt-6">
              <p className="text-gray-400">Resources</p>

              <Link to="/dronesat_stl" className="block text-white">
                DroneSat STL
              </Link>
              <Link to="/dronesat_code" className="block text-white">
                DroneSat Code
              </Link>
            </div>
          </DialogPanel>
        </Dialog>
      </header>

      {/* HERO CONTENT */}
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          aria-hidden="true"
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        >
          <div
            style={{
              clipPath:
                'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
            }}
            className="relative left-[calc(50%-11rem)] aspect-1155/678 w-144.5 -translate-x-1/2 rotate-30 bg-linear-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-30rem)] sm:w-288.75"
          />
        </div>

        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="mb-8 flex justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm/6 text-gray-400 ring-1 ring-white/10 hover:ring-white/20 transition">
              <FontAwesomeIcon className="h-32 w-32 pt-1 text-white" icon={faUserAstronaut} />
              CanSat Competition 25/26.{' '}
              <a
                href="https://esero.nl/project/cansat-competitie/"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold text-indigo-400 transition duration-200 hover:text-indigo-300 hover:underline hover:translate-x-1 inline-block"
              >
                Read more →
              </a>
            </div>
          </div>

          <div className="text-center">
            <h1 className="text-5xl font-semibold text-white sm:text-7xl">DutchmanDynamics & RadioActiveAir</h1>

            <p className="mt-8 text-lg text-gray-400 sm:text-xl">
              Two teams from Kaj Munk College are participating in the CanSat Competition, where they are developing
              fully operational micro satellites within strict constraints. Each team is responsible for system
              integration, sensor implementation, data transmission, flight stability, and recovery operations. Through
              iterative testing and refinement, the students gain practical experience in systems engineering,
              problem-solving, and mission planning.
            </p>

            <div className="mt-10 flex justify-center">
              <a
                href="https://kajmunk.nl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white transition duration-200 hover:text-indigo-400 hover:underline hover:translate-x-1 inline-block"
              >
                Read more about our school →
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
