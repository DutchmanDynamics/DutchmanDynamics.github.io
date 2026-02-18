import React from 'react';

export default function Button() {
  return (
    <>
      <button
        type="button"
        className="rounded-full bg-white px-2.5 py-1 text-xl font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/20"
      >
        Learn More
      </button>

      <button
        type="button"
        className="rounded-full bg-white px-2.5 py-1 text-sm font-semibold text-gray-900 shadow-xs inset-ring inset-ring-gray-300 hover:bg-gray-50 dark:bg-white/10 dark:text-white dark:shadow-none dark:inset-ring-white/5 dark:hover:bg-white/20"
      >
        Contact Us
      </button>
    </>
  );
}
