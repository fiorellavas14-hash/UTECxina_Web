import { Navigate, Route, Routes } from 'react-router-dom'
import { Layout } from './Components/layout/Layout'
import { useApp } from './hooks/useApp'
import { Onboarding } from './pages/Onboarding'
import { Dashboard } from './pages/Dashboard'
import { Schedule } from './pages/Schedule'
import { Explore } from './pages/Explore'
import { Focus } from './pages/Focus'
import { Tasks } from './pages/Tasks'
import { Profile } from './pages/Profile'

export default function App() {
  const { profile } = useApp()
  if (!profile.onboarded) return <Onboarding />
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Dashboard />} />
        <Route path="horario" element={<Schedule />} />
        <Route path="explorar" element={<Explore />} />
        <Route path="focus" element={<Focus />} />
        <Route path="tareas" element={<Tasks />} />
        <Route path="perfil" element={<Profile />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}