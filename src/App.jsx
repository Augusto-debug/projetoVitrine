import Header from "./components/Header/Header"
import HeroSection from "./components/HeroSection/HeroSection"
import Parceiros from "./components/Divulgações/Divulgacoes"
import Whatsapp from "./components/Whatsapp"
import SecaoMetricas from "./components/Metricas/SecaoMetricas"
import SecaoDepoimentos from "./components/Depoimentos/SecaoDepoimentos"
import SecaoFaq from "./components/Faq/SecaoFaq"
import FaleConosco from "./components/FaleConosco/FaleConosco"
import Footer from "./components/Footer/Footer"
import SecaoParceiros from "./components/Parceiros/SecaoParceiros"
import "./App.module.css"

function App() {

  return (
    <>
      <Header />
      <HeroSection />
      <Parceiros />
      <SecaoMetricas />
      <SecaoDepoimentos />
      <SecaoParceiros />
      <SecaoFaq />
      <FaleConosco />
      <Footer />
      <Whatsapp />
    </>
  )
}

export default App
