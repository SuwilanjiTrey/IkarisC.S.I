import React from 'react';

const ImageSelector = ({ images, selectedImage, onSelect, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
      <div className="bg-white rounded-lg p-6 w-3/4 max-w-2xl max-h-[80vh] overflow-y-auto">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold">Select Image</h2>
          <button 
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            ✕
          </button>
        </div>
        
        <div className="grid grid-cols-3 gap-4 mb-4">
          {images.map((image, index) => (
            <div 
              key={index}
              className={`
                relative p-2 border rounded-lg cursor-pointer
                ${selectedImage === image.path ? 'border-blue-500 bg-blue-50' : 'border-gray-200 hover:border-gray-300'}
              `}
              onClick={() => onSelect(image.path)}
            >
              <img 
                src={image.path} 
                alt={image.name}
                className="w-full h-32 object-contain"
              />
              <p className="mt-2 text-sm text-center text-gray-600 truncate">
                {image.name}
              </p>
            </div>
          ))}
        </div>

        <div className="flex justify-end gap-2">
          <button
            onClick={onClose}
            className="px-4 py-2 text-gray-600 hover:text-gray-800 border rounded"
          >
            Cancel
          </button>
          <button
            onClick={() => {
              if (selectedImage) onSelect(selectedImage);
              onClose();
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
          >
            Select
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSelector;