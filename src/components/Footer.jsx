import { useEffect, useState } from "react";

import Facebook from "../assets/icons/facebook.svg";
import Youtube from "../assets/icons/youtube.svg";
import Instagram from "../assets/icons/instagram.svg";
import Spotify from "../assets/icons/spotify.svg";
import "../styles/footer.css";

export const Footer = () => {
  const [exploded, setExploded] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setExploded((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <footer className="footer-container">
        <div
          className={`footer-mancha ${exploded ? "new-mancha" : "exploding"}`}
        />
        <div className="footer-social">
          <a target="__blank" href="https://www.facebook.com/nxtwaaave/">
            <img
              loading="lazy"
              height="100%"
              width="100%"
              src={Facebook}
              alt="Icono de la red social Facebook"
            />
          </a>
          <a
            target="__blank"
            href="https://www.youtube.com/channel/UCb3_ZEgqrOEyqSPdrgjBEXQ"
          >
            <img
              loading="lazy"
              height="100%"
              width="100%"
              src={Youtube}
              alt="Icono de la red social Youtube"
            />
          </a>
          <a target="__blank" href="https://www.instagram.com/nxtwaaave/?hl=en">
            <img
              loading="lazy"
              height="100%"
              width="100%"
              src={Instagram}
              alt="Icono de la red social Instagram"
            />
          </a>
          <a
            target="__blank"
            href="https://open.spotify.com/intl-es/artist/3icg8QXxKDihHvzfoC1Vpm?si=WlJpJdKCSQS9Wadv28GC7Q"
          >
            <img
              loading="lazy"
              height="100%"
              width="100%"
              src={Spotify}
              alt="Icono de la plataforma de streaming Spotify"
            />
          </a>
        </div>
      </footer>
    </>
  );
};
