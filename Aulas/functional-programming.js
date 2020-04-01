function nomeCompleto(name) {
  function lastName(last) {
    return console.log(`O nome completo é: ${name + " " + last}`);
  }
  return lastName;
}

nomeCompleto("Natan")("Bispo");

//

function fristFuncion(func) {
  return func();
}

fristFuncion(() => console.log("Segunda Função"));