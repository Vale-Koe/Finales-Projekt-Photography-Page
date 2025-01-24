import React from 'react';
import "../css/Kids.css";
import gallery from "../gallery.json";
import { useState } from 'react';

function Kids() {

  const [selectedImage, setSelectedImage] = useState(null);

  const imageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='kidsGallery'>
      <h2>Kids</h2>
      <div className='masonry-with-columns'>
        {gallery.data.kids.map((image) => (
          <div key={image.id} onClick={() => imageClick(image.image)}>
            <img src={image.image} alt={`Kids Image ${image.id}`} />
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

export default Kids