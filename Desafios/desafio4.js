/*
Declare uma variável chamada `isTruthy`, e atribua a ela uma função que recebe
um único parâmetro como argumento. Essa função deve retornar `true` se o
equivalente booleano para o valor passado no argumento for `true`, ou `false`
para o contrário.
*/
const isTruthy = (arg) => {
    return console.log(!!arg);
}

// Invoque a função criada acima, passando todos os tipos de valores `falsy`.
isTruthy(false);
isTruthy(0);
isTruthy(-0);
isTruthy('');
isTruthy("");
isTruthy(null);
isTruthy(undefined);

/*
Invoque a função criada acima passando como parâmetro 10 valores `truthy`.
*/
isTruthy('string');
isTruthy(1.2);
isTruthy(-1.2);
isTruthy({});
isTruthy(Infinity);
isTruthy([]);
isTruthy(function() {});
isTruthy(-Infinity);
isTruthy(true)
isTruthy(0);


/*
Declare uma variável chamada `carro`, atribuindo à ela um objeto com as
seguintes propriedades (os valores devem ser do tipo mostrado abaixo):
- `marca` - String
- `modelo` - String
- `placa` - String
- `ano` - Number
- `cor` - String
- `quantasPortas` - Number
- `assentos` - Number - cinco por padrão
- `quantidadePessoas` - Number - zero por padrão
*/
const carro ={
    marca: 'GOLF',
    modelo: 'GTI',
    placa: 'ntn-0455',
    ano: 2000,
    cor: 'Branco', 
    quantasPortas: 2,
    assentos: 5,
    quantidadePessoas: 0
}

/*
Crie um método chamado `mudarCor` que mude a cor do carro conforme a cor
passado por parâmetro.
*/
carro.mudarCor = (newColor) => {
    return carro.cor = newColor;
}

/*
Crie um método chamado `obterCor`, que retorne a cor do carro.
*/
carro.obterCor = () => {
    return carro.cor;
}

/*
Crie um método chamado `obterModelo` que retorne o modelo do carro.
*/
carro.obterModelo = () => {
    return carro.modelo;
}

/*
Crie um método chamado `obterMarca` que retorne a marca do carro.
*/
carro.obterMarca = () => {
    return carro.marca;
}

/*
Crie um método chamado `obterMarcaModelo`, que retorne:
"Esse carro é um [MARCA] [MODELO]"
Para retornar os valores de marca e modelo, utilize os métodos criados.
*/
carro.obterMarcaModelo = () => {
    return `Esse carro é ${carro.obterMarca()} ${carro.obterModelo()}`
}

/*
Crie um método que irá adicionar pessoas no carro. Esse método terá as
seguintes características:
- Ele deverá receber por parâmetro o número de pessoas entrarão no carro. Esse
número não precisa encher o carro, você poderá acrescentar as pessoas aos
poucos.
- O método deve retornar a frase: "Já temos [X] pessoas no carro!"
- Se o carro já estiver cheio, com todos os assentos já preenchidos, o método
deve retornar a frase: "O carro já está lotado!"
- Se ainda houverem lugares no carro, mas a quantidade de pessoas passadas por
parâmetro for ultrapassar o limite de assentos do carro, então você deve
mostrar quantos assentos ainda podem ser ocupados, com a frase:
"Só cabem mais [QUANTIDADE_DE_PESSOAS_QUE_CABEM] pessoas!"
- Se couber somente mais uma pessoa, mostrar a palavra "pessoa" no retorno
citado acima, no lugar de "pessoas".
*/
carro.addPessoas = (qtdPessoas) => {
   const qtdNoCarro = carro.quantidadePessoas;
   const qtdDisponivel = carro.assentos - qtdNoCarro;
   if(qtdNoCarro === carro.assentos && (qtdNoCarro + qtdPessoas) >= carro.assentos){
     return 'O Carro já está lotado';
   }
   if (qtdPessoas > qtdDisponivel && qtdNoCarro < 5){
    const pessoa =  qtdDisponivel === 1 ? 'pessoa' : 'pessoas';
    return `Só cabem mais ${qtdDisponivel} ${pessoa}!`
   } 
    
    carro.quantidadePessoas = qtdNoCarro + qtdPessoas;
    return `Já temos ${carro.quantidadePessoas} pessoas no carro!` 
}


/*
Agora vamos verificar algumas informações do carro. Para as respostas abaixo,
utilize sempre o formato de invocação do método (ou chamada da propriedade),
adicionando comentários _inline_ ao lado com o valor retornado, se o método
retornar algum valor.

Qual a cor atual do carro?
*/
carro.obterCor(); 

// Mude a cor do carro para vermelho.
carro.mudarCor('Vermelho');

// E agora, qual a cor do carro?
carro.obterCor(); 

// Mude a cor do carro para verde musgo.
carro.mudarCor('preto');

// E agora, qual a cor do carro?
carro.obterCor();

// Qual a marca e modelo do carro?
carro.obterMarcaModelo(); 

// Adicione 2 pessoas no carro.
carro.addPessoas(2); 

// Adicione mais 4 pessoas no carro.
carro.addPessoas(4); 

// Faça o carro encher.
carro.addPessoas(3); 

// Tire 4 pessoas do carro.
carro.addPessoas(-4); 

// Adicione 10 pessoas no carro.
carro.addPessoas(10); 

// Quantas pessoas temos no carro?
carro.quantidadePessoas; 