function submitPurchaseForm() {
    const username = document.getElementById('username').value;
    const steamLink = document.getElementById('steamLink').value;

    // Obtén los artículos del carrito
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    const cartItems = articles.filter(article => article.quantity > 0);

    // Agrupa los datos del formulario y la lista de artículos
    const purchaseData = {
        username,
        steamLink,
        cartItems,
    };

    // Guarda los datos en localStorage para que estén disponibles en la otra página
    localStorage.setItem('purchaseData', JSON.stringify(purchaseData));

    // Redirige a la página de confirmación
    window.location.href = '/indexUsuario/confirmacion.html';
}
