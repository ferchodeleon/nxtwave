import { useEffect, useState } from "react";

import "../styles/loading.css";

const Loading = ({ children, imageUrls }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadImages = (imageUrls) => {
      return Promise.all(
        imageUrls.map((url) => {
          return new Promise((resolve, reject) => {
            const img = new Image();
            img.src = url;
            img.onload = resolve;
            img.onerror = reject;
          });
        })
      );
    };

    loadImages(imageUrls)
      .then(() => {
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  });

  return loading ? <Load /> : children;
};

export default Loading;

const Load = () => {
  return (
    <div className="loading-container">
      <div>
        <div className="loading-container-flower">
          <div className="droplet" id="no1"></div>
          <div className="droplet" id="no2"></div>
          <div className="droplet" id="no3"></div>
          <div className="droplet" id="no4"></div>
          <div className="droplet" id="no5"></div>
          <div className="droplet" id="no6"></div>
          <div className="droplet" id="no7"></div>
          <div className="droplet" id="no8"></div>
          <div className="droplet" id="no9"></div>
          <div className="droplet" id="no10"></div>
        </div>
        <p className="loading-text">
          Lo<span>a</span>d<span>in</span>g...
        </p>
      </div>
    </div>
  );
};
