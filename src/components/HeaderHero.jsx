import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

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
        <nav aria-label="Global" className="flex items-center justify-between p-6 lg:px-8">
          {/* Logo */}
          <div className="flex lg:flex-1">
            <Link to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
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
            <button
              type="button"
              onClick={() => setMobileMenuOpen(true)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-200"
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-12">
            {navigation.map((item) => (
              <Link key={item.name} to={item.to} className="text-sm/6 font-semibold text-white hover:text-indigo-500">
                {item.name}
              </Link>
            ))}

            {/* Resources Dropdown */}
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
                        to="/geigersat/stl"
                        className={`block px-4 py-2 text-sm text-white ${active ? 'bg-gray-700' : ''}`}
                      >
                        GeigerSat STL
                      </Link>
                    )}
                  </MenuItem>

                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/geigersat/code"
                        className={`block px-4 py-2 text-sm text-white ${active ? 'bg-gray-700' : ''}`}
                      >
                        GeigerSat Code
                      </Link>
                    )}
                  </MenuItem>

                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/dronesat/stl"
                        className={`block px-4 py-2 text-sm text-white ${active ? 'bg-gray-700' : ''}`}
                      >
                        DroneSat STL
                      </Link>
                    )}
                  </MenuItem>

                  <MenuItem>
                    {({ active }) => (
                      <Link
                        to="/dronesat/code"
                        className={`block px-4 py-2 text-sm text-white ${active ? 'bg-gray-700' : ''}`}
                      >
                        DroneSat Code
                      </Link>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />

          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-gray-900 p-6 sm:max-w-sm sm:ring-1 sm:ring-gray-100/10">
            <div className="flex items-center justify-between">
              <Link to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">CanSat Kajmunk</span>
                <StaticImage
                  placeholder="none"
                  layout="fixed"
                  src="../images/cansat-logo.png"
                  alt="CanSat Logo"
                  height={65}
                />
              </Link>
              <button
                type="button"
                onClick={() => setMobileMenuOpen(false)}
                className="-m-2.5 rounded-md p-2.5 text-gray-200"
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" />
              </button>
            </div>

            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-white/10">
                {/* Main Links */}
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.to}
                      className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-white hover:bg-white/5"
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>

                {/* Resources Section */}
                <div className="py-6 space-y-2">
                  <p className="px-3 text-sm font-semibold text-gray-400">Resources</p>

                  <Link to="/geigersat/stl" className="-mx-3 block px-3 py-2 text-white hover:bg-white/5">
                    GeigerSat STL
                  </Link>
                  <Link to="/geigersat/code" className="-mx-3 block px-3 py-2 text-white hover:bg-white/5">
                    GeigerSat Code
                  </Link>
                  <Link to="/dronesat/stl" className="-mx-3 block px-3 py-2 text-white hover:bg-white/5">
                    DroneSat STL
                  </Link>
                  <Link to="/dronesat/code" className="-mx-3 block px-3 py-2 text-white hover:bg-white/5">
                    DroneSat Code
                  </Link>
                </div>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
