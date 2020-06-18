/m/
let texto = 'Lorem in ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 17 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 17 velit esse cillu19m dolore eu fugiat nulla pariatur. Ex7cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

let regex = /m/;
console.log(texto.match(regex));
regex = /m/g;
console.log(texto.match(regex));
regex = /\w/; // Get letters
console.log(texto.match(regex)[0]);
regex = /\w\w\w/; // Pega palavra com 3 caracteres 
console.log(texto.match(regex)[0]);
regex = /\w/g;
console.log(texto.match(regex));
regex = /sit/;
console.log(texto.match(regex));
regex = /\d/; // Get number
console.log(texto.match(regex)[0]);
regex = /\d/g; // Get number
console.log(texto.match(regex));
regex = /\d\d/; // Get number
console.log(texto.match(regex));
regex = /(id)|(in)/;
console.log(texto.match(regex));
regex = /[0-9A-Z]/g;  
console.log(texto.match(regex));

console.log(texto.replace(/(in)/g, 'DI'));
console.log(texto.replace(/(i)(n)/g, '--$1$2--'));
console.log(texto.replace(/(i)(n)/g, ( t, f, l) =>{
    return (f+l).toUpperCase();
}));

regex = /\s/g; //espaço em branco, tab ou quebra de linha
console.log(texto.match(regex));

regex = /\n/g; //quebra de linha
console.log(texto.match(regex));

regex = /\t/g;
console.log(texto.match(regex));


regex = /./g; // não da match em quebra de linha
console.log(texto.match(regex));

regex =/ \s\w\w\s/;
console.log(texto.match(regex));


regex =/ ^\s\w\w\s/; // negação
console.log(texto.match(regex));

regex =/ \W/; // negação 
console.log(texto.match(regex));

regex =/ \D/; // negação 
console.log(texto.match(regex));

regex =/ \S/; // negação 
console.log(texto.match(regex));

regex =/ \S\s/; // pegar todos caracteres de uma texto
console.log(texto.match(regex));    

regex =/ \d{2,4}/; // repetidor de intervalo número entre 2 e 4 caracteres  
console.log(texto.match(regex));   

regex =/ \d{2,}/; // repetidor de intervalo aberto começando com 2   
console.log(texto.match(regex));   

regex =/ \d{2}/; // extamente n vezez  
console.log(texto.match(regex));   

regex =/ \d\d\d?/; // ou \d\d\d{0,1}  
console.log(texto.match(regex));   

regex =/ \s\d{2}\s?/; // pegando somente numero com x digitos ex: 1112 12 só da match com 12
console.log(texto.match(regex));  

regex =/\w+/; 
console.log(texto.match(regex));  

regex =/\w*/; 
console.log(texto.match(regex)); 

//validando urls
regex = /https?:\/\/\w+[.\w]+/;

//validando emails
regex = /[\w.+]+@\w+\.\w+.?(\w)?/;

//pegando elementos 
regex = /[?&](\w+)=(\w+)/g; 
let teste = "nome";
teste.replace(regex, (regex, key, value)=>{
    console.log(key, value);
});


