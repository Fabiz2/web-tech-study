import Header from "./components/Header"
import Footer from "./components/Footer/index"
import "./global.css"
import Router from "./Router"
import Nav from "./components/Nav"

function App() {

  return (
    <div className="app">
      <Header/>
      <Router />
      <Footer/>
    </div>
  )
}

export default App
