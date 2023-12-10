const nomeDoHeroi = "Giu";
const levelDoHeroi = 1523;


if (levelDoHeroi <= 1000) {
    console.log(`O herói ${nomeDoHeroi} está no nível ferro.`);
}else if (1001 <= levelDoHeroi <= 2000){
    console.log(`O herói ${nomeDoHeroi} está no nível bronze.`);
}else if (2001 <= levelDoHeroi <= 6000){
    console.log(`O herói ${nomeDoHeroi} está no nível prata.`);
}else if (6001 <= levelDoHeroi <= 7000){
    console.log(`O herói ${nomeDoHeroi} está no nível ouro.`);
}else if (7001 <= levelDoHeroi <= 8000){
    console.log(`O herói ${nomeDoHeroi} está no nível platina.`);
}else if (8001 <= levelDoHeroi <= 9000){
    console.log(`O herói ${nomeDoHeroi} está no nível ascendente.`);
}else if (9001 <= levelDoHeroi <= 10000){
    console.log(`O herói ${nomeDoHeroi} está no nível imortal.`);
}else if (levelDoHeroi >= 10001){
    console.log(`O herói ${nomeDoHeroi} está no nível radiante.`);
}else{
    console.log("Seu herói está no submundo");
}
