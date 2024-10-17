fetch("personajes.json")
    .then(res => res.json())
    .then(personajes => {
        crearInfo(personajes);
    })
    .catch(error => console.error("Error al cargar los datos:", error));

function crearInfo(personajes) {
    const queryString = document.location.search;
    const params = new URLSearchParams(queryString);
    const id = params.get("id");

    const personajeBuscado = personajes.find(personaje => personaje.id == id);
    const contenedor = document.getElementById("personaje_info");
    contenedor.classList.add("personaje-info"); 

    if (personajeBuscado) {
        contenedor.innerHTML = `
            <div class="row">
                <div class="col-md-6">
                    <h2>${personajeBuscado.nombre}</h2>
                    <img src="${personajeBuscado.imagen}" alt="${personajeBuscado.nombre}" class="img-fluid">
                </div>
                <div class="col-md-6">
                    <h3>Casa: ${personajeBuscado.casa}</h3>
                    <h3>Altura: ${personajeBuscado.altura}</h3>
                    <h3>Apodo: ${personajeBuscado.apodo}</h3>
                </div>
            </div>`;
    } else {
        contenedor.innerHTML = `<p>Personaje no encontrado</p>`;
    }
}
