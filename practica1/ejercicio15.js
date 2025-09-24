function mensajeAwit() {
  return new Promise((resolve, reject) => {
      resolve("hola mundo");
  });
}
async function mostrarMensaje() {
  try {
    const mensaje = await mensajeAwit();
    console.log("el mensaje es:", mensaje);
  } catch (error) {
    console.error("Error:", error);
  }
}
mostrarMensaje();
