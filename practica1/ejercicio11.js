function mensaje1(callback) {
    return new Promise(resolve => {
        console.log("mensaje 1");
        resolve();
    });
}
function mensaje2(callback) {
    return new Promise(resolve => {
        console.log("mensaje 2");
        resolve();
    });
}
async function ejecutalosMensajes() {
  await mensaje1();
  await mensaje2();
  console.log("todos los mensajes con asyncy/await");
}
ejecutalosMensajes();
