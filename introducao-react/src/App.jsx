import Header from "./Components/Header"
import Card from "./Components/Card"
import Footer from "./Components/Footer"
import Banner from "./Components/Banner"
import ImgCard from "./Components/ImgCard"
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
