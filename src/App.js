import Header from "./components/Header"
import Main from "./components/Main"
import Infoblock from "./components/Infoblock"
import Mainblock from "./components/Mainblock"
import Footer from "./components/Footer"
import MetaPixel from "./utils/meta/metaPixel"

function App() {
  return (
    <div className='App'>
      <MetaPixel />
      <Header />
      <Main />
      <Infoblock />
      <Mainblock />
      <Footer />
    </div>
  )
}

export default App
