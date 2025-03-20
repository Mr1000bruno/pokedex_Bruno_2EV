const { ipcRenderer } = require('electron');

document.getElementById('pokemonForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Evita que el formulario se recargue
    const searchType = document.getElementById('searchType').value; // 'name' o 'number'
    const query = document.getElementById('query').value; // Valor ingresado por el usuario

    // Enviar la búsqueda al proceso principal
    ipcRenderer.send('get-pokemon-info', { searchType, query });

    // Limpiar el campo de búsqueda después de enviar
    document.getElementById('query').value = '';
});

// Recibir la información del Pokémon y mostrarla
ipcRenderer.on('pokemon-info', (event, data) => {
    const resultsDiv = document.getElementById('results');
    if (data.error) {
        resultsDiv.innerHTML = `<p style="color: red;">${data.error}</p>`;
    } else {
        resultsDiv.innerHTML = `
            <div class="pokemon-card">
                <h2>${data.name}</h2>
                <p>Número: ${data.number}</p>
                <p>Tipo(s): ${data.types}</p>
                <img src="${data.image}" alt="${data.name}">
            </div>
        `;
    }
});