class Atleta {
	constructor(nome, idade, peso, altura, notas){
		this.nome = nome;
		this.idade = idade;
		this.peso = peso;
		this.altura = altura;
		this.notas = notas; 
	}

	calculaCategoria(){
		if (this.idade >= 9 && this.idade <= 11) {
			console.log("Infantil");
		} else if (this.idade >= 12 && this.idade <= 13) {
			consoleg.log("Juvenil");
		} else if (this.idade >= 14 && this.idade <= 15) {
			console.log("Intermediário");
		} else if (this.idade >= 16 && this.idade <= 30) {
			console.log("Adulto");
		} else {
			console.log("Sem categoria");
		}
	}

	calculaIMC(){

	}

	calculaMediaValida(){
		let soma = this.notas.reduce((total, nota) => notas + nota,0)
		return soma / this.notas.length
	}

	obtemNomeAtleta(){

	}

	obtemCategoria(){

	}

	obtemIMC(){

	}

	obtemMediaValida(){

	}

	exibirDados(){
		console.log(`Nome: ${this.nome}`);
		console.log(`Idade: ${this.idade}`);
		console.log(`Peso: ${this.peso}`);
		console.log(`Altura: ${this.altura}`);
		console.log(`Notas: ${this.notas}`)
		console.log(`Categoria: ${this.categoria}`);
		console.log(`IMC: ${this.imc}`)
		console.log(`Média Válida: ${this.mediaval}`)
	}
}

const atleta = new Atleta("Cesar Abascal",30, 80, 1.70,[10, 9.34, 8.42, 10, 7.88]);

console.log(atleta.exibirDados());