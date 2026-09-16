import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Home from "./Pages/Home"
import Sobre from "./Pages/Sobre"
import NotFound from "./Pages/NotFound"
import Nav from "./components/Nav"
import FAQ from "./Pages/FAQ"

export default function Router() {
  return (
    <BrowserRouter>
    <Nav />
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/sobre" element={<Sobre/>}/>
            <Route path="*" element={<NotFound/>} />
            <Route path='/FAQ' element={<FAQ/>}/>
        </Routes>
    </BrowserRouter>
  )
}
