import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoleProvider } from '@/context/RoleContext'
import { SolicitudesProvider } from '@/context/SolicitudesContext'
import { DashboardBankPage } from '@/pages/DashboardBankPage'
import { PipelinePage } from '@/pages/PipelinePage'
import { NuevaSolicitudPage } from '@/pages/NuevaSolicitudPage'
import { SolicitudDetailPage } from '@/pages/SolicitudDetailPage'
import { SimuladorPage } from '@/pages/SimuladorPage'
import { RankingPage } from '@/pages/RankingPage'

function App() {
  return (
    <RoleProvider>
      <SolicitudesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardBankPage />} />
            <Route path="/pipeline" element={<PipelinePage />} />
            <Route path="/solicitudes/nueva" element={<NuevaSolicitudPage />} />
            <Route path="/solicitudes/:id" element={<SolicitudDetailPage />} />
            <Route path="/simulador" element={<SimuladorPage />} />
            <Route path="/ranking" element={<RankingPage />} />
          </Routes>
        </BrowserRouter>
      </SolicitudesProvider>
    </RoleProvider>
  )
}

export default App
