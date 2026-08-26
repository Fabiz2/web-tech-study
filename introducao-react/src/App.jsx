import Header from "./Components/Header/index"
import Card from "./Components/Card/Card"
import Footer from "./Components/Footer"
import Banner from "./Components/Banner/index"
import ImgCard from "./Components/ImgCard/ImgCard"
import Informacao from "./Components/Informacao"
  
function App() {

  return (
    <>
    <Header title="Meu site" />

    <Header title="Lorem Ipsum" />

    <Header title="Introdução React" />

    {/* <ImgCard title="New Lorem Ipsum"/> */}
    <ImgCard caption="copo"/>  

    <Banner> 
      <h1>Bem-vindo ao meu site</h1>
      <p>Aqui voce encontra as melhores ofertas!</p>
    </Banner>

    <Card/>

    <Informacao title="Corinthians"> 
      <p>Lorem Ipsum</p>
    </Informacao>
    

    <Footer title="Rodapé" />
      
    </>
  )
}

export default App
