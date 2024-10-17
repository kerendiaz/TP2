fetch('personajes.json')
    .then(response => {
        if (!response.ok) {
            throw new Error('Error al cargar el archivo JSON');
        }
        return response.json();
    })
    .then(data => {
        const searchInput = document.getElementById('searchInput');
        const resultContainer = document.getElementById('resultContainer');

        
        mostrarPersonajes(data);

        
        searchInput.addEventListener('input', () => {
            const searchValue = searchInput.value.toLowerCase();
            const personajesFiltrados = data.filter(personaje =>
                personaje.nombre.toLowerCase().includes(searchValue) ||
                personaje.casa.toLowerCase().includes(searchValue)
            );
            mostrarPersonajes(personajesFiltrados);
        });

        function mostrarPersonajes(personajes) {
            resultContainer.innerHTML = ''; 
            personajes.forEach(personaje => {
                const div = document.createElement('div');
                div.classList.add('personaje-card', 'col-md-4', 'mb-4'); 
                div.innerHTML = `
                    <div class="card">
                        <img src="${personaje.imagen}" alt="${personaje.nombre}" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title">${personaje.nombre}</h5>
                            <p class="card-text">Casa: ${personaje.casa}</p>
                            <a href="info.html?id=${personaje.id}" class="btn btn-primary">Ver Más</a>
                        </div>
                    </div>
                `;
                resultContainer.appendChild(div);
            });
        }
        
        
        
    })
    .catch(error => {
        console.error('Error:', error);
    });
