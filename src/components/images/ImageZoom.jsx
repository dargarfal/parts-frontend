import React from "react";

function ImageZoom({ image }) {
  return (
    <div>
      <img src={image.uriImage} />
    </div>
  );
}

export default ImageZoom;
