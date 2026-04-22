// Helper para convertir resultados de sql.js a array de objetos
function toObjects(result) {
  if (!result?.length) return []
  const { columns, values } = result[0]
  return values.map(row =>
    Object.fromEntries(columns.map((col, i) => [col, row[i]]))
  )
}


// Escribe aquí tus funciones de consulta
// Cada función recibe `db` como argumento y devuelve un array de objetos

// Ejemplo:
// export function getClientes(db) {
//   return toObjects(db.exec('SELECT * FROM clientes'))
// }

export function getClientes(db) {
  return toObjects(db.exec(`
    SELECT *
    FROM clientes
    ORDER BY apellidos, nombre
  `))
}

export function getPrestamosPorTipo(db) {
  return toObjects(db.exec(`
    SELECT
      tipo,
      COUNT(*) AS total
    FROM prestamos
    GROUP BY tipo
    ORDER BY total DESC, tipo
  `))
}
