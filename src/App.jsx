import React, { useState } from 'react'
import { S } from './styles/globals'
import { useDatabase } from './hooks/useDatabase'
import VistaResumen from './views/VistaResumen'
import VistaDatos from './views/VistaDatos'

// ─── Navigation Configuration ────────────────────────────────────────────────
const VISTAS = [
  { id: 'resumen', label: 'Resumen' },
  { id: 'datos', label: 'Datos' },
]

// ─── Main App Component ──────────────────────────────────────────────────────
export default function App() {
  const [vista, setVista] = useState('resumen')
  const { db, loading, error } = useDatabase()

  const renderContent = () => {
    if (loading) return (
      <div style={S.loadingWrap}>
        <div style={{ fontSize: 28 }}>⏳</div>
        <div>Cargando base de datos…</div>
      </div>
    )
    if (error) return (
      <div style={S.loadingWrap}>
        <div style={{ fontSize: 28 }}>❌</div>
        <div style={{ fontWeight: 600 }}>Error al cargar la base de datos</div>
        <div style={{ fontSize: 12, color: '#94a3b8' }}>{error}</div>
      </div>
    )
    if (vista === 'resumen') return <VistaResumen db={db} />
    if (vista === 'datos') return <VistaDatos db={db} />
  }

  return (
    <div style={S.root}>
      <nav style={S.navbar}>
        <div style={S.brand}>
          <div style={S.brandDot}>FC</div>
          <span style={S.brandName}>Finanzas Claras</span>
        </div>
        <div style={S.navTabs}>
          {VISTAS.map(({ id, label }) => (
            <button key={id} style={S.navTab(vista === id)} onClick={() => setVista(id)}>
              {label}
            </button>
          ))}
        </div>
        <div style={S.navRight}>
          <span style={S.badge}>Demo · PYME</span>
        </div>
      </nav>
      <div style={S.page}>
        {renderContent()}
      </div>
    </div>
  )
}
