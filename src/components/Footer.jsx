import React from 'react';
import { Link } from 'gatsby';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faInstagram } from '@fortawesome/free-brands-svg-icons';

export default function Footer() {
  const teams = [
    {
      name: 'GeigerTeam',
      instagram: 'https://instagram.com/YOUR_GEIGER_INSTAGRAM',
      github: 'https://github.com/DobrilM/geigerCanSat',
    },
    {
      name: 'DroneTeam',
      instagram: 'https://instagram.com/YOUR_DRONE_INSTAGRAM',
      github: 'https://github.com/DobrilM/droneCanSat',
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
                <a href={team.instagram} target="_blank" rel="noopener noreferrer" className="group text-white">
                  <span className="sr-only">Instagram</span>
                  <FontAwesomeIcon
                    icon={faInstagram}
                    size="lg"
                    className="text-gray-400 hover:text-pink-600 transition-colors duration-200"
                    aria-hidden="true"
                  />
                </a>

                {/* GitHub */}
                <a href={team.github} target="_blank" rel="noopener noreferrer" className="group">
                  <span className="sr-only">GitHub</span>
                  <FontAwesomeIcon
                    icon={faGithub}
                    size="lg"
                    className="text-gray-400 hover:text-white transition-colors duration-200"
                    aria-hidden="true"
                  />
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
