import React from 'react';
import "../css/People.css";
import { useState } from 'react';
import gallery from '../gallery.json';

function People() {

  const [selectedImage, setSelectedImage] = useState(null);

  const imageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };


  return (
    <div className='peopleGallery'>
      <h2>People</h2>
      <div className='masonry-with-columns'>
        {gallery.data.people.map((image) => (

          <div key={image.id} onClick={() => imageClick(image.image)}>
            <img src={image.image} alt={`People Image ${image.id}`} />
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

export default People