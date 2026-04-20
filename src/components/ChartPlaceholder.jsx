import { S } from '../styles/globals'

/**
 * ChartPlaceholder Component
 * 
 * Displays a placeholder for chart implementations.
 * Used in views to indicate where visualization components should be added.
 * 
 * @param {Object} props
 * @param {string} props.title - The title of the chart placeholder
 * @param {string} props.hint - The hint text to guide implementation
 */
export default function ChartPlaceholder({ title, hint }) {
  return (
    <div>
      <div style={S.cardTitle}>{title}</div>
      <div style={S.placeholder}>
        <div style={{ fontSize: 28 }}>📊</div>
        <div style={{ fontSize: 13, fontWeight: 600, color: '#475569' }}>Visualización pendiente</div>
        <div style={{ fontSize: 12, color: '#94a3b8' }}>{hint}</div>
      </div>
    </div>
  )
}
