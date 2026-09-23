import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home"
import Sobre from "./Pages/Sobre"
import NotFound from "./Pages/NotFound"
import Nav from "./components/Nav"
import FAQ from "./Pages/FAQ"
import Usuario from "./Pages/Usuarios"
import Cadastro from "./Pages/Cadastro"

export default function Router() {
  return (
    <BrowserRouter>
    <Nav />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="*" element={<NotFound/>} />
            <Route path='/FAQ' element={<FAQ/>}/>
            <Route path='/usuarios' element={<Usuario/>}/>
            <Route path='/cadastro' element={<Cadastro/>}/>
        </Routes>
    </BrowserRouter>
  )
}
