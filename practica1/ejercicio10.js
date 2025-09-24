new Promise((resolve, reject) => {
  resolve("mensaje 1");
})
//para encadenar promesas usamos (.then) 
.then(respuesta => {
  console.log(respuesta);
  return "mensaje 2";
})
.then(respuesta => {
  console.log(respuesta);
  return "mensaje 3";
})
.then(respuesta => {
  console.log(respuesta);
});
