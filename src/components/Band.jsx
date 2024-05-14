import LogoNxtwave from "../assets/band/logo-nxtwave.png";
import AsiVivimos from "../assets/band/asi-vivimos-esta-cancion.png";
import Santiago from "../assets/band/santiago.png";
import Stevie from "../assets/band/stevie.png";
import JD from "../assets/band/JD.png";
import Gonzo from "../assets/band/gonzo.png";
import Sami from "../assets/band/sami.png";
import Christy from "../assets/band/Christy.png";

import "../styles/band.css";
import { useState } from "react";

export const Band = () => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");
  const [textPerson, setTextPerson] = useState("");
  const [personPosition, setPersonPosition] = useState("");
  const [loading, setLoading] = useState(false);

  const handleClick = (buttonName) => {
    setLoading(true);

    switch (buttonName) {
      case "santiago":
        setImage(Santiago);
        setAlt("Imagen Santiago integrande de la banda");
        setTextPerson(
          "Santi Garcia: <br/> Inhalar y exhalar nos ayuda a poner todo en perspectiva. En el proceso de la respiración ocurre un fenómeno de oxigenación y desintoxicación."
        );
        setPersonPosition("band-member-person-left");
        console.log("Santiago");
        break;
      case "stevie":
        setImage(Stevie);
        setAlt("Imagen Stevie integrande de la banda");
        setTextPerson(
          "Stevie: Recuerdo que Dios <br/>me ayudó a salir de los pensamientos de muerte. La paz de Dios llegó a mi vida y me dio libertad para vivir."
        );
        setPersonPosition("band-member-person-right");
        break;
      case "JD":
        setImage(JD);
        setAlt("Imagen JD integrande de la banda");
        setTextPerson(
          "JD: El aliento de Dios me da esperanza para vivir. Abrazar la paz que solo Dios me puede dar."
        );
        setPersonPosition("band-member-person-left");
        break;
      case "gonzo":
        setImage(Gonzo);
        setAlt("Imagen JD integrande de la banda");
        setTextPerson(
          "Gonzo: Esta canción me ha dado esperanza en los momentos que me he sentido solo."
        );
        setPersonPosition("band-member-person-right");
        break;
      case "sami":
        setImage(Sami);
        setAlt("Imagen JD integrande de la banda");
        setTextPerson(
          "Sami: Para mí esta canción significa sinceridad, paz, transparencia no solo con Dios sino con las personas."
        );
        setPersonPosition("band-member-person-right");
        break;
      case "christy":
        setImage(Christy);
        setAlt("Imagen Christy integrande de la banda");
        setTextPerson(
          "Christy: Yo también sé lo que se siente un ataque de ansiedad. Mi sueño con esta canción es que seas libre y encuentres la paz de Dios."
        );
        setPersonPosition("band-member-person-left");
        break;
      default:
        console.log("Otro");
        break;
    }

    if (image !== "") {
      setVisible(true);
    }
  };

  return (
    <>
      <section className="band-container">
        <div className="band-title">
          <img src={LogoNxtwave} alt="Logo nxtwave con una linea en el medio" />
          <img src={AsiVivimos} alt="Texto, Así vivimos esta canción" />
          <p className="band-container-experience">
            Para una mejor experiencia visita esta página en una computador :)
          </p>
        </div>
        <div className="band-members">
          <div className="band-members-img">
            <button
              onMouseEnter={() => handleClick("santiago")}
              className="band-button band-button-santi"
            />
            <button
              onMouseEnter={() => handleClick("stevie")}
              className="band-button band-button-stevie"
            />
            <button
              onMouseEnter={() => handleClick("JD")}
              className="band-button band-button-JD"
            />
            <button
              onMouseEnter={() => handleClick("gonzo")}
              className="band-button band-button-gonzo"
            />
            <button
              onMouseEnter={() => handleClick("sami")}
              className="band-button band-button-sami"
            />
            <button
              onMouseEnter={() => handleClick("christy")}
              className="band-button band-button-christy"
            />
            <div
              className={`band-member-person ${personPosition}`}
              style={{ opacity: loading ? 0 : 1, transition: "opacity 1s" }}
              onLoad={() => setLoading(false)}
            >
              <img src={image} alt={alt} />
              <p
                className="band-member-person-text"
                dangerouslySetInnerHTML={{ __html: textPerson }}
              ></p>
            </div>
          </div>
        </div>
        <div className="band-flower" />
        <div className="band-spoiler" />
      </section>
    </>
  );
};
