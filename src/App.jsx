import '@fontsource/mona-sans/400.css'
import '@fontsource/mona-sans/700.css'


import Navbar from "./components/Navbar/Navbar.jsx"
import Hero from "./components/Hero/Hero.jsx"
import Sidebar from './components/Sidebar/Sidebar.jsx'
import Article from './components/Article/Article.jsx'
import Footer from './components/Footer/Footer.jsx'

function App() {

  return (
    <>
    <Navbar />
    <Hero />
    <Sidebar />
    <Article />
    <Footer />
    </>
  )
}

export default App
