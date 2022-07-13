const cardsUL = document.querySelector(".cards");

for (let i = 0; i < data.length; i++) {
  // console.log("Pokemon at i", data[i]);
  const pokemon = data[i];
  const cardLI = document.createElement('li')
  cardLI.classList.add('card')
  cardLI.style.listStyleType = 'none'

  
  const h2 = document.createElement("h2");
  h2.innerText = pokemon.name;
  h2.classList.add('card--title')

  const img = document.createElement('img')
  img.setAttribute('src', pokemon.sprites.other['official-artwork'].front_default)
  cardLI.appendChild(img)
  cardsUL.append(cardLI)
  cardLI.appendChild(h2)

  // nested for loop for card data
  for (let j = 0; j < data[i].stats.length; j++) {
    const pokemon = document.createElement('li')
    cardLI.append(pokemon)
    pokemon.style.textTransform = 'upperCase'
    pokemon.style.listStyleType = 'none'
    pokemon.innerText = data[i].stats[j].stat.name + ' ' + data[i].stats[j].base_stat 
  }

}





// const cardLI = document.createElement('li')
// add CSS class
// cardLI.classList.add('card')


// create heading
//const title = document.createElement('h2')
// add CSS class
//title.classList.add('card--title')

// set the text
// title.innerText = pokemon.name

// add the title into the card
//cardLI.append(title)






