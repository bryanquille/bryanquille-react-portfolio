import { Navigate, Route, Routes } from 'react-router-dom'
import { Header } from './sections/Header/Header.jsx'
import { Footer } from './sections/Footer/Footer.jsx'
import Loader from './components/Loader'
import { Home } from './routes/Home.jsx'
import { HundredProjects } from './routes/HundredProjects.jsx'
import { useStartLoader } from './hooks/useStartLoader.js'
import bqLogo from './assets/images/logo/bq-logo.svg'
import './styles/App.css'

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
              <Routes>
                <Route path='/' element={ <Home lang={lang} /> } />
                <Route path='/hundred-projects' element={ <HundredProjects lang={lang} /> } />
                <Route path='/*' element={ <Navigate to='/' /> } />
              </Routes>
              <Footer lang={lang} />
            </>
      }
    </>
  )
}

export default App