
let nombre = document.getElementById('txtNombre')

let myform = document.forms[0]
// let buscar = myform['btnbuscar']
console.log(myform)
console.log(nombre)
async function pockedex(pockeName) {
	const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pockeName}`);
	const pockemon = await response.json();
	console.log(pockemon);
}

pockedex('pikachu')

windows.onload(){
    let myform = document.forms[0]
    console.log(myform)
}