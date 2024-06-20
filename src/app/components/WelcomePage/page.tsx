import React from 'react';
import Link from 'next/link';

const Welcome = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="max-w-md mx-auto bg-white bg-opacity-90 border border-gray-300 rounded-lg p-8 shadow-lg">
        <h2 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          Exclusive Car and their details
        </h2>
        <div className="flex justify-center">
          <Link href="/categories" legacyBehavior>
            <a className="inline-flex items-center px-6 py-3 border border-transparent text-lg leading-6 font-medium rounded-md text-white bg-green-600 hover:bg-green-500 focus:outline-none focus:border-green-700 focus:shadow-outline-green active:bg-green-700 transition duration-150 ease-in-out">
              Explore the car
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Welcome;