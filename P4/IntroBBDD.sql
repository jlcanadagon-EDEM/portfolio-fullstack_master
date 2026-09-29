/*
Proyecto 4 - SQL
Base de datos: demo
Autor: José Luis Cañada
*/

-- Ejercicio 1
-- Recuperar los vuelos y su identificador cuyo estado sea On Time.

SELECT flight_id, flight_no, status
FROM bookings.flights
WHERE status = 'On Time';

-- Ejercicio 2
-- Mostrar todas las reservas cuyo importe total supere 1.000.000 de rublos.

SELECT *
FROM bookings.bookings
WHERE total_amount > 1000000;

-- Ejercicio 3
-- Mostrar todos los datos de los modelos de avión disponibles.

SELECT *
FROM bookings.aircrafts_data;

-- Ejercicio 4
-- Mostrar los identificadores de los vuelos realizados con un Boeing 737-300.

SELECT flight_id
FROM bookings.flights
WHERE aircraft_code = '733';

-- Ejercicio 5
-- Mostrar la información detallada de los billetes comprados
-- por personas cuyo nombre sea Irina.

SELECT *
FROM bookings.tickets
WHERE passenger_name ILIKE 'IRINA %';

-- Ejercicio 7
-- ciudades con más de un aeropuerto

SELECT
  city ->> 'en' AS city,
  COUNT(*) AS airport_count
FROM bookings.airports_data
GROUP BY city ->> 'en'
HAVING COUNT(*) > 1
ORDER BY airport_count DESC, city;

-- Ejercicio 7
-- Mostrar el número de vuelos correspondiente a cada modelo de avión.

SELECT
  a.aircraft_code,
  a.model ->> 'en' AS aircraft_model,
  COUNT(f.flight_id) AS flight_count
FROM bookings.aircrafts_data AS a
LEFT JOIN bookings.flights AS f
  ON f.aircraft_code = a.aircraft_code
GROUP BY a.aircraft_code, a.model ->> 'en'
ORDER BY flight_count DESC;

-- Ejercicio 8
-- Mostrar las reservas que contienen más de un billete.

SELECT
  b.book_ref,
  b.book_date,
  b.total_amount,
  COUNT(t.ticket_no) AS ticket_count
FROM bookings.bookings AS b
JOIN bookings.tickets AS t
  ON t.book_ref = b.book_ref
GROUP BY b.book_ref, b.book_date, b.total_amount
HAVING COUNT(t.ticket_no) > 1
ORDER BY ticket_count DESC;

-- Ejercicio 9
-- Mostrar los vuelos cuya salida se retrasó más de una hora.

SELECT
  flight_id,
  flight_no,
  scheduled_departure,
  actual_departure,
  actual_departure - scheduled_departure AS departure_delay
FROM bookings.flights
WHERE actual_departure > scheduled_departure + INTERVAL '1 hour'
ORDER BY departure_delay DESC;

