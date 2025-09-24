function contarVocales(cadena){
    let vocal={};
     for (let letra of cadena){
        if("aeiou".includes(letra)){
            if (vocal[letra]){
                vocal [letra]++;
            }else{
                vocal[letra]=1;
            }
        }
    }
    return vocal;
}
let a = "euforia";
let resultado=contarVocales(a);
console.log(a);
for (let letra in resultado){
    console.log(`${letra}: ${resultado[letra]}`);
}