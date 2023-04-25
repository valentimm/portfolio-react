import { Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import { About } from './pages/About'
import { Stacks } from './pages/Stacks'
import { Contact } from './pages/Contact'
import { DefaultLayout } from './layouts/DefaultLayout'

export function Router () {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}