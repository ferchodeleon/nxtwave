import { SectionVideo } from "./SectionVideo";

import ImagePerfecta from "../assets/info/texto-perfecta.png";
import ImagePaz from "../assets/info/texto-paz.png";

import "../styles/section-info.css";
import { useEffect, useState } from "react";

export const SectionInfo = () => {
  const [exploded, setExploded] = useState(false);
  const [explodedGranada, setExplodedGranada] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setExploded((prev) => !prev);
      setExplodedGranada((prev) => !prev);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <section className="container-sectioninfo">
        <div className="sectioninfo-raya" />
        <div
          className={`sectioninfo-estrella ${
            exploded ? "new-image" : "exploding"
          }`}
        />
        <div
          className={`sectioninfo-granada ${
            explodedGranada ? "new-granada" : "exploding"
          }`}
        />
        <div className="sectioninfo-no-quiero" />
        <div className="sectioninfo-mi-mente" />
        <div className="sectioninfo-texts sectioninfo-text-perfecta">
          <img
            src={ImagePerfecta}
            width="100%"
            height="100%"
            alt="Perfecta Paz"
          />
        </div>
        <div className="sectioninfo-texts sectioninfo-text-paz">
          <div className="sectioninfo-decorator-text" />
          <img src={ImagePaz} width="100%" height="100%" alt="" />
        </div>
        <div className="sectioninfo-polaroid">
          <div className="sectioninfo-margaritas2" />
        </div>
      </section>
      <SectionVideo />
    </>
  );
};
