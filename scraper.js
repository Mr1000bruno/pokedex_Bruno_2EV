const puppeteer = require('puppeteer');
const pokedex = require('./pokedex.json'); // Importar el JSON de la Pokédex

async function scrapePokemonInfo(searchType, query) {
    let pokemon;

    if (searchType === 'name') {
        // Buscar el Pokémon por nombre en el JSON
        pokemon = pokedex.find(p => p.name.english.toLowerCase() === query.toLowerCase());
        if (!pokemon) {
            throw new Error(`No se encontró un Pokémon con el nombre "${query}".`);
        }
    } else if (searchType === 'number') {
        // Buscar el Pokémon por número en el JSON
        pokemon = pokedex.find(p => p.id === parseInt(query));
        if (!pokemon) {
            throw new Error(`No se encontró un Pokémon con el número "${query}".`);
        }
    } else {
        throw new Error('Tipo de búsqueda no válido');
    }

    // Construir la URL con el número de la Pokédex
    const pokedexNumber = pokemon.id.toString().padStart(3, '0');
    const url = `https://www.serebii.net/pokedex-xy/${pokedexNumber}.shtml`;

    // console.log("Estoy en: " + url);

    const browser = await puppeteer.launch();
    const page = await browser.newPage();
    await page.goto(url);

    // Extraer el nombre del Pokémon
    const pokemonName = await page.evaluate(() => {
        try {
            const nameElement = document.querySelector('#rbar > table:nth-child(4) > tbody > tr:nth-child(2) > td:nth-child(1)');
            if (nameElement) {
                return nameElement.innerText.trim(); // Obtener el texto y eliminar espacios en blanco
            }
            return null;
        } catch (error) {
            return null;
        }
    });

    // Extraer el tipo del Pokémon (maneja Pokémon con uno o dos tipos)
    const pokemonType = await page.evaluate(() => {
        try {
            const typeElements = document.querySelectorAll('#rbar > table:nth-child(5) > tbody > tr:nth-child(2) > td:nth-child(2) a img');
            if (typeElements.length > 0) {
                // Obtener los tipos a partir de las URLs de las imágenes
                const types = Array.from(typeElements).map(img => {
                    const imageUrl = img.src; // Obtener la URL de la imagen
                    return imageUrl.split('/').pop().replace('.gif', ''); // Extraer el tipo
                });
                return types.join(' / '); // Unir los tipos con una barra
            }
            return null;
        } catch (error) {
            return null;
        }
    });

    // Extraer la imagen del Pokémon
    const pokemonImage = await page.evaluate(() => {
        try {
            const imageElement = document.querySelector('#rbar > table.art > tbody > tr > td > img');
            if (imageElement) {
                return imageElement.src; // Obtener la URL de la imagen
            }
            return null;
        } catch (error) {
            return null;
        }
    });

    await browser.close();

    if (!pokemonName || !pokemonType || !pokemonImage) {
        throw new Error('No se pudo obtener la información del Pokémon.');
    }

    return { 
        name: pokemonName, 
        types: pokemonType, 
        number: pokemon.id, // Añadimos el número de la Pokédex
        image: pokemonImage 
    };
}

module.exports = { scrapePokemonInfo };