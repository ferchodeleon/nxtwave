import Cenefa from "../assets/video/cenefa-perfecta-paz.png";
import "../styles/section-video-container.css";

export const SectionVideo = () => {
  return (
    <>
      <section className="sectionVideo-container">
        <div className="sectionVideo-misil-1" />
        <div className="sectionVideo-misil-2" />
        <div className="sectionVideo-misil-3" />
        <div className="sectionVideo-misil-4" />
        <div className="sectionVideo-misil-5" />
        <div className="sectionVideo-puntos" />
        <div className="sectionVideo-background">
          <div className="sectionVideo-video-container">
            <iframe
              className="sectionVideo-video"
              src="https://www.youtube.com/embed/dGhfwnpzzCg?si=NMFkR7W2VDGQMUdv"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
            ></iframe>
            <img
              className="sectionVideo-text"
              src={Cenefa}
              alt="imagen con el texto Es momento de respirar una vez más, tomar el aliento de Dios para revivir y encontrar su perfecta paz"
            />
          </div>
        </div>
      </section>
    </>
  );
};
