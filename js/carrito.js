const lista = document.getElementById('lista-carrito');
const total = document.getElementById('total');

let carrito = JSON.parse(localStorage.getItem('carrito')) || [];

function mostrarCarrito() {
  lista.innerHTML = '';
  let totalCompra = 0;

  carrito.forEach((item, index) => {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'd-flex', 'justify-content-between');
    li.innerHTML = `
      ${item.nombre} - $${item.precio}
      <button class="btn btn-danger btn-sm" onclick="eliminar(${index})">X</button>
    `;
    lista.appendChild(li);
    totalCompra += item.precio;
  });

  total.textContent = `Total: $${totalCompra}`;
}

function eliminar(index) {
  carrito.splice(index, 1);
  localStorage.setItem('carrito', JSON.stringify(carrito));
  mostrarCarrito();
}

mostrarCarrito();