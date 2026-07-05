import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoleProvider } from '@/context/RoleContext'
import { VisitasProvider } from '@/context/VisitasContext'
import { DashboardSalesPage } from '@/pages/DashboardSalesPage'
import { AgendaVisitasPage } from '@/pages/AgendaVisitasPage'
import { VisitaDetailPage } from '@/pages/VisitaDetailPage'
import { PedidosPage } from '@/pages/PedidosPage'
import { RankingPage } from '@/pages/RankingPage'
import { TerritorioPage } from '@/pages/TerritorioPage'

function App() {
  return (
    <RoleProvider>
      <VisitasProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<DashboardSalesPage />} />
            <Route path="/visitas" element={<AgendaVisitasPage />} />
            <Route path="/visitas/:id" element={<VisitaDetailPage />} />
            <Route path="/pedidos" element={<PedidosPage />} />
            <Route path="/ranking" element={<RankingPage />} />
            <Route path="/territorio" element={<TerritorioPage />} />
          </Routes>
        </BrowserRouter>
      </VisitasProvider>
    </RoleProvider>
  )
}

export default App
