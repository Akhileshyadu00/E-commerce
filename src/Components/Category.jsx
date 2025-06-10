import React from 'react';
import { Slides } from '../Context/Slides';
import { useAppContext } from '../Context/AppContext';

function Category() {
  const { navigate } = useAppContext(); // Fixed function call

  return (
    <div className="p-4">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-center">Categories</h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-6 gap-6">
        {Slides.map((slide) => (
          <div
            key={slide.id}
            className="border rounded-lg overflow-hidden shadow-sm cursor-pointer hover:shadow-md transition"
            onClick={() => {
              navigate(`/products/${slide.path.toLowerCase()}`); // Fixed reference
            }}
          >
            <img src={slide.image} alt={slide.title} className="w-full h-48 object-cover" />
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-2">{slide.title}</h3>
              <p className="text-gray-600">{slide.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Category;
