import { useEffect, useState } from "react";
import "../styles/header.css";

const Header = () => {
  const [active, setActive] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setActive(true), 2500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <header>
      <div className="header-container">
        <div className="header-footprints" />
        <div
          className="header-logo"
          style={{ opacity: active ? 1 : 0, transition: "opacity 1.5s" }}
        />
      </div>
    </header>
  );
};

export { Header };
