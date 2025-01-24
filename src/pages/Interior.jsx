import React from 'react';
import "../css/Interior.css";
import { useState } from 'react';
import gallery from "../gallery.json";

function Interior() {
  
  const [selectedImage, setSelectedImage] = useState(null);
  
  const imageClick = (image) => {
    setSelectedImage(image);
  };
  
  const closeModal = () => {
    setSelectedImage(null);
  };


  return (
    <div className='interiorGallery'>
      <h2>Interior</h2>
      <div className='masonry-with-columns'>
        {gallery.data.interior.map((image) => (
          <div className='imageDiv' key={image.id} onClick={() => imageClick(image.image)}>
          <img src={image.image} alt={`Interior Image ${image.id}`} />
          </div>
        ))}

      </div>

      {selectedImage && (
        <div className='modal' onClick={closeModal}>
          <div className='modalImage' onClick={(e) => e.stopPropagation()}>
            <img src={selectedImage} alt="Image" />
          </div>

        </div>
      )}
    </div>
  )
}

export default Interior