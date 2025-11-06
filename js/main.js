const productos = [
  { nombre: "Artesanía de barro", precio: 100000, imagen: "img/artesania.jpg" },
  { nombre: "Sombrero vueltiao", precio: 260000, imagen: "img/sombrero.jpg" },
  { nombre: "Bolso Wayuu", precio: 120000, imagen: "img/wayu.jgp.webp" },
  { nombre: "Pulsera tejida", precio: 30000, imagen: "img/pulsera.jpg" },
  { nombre: "Mochila Arhuaca", precio: 180000, imagen: "img/mochila.jpeg" },
  { nombre: "Collar artesanal", precio: 70000, imagen: "img/collar.jpeg" },
];

const contenedor = document.getElementById("lista-productos");

productos.forEach(p => {
    // Array para guardar los productos agregados
let carrito = [];

// Escuchamos los clics en los botones
document.addEventListener("click", e => {
  if (e.target.classList.contains("btn-agregar")) {
    const nombreProducto = e.target.getAttribute("data-id");
    const productoSeleccionado = productos.find(p => p.nombre === nombreProducto);

    // Agregar producto al carrito
    carrito.push(productoSeleccionado);

    // Guardar en localStorage (para mantenerlo si recargas la página)
    localStorage.setItem("carrito", JSON.stringify(carrito));

    // Mostrar confirmación visual
    // Mostrar mensaje flotante sin alert()
const mensaje = document.getElementById("mensaje-carrito");
const texto = document.getElementById("texto-mensaje");
texto.textContent = `✅ ${productoSeleccionado.nombre} agregado al carrito`;
mensaje.style.display = "block";

// Ocultar automáticamente después de 2 segundos
setTimeout(() => {
  mensaje.style.display = "none";
}, 2000);
  }
});
  const card = document.createElement("div");
  card.classList.add("col-md-4", "mb-4");
  card.innerHTML = `
    <div class="card h-100">
      <img src="${p.imagen}" class="card-img-top" alt="${p.nombre}">
      <div class="card-body text-center">
        <h5 class="card-title">${p.nombre}</h5>
        <p class="card-text">$${p.precio.toLocaleString("es-CO")}</p>
        <button class="btn btn-primary btn-agregar" data-id="${p.nombre}">Agregar al carrito</button>
      </div>
    </div>
  `;
  contenedor.appendChild(card);
});