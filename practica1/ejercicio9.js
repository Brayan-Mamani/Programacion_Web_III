const promesa=new Promise((resolve,reject)=>{
        resolve("Hola mundo este es un mensaje de 3 seg.")
    setTimeout(()=>{
        resolve();
    },3000);
});

promesa.then((exito)=>{
    console.log(exito);
}).catch((error)=>{
    console.log(error);
});