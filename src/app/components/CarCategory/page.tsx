'use client'
import React, { useState } from "react";
import CarList from "./CarList/page";

const CarCategory: React.FC = () => {
  const [category, setCategory] = useState<string | null>(null);

  const handleCategoryChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setCategory(event.target.value);
  };

  return (
    <div className="min-h-screen flex flex-col items-center pt-20">
      <h1 className="text-4xl font-bold mb-8">Select a Car Category</h1>
      <select
        onChange={handleCategoryChange}
        className="p-2 border rounded mb-8 hover:bg-slate-100"
      >
        <option value="">Select Category</option>
        <option value="SUV">SUV</option>
        <option value="Sedan">Sedan</option>
        <option value="Compact">Compact</option>
        <option value="Sportscar">Sportscar</option>
        <option value="Hatchback">Hatchback</option>
        <option value="Crossover">Crossover</option>
      </select>
      {category && <CarList category={category} />}
    </div>
  );
};

export default CarCategory;
