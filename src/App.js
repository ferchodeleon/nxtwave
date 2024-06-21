import { Band } from "./components/Band";
import { Banner } from "./components/Banner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { SectionInfo } from "./components/SectionInfo";
import Loading from "./components/loading";

import PerfectaPazImage from "./assets/banner/banner-perfecta-paz.png";
import WeAreTheRevolutionImage from "./assets/banner/banner-we-are-the-revolution.png";

import "./styles/main.css";

function App() {
  return (
    <Loading
      children={
        <div>
          <Header />
          <Banner />
          <SectionInfo />
          <Band />
          <Footer />
        </div>
      }
      imageUrls={[PerfectaPazImage, WeAreTheRevolutionImage]}
    />
  );
}

export default App;
