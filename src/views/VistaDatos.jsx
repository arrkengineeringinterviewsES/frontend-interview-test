import React, { useState } from 'react'
import { S } from '../styles/globals'

const FIELD_STYLE = {
  width: '100%',
  padding: '10px 12px',
  borderRadius: 8,
  border: '1px solid #dbe4ee',
  background: '#fff',
  color: '#1a2035',
  fontSize: 14,
  outline: 'none',
}

const LABEL_STYLE = {
  fontSize: 12,
  fontWeight: 600,
  color: '#64748b',
  marginBottom: 6,
}

const BUTTON_STYLE = {
  padding: '10px 14px',
  borderRadius: 8,
  border: 'none',
  background: '#1a56db',
  color: '#fff',
  fontSize: 13,
  fontWeight: 600,
  cursor: 'pointer',
}

export default function VistaDatos() {
  // Estado minimo para enseñar el patron de inputs controlados.
  const [nuevoCliente, setNuevoCliente] = useState({
    nombre: '',
    email: '',
    segmento: 'Particular',
  })

  const handleChange = (field) => (event) => {
    setNuevoCliente((prev) => ({
      ...prev,
      [field]: event.target.value,
    }))
  }

  return (
    <div>
      <div style={S.pageHeader}>
        <div style={S.pageTitle}>Datos</div>
        <div style={S.pageSub}>Plantilla base para entrada de datos en la base de datos</div>
      </div>

      <div style={S.card}>
        <details>
          <summary style={{ ...S.cardTitle, marginBottom: 0, cursor: 'pointer' }}>
            Recomendaciones de implementacion
          </summary>
          <ul style={{ marginTop: 16, paddingLeft: 20, color: '#475569', fontSize: 14, lineHeight: 1.6 }}>
            <li>Separa el estado del formulario de la logica de insercion para que el flujo sea facil de seguir.</li>
            <li>Valida campos obligatorios y tipos de dato antes de ejecutar un <code>INSERT</code> en SQLite.</li>
            <li>Mantén los nombres de los campos alineados con las columnas reales de la tabla para evitar mapeos innecesarios.</li>
            <li>Despues de guardar, muestra feedback visual y refresca la vista o la tabla si quieres que se note el cambio.</li>
          </ul>
        </details>
      </div>

      <div style={S.grid2}>
        <div style={S.card}>
          <div style={S.cardTitle}>Ejemplo guiado: alta de cliente</div>
          <div style={{ display: 'grid', gap: 14 }}>
            <div>
              <div style={LABEL_STYLE}>Nombre</div>
              <input
                style={FIELD_STYLE}
                type="text"
                value={nuevoCliente.nombre}
                onChange={handleChange('nombre')}
                placeholder="Ejemplo: Laura"
              />
            </div>

            <div>
              <div style={LABEL_STYLE}>Email</div>
              <input
                style={FIELD_STYLE}
                type="email"
                value={nuevoCliente.email}
                onChange={handleChange('email')}
                placeholder="laura@email.com"
              />
            </div>

            <div>
              <div style={LABEL_STYLE}>Segmento</div>
              <select
                style={FIELD_STYLE}
                value={nuevoCliente.segmento}
                onChange={handleChange('segmento')}
              >
                <option value="Particular">Particular</option>
                <option value="Autónomo">Autónomo</option>
                <option value="Empresa">Empresa</option>
              </select>
            </div>

            <div style={{ display: 'flex', gap: 10, alignItems: 'center', flexWrap: 'wrap' }}>

              {/* Aqui deberia engancharse el handleSubmit real con la insercion en SQLite. */}
              
              <button type="button" style={BUTTON_STYLE}>
                Guardar cliente
              </button>
              <span style={{ fontSize: 12, color: '#94a3b8' }}>
                Ejemplo de UI: falta conectar la accion de insercion.
              </span>
            </div>

            <div style={{ background: '#f8fafc', border: '1px solid #e2e8f0', borderRadius: 8, padding: 12 }}>
              <div style={{ ...LABEL_STYLE, marginBottom: 8 }}>Estado actual del formulario</div>
              <div style={{ fontSize: 13, color: '#334155', lineHeight: 1.6 }}>
                <div><strong>nombre:</strong> {nuevoCliente.nombre || '...'}</div>
                <div><strong>email:</strong> {nuevoCliente.email || '...'}</div>
                <div><strong>segmento:</strong> {nuevoCliente.segmento}</div>
              </div>
            </div>
          </div>
        </div>

        <div style={S.card}>
          <div style={S.cardTitle}>Pista de implementacion</div>
          <div style={{ display: 'grid', gap: 10, fontSize: 14, color: '#475569', lineHeight: 1.6 }}>
            <div>1. Crear estado local con <code>useState</code> para cada formulario.</div>
            <div>2. Construir una funcion <code>handleSubmit</code> que valide y prepare el <code>INSERT</code>.</div>
            <div>3. Ejecutar la query contra SQLite y mostrar un mensaje de exito o error.</div>
            <div>4. Limpiar el formulario o refrescar datos visibles despues de guardar.</div>
            <div>5. El formulario de ejemplo esta incompleto. Se puede borrar y crear un formulario generico o terminar.</div>
          </div>
        </div>


        {/* Tu implementacion aqui. */}
        {/* Estos slots estan a medio resolver a proposito para dejar espacio a una implementacion sencilla. */}


        <div style={S.card}>
          <div style={S.cardTitle}>Formulario:</div>
          <div style={S.placeholder}>

          </div>
        </div>

        <div style={S.card}>
          <div style={S.cardTitle}>Formulario:</div>
          <div style={S.placeholder}>

          </div>
        </div>

      </div>

    </div>
  )
}
