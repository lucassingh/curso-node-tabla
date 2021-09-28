const fs = require('fs'); //fs = file system
const colors = require('colors');
const crearArchivo = async(base = 5, listar = false, hasta = 10) => {

    try {
        
        let salida = '';

        for(let i = 1; i <= hasta; i++){
            salida += `${ base } x ${ i } = ${ base * i } \n` 
        }
        
        if(listar) {
            console.log('==============='.green);
            console.log(`tabla del ${base}`);
            console.log('==============='.green);
            console.log(salida)
        }        

        fs.writeFileSync(`./output/tabla-${base}.txt`, salida)

        return `tabla del ${base} creada`;
    } catch (err) {
        throw err; 
    }    
}

module.exports = {
    crearArchivo
}