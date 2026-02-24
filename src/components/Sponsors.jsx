import React from 'react';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';

export default function Sponsors() {
  return (
    <div className="w-full" style={{ backgroundColor: '#101828' }}>
      <div className="max-w-2xl mx-auto px-6 py-20 sm:py-24 text-center">
        {/* 404 Message */}
        <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white">404: No Sponsors Found</h2>
        <p className="mt-6 text-base sm:text-lg text-gray-400 max-w-xl mx-auto">
          At the moment we don't have any big sponsors. A few people have donated using the QR code below, so you could
          be our first! The biggest sponsor will get its name etched on the bottom of the two CanSats, and will be
          featured on our website.
        </p>

        {/* Space between text and QR code */}
        <div className="mt-20 flex flex-col items-center gap-10 sm:flex-row sm:justify-center w-full">
          {/* QR Code */}
          <div className="flex flex-col items-center">
            <StaticImage
              src="../images/frame(1).png" // <-- your QR code
              alt="Donate QR Code"
              className="h-44 w-44 object-cover"
              placeholder="none"
            />
            <p className="mt-3 text-gray-400 text-sm">Scan to donate</p>
          </div>

          {/* Buttons */}
          <div className="flex flex-col gap-6 sm:gap-4 sm:flex-col items-center">
            <Link
              to="/contact"
              className="inline-block bg-indigo-600 px-8 py-3 text-white font-semibold shadow-lg hover:bg-indigo-500 transition"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
