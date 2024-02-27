import './App.css'
import { Route, Routes, useParams} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Skills from './components/boxComponent/Skills'
import Header from './sections/Header'
import Footer from './sections/Footer'
import NotFound from './components/NotFound'
import Contact from './components/Contact'
import Resume from './components/Resume'



function App() {
  return (
    <>
      <Routes>
        <Route path="/my_resume/" element={<Header/>}>
          <Route index element={<Home/>} />
          <Route path="/my_resume/about" element={<About />} />
          <Route path='/my_resume/skills/:id' element={<Skills/>}/>
          <Route path='/my_resume/contact' element={<Contact/>}/>
          <Route path='/my_resume/resume' element={<Resume/>}/>
          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
              routes for. */}
          <Route path="*" element={<NotFound/>} />
        </Route>
      
      
      </Routes>
      <Footer/>
    </>
  )
}

export default App
