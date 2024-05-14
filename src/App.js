import { Band } from "./components/Band";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SectionInfo } from "./components/SectionInfo";
import "./styles/main.css";

function App() {
  return (
    <div>
      <Header />
      <Banner />
      <SectionInfo />
      <Band />
      <Footer />
    </div>
  );
}

export default App;
