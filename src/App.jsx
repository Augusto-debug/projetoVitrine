import { useEffect } from "react"
import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import Divulgacoes from "./components/Divulgações/Divulgacoes"
import Whatsapp from "./components/Whatsapp"
import SecaoMetricas from "./components/MetricasCopy/SecaoMetricas"
import SecaoDepoimentos from "./components/Depoimentos/SecaoDepoimentos"
import SecaoFaq from "./components/Faq/SecaoFaq"
import FaleConosco from "./components/FaleConosco/FaleConosco"
import Footer from "./components/Footer/Footer"
import SecaoParceiros from "./components/Parceiros/SecaoParceiros"
import Erica from "./components/Erica/Erica"

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header />
      <HeroSection />
      <Erica />
      <SecaoMetricas/>
      <Divulgacoes />
      <SecaoParceiros />
      <SecaoDepoimentos />
      <SecaoFaq />
      <FaleConosco />
      <Footer />
      <Whatsapp />
    </>
  )
}

export default App
