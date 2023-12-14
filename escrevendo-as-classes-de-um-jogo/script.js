class heroi{
    constructor(nome, idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    ataque(){
        let atacar;
        switch (this.tipo) {
            case "mago":
                atacar = "magia";
                break;
            case "guerreiro":
                atacar = "espada";
                break;
            case "monge":
                atacar = "artes marciais";
                break;
            case "ninja":
                atacar = "shuriken";
                break;
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${atacar}.`)
    }
}

let magoSupremo = new heroi("Gandalf", 87, "mago");
let guerreiroSupremo = new heroi("Conan", 47, "guerreiro");
let mongeSupremo = new heroi("Samaritano", 67, "monge");
let ninjaSupremo = new heroi("JunSanLee", 37, "ninja");

magoSupremo.ataque();
guerreiroSupremo.ataque();
mongeSupremo.ataque();
ninjaSupremo.ataque();

