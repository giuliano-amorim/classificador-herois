const nomeDoHeroi = "Giu";
const levelDoHeroi = 7000;


if (levelDoHeroi <= 1000) {
    console.log(`O herói ${nomeDoHeroi} está no nível ferro.`);
}else if (levelDoHeroi >= 1001 && levelDoHeroi <= 2000){
    console.log(`O herói ${nomeDoHeroi} está no nível bronze.`);
}else if (levelDoHeroi >= 2001 && levelDoHeroi <= 6000){
    console.log(`O herói ${nomeDoHeroi} está no nível prata.`);
}else if (levelDoHeroi >= 6001 && levelDoHeroi <= 7000){
    console.log(`O herói ${nomeDoHeroi} está no nível ouro.`);
}else if (levelDoHeroi >= 7001 && levelDoHeroi <= 8000){
    console.log(`O herói ${nomeDoHeroi} está no nível platina.`);
}else if (levelDoHeroi >= 8001 && levelDoHeroi <= 9000){
    console.log(`O herói ${nomeDoHeroi} está no nível ascendente.`);
}else if (levelDoHeroi >= 9001 && levelDoHeroi <= 10000){
    console.log(`O herói ${nomeDoHeroi} está no nível imortal.`);
}else if (levelDoHeroi >= 10001){
    console.log(`O herói ${nomeDoHeroi} está no nível radiante.`);
}else{
    console.log("Seu herói está no submundo");
}
