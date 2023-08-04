/**
 * Implement the ImageGallery component that accepts a `links`
 * prop and renders the gallery so that the first
 * item in the links prop is the src attribute of the first image in the gallery.

 * It should also implement the following logic:
 * - When the button is clicked, the image that is in the same div as the button should be removed from the gallery.
 */

import React, { useState } from "react";

function Image({ src, onRemove }) {
  return (
    <div className="image">
      <img src={src} alt="Gallery" />
      <button className="remove" onClick={onRemove}>
        X
      </button>
    </div>
  );
}

export function ImageGallery({ links }) {
  const [images, setImages] = useState(links);

  const handleRemove = (index) => {
    setImages((prevImages) => prevImages.filter((_, i) => i !== index));
  };

  return (
    <div>
      {images?.map((link, index) => (
        <Image key={index} src={link} onRemove={() => handleRemove(index)} />
      ))}
    </div>
  );
}
