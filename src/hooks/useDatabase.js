import { useState, useEffect } from 'react'

/**
 * Custom Hook: useDatabase
 * 
 * Loads and initializes the SQLite database from /db/database.sqlite
 * Handles loading state, errors, and provides the database instance.
 * 
 * @returns {Object} { db, loading, error }
 *   - db: The SQL.Database instance (null while loading)
 *   - loading: Boolean indicating loading state
 *   - error: Error message if initialization failed
 */
export function useDatabase() {
  const [db, setDb] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    // Inject global styles
    const style = document.createElement('style')
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap');
      * { box-sizing: border-box; margin: 0; padding: 0; }
      body { background: #f0f2f5; }
      tr:hover td { background: #f8fafc; transition: background 0.1s; }
      button:hover { opacity: 0.85; }
    `
    document.head.appendChild(style)

    async function loadDb() {
      try {
        // Load sql.js library if not already loaded
        await new Promise((resolve, reject) => {
          if (window.initSqlJs) return resolve()
          const script = document.createElement('script')
          script.src = 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/sql-wasm.js'
          script.onload = resolve
          script.onerror = reject
          document.head.appendChild(script)
        })

        // Initialize SQLite with the WASM file
        const SQL = await window.initSqlJs({
          locateFile: () => 'https://cdnjs.cloudflare.com/ajax/libs/sql.js/1.10.3/sql-wasm.wasm'
        })

        // Fetch and load the database file
        const res = await fetch('/db/database.sqlite')
        const buf = await res.arrayBuffer()
        setDb(new SQL.Database(new Uint8Array(buf)))
      } catch(e) {
        console.error('Database loading error:', e)
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }

    loadDb()
  }, [])

  return { db, loading, error }
}
