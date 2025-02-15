import React from 'react';

const ImageSection = ({ section }) => {
  return (
    <div className="w-full md:w-1/3 px-4 mb-8">
      <div className="bg-white rounded-lg shadow-md p-6 h-full flex flex-col items-center">
        <h2 className="text-xl font-bold mb-4 text-center uppercase">{section.title}</h2>
        <p className="text-gray-600 text-center mb-4">{section.description}</p>
        <div className="flex flex-col items-center mt-auto w-full">
          <img 
            src={section.imageUrl} 
            alt={section.altText} 
            className="w-3/4 h-48 object-cover object-center rounded mb-4" 
          />
          <p className="text-gray-600 text-center">{section.longDescription}</p>
        </div>
      </div>
    </div>
  );
};

export default ImageSection;
