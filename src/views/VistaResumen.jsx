import React from 'react'
import { S } from '../styles/globals'
import { getClientes, getPrestamosPorTipo } from '../db/queries'
import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts'

export default function VistaResumen({ db }) {
  // Ejemplos minimos de consumo de queries para pintar KPIs y graficas.
  const totalClientes = getClientes(db).length
  const prestamosPorTipo = getPrestamosPorTipo(db)

  return (
    <div>
      <div style={S.pageHeader}>
        <div style={S.pageTitle}>Resumen General</div>
        <div style={S.pageSub}>Plantilla base para integrar graficas</div>
      </div>

      <div style={S.card}>
        <details>
          <summary style={{ ...S.cardTitle, marginBottom: 0, cursor: 'pointer' }}>
            Recomendaciones de integracion
          </summary>
          <ul style={{ marginTop: 16, paddingLeft: 20, color: '#475569', fontSize: 14, lineHeight: 1.6 }}>
            <li>Si copias ejemplos de Recharts, revisa si vienen en TypeScript y elimina el tipado si estas trabajando en archivos <code>.jsx</code>.</li>
            <li>Quita tipos como <code>: {'{ ... }'}</code>, <code>interface</code>, <code>type</code> o imports de tipos como <code>TooltipIndex</code>.</li>
            <li>En un mismo archivo solo puede haber un <code>export default</code>. Los componentes auxiliares deben ir como export normal o quedar internos.</li>
            <li>Revisa imports duplicados desde <code>recharts</code> y nombres repetidos como <code>const data</code>, porque suelen romper el archivo al pegar ejemplos completos.</li>
          </ul>
        </details>
      </div>

      <div style={S.grid2}>
        <div style={S.card}>
          <div style={S.cardTitle}>Ejemplo 1: Total de clientes</div>
          <div style={{ display: 'grid', gap: 8 }}>
            <div style={S.kpiValue}>{totalClientes}</div>
          </div>
        </div>

        <div style={S.card}>
          <div style={S.cardTitle}>Ejemplo 2: Prestamos por tipo</div>
          <div style={{ display: 'grid', gap: 8 }}>
            <div style={{ fontSize: 13, color: '#64748b' }}>
              Este ejemplo usa <code>getPrestamosPorTipo(db)</code> para dibujar un barplot con eje X y eje Y.
            </div>
            <div style={{ height: 180 }}>

              {/* Ejemplo base: query -> array de datos -> componente de Recharts */}
              
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={prestamosPorTipo} margin={{ top: 8, right: 8, left: -24, bottom: 0 }}>
                  <XAxis dataKey="tipo" tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <YAxis allowDecimals={false} tick={{ fill: '#64748b', fontSize: 12 }} axisLine={false} tickLine={false} />
                  <Bar dataKey="total" fill="#1a56db" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>


        {/* Tu implementacion aqui. */}
        {/* Puedes usar estos slots de ejemplo o libertad absoluta para la resolucion del problema*/}


        <div style={S.card}>
          <div style={S.cardTitle}>Grafica 3</div>
          <div style={S.placeholder}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#475569' }}>Slot para graficas</div>
          </div>
        </div>

        <div style={S.card}>
          <div style={S.cardTitle}>Grafica 4</div>
          <div style={S.placeholder}>
            <div style={{ fontSize: 13, fontWeight: 600, color: '#475569' }}>Slot para graficas</div>
          </div>
        </div>

      </div>
    </div>
  )
}
