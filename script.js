const insertPokemonPidgeott = () =>  fetch('https://pokeapi.co/api/v2/pokemon/')
  .then((res) => res.json())
  .then((data) => {
  const pokemonPidgeott = data.results
    .filter(pokemon => pokemon.name === 'pidgeotto')[0]
    
    console.log(pokemonPidgeott.name)
    const pokeDiv = document.querySelector('#root')
    const headding = document.createElement('h1')
    headding.innerHTML = pokemonPidgeott.name
    headding.style.marginBottom = '60px'
    pokeDiv.appendChild(headding)

    fetch(pokemonPidgeott.url)
      .then(resPokemon => resPokemon.json())
      .then(dataPokemon=> {
        console.log(dataPokemon.sprites.front_default)
        const pokeIMG = document.createElement('img')
        pokeIMG.src = dataPokemon.sprites.front_default
        pokeIMG.addEventListener('mousedown', () => pokeIMG.src = dataPokemon.sprites.back_default)
        pokeIMG.addEventListener('mouseup', () => pokeIMG.src = dataPokemon.sprites.front_default)
        pokeIMG.style.scale = 2
        pokeDiv.appendChild(pokeIMG)

        const paragrathClick = document.createElement('p')
        paragrathClick.innerHTML = 'click on the image'
        paragrathClick.style.marginTop = '60px'
        pokeDiv.appendChild(paragrathClick)
      })
  })

  insertPokemonPidgeott()

