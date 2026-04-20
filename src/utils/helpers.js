// ─── Formatting Helpers ───────────────────────────────────────────────────────

export const fmt = (n) => {
  if (n == null || isNaN(n)) return '-'
  return new Intl.NumberFormat('es-ES', { 
    style: 'currency', 
    currency: 'EUR', 
    maximumFractionDigits: 0 
  }).format(n)
}

export const pct = (n) => {
  if (n == null || isNaN(n)) return '-'
  return `${Number(n).toFixed(1)}%`
}

const COLORS = {
  success: 'green',
  danger: 'red',
  warning: 'yellow',
  info: 'blue',
}

export const getEstadoColor = (e) => ({
  Aprobado: COLORS.success,
  Denegado: COLORS.danger,
  Pendiente: COLORS.info,
  Cancelado: COLORS.warning,
}[e] || COLORS.info)

export const getCuotaColor = (e) => ({
  Pagada: COLORS.success,
  Atrasada: COLORS.danger,
  Pendiente: COLORS.warning,
}[e] || COLORS.info)