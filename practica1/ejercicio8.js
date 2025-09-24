
function miFuncion(callback1){

    return callback1;    
}
console.log(miFuncion("hola mundo este es un mensaje de 2 seg."));
setTimeout(miFuncion, 2000);