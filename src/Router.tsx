import { Route, Routes } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Projects } from './pages/Projects'
import { Stacks } from './pages/Stacks'

export function Router () {
  return (
    <Routes>
      <Route path='/' element={<DefaultLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/stacks" element={<Stacks />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  )
}