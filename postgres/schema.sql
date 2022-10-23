
CREATE TABLE IF NOT EXISTS miembros(
	id serial PRIMARY KEY,
	nombre VARCHAR ( 255 ),
	apellido VARCHAR ( 255 ),
	rut VARCHAR ( 255 ),
	correoDueno VARCHAR ( 255 ),
    patenteCarrito VARCHAR ( 255 ),
    registro VARCHAR ( 255 )
);
