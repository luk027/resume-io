import GenerateResume from './pages/GenerateResume'
import HomePage from './pages/HomePage'

import { HashRouter, Routes, Route } from 'react-router-dom'
import PageNotFound from './pages/PageNotFound'

function App() {
  return (
    <HashRouter>
    <Routes>
      <Route path='/' element={<HomePage />}/>
      <Route path='/createResume' element={<GenerateResume />}/>
      <Route path='*' element={<PageNotFound />}/>
    </Routes>
    </HashRouter>
  )
}

export default App
