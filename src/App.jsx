import GenerateResume from './pages/GenerateResume'
import HomePage from './pages/HomePage'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/createResume' element={<GenerateResume />}/>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
    </BrowserRouter>
  )
}

export default App
