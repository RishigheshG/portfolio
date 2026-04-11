import { Routes, Route, useLocation } from 'react-router-dom'
import Navbar  from './components/Navbar'
import Footer  from './components/Footer'
import Cursor  from './components/Cursor'
import Home    from './pages/Home'
import Projects from './pages/Projects'
import MyFabric from './pages/MyFabric'
import Resume  from './pages/Resume'
import Contact from './pages/Contact'

function App() {
  const location = useLocation()

  return (
    <div className="app">
      {/* Custom cursor — lives outside routing so it never unmounts */}
      <Cursor />

      <Navbar />
      {/* key forces remount on route change → triggers page-fade-in animation */}
      <main key={location.pathname} className="page-transition">
        <Routes location={location}>
          <Route path="/"          element={<Home />}     />
          <Route path="/projects"  element={<Projects />} />
          <Route path="/my-fabric" element={<MyFabric />} />
          <Route path="/resume"    element={<Resume />}   />
          <Route path="/contact"   element={<Contact />}  />
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
