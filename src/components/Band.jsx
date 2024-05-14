import LogoNxtwave from "../assets/band/logo-nxtwave.png";
import AsiVivimos from "../assets/band/asi-vivimos-esta-cancion.png";
import Santiago from "../assets/band/santiago.svg";
import Stevie from "../assets/band/stevie.svg";
import JD from "../assets/band/JD.svg";
import Gonzo from "../assets/band/gonzo.svg";
import Sami from "../assets/band/sami.svg";
import Tap from "../assets/icons/tap.gif";

import "../styles/band.css";
import { useEffect, useState } from "react";

export const Band = () => {
  const [visible, setVisible] = useState(false);
  const [image, setImage] = useState("");
  const [alt, setAlt] = useState("");
  const [textPerson, setTextPerson] = useState("");
  const [personPosition, setPersonPosition] = useState("");
  const [loading, setLoading] = useState(false);

  // useEffect(() => {
  //   const typingSpeed = 120;
  //   const textToType =
  //     "Santi Garcia: Inhalar y exhalar nos ayuda a poner todo en perspectiva. En el proceso de la respiración ocurre un fenómeno de oxigenación y desintoxicación.";
  //   if (visible) {
  //     autoType(".band-member-person-text", textToType, typingSpeed);
  //   }
  // }, []);

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
        </div>
        <div className="band-members">
          <div className="band-members-img">
            <button
              onClick={() => handleClick("santiago")}
              className="band-button band-button-santi"
            />
            <button
              onClick={() => handleClick("stevie")}
              className="band-button band-button-stevie"
            />
            <button
              onClick={() => handleClick("JD")}
              className="band-button band-button-JD"
            />
            <button
              onClick={() => handleClick("gonzo")}
              className="band-button band-button-gonzo"
            />
            <button
              onClick={() => handleClick("sami")}
              className="band-button band-button-sami"
            />
          </div>
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
        <div className="band-flower" />
        <div className="band-spoiler" />
      </section>
    </>
  );
};

function autoType(elementClass, textToType, typingSpeed) {
  let thhis = document.querySelector(elementClass);
  thhis.style.position = "relative";
  thhis.style.display = "inline-block";
  thhis.innerHTML +=
    '<div class="cursor" style="right: initial; left: 0;"></div>';
  let text = textToType.trim().split("");
  let amntOfChars = text.length;
  let newString = "";
  thhis.innerHTML = "|";
  setTimeout(function () {
    thhis.style.opacity = 1;
    thhis.previousSibling.remove();
    thhis.innerHTML = "";
    for (let i = 0; i < amntOfChars; i++) {
      (function (i, char) {
        setTimeout(function () {
          newString += char;
          thhis.innerHTML = newString;
        }, i * typingSpeed);
      })(i + 1, text[i]);
    }
  }, 1000);
}
