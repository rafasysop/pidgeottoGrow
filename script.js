const callPokemons = () =>  fetch('https://pokeapi.co/api/v2/pokemon/')
  .then((res) => res.json())
  .then((data) => {
  const pokemonsURL = data.results.filter(pokemon => pokemon.name === 'pidgeotto')[0]
  console.log(pokemonsURL.name)
  const pokeDiv = document.querySelector('#root')
  const headding = document.createElement('h1')
  headding.innerHTML = pokemonsURL.name
  headding.style.marginBottom = '60px'
  pokeDiv.appendChild(headding)
  fetch(pokemonsURL.url).then(res2 => res2.json())
    .then(data2=> {
      console.log(data2.sprites.front_default)
      const pokeIMG = document.createElement('img')
      pokeIMG.src = data2.sprites.front_default
      pokeIMG.style.scale = 2
      pokeDiv.appendChild(pokeIMG)
    })
})

callPokemons()

