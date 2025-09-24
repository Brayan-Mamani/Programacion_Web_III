const numeroMayorMenor= (a) => {
    let mayor = a[0];
    let menor = a[0];
    for (let i = 1; i < a.length; i++) {
        if (a[i] > mayor) {
            mayor = a[i];
        }
        if (a[i] < menor) {
            menor = a[i];
        }
    }
    return {
        mayor: mayor,
        menor: menor
    };
};
const a = [10, 5, 3, 20, 8];
console.log(numeroMayorMenor(a));

