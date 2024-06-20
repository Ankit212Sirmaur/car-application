'use client'
import React, { useState } from "react";
import Image from "next/image";
const cars = [
  { id: 1, name: "300 Touring", price: 28999.99, category: "Sedan", imageUrl: "https://cdn.dummyjson.com/products/images/vehicle/300%20Touring/1.png", description: "The 300 Touring is a stylish and powerful sedan...", brand: "Dodge", rating: 4.5, stock: 15 },
  { id: 2, name: "Charger SXT RWD", price: 32999.99, category: "Sedan", imageUrl: "https://cdn.dummyjson.com/products/images/vehicle/Pacifica%20Touring/1.png", description: "The Charger SXT RWD is a sporty and practical sedan...", brand: "Dodge", rating: 4.2, stock: 10 },
  { id: 3, name: "Dodge Hornet GT Plus", price: 24999.99, category: "Compact", imageUrl: "https://cdn.dummyjson.com/products/images/vehicle/Charger%20SXT%20RWD/1.png", description: "The Dodge Hornet GT Plus is a compact and efficient vehicle...", brand: "Dodge", rating: 4.3, stock: 20 },
  { id: 4, name: "Durango SXT RWD", price: 36999.99, category: "SUV", imageUrl: "https://cdn.dummyjson.com/products/images/vehicle/Durango%20SXT%20RWD/1.png", description: "The Durango SXT RWD is a spacious and powerful SUV...", brand: "Dodge", rating: 4.6, stock: 8 },
  { id: 5, name: "Pacifica Touring", price: 31999.99, category: "Minivan", imageUrl: "https://cdn.dummyjson.com/products/images/vehicle/Dodge%20Hornet%20GT%20Plus/1.png", description: "The Pacifica Touring is a versatile and family-friendly minivan...", brand: "Chrysler", rating: 4.4, stock: 12 },
];

const CarList: React.FC<{ category: string }> = ({ category }) => {
  const [selectedCar, setSelectedCar] = useState<any | null>(null);

  // CarDetails component defined within CarList component
  const CarDetails: React.FC<{ car: any; onClose: () => void }> = ({ car, onClose }) => {
    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-75 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg w-3/4 md:w-1/2">
          <h2 className="text-2xl font-bold mb-4">{car.name}</h2>
          <p>{car.description}</p>
          <p className="text-xl font-semibold mt-4">Price: ${car.price.toFixed(2)}</p>
          <h3 className="text-lg font-semibold mt-4">Additional Details</h3>
          <ul className="list-disc list-inside">
            <li>Brand: {car.brand}</li>
            <li>Category: {car.category}</li>
            <li>Rating: {car.rating}</li>
            <li>Stock: {car.stock}</li>
          </ul>
          <button
            onClick={onClose}
            className="mt-4 p-2 bg-blue-500 text-white rounded"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const filteredCars = cars.filter(car => car.category.toLowerCase() === category.toLowerCase());

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {filteredCars.length > 0 ? (
          filteredCars.map(car => (
            <div key={car.id} className="border rounded-lg p-4">
              <Image src={car.imageUrl} alt={car.name} width={500} height={300} className="w-full h-48 object-cover mb-4" />
              <h2 className="text-xl font-semibold">{car.name}</h2>
              <p className="text-lg font-medium">${car.price.toFixed(2)}</p>
              <button
                className="mt-4 p-2 bg-blue-500 text-white rounded"
                onClick={() => setSelectedCar(car)}
              >
                Check vehicle
              </button>
            </div>
          ))
        ) : (
          <p>No cars available in this category</p>
        )}
      </div>
      {selectedCar && (
        <CarDetails
          car={selectedCar}
          onClose={() => setSelectedCar(null)}
        />
      )}
    </div>
  );
};

export default CarList;
