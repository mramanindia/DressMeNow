import React, { useState, useEffect } from 'react';
import model1 from "./../../../assets/model1.jpg";

function ImageUploader() {
  const [selectedImage, setSelectedImage] = useState(null);

  // Function to handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const imageUrl = URL.createObjectURL(file);
    setSelectedImage(imageUrl);
    saveImageToLocalstorage(imageUrl);
  };

  useEffect(() => {
    const savedImage = localStorage.getItem('userImage');
    if (savedImage) {
      setSelectedImage(savedImage);
    }
  }, []);

  // Function to save the image URL to local storage
  const saveImageToLocalstorage = (imageUrl) => {
    try {
      localStorage.setItem('userImage', imageUrl);
    } catch (error) {
      console.error('Error saving image URL to local storage:', error);
    }
  };

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      {/* {selectedImage && (
        <div>
          <img src={selectedImage} alt="User's Image" />
        </div>
      )} */}
    </div>
  );
}

export default ImageUploader;