
// https://pokeapi.co/api/v2/pokemon/ditto

let data = {};

const getMon = async() => {
    const respond = await fetch('https://pokeapi.co/api/v2/pokemon/ditto');
    const data = await respond.json();
    const myImg = data.sprites.front_default;
    return myImg;
}

const getPokemon = async() => {
    //console.log('hi');
    let myPokemon = await getMon();
    console.log(myPokemon);
    const screen = document.getElementsByTagName('body')[0];
    let imgElement = document.createElement('img');
    imgElement.src = myPokemon;
    screen.appendChild(imgElement);
}

const myButton = document.getElementsByTagName('button')[0];
console.log(myButton);
myButton.addEventListener('click', getPokemon);
