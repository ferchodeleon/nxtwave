import "../styles/section-video-container.css";
import EsMomento from "../assets/video/es-momento.png";
import VideoInhala from "../assets/video/image-video.svg";

export const SectionVideo = () => {
  return (
    <>
      <section className="sectionVideo-container">
        <div />
        <div>
          <div className="sectionVideo-video-container">
            <div className="sectionVideo-video-background" />
            <iframe
              className="sectionVideo-video"
              src="https://www.youtube.com/embed/M8v_WA0BZao?si=M8mWVNv78Ow4W9m9"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
          </div>
          {/* <img
            className="sectionVideo-video"
            src={VideoInhala}
            alt="Imagen portada del video Inhala Exhala"
          /> */}
          <img
            className="sectionVideo-text"
            src={EsMomento}
            alt="imagen con el texto Es momento de respirar una vez más, tomar el aliento de Dios para revivir y encontrar su perfecta paz"
          />
        </div>
      </section>
    </>
  );
};
