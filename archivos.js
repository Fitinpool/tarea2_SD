import fs from 'fs'

export async function leerArchivo(dir, callback)
{
    await fs.readFile(dir, (err, data) => {
        if(err){
            console.log('error')
        }
        else{
            callback(data)
        }
    })
}

export async function escribirArchivo(dir, data, callback)
{
    await leerArchivo(dir, (res) => {
        data += '\n' + res
        fs.writeFile(dir, data, (err) => {
            if(err){
                console.log('error')
            }
            else{
                callback('Dato introducido.')
            }
        })
    })
}