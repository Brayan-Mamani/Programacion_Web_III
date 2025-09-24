function sumar(a, b, callback) {
    const resultado = a + b;
    callback(null, resultado);  
}
function sumarPromesa(a, b) {
  return new Promise((resolve, reject) => {
    sumar(a, b, (err, resultado) => {
      if (err) {
        reject(err);
      } else {
        resolve(resultado);
      }
    });
  });
}
sumarPromesa(5, 3)
  .then(resultado => {
    console.log("Resultado:", resultado); 
  })
  .catch(error => {
    console.error("Error:", error);
  });
