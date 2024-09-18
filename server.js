const img = document.querySelector('div > img');
const altura = document.getElementById('altura');
const pokename = document.getElementById('pokemon-name');
const h2 = document.querySelector('h2');
const peso = document.getElementById('peso');
const tipo = document.getElementById('tipo');
const btn_pokename = document.querySelector('#btn_pokename');
const ant = document.querySelectorAll('span')[0];
const prox = document.querySelectorAll('span')[1];
const pokemonInfo = document.getElementById('pokemon-info');
const container = document.querySelector('#container');
let pokemonId = 1;

function mudar_fundo(valor){
    fetch(`https://pokeapi.co/api/v2/pokemon-species/${valor}/`, {
        method: 'GET'
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        if(data.color.name == 'black'){
            container.style.color = 'white';
        }else{
            container.style.color = 'black';
        }
        pokemonInfo.style.backgroundColor = data.color.name
    })
    .catch(()=>{
        alert('Algo deu errado!')
    })
}

function buscar_pokemon(valor){
    fetch(`https://pokeapi.co/api/v2/pokemon/${valor}/`, {
        method: 'GET'
    })
    .then((res)=>{
        return res.json()
    })
    .then((data)=>{
        pokemonId = data.id
        h2.innerHTML = data.name
        img.src = data.sprites.front_default
        altura.value = data.height
        peso.value = data.weight
        tipo.value = data.types.map(t => t.type.name).join(', ')
        mudar_fundo(valor)
    })
}

btn_pokename.addEventListener('click', ()=>{
    buscar_pokemon(pokename.value);
})


ant.addEventListener('click', ()=>{
    buscar_pokemon(pokemonId - 1);
    
})

prox.addEventListener('click', ()=>{
    buscar_pokemon(pokemonId + 1);
})

buscar_pokemon(pokemonId)

