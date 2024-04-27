// Código JavaScript de la página de detalle del robot

import { robots } from "./robots.js";

// Función para generar HTML con la información detallada del robot
const generateRobotDetailHTML = (robot) => {
    return `
    <div id="robotDetailContainer" class="container">
    <div class="robot-details">
        <img src="${robot.avatar}" alt="${robot.name}" class="robot-image">
        <div class="robot-info">
            <h1 class="robot-name">${robot.name}</h1>
            <p class="robot-id"><strong>ID:</strong> ${robot.id}</p>
            <p class="robot-weapon"><strong>Weapon:</strong> ${robot.weapon}</p>
        </div>
    </div>
</div>
    `;
};

// Función para obtener el ID del robot de la URL
const getRobotIdFromUrl = () => {
    const params = new URLSearchParams(window.location.search);
    return params.get('id');
};

// Obtener el ID del robot de la URL
const robotId = getRobotIdFromUrl();

// Obtener la información del robot por su ID
const getRobotById = (id) => {
    const robot = robots.find(robot => robot.id === id);
    return robot;
};

// Cargar la información del robot por su ID
const robot = getRobotById(robotId);

// Generar HTML con la información detallada del robot y mostrarlo en el contenedor
const robotDetailContainer = document.getElementById("robotDetailContainer");
if (robot) {
    robotDetailContainer.innerHTML = generateRobotDetailHTML(robot);
} else {
    robotDetailContainer.innerHTML = "<p>Robot not found.</p>";
}
