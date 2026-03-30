import React from 'react';
import { Link } from 'gatsby';

export default function SponsoringClosed() {
  return (
    <section className="w-full bg-gray-900 py-20 px-6 text-center">
      <div className="max-w-2xl mx-auto">
        {/* Title */}
        <h2 className="text-3xl sm:text-4xl font-semibold text-white">Sponsoring Closed</h2>

        {/* Description */}
        <p className="mt-4 text-gray-400 text-lg">
          Sponsoring for this mission is now closed. We are incredibly grateful for everyone who supported us!
        </p>
      </div>
    </section>
  );
}
