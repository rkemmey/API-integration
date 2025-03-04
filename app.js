
// https://pokeapi.co/api/v2/pokemon/ditto

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1) + min);
  }


const getMon = async(num) => {
    const respond = await fetch('https://pokeapi.co/api/v2/pokemon/'+num);
    const data = await respond.json();
    const myImg = data.sprites.front_default;
    return myImg;
}

const getPokemon = async() => {
    //console.log('hi');
    const randomNumber = getRandomIntInclusive(1, 151);   // gets a random number
    let myPokemon = await getMon(randomNumber);
    console.log(myPokemon);
    const screen = document.getElementsByTagName('body')[0];
    let imgElement = document.createElement('img');
    imgElement.src = myPokemon;
    screen.appendChild(imgElement);
}

const myButton = document.getElementsByTagName('button')[0];
console.log(myButton);
myButton.addEventListener('click', getPokemon);
