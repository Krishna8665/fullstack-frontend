import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './assets/pages/Home'
import About from './assets/pages/About'
import Contact from './assets/pages/Contact'
import SinglePage from './assets/pages/SinglePage'
import CreatePage from './assets/pages/CreatePage'
import EditPage from './assets/pages/EditPage'

function App() {
  //file name same huna parcha export garne name snga.
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/single-page/:id'  element={<SinglePage />} />
        <Route path='/create-page' element={<CreatePage />} />
        <Route path='/edit-page' element={<EditPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
