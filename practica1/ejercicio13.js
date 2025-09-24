function obtenerDato() {
  return new Promise((resolve, reject) => {
      resolve("Hola mundo");
  });
}
function obtenerDatoConCallback(callback) {
  obtenerDato()
    .then(resultado => callback(null, resultado))  
    .catch(error => callback(error));              
}
obtenerDatoConCallback((err, dato) => {
  if (err) {
    console.error("error en el mensaje:", err);
  } else {
    console.log("exito el mensaje es :", dato);
  }
});

