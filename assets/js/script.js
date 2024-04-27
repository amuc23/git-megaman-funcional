import { robots } from "./robots.js";

// Función para generar HTML para una sola tarjeta de robot
const generateRobotCard = (robot) => {
    return `
        <div class="card col-md-3 mb-3">
            <div class="card-body">
                <h5 class="card-title">${robot.name}</h5>
                <p class="card-text">Weapon: ${robot.weapon}</p>
                <img src="${robot.avatar}" class="card-img-top" alt="${robot.name}" style="max-width: 100%; height: auto;">
                <button class="btn btn-primary btn-action" data-id="${robot.id}">Detalle</button>
            </div>
        </div>
    `;
};

// Función para renderizar robots según la búsqueda por ID
const renderRobotsById = (id) => {
    const filteredRobots = robots.filter((robot) => robot.id.includes(id));
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = ""; // Limpiar el contenedor
    filteredRobots.forEach((robot) => {
        const cardHTML = generateRobotCard(robot);
        contenedor.innerHTML += cardHTML;
    });

    // Restablecer el evento de escucha para los botones de acción
    contenedor.querySelectorAll(".btn-action").forEach((button) => {
        button.addEventListener("click", (event) => {
            const robotId = event.target.dataset.id;
            // Redireccionar a la página de detalle del robot seleccionado con el ID del robot como parámetro en la URL
            window.location.href = `robot.html?id=${robotId}`;
        });
    });
};

// Obtener referencia al campo de entrada de búsqueda
const searchInput = document.getElementById("searchInput");

// Agregar un evento de escucha al campo de entrada para filtrar los robots mientras el usuario escribe
searchInput.addEventListener("input", (event) => {
    const searchText = event.target.value.trim(); // Obtener el texto ingresado y eliminar espacios en blanco al inicio y al final
    renderRobotsById(searchText); // Llamar a la función de renderizado con el texto de búsqueda
});

// Representación inicial de todos los robots
// Llama a `renderRobotsById` con una cadena vacía para mostrar todos los robots
renderRobotsById("");
