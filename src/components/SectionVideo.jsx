import { useRef } from "react";
import Cenefa from "../assets/video/cenefa-perfecta-paz.png";
import "../styles/section-video-container.css";
import { LazyLoading } from "./LazyLoading";

export const SectionVideo = () => {
  const videoContainerRef = useRef(null);
  const isVisible = LazyLoading(videoContainerRef);
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
          <div className="sectionVideo-video-container" ref={videoContainerRef}>
            {isVisible ? (
              <iframe
                title="YouTube video player sing 'Perfecta Paz'"
                className="sectionVideo-video"
                src="https://www.youtube.com/embed/dGhfwnpzzCg?si=NMFkR7W2VDGQMUdv"
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
              ></iframe>
            ) : (
              <div />
            )}
            <img
              className="sectionVideo-text"
              src={Cenefa}
              alt='imagen con el texto "Dame de tu paz tu perfecta paz mi confianza en ti permanece"'
            />
          </div>
        </div>
      </section>
    </>
  );
};
