document.addEventListener('DOMContentLoaded', function () {
    loadArticles();
    loadCart();
});

function loadArticles() {
    const articlesContainer = document.getElementById('articleList');
    articlesContainer.innerHTML = '';

    const articles = JSON.parse(localStorage.getItem('articles')) || [];

    if (articles.length === 0) {
        const noArticlesMessage = document.createElement('p');
        noArticlesMessage.textContent = 'No hay artículos disponibles.';
        articlesContainer.appendChild(noArticlesMessage);
    } else {
        articles.forEach((article, index) => {
            const articleItem = createArticleItem(article, index);
            articlesContainer.appendChild(articleItem);
        });
    }
}

function createArticleItem(article, index) {
    const articleItem = document.createElement('div');
    articleItem.classList.add('articleItem');

    const articleImageContainer = document.createElement('div');
    articleImageContainer.classList.add('centered-image');

    const articleImage = document.createElement('img');
    articleImage.src = 'images/' + (article && article.image ? article.image : 'default-image.jpg');
    articleImage.alt = article.name;

    articleImageContainer.appendChild(articleImage);

    const articleDetails = document.createElement('div');
    articleDetails.classList.add('articleDetails');

    const nameParagraph = document.createElement('p');
    nameParagraph.textContent = `Nombre: ${article.name}`;

    const priceParagraph = document.createElement('p');
    priceParagraph.textContent = `Precio: $${article.price}`;

    const addToCartButton = document.createElement('button');
    addToCartButton.textContent = `Agregar al carrito (${article.quantity} en el carrito)`;
    addToCartButton.addEventListener('click', () => addToCart(index));

    const removeFromCartButton = document.createElement('button');
    removeFromCartButton.textContent = 'Eliminar del carrito';
    removeFromCartButton.addEventListener('click', () => removeFromCart(index));

    articleDetails.appendChild(nameParagraph);
    articleDetails.appendChild(priceParagraph);
    articleDetails.appendChild(addToCartButton);
    articleDetails.appendChild(removeFromCartButton);

    articleItem.appendChild(articleImageContainer);
    articleItem.appendChild(articleDetails);

    return articleItem;
}

function removeFromCart(index) {
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles[index].quantity = 0; // Establecer la cantidad en 0 para eliminar el artículo del carrito
    localStorage.setItem('articles', JSON.stringify(articles));
    loadArticles(); // Actualiza visualmente la lista de artículos después de eliminar del carrito
    loadCart(); // Actualiza visualmente el carrito después de eliminar un artículo
}



function editArticle(index) {
    // Implementa la lógica para editar un artículo si es necesario
}

function deleteArticle(index) {
    // Implementa la lógica para eliminar un artículo
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.splice(index, 1);
    localStorage.setItem('articles', JSON.stringify(articles));
    loadArticles();
}

function addToCart(index) {
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles[index].quantity += 1;
    localStorage.setItem('articles', JSON.stringify(articles));
    loadArticles(); // Actualiza visualmente la lista de artículos después de agregar al carrito
    loadCart(); // Actualiza visualmente el carrito después de agregar un artículo
    
}
document.addEventListener('DOMContentLoaded', function () {
    loadArticles();
    loadCart();

    const clearCartBtn = document.getElementById('clearCartBtn');
    clearCartBtn.addEventListener('click', clearCart);
});

function clearCart() {
    const articles = JSON.parse(localStorage.getItem('articles')) || [];

    articles.forEach(article => {
        article.quantity = 0;
    });

    localStorage.setItem('articles', JSON.stringify(articles));

    loadCart();
    loadArticles(); // Puedes cargar los artículos también para actualizar la cantidad en la tienda
}

function loadCart() {
    const cartItemsContainer = document.getElementById('cartItems');
    cartItemsContainer.innerHTML = '';

    const articles = JSON.parse(localStorage.getItem('articles')) || [];

    const cartItems = articles.filter(article => article.quantity > 0);

    if (cartItems.length === 0) {
        const noCartItemsMessage = document.createElement('p');
        noCartItemsMessage.textContent = 'El carrito está vacío.';
        cartItemsContainer.appendChild(noCartItemsMessage);
    } else {
        cartItems.forEach((cartItem) => {
            const cartItemElement = document.createElement('li');
            cartItemElement.textContent = `${cartItem.name} - Cantidad: ${cartItem.quantity}`;
            cartItemsContainer.appendChild(cartItemElement);
        });
    }
}



document.addEventListener('DOMContentLoaded', function () {
    loadArticles();
    loadCart();

    const clearCartBtn = document.getElementById('clearCartBtn');
    clearCartBtn.addEventListener('click', clearCart);

    const buyBtn = document.getElementById('buyBtn');
    buyBtn.addEventListener('click', buyItems);
});

function buyItems() {
    // Obtén los artículos del carrito
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    const cartItems = articles.filter(article => article.quantity > 0);

    // Guarda los artículos del carrito en el localStorage o realiza otras acciones según tu lógica
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    // Redirige a la página de compra
    window.location.href = '/indexUsuario/formularioCompra.html';
}