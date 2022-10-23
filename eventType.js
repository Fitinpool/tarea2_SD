import avro from 'avsc'

export const miembro = avro.Type.forSchema({
    type : 'record',
    fields : [
        {
            name : 'nombre', 
            type : 'string'
        },
        {
            name : 'apellido', 
            type : 'string'
        },
        {
            name : 'rut', 
            type : 'string'
        },
        {
            name : 'correoDueno', 
            type : 'string'
        },
        {
            name : 'patenteCarrito', 
            type : 'string'
        },
        {
            name : 'registro', 
            type : 'string'
        }
    ]
})