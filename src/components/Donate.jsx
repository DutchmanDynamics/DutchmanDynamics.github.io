import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function SupportSection() {
  return (
    <section className="w-full" style={{ backgroundColor: '#101828' }}>
      <div className="py-20 px-6 text-center">
        <h2 className="text-3xl font-bold text-white sm:text-4xl">Support Our Teams!</h2>
        <p className="mt-4 text-gray-300 text-lg sm:text-xl max-w-2xl mx-auto">
          Your contributions help DutchmanDynamics & RadioActiveAir build their CanSat projects and gain valuable
          experience.
        </p>

        <div className="mt-12 flex flex-col items-center gap-10 sm:flex-row sm:justify-center">
          {/* QR Code */}
          <div className="flex flex-col items-center">
            <StaticImage
              src="../images/frame(1).png" // <-- your QR code
              alt="Donate QR Code"
              className="h-48 w-48 object-cover"
              placeholder="none"
            />
            <p className="mt-3 text-gray-400 text-sm">Scan to donate</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-6 sm:gap-4 sm:flex-col">
            <Link
              to="/contact"
              className="inline-block bg-indigo-600 px-8 py-4 text-white font-semibold shadow-lg hover:bg-indigo-500 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
