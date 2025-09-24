const paresImpres = (numeros) => {
    let pares = [];
    let impares = [];
    let a = 0;
    let b = 0;
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares[a] = numeros[i];
            a++;
        } else {
            impares[b] = numeros[i];
            b++;
        }
    }
    return {
        pares: pares,
        impares: impares
    };
};
const numeros = [1, 2, 3, 4, 5];
console.log(paresImpres(numeros));

