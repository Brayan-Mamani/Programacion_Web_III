function invertirPalabra(palabra){
    let nuevaPalabra="";
    for(let i =palabra.length-1;i>=0;i--){
        nuevaPalabra+=palabra[i];
    }
    return nuevaPalabra
}

console.log(invertirPalabra("abcd"));