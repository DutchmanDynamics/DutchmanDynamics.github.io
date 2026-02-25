import React from 'react';

const product = {
  step: 2, //Change this to 3 if launched
};

export default function ProgressBar() {
  return (
    <div className=" px-4 py-6 sm:px-6 lg:p-8 bg-transparent">
      <h4 className="sr-only">Status</h4>
      <p className="text-sm font-medium text-gray-900">
        {product.status} Project Milestones<time dateTime={product.datetime}>{product.date}</time>
      </p>
      <div aria-hidden="true" className="mt-6">
        <div className="overflow-hidden rounded-full bg-gray-200">
          <div
            style={{ width: `calc((${product.step} * 2 + 1) / 8 * 100%)` }}
            className="h-2 rounded-full bg-indigo-600"
          />
        </div>
        <div className="mt-6 hidden grid-cols-4 text-sm font-medium text-white sm:grid">
          <div className="text-indigo-400">Proposal</div>
          <div className={product.step > 0 ? 'text-indigo-400 text-center' : 'text-center'}>Progress Report</div>
          <div className={product.step > 1 ? 'text-indigo-400 text-center' : 'text-center'}>Final Report</div>
          <div className={product.step > 2 ? 'text-indigo-400 text-right' : 'text-right'}>Launch</div>
        </div>
      </div>
    </div>
  );
}
