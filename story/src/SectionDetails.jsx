// Section.js
import React from 'react';

const Section = ({ section }) => {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-4 uppercase text-center">{section.title}</h2>
      <p className="mb-6">{section.description}</p>
      <div className="flex justify-center mb-4">
        <div className="overflow-hidden w-full max-w-3xl">
          <img 
            src={section.imageUrl} 
            alt={section.altText} 
            className="w-full h-auto transform transition-transform duration-300 hover:scale-110"
          />
        </div>
      </div>
      <p className="text-sm text-gray-600">{section.longDescription}</p>
    </div>
  );
};

export default Section;

