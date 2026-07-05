import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoleProvider } from '@/context/RoleContext'
import { SolicitudesProvider } from '@/context/SolicitudesContext'
import { DashboardHealthPage } from '@/pages/DashboardHealthPage'
import { SolicitudesPage } from '@/pages/SolicitudesPage'
import { NuevaSolicitudPage } from '@/pages/NuevaSolicitudPage'
import { SolicitudDetailPage } from '@/pages/SolicitudDetailPage'
import { DocumentosPage } from '@/pages/DocumentosPage'
import { RankingHealthPage } from '@/pages/RankingHealthPage'
import { OperacionesPage } from '@/pages/OperacionesPage'

function App() {
  return (
    <RoleProvider>
      <SolicitudesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardHealthPage />} />
            <Route path="/solicitudes" element={<SolicitudesPage />} />
            <Route path="/solicitudes/nueva" element={<NuevaSolicitudPage />} />
            <Route path="/solicitudes/:id" element={<SolicitudDetailPage />} />
            <Route path="/documentos" element={<DocumentosPage />} />
            <Route path="/ranking" element={<RankingHealthPage />} />
            <Route path="/operaciones" element={<OperacionesPage />} />
          </Routes>
        </BrowserRouter>
      </SolicitudesProvider>
    </RoleProvider>
  )
}

export default App
