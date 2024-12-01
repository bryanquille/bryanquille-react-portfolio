import { Header } from './sections/Header/Header'
import { useStartLoader } from './hooks/useStartLoader.js'
import Loader from './components/Loader'
import bqLogo from './assets/images/logo/bq-logo.svg'
import { AboutMe } from './sections/AboutMe/AboutMe.jsx'
import './styles/App.css'
import { Projects } from './sections/Projects/Projects.jsx'
import { Skills } from './sections/Skills/Skills.jsx'
import { Contact } from './sections/Contact/Contact.jsx'
import { Footer } from './sections/Footer/Footer.jsx'

const App = () => {
  const lang = "en"
  const isLoading = useStartLoader()

  return (
    <>
      {
        isLoading 
        ? <Loader />
        : <>
            <Header logoImgSrc={bqLogo} lang={lang} />
            <main>
              <AboutMe lang={lang} />
              <Projects lang={lang} />
              <Skills lang={lang} />
              <Contact lang={lang} />
            </main>
            <Footer lang={lang} />
          </>
      }
    </>
  )
}

export default App