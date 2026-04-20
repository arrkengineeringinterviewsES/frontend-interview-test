/*
  ESQUEMA DE LA BASE DE DATOS
  Úsalo como referencia para escribir tus queries

  clientes (
    id, nombre, apellidos, dni, email, fecha_nacimiento, ciudad,
    segmento: 'Particular' | 'Autónomo' | 'Empresa'
  )

  prestamos (
    id, cliente_id, tipo: 'Hipoteca' | 'Personal' | 'Coche' | 'Negocios',
    importe_solicitado, importe_concedido, tasa_interes, plazo_meses,
    fecha_solicitud, fecha_aprobacion,
    estado: 'Pendiente' | 'Aprobado' | 'Denegado' | 'Cancelado'
  )

  cuotas (
    id, prestamo_id, numero_cuota, fecha_vencimiento, importe, capital, intereses,
    estado: 'Pendiente' | 'Pagada' | 'Atrasada',
    fecha_pago
  )

  scoring (
    id, cliente_id (UNIQUE), puntuacion (0-1000),
    nivel: 'Muy Alto' | 'Alto' | 'Medio' | 'Bajo' | 'Muy Bajo',
    ultima_actualizacion
  )

  RELACIONES:
  - prestamos.cliente_id → clientes.id
  - cuotas.prestamo_id → prestamos.id
  - scoring.cliente_id → clientes.id (unique)
*/
