import "../styles/section-info.css";
import ComoSonriendo from "../assets/video/como_sonriendo.png";
import MeDicenQueTodo from "../assets/video/me-dicen-que.png";
import TeHasSentido from "../assets/video/te-has-sentido-asi.png";
import DescubrePoder from "../assets/video/descubre.png";
import { SectionVideo } from "./SectionVideo";

export const SectionInfo = () => {
  return (
    <>
      <section className="container-sectioninfo">
        <div className="sectioninfo-margaritas" />
        <div className="sectioninfo-no-quiero" />
        <div className="sectioninfo-mi-mente" />
        <div className="sectioninfo-texts">
          <img
            src={ComoSonriendo}
            alt="imagen ¿cómo seguir sonriendo con el peso de la anciedad"
          />
          <img
            src={MeDicenQueTodo}
            alt="imagen Me dicen que todo está en mi mente, que mi problema es que confío suficiente.."
          />
          <img src={TeHasSentido} alt="Imagen ¿Te has sentido así?" />
          <img
            src={DescubrePoder}
            alt="Imagen Descubre el poder del aliento de Dios"
          />
        </div>
        <div className="sectioninfo-polaroid">
          <div className="sectioninfo-margaritas2" />
        </div>
      </section>
      <SectionVideo />
    </>
  );
};
