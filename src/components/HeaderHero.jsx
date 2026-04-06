import React, { useState } from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import { Dialog, DialogPanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react';
import { Bars3Icon, XMarkIcon, ChevronDownIcon } from '@heroicons/react/24/outline';

export default function HeroSection() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <div className="bg-gray-900">
      <header className="absolute inset-x-0 top-0 z-50">
        <nav className="flex items-center justify-between p-6 lg:px-8">
          {/* Logo */}
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
          </div>

          {/* Mobile button */}
          <div className="flex lg:hidden">
            <button onClick={() => setMobileMenuOpen(true)} className="-m-2.5 p-2.5 text-gray-200">
              <Bars3Icon className="h-6 w-6" />
            </button>
          </div>

          {/* Desktop nav */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-12">
            <Link to="/" className="text-sm font-semibold text-white hover:text-indigo-500">
              Home
            </Link>
            <Link to="/geigersat" className="text-sm font-semibold text-white hover:text-indigo-500">
              GeigerSat
            </Link>
            <Link to="/dronesat" className="text-sm font-semibold text-white hover:text-indigo-500">
              DroneSat
            </Link>

            {/* Resources Dropdown */}
            <Menu as="div" className="relative inline-block text-left">
              <MenuButton className="inline-flex items-center gap-x-1 text-sm font-semibold text-white hover:text-indigo-500">
                Resources
                <ChevronDownIcon className="h-4 w-4 text-gray-400" />
              </MenuButton>

              <MenuItems className="absolute right-0 mt-2 w-56 rounded-md bg-gray-800 shadow-lg ring-1 ring-black/5">
                <div className="py-1">
                  <MenuItem>
                    {({ active }) => (
                      <Link to="/dronesat_stl" className={`block px-4 py-2 text-white ${active ? 'bg-gray-700' : ''}`}>
                        DroneSat STL
                      </Link>
                    )}
                  </MenuItem>

                  <MenuItem>
                    {({ active }) => (
                      <Link to="/dronesat_code" className={`block px-4 py-2 text-white ${active ? 'bg-gray-700' : ''}`}>
                        DroneSat Code
                      </Link>
                    )}
                  </MenuItem>
                </div>
              </MenuItems>
            </Menu>

            <Link to="/our_team" className="text-sm font-semibold text-white hover:text-indigo-500">
              Our Teams
            </Link>
            <Link to="/contact" className="text-sm font-semibold text-white hover:text-indigo-500">
              Contact
            </Link>
          </div>
        </nav>

        {/* Mobile Menu */}
        <Dialog open={mobileMenuOpen} onClose={setMobileMenuOpen} className="lg:hidden">
          <div className="fixed inset-0 z-50" />

          <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full bg-gray-900 p-6 sm:max-w-sm">
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

            <div className="mt-6 space-y-4">
              <Link to="/" className="block text-white">
                Home
              </Link>
              <Link to="/geigersat" className="block text-white">
                GeigerSat
              </Link>
              <Link to="/dronesat" className="block text-white">
                DroneSat
              </Link>
              <Link to="/our_team" className="block text-white">
                Our Teams
              </Link>
              <Link to="/contact" className="block text-white">
                Contact
              </Link>

              {/* Resources */}
              <div className="pt-4 border-t border-gray-700">
                <p className="text-gray-400 mb-2">Resources</p>

                <Link to="/dronesat_stl" className="block text-white">
                  DroneSat STL
                </Link>
                <Link to="/dronesat_code" className="block text-white">
                  DroneSat Code
                </Link>
              </div>
            </div>
          </DialogPanel>
        </Dialog>
      </header>
    </div>
  );
}
