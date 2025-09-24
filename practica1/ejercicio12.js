function mensaje1() {
  return new Promise((resolve) => {
      console.log("mensaje 1");
      resolve("hola mundo");
  });
}
function mensaje2(mensaje1) {
  return new Promise((resolve) => {
      console.log("mensaje 2", mensaje1);
      resolve("como estas");
  });
}
async function ejecutarlosMensajes() {
  const a = await mensaje1();
  const b = await mensaje2(a);
  console.log("Todas los mensajes",a,b);
}
ejecutarlosMensajes();
