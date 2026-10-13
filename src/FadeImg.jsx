import React, { useState } from "react";

// lazy image that stays invisible until fully downloaded + decoded, then fades in,
// so progressive JPEGs never paint half-filled
function FadeImg({ className = "", ...props }) {
  const [loaded, setLoaded] = useState(false);

  const reveal = e => {
    const img = e.currentTarget;
    const decoded = img.decode ? img.decode().catch(() => {}) : Promise.resolve();
    decoded.then(() => setLoaded(true));
  };

  return (
    <img
      alt=""
      loading="lazy"
      decoding="async"
      {...props}
      className={`fade-img${loaded ? " is-loaded" : ""} ${className}`.trim()}
      onLoad={reveal}
    />
  );
}

export default FadeImg;
