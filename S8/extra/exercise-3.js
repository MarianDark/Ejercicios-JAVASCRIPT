// Obtener la lista de pedidos
fetch("http://localhost:3000/orders")
  .then((response) => response.json())
  .then((orders) => {
    // Ordenar los pedidos por fecha (últimos pedidos al principio)
    orders.sort((a, b) => new Date(b.date) - new Date(a.date));

    const ordersListDiv = document.getElementById("ordersList");
    orders.forEach((order) => {
      // Crear un div para cada pedido
      const orderDiv = document.createElement("div");

      // Agregar fecha del pedido
      const dateHeading = document.createElement("h3");
      dateHeading.textContent = `Fecha del Pedido: ${new Date(
        order.date
      ).toLocaleDateString()}`;
      orderDiv.appendChild(dateHeading);

      // Crear una lista para los productos del pedido
      const productList = document.createElement("ul");

      // Obtener los detalles de cada producto en el pedido
      order.products.forEach((product) => {
        fetch(`http://localhost:3000/products/${product.productId}`)
          .then((response) => response.json())
          .then((productDetails) => {
            // Crear un elemento de lista para cada producto con su nombre y cantidad
            const productItem = document.createElement("li");
            productItem.textContent = `${productDetails.name} - Cantidad: ${product.quantity}`;
            productList.appendChild(productItem);
          })
          .catch((error) =>
            console.error("Error al obtener detalles del producto:", error)
          );
      });

      // Agregar la lista de productos al div del pedido
      orderDiv.appendChild(productList);

      // Agregar el div del pedido al contenedor principal
      ordersListDiv.appendChild(orderDiv);
    });
  })
  .catch((error) =>
    console.error("Error al obtener la lista de pedidos:", error)
  );
