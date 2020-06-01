/m/
let texto = 'Lorem in ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 17 incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate 17 velit esse cillu19m dolore eu fugiat nulla pariatur. Ex7cepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

let regex = /m/;
console.log(texto.match(regex));
regex = /m/g;
console.log(texto.match(regex));
regex = /\w/; // Get letters
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