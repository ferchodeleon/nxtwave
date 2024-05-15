import "../styles/banner.css";
import InhalaExhalaImage from "../assets/banner/inhala-exhala.png";
import { useEffect, useState } from "react";

export const Banner = () => {
  const [active, setActive] = useState(false);

  const transition = "all 2s";

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 3000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <section className="banner-section">
      <div className="banner-container">
        <div
          className="banner-title"
          style={{ opacity: active ? 1 : 0, transition: transition }}
        >
          <img
            src={InhalaExhalaImage}
            alt="Imagen con texto de Inhala Exhala"
          />
        </div>
        <div
          className="banner-presave"
          style={{ opacity: active ? 1 : 0, transition: transition }}
        >
          <a
            href="https://youtu.be/M8v_WA0BZao?si=X2VijxjVsOPNEX3R"
            target="__blank"
          >
            <span />
            Ver video
          </a>
        </div>
      </div>
    </section>
  );
  // return (
  //   <section className="banner-section">
  //     <div className="banner-container">
  //       <div
  //         className="banner-title"
  //         style={{ opacity: active ? 1 : 0, transition: transition }}
  //       >
  //         <img
  //           src={InhalaExhalaImage}
  //           alt="Imagen con texto de Inhala Exhala"
  //         />
  //       </div>
  //       <div
  //         className="banner-presave"
  //         style={{ opacity: active ? 1 : 0, transition: transition }}
  //       >
  //         <a
  //           href="https://youtu.be/M8v_WA0BZao?si=X2VijxjVsOPNEX3R"
  //           target="__blank"
  //         >
  //           <span />
  //           Ver video
  //         </a>
  //       </div>
  //     </div>
  //   </section>
  // );
};
