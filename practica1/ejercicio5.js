const miFuncion = (cadena) => {
    let a = cadena.length;
    for (let i = 0; i < Math.floor(a/ 2); i++) {
        if (cadena[i] !== cadena[a- 1 - i]) {
            return false;
        }
    }
    return true;
};
let band = miFuncion("hola");
console.log(band);
