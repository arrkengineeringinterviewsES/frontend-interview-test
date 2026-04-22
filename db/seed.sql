-- ============================================================
-- PRÉSTAMOS BANCARIOS — Base de datos de práctica
-- PYME: Finanzas Claras S.L.
-- ============================================================

CREATE TABLE IF NOT EXISTS clientes (
    cliente_id INTEGER PRIMARY KEY AUTOINCREMENT,
    nombre TEXT NOT NULL,
    apellidos TEXT NOT NULL,
    dni TEXT UNIQUE NOT NULL,
    email TEXT,
    fecha_nacimiento DATE,
    ciudad TEXT,
    segmento TEXT CHECK(segmento IN ('Particular', 'Autónomo', 'Empresa')) DEFAULT 'Particular'
);

CREATE TABLE IF NOT EXISTS prestamos (
    prestamo_id INTEGER PRIMARY KEY AUTOINCREMENT,
    cliente_id INTEGER NOT NULL,
    tipo TEXT CHECK(tipo IN ('Hipoteca', 'Personal', 'Coche', 'Negocios')) NOT NULL,
    importe_solicitado REAL NOT NULL,
    importe_concedido REAL,
    tasa_interes REAL NOT NULL,         -- % anual
    plazo_meses INTEGER NOT NULL,
    fecha_solicitud DATE NOT NULL,
    fecha_aprobacion DATE,
    estado TEXT CHECK(estado IN ('Pendiente', 'Aprobado', 'Denegado', 'Cancelado')) DEFAULT 'Pendiente',
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

CREATE TABLE IF NOT EXISTS cuotas (
    cuota_id INTEGER PRIMARY KEY AUTOINCREMENT,
    prestamo_id INTEGER NOT NULL,
    numero_cuota INTEGER NOT NULL,
    fecha_vencimiento DATE NOT NULL,
    importe REAL NOT NULL,
    capital REAL NOT NULL,
    intereses REAL NOT NULL,
    estado TEXT CHECK(estado IN ('Pendiente', 'Pagada', 'Atrasada')) DEFAULT 'Pendiente',
    fecha_pago DATE,
    FOREIGN KEY (prestamo_id) REFERENCES prestamos(prestamo_id)
);

CREATE TABLE IF NOT EXISTS scoring (
    cliente_id INTEGER PRIMARY KEY,
    puntuacion INTEGER CHECK(puntuacion BETWEEN 0 AND 1000),
    nivel TEXT CHECK(nivel IN ('Muy Alto', 'Alto', 'Medio', 'Bajo', 'Muy Bajo')),
    FOREIGN KEY (cliente_id) REFERENCES clientes(cliente_id)
);

-- ===== CLIENTES =====
INSERT INTO clientes VALUES (1,'Carlos','Martínez López','12345678A','carlos.martinez@email.com','1985-03-12','Madrid','Particular');
INSERT INTO clientes VALUES (2,'Laura','Sánchez Ruiz','23456789B','laura.sanchez@email.com','1990-07-24','Barcelona','Autónomo');
INSERT INTO clientes VALUES (3,'Miguel','Fernández García','34567890C','miguel.fernandez@email.com','1978-11-05','Valencia','Empresa');
INSERT INTO clientes VALUES (4,'Ana','Torres Pérez','45678901D','ana.torres@email.com','1995-01-30','Sevilla','Particular');
INSERT INTO clientes VALUES (5,'Javier','Romero Díaz','56789012E','javier.romero@email.com','1982-06-18','Bilbao','Autónomo');
INSERT INTO clientes VALUES (6,'María','Gómez Herrera','67890123F','maria.gomez@email.com','1988-09-02','Madrid','Particular');
INSERT INTO clientes VALUES (7,'Pedro','Jiménez Moreno','78901234G','pedro.jimenez@email.com','1975-12-20','Zaragoza','Empresa');
INSERT INTO clientes VALUES (8,'Sofía','Ruiz Castillo','89012345H','sofia.ruiz@email.com','1992-04-15','Málaga','Particular');
INSERT INTO clientes VALUES (9,'Antonio','López Navarro','90123456I','antonio.lopez@email.com','1969-08-28','Madrid','Empresa');
INSERT INTO clientes VALUES (10,'Carmen','Álvarez Ramos','01234567J','carmen.alvarez@email.com','1998-02-10','Barcelona','Particular');
INSERT INTO clientes VALUES (11,'David','Moreno Vidal','11223344K','david.moreno@email.com','1987-05-07','Valencia','Autónomo');
INSERT INTO clientes VALUES (12,'Isabel','Castro Gil','22334455L','isabel.castro@email.com','1993-10-22','Bilbao','Particular');
INSERT INTO clientes VALUES (13,'Roberto','Vargas Fuentes','33445566M','roberto.vargas@email.com','1980-03-03','Sevilla','Empresa');
INSERT INTO clientes VALUES (14,'Elena','Serrano Blanco','44556677N','elena.serrano@email.com','1991-07-19','Madrid','Autónomo');
INSERT INTO clientes VALUES (15,'Francisco','Molina Delgado','55667788O','fco.molina@email.com','1976-01-14','Málaga','Particular');

-- ===== PRÉSTAMOS =====
INSERT INTO prestamos VALUES (1,1,'Hipoteca',180000,175000,2.5,300,'2021-03-15','2021-04-01','Aprobado');
INSERT INTO prestamos VALUES (2,2,'Personal',12000,12000,7.9,48,'2022-06-10','2022-06-20','Aprobado');
INSERT INTO prestamos VALUES (3,3,'Negocios',85000,80000,5.2,84,'2021-11-20','2021-12-05','Aprobado');
INSERT INTO prestamos VALUES (4,4,'Coche',22000,20000,4.5,60,'2023-01-08','2023-01-15','Aprobado');
INSERT INTO prestamos VALUES (5,5,'Personal',8000,NULL,9.5,36,'2023-05-22',NULL,'Denegado');
INSERT INTO prestamos VALUES (6,6,'Hipoteca',220000,215000,2.8,360,'2020-09-10','2020-10-01','Aprobado');
INSERT INTO prestamos VALUES (7,7,'Negocios',150000,145000,4.8,120,'2022-02-14','2022-03-01','Aprobado');
INSERT INTO prestamos VALUES (8,8,'Personal',5000,5000,8.5,24,'2023-07-30','2023-08-05','Aprobado');
INSERT INTO prestamos VALUES (9,9,'Hipoteca',350000,NULL,3.1,360,'2023-09-01',NULL,'Pendiente');
INSERT INTO prestamos VALUES (10,10,'Coche',15000,15000,5.1,48,'2022-11-12','2022-11-20','Aprobado');
INSERT INTO prestamos VALUES (11,1,'Personal',7000,7000,7.2,36,'2023-03-01','2023-03-10','Aprobado');
INSERT INTO prestamos VALUES (12,11,'Negocios',45000,42000,6.0,60,'2021-08-05','2021-08-20','Aprobado');
INSERT INTO prestamos VALUES (13,12,'Personal',3500,3500,10.2,18,'2023-10-10','2023-10-12','Aprobado');
INSERT INTO prestamos VALUES (14,13,'Hipoteca',280000,265000,2.6,300,'2019-05-15','2019-06-01','Aprobado');
INSERT INTO prestamos VALUES (15,14,'Coche',30000,NULL,4.9,72,'2023-11-01',NULL,'Pendiente');
INSERT INTO prestamos VALUES (16,15,'Personal',9500,9500,8.8,36,'2022-04-18','2022-04-25','Aprobado');
INSERT INTO prestamos VALUES (17,2,'Coche',18000,17500,4.7,60,'2023-08-14','2023-08-22','Aprobado');
INSERT INTO prestamos VALUES (18,6,'Personal',6000,NULL,11.0,24,'2023-12-01',NULL,'Denegado');
INSERT INTO prestamos VALUES (19,9,'Negocios',200000,195000,4.3,120,'2020-01-10','2020-02-01','Aprobado');
INSERT INTO prestamos VALUES (20,4,'Personal',4000,4000,9.0,12,'2023-06-05','2023-06-07','Aprobado');

-- ===== CUOTAS (para préstamos aprobados, primeras 6 cuotas de cada uno) =====
-- Préstamo 1: Hipoteca 175,000 a 2.5% / 300 meses  → ~779€/mes
INSERT INTO cuotas VALUES (1,1,1,'2021-05-01',779.00,417.71,361.29,'Pagada','2021-05-01');
INSERT INTO cuotas VALUES (2,1,2,'2021-06-01',779.00,418.58,360.42,'Pagada','2021-06-02');
INSERT INTO cuotas VALUES (3,1,3,'2021-07-01',779.00,419.45,359.55,'Pagada','2021-06-30');
INSERT INTO cuotas VALUES (4,1,4,'2021-08-01',779.00,420.32,358.68,'Pagada','2021-08-03');
INSERT INTO cuotas VALUES (5,1,5,'2021-09-01',779.00,421.20,357.80,'Pagada','2021-09-01');
INSERT INTO cuotas VALUES (6,1,6,'2021-10-01',779.00,422.07,356.93,'Atrasada',NULL);

-- Préstamo 2: Personal 12,000 a 7.9% / 48 meses  → ~292€/mes
INSERT INTO cuotas VALUES (7,2,1,'2022-07-20',292.00,213.10,78.90,'Pagada','2022-07-19');
INSERT INTO cuotas VALUES (8,2,2,'2022-08-20',292.00,214.51,77.49,'Pagada','2022-08-20');
INSERT INTO cuotas VALUES (9,2,3,'2022-09-20',292.00,215.93,76.07,'Pagada','2022-09-22');
INSERT INTO cuotas VALUES (10,2,4,'2022-10-20',292.00,217.35,74.65,'Pagada','2022-10-20');
INSERT INTO cuotas VALUES (11,2,5,'2022-11-20',292.00,218.78,73.22,'Pagada','2022-11-19');
INSERT INTO cuotas VALUES (12,2,6,'2022-12-20',292.00,220.21,71.79,'Pagada','2022-12-20');

-- Préstamo 4: Coche 20,000 a 4.5% / 60 meses  → ~373€/mes
INSERT INTO cuotas VALUES (13,4,1,'2023-02-15',373.00,298.25,74.75,'Pagada','2023-02-15');
INSERT INTO cuotas VALUES (14,4,2,'2023-03-15',373.00,299.36,73.64,'Pagada','2023-03-14');
INSERT INTO cuotas VALUES (15,4,3,'2023-04-15',373.00,300.48,72.52,'Pagada','2023-04-15');
INSERT INTO cuotas VALUES (16,4,4,'2023-05-15',373.00,301.60,71.40,'Pagada','2023-05-16');
INSERT INTO cuotas VALUES (17,4,5,'2023-06-15',373.00,302.72,70.28,'Atrasada',NULL);
INSERT INTO cuotas VALUES (18,4,6,'2023-07-15',373.00,303.85,69.15,'Pendiente',NULL);

-- Préstamo 8: Personal 5,000 a 8.5% / 24 meses  → ~228€/mes
INSERT INTO cuotas VALUES (19,8,1,'2023-09-05',228.00,192.50,35.50,'Pagada','2023-09-05');
INSERT INTO cuotas VALUES (20,8,2,'2023-10-05',228.00,193.86,34.14,'Pagada','2023-10-04');
INSERT INTO cuotas VALUES (21,8,3,'2023-11-05',228.00,195.24,32.76,'Pendiente',NULL);
INSERT INTO cuotas VALUES (22,8,4,'2023-12-05',228.00,196.62,31.38,'Pendiente',NULL);

-- Préstamo 11: Personal 7,000 a 7.2% / 36 meses  → ~217€/mes
INSERT INTO cuotas VALUES (23,11,1,'2023-04-10',217.00,175.00,42.00,'Pagada','2023-04-10');
INSERT INTO cuotas VALUES (24,11,2,'2023-05-10',217.00,176.05,40.95,'Pagada','2023-05-09');
INSERT INTO cuotas VALUES (25,11,3,'2023-06-10',217.00,177.11,39.89,'Pagada','2023-06-10');
INSERT INTO cuotas VALUES (26,11,4,'2023-07-10',217.00,178.18,38.82,'Atrasada',NULL);

-- ===== SCORING =====
INSERT INTO scoring VALUES (1,820,'Alto');
INSERT INTO scoring VALUES (2,610,'Medio');
INSERT INTO scoring VALUES (3,780,'Alto');
INSERT INTO scoring VALUES (4,540,'Medio');
INSERT INTO scoring VALUES (5,310,'Bajo');
INSERT INTO scoring VALUES (6,870,'Muy Alto');
INSERT INTO scoring VALUES (7,760,'Alto');
INSERT INTO scoring VALUES (8,480,'Bajo');
INSERT INTO scoring VALUES (9,690,'Medio');
INSERT INTO scoring VALUES (10,730,'Alto');
INSERT INTO scoring VALUES (11,590,'Medio');
INSERT INTO scoring VALUES (12,420,'Bajo');
INSERT INTO scoring VALUES (13,810,'Alto');
INSERT INTO scoring VALUES (14,650,'Medio');
INSERT INTO scoring VALUES (15,380,'Bajo');
