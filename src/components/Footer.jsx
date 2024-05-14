import Facebook from "../assets/icons/facebook.svg";
import Youtube from "../assets/icons/youtube.svg";
import Instagram from "../assets/icons/instagram.svg";
import Spotify from "../assets/icons/spotify.svg";
import "../styles/footer.css";

export const Footer = () => {
  return (
    <>
      <footer className="footer-container">
        <div className="footer-mancha" />
        <div className="footer-social">
          <img src={Facebook} alt="Icono de la red social Facebook" />
          <img src={Youtube} alt="Icono de la red social Youtube" />
          <img src={Instagram} alt="Icono de la red social Instagram" />
          <img
            src={Spotify}
            alt="Icono de la plataforma de streaming Spotify"
          />
        </div>
      </footer>
    </>
  );
};
