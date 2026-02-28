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
			return "Infantil";
		} else if (this.idade >= 12 && this.idade <= 13) {
			return "Juvenil";
		} else if (this.idade >= 14 && this.idade <= 15) {
			return "Intermediário";
		} else if (this.idade >= 16 && this.idade <= 30) {
			return "Adulto";
		} else {
			return "Sem categoria";
		}
	}

	calculaIMC(){
		return this.peso / (this.altura * this.altura);
	}

	calculaMediaValida() {
		let soma = 0;
		let menor = this.notas[0];
		let maior = this.notas[0];

		for (let i = 0; i < this.notas.length; i++) {
			let nota = this.notas[i];

			soma += nota;

			if (nota < menor) {
				menor = nota;
			}

			if (nota > maior) {
				maior = nota;
			}
		}

		return (soma - menor - maior) / (this.notas.length - 2);
	}

	obtemNomeAtleta(){
		return this.nome;
	}

	obtemIdadeAtleta(){
		return this.idade;
	}

	obtemPesoAtleta(){
		return this.peso;
	}

	obtemNotasAtleta(){
		return this.notas;
	}

	obtemCategoria(){
		return this.calculaCategoria();
	}

	obtemIMC(){
		return this.calculaIMC();
	}

	obtemMediaValida(){
		return this.calculaMediaValida();
	}

	exibirDados(){
		console.log(`Nome: ${this.obtemNomeAtleta()}`);
		console.log(`Idade: ${this.obtemIdadeAtleta()}`);
		console.log(`Peso: ${this.obtemPesoAtleta()}`);
		console.log(`Altura: ${this.altura}`);
		console.log(`Notas: ${this.obtemNotasAtleta()}`);
		console.log(`Categoria: ${this.obtemCategoria()}`);
		console.log(`IMC: ${this.obtemIMC()}`);
		console.log(`Média Válida: ${this.obtemMediaValida()}`);
	}
}

const atleta = new Atleta("Cesar Abascal", 30, 80, 1.70, [10, 9.34, 8.42, 10, 7.88]);

atleta.exibirDados();
