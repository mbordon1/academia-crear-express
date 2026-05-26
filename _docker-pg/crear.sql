CREATE TABLE clases (

    id SERIAL PRIMARY KEY,

    nombre VARCHAR(100) NOT NULL,

    descripcion TEXT,

    nivel VARCHAR(50),

    imagen TEXT

);

CREATE TABLE horarios (

    id SERIAL PRIMARY KEY,

    dia VARCHAR(30),

    hora VARCHAR(20),

    id_clase INTEGER,

    FOREIGN KEY (id_clase)
    REFERENCES clases(id)

);

INSERT INTO clases
(nombre, descripcion, nivel, imagen)

VALUES

(
 'Salsa',
 'Clase de salsa para principiantes',
 'Inicial',
 '/img/salsa.jpg'
);

INSERT INTO horarios
(dia, hora, id_clase)

VALUES

('Lunes', '18:00', 1),
('Miércoles', '20:00', 1);

