import React from "react";

interface CarDetailsProps {
  car: {
    name: string;
    description: string;
    price: number;
    brand: string;
    category: string;
    rating: number;
    stock: number;
    // Add other properties if available
  };
  onClose: () => void;
}

const CarDetails: React.FC<CarDetailsProps> = ({ car, onClose }) => {
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

export default CarDetails;
