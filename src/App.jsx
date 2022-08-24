import { Footer } from './components/Footer'
import { Functioning } from './components/Functioning'
import { Header } from './components/Header'
import { Infos } from './components/Infos'
import { Section1 } from './components/Section1'
import { Shell } from './components/Shell'
import { Global } from './styles/Global'

function App() {

  return (
    <>
      <Header />
      <Section1 />
      <Infos />
      <Shell />
      <Functioning />
      <Shell />
      <Footer />
      <Global />
    </>
  )
}

export default App
