# 💼 Prueba Técnica Frontend — Dashboard de Finanzas

Prueba técnica para desarrolladores frontend. El objetivo es construir un dashboard interactivo de análisis de préstamos utilizando React y SQL.js.

---

## 🧠 Contexto

La aplicación simula el dashboard de una empresa financiera que gestiona préstamos para distintos tipos de clientes.

Tu objetivo es transformar los datos disponibles en información útil.

---

## 🎯 Objetivo

Construir un dashboard útil a partir de los datos disponibles.

Se valorará especialmente:

* Qué métricas eliges mostrar
* Cómo estructuras la información
* Claridad visual y UX
* Organización y calidad del código

---

## 📋 La prueba

Tu tarea es **implementar las vistas del dashboard** que actualmente están vacías. El proyecto incluye:

* **Base de datos SQLite** lista para usar (`/db/database.sqlite`)
* **4 vistas** a completar: Resumen, Clientes, Préstamos, Cuotas
* **Infraestructura React** ya configurada (routing, estilos, hooks)
* **Función helper** en `queries.js` para facilitar las queries

---

## 🧪 Qué debes hacer

1. **Escribir queries en `src/db/queries.js`**

   * Define funciones que extraigan datos de la BD
   * Usa la función `toObjects()` para convertir resultados a JSON
   * Consulta el esquema en `src/db/schema.js`

2. **Implementar las vistas** (`src/views/`)

   * Cargar datos usando `useEffect`
   * Mostrar información mediante tablas, KPIs y/o gráficos
   * Elegir las visualizaciones que consideres más útiles

3. **No modificar**

   * `src/hooks/useDatabase.js`
   * `src/styles/globals.js`
   * `src/App.jsx`
   * `public/db/database.sqlite`

---

## 💡 Sugerencias (no obligatorias)

Puedes incluir, si lo consideras útil:

* KPIs agregados (totales, medias, ratios)
* Distribuciones (por tipo, estado, segmento…)
* Evolución temporal
* Tablas con filtros o búsquedas
* Visualizaciones que aporten contexto de negocio

👉 No es necesario implementar todo. Prioriza lo más relevante.

---

## 🚀 Instalación y arranque

### Requisitos

* Node.js 18+
* npm 9+

### Pasos

```bash
git clone <URL_DEL_REPO>
cd frontend-interview-test
npm install
npm run dev
```

Abrir en: **http://localhost:5173**

---

## 📊 Datos disponibles

La base de datos contiene:

| Tabla         | Descripción                        |
| ------------- | ---------------------------------- |
| **clientes**  | Información de clientes            |
| **prestamos** | Préstamos solicitados y concedidos |
| **cuotas**    | Pagos asociados a préstamos        |
| **scoring**   | Scoring crediticio                 |

👉 Ver estructura completa en `src/db/schema.js`

---

## 📝 Cómo trabajar con la base de datos

Ejemplo de query:

```javascript
export function getClientesPorSegmento(db) {
  const result = db.exec(`
    SELECT segmento, COUNT(*) as total
    FROM clientes
    GROUP BY segmento
  `)
  return toObjects(result)
}
```

Uso en componente:

```javascript
useEffect(() => {
  if (!db) return
  setDatos(getClientesPorSegmento(db))
}, [db])
```

---

## 📦 Librerías

Puedes usar cualquier librería de gráficos:

* recharts
* chart.js
* victory
* visx
* d3
* otro

👉 Justifica brevemente tu elección en el código.

---

## 💡 Tips

* Revisa errores SQL en consola
* Usa helpers de `src/utils/helpers.js` para formateo
* Las queries se ejecutan en el cliente

---

## 📬 Entrega

* Subir el código a un repositorio público
* Debe funcionar con `npm install && npm run dev`
* Añadir en este README una sección:

```md
## Lo que he implementado
```

Explicando brevemente:

* decisiones tomadas
* métricas elegidas
* visualizaciones

---

## ⏱️ Tiempo estimado

2–3 horas. Prioriza claridad y criterio sobre perfección.


¡Buena suerte! 🚀
