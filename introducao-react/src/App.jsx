import Header from "./Components/Header/index"
import Card from "./Components/Card/index"
import Footer from "./Components/Footer"
import Banner from "./Components/Banner/index"
import ImgCard from "./Components/ImgCard/index"
import Count from "./Components/Count/index"
import Box from "./Components/Box/index"
import Gormit from "./Components/Gormit/index"
  
function App() {

  return (
    <>
    <Gormit/>

    <Header title="Introdução React" />

    <Count/>

    <Box/>

    {/* <ImgCard title="New Lorem Ipsum"/> */}
    <ImgCard caption="copo"/>  

    <Banner> 
      <h1>Bem-vindo ao meu site</h1>
      <p>Aqui voce encontra as melhores ofertas!</p>
    </Banner>

    <Card/>
    

    <Footer title="Rodapé" />
      
    </>
  )
}

export default App
