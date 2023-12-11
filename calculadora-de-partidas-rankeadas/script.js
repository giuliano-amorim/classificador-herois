const res = ranking(70,10)

if (res <= 10) {
    console.log(`O Herói tem saldo de ${res} vitórias, e está no nível ferro.`);
}else if (res >= 11 && res <= 20){
    console.log(`O Herói tem saldo de ${res} vitórias, e está no nível bronze.`);
}else if (res >= 21 && res <= 50){
    console.log(`O Herói tem saldo de ${res} vitórias, e está no nível prata.`);
}else if (res >= 51 && res <= 80){
    console.log(`O Herói tem saldo de ${res} vitórias, e está no nível ouro.`);
}else if (res >= 81 && res <= 90){
    console.log(`O Herói tem saldo de ${res} vitórias, e está no nível diamante.`);
}else if (res >= 91 && res <= 100){
    console.log(`O Herói tem saldo de ${res} vitórias, e está no nível lendario.`);
}else if (res >= 101){
    console.log(`O Herói tem saldo de ${res} vitórias, e está no nível imortal.`);
}else{
    console.log("Seu herói está no submundo.");
}

function ranking(qtdVitorias, qtdDerrotas) {
    let saldo = qtdVitorias-qtdDerrotas;
    return saldo
}
