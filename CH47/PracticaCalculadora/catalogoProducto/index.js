document.addEventListener('DOMContentLoaded', () => {
    const formProducto = document.getElementById('formProducto');
    const listaProductos = document.getElementById('listaProductos');
    const buscarProducto = document.getElementById('buscarProducto');

    let productos = [];

    // Función para mostrar productos
    function mostrarProductos(productos) {
        listaProductos.innerHTML = '';
        productos.forEach(producto => {
            const col = document.createElement('div');
            col.className = 'col-md-4 mb-3';
            col.innerHTML = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${producto.nombre}</h5>
                        <p class="card-text">$${producto.precio}</p>
                    </div>
                </div>
            `;
            listaProductos.appendChild(col);
        });
    }

    // Agregar producto
    formProducto.addEventListener('submit', (e) => {
        e.preventDefault();
        const nombreProducto = document.getElementById('nombreProducto').value;
        const precioProducto = document.getElementById('precioProducto').value;
        
        const nuevoProducto = {
            nombre: nombreProducto,
            precio: parseFloat(precioProducto)
        };

        productos.push(nuevoProducto);
        mostrarProductos(productos);

        formProducto.reset();
    });

    // Buscar producto
    buscarProducto.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        const productosFiltrados = productos.filter(producto => 
            producto.nombre.toLowerCase().includes(query)
        );
        mostrarProductos(productosFiltrados);
    });
});
