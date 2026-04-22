/*
  ESQUEMA DE LA BASE DE DATOS
  Úsalo como referencia para escribir tus queries

  clientes (
    cliente_id, nombre, apellidos, dni, email, fecha_nacimiento, ciudad,
    segmento: 'Particular' | 'Autónomo' | 'Empresa'
  )

  prestamos (
    prestamo_id, cliente_id, tipo: 'Hipoteca' | 'Personal' | 'Coche' | 'Negocios',
    importe_solicitado, importe_concedido, tasa_interes, plazo_meses,
    fecha_solicitud, fecha_aprobacion,
    estado: 'Pendiente' | 'Aprobado' | 'Denegado' | 'Cancelado'
  )

  cuotas (
    cuota_id, prestamo_id, numero_cuota, fecha_vencimiento, importe, capital, intereses,
    estado: 'Pendiente' | 'Pagada' | 'Atrasada',
    fecha_pago
  )

  scoring (
    cliente_id (UNIQUE), puntuacion (0-1000),
    nivel: 'Muy Alto' | 'Alto' | 'Medio' | 'Bajo' | 'Muy Bajo'
  )

  RELACIONES:
  - prestamos.cliente_id → clientes.cliente_id
  - cuotas.prestamo_id → prestamos.prestamo_id
  - scoring.cliente_id → clientes.cliente_id (unique)
*/
