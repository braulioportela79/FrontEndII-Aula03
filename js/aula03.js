// FOR... IN

// let usuario = {
//     nome: 'Marcos',
//     idade: 24,
//     endereco: {
//         cidade: 'São Borja',
//         uf: 'RS'
//     }
// };

// for (let objeto in usuario) {
//     console.log(usuario[objeto])
// };

// FOR... OF

let frutas = ['Maçã', 'Pera', 'Limão'];

frutas.push('Morango');

for (let items of frutas) {
    console.log(items);
};

frutas.map((e) => {
    console.log(e)
});

let novaFruta = frutas.map((e) => {
    return e.toLocaleUpperCase();
});
console.log(novaFruta)

frutas.forEach(function (fruta) {
    console.log(fruta);
});

frutas.forEach(fruta => console.log(fruta));
