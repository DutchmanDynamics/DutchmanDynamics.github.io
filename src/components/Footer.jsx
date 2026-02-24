import React from 'react';
import { Link } from 'gatsby';

export default function Footer() {
  const teams = [
    {
      name: 'GeigerTeam',
      instagram: 'https://instagram.com/YOUR_GEIGER_INSTAGRAM',
      github: 'https://github.com/YOUR_GEIGER_GITHUB',
    },
    {
      name: 'DroneTeam',
      instagram: 'https://instagram.com/YOUR_DRONE_INSTAGRAM',
      github: 'https://github.com/YOUR_DRONE_GITHUB',
    },
  ];

  return (
    <footer className="bg-gray-900">
      <div className="mx-auto max-w-7xl px-6 py-20 sm:py-24 lg:px-8">
        {/* Navigation */}
        <nav className="flex justify-center gap-12 text-sm text-gray-400">
          <Link to="/" className="hover:text-white">
            Home
          </Link>
          <Link to="/our_team" className="hover:text-white">
            Our Teams
          </Link>
          <Link to="/geigersat" className="hover:text-white">
            GeigerSat
          </Link>
          <Link to="/dronesat" className="hover:text-white">
            DroneSat
          </Link>
        </nav>

        {/* Teams Social Icons */}
        <div className="mt-12 flex justify-center gap-16">
          {teams.map((team) => (
            <div key={team.name} className="flex flex-col items-center gap-2 text-gray-400">
              <p className="text-white font-semibold">{team.name}</p>
              <div className="flex gap-4">
                {/* Instagram */}
                <a href={team.instagram} target="_blank" rel="noopener noreferrer" className="group">
                  <span className="sr-only">Instagram</span>

                  <svg viewBox="0 0 24 24" className="h-6 w-6 transition duration-300">
                    <defs>
                      <linearGradient id={`instagramGradient-${team.name}`} x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f09433" />
                        <stop offset="25%" stopColor="#e6683c" />
                        <stop offset="50%" stopColor="#dc2743" />
                        <stop offset="75%" stopColor="#cc2366" />
                        <stop offset="100%" stopColor="#bc1888" />
                      </linearGradient>
                    </defs>

                    {/* Gray default */}
                    <path
                      fill="currentColor"
                      className="text-gray-400 group-hover:hidden transition"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                    />

                    {/* Gradient on hover */}
                    <path
                      fill={`url(#instagramGradient-${team.name})`}
                      className="hidden group-hover:block transition"
                      d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63z"
                    />
                  </svg>
                </a>

                {/* GitHub */}
                <a href={team.github} target="_blank" rel="noopener noreferrer" className="group">
                  <span className="sr-only">GitHub</span>
                  <svg fill="currentColor" viewBox="0 0 24 24" className="h-6 w-6 transition duration-300">
                    {/* Default gray */}
                    <path
                      fill="currentColor"
                      className="text-gray-400 group-hover:hidden transition"
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                    {/* White on hover */}
                    <path
                      fill="white"
                      className="hidden group-hover:block transition"
                      fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"
                    />
                  </svg>
                </a>
              </div>
            </div>
          ))}
        </div>

        <p className="mt-10 text-center text-sm text-gray-400">
          Two teams from Kajmunk College participating in the CanSat Competition 2026
        </p>
      </div>
    </footer>
  );
}
