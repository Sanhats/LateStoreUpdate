document.addEventListener('DOMContentLoaded', function () {
    loadArticles();
});

function addOrUpdateArticle() {
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');
    const editIndex = parseInt(document.getElementById('editIndex').value);

    if (name && price && imageInput.files.length > 0) {
        const imageName = imageInput.files[0].name;
        const articles = JSON.parse(localStorage.getItem('articles')) || [];

        if (editIndex !== -1) {
            articles[editIndex] = { name, price, image: imageName };
        } else {
            articles.push({ name, price, image: imageName });
        }

        localStorage.setItem('articles', JSON.stringify(articles));

        document.getElementById('articleForm').reset();
        document.getElementById('editIndex').value = -1;
        imagePreview.style.display = 'none';
        loadArticles();
    } else {
        alert('Por favor, complete todos los campos.');
    }
}

function deleteArticle(index) {
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    articles.splice(index, 1);
    localStorage.setItem('articles', JSON.stringify(articles));
    loadArticles();
}

function editArticle(index) {
    const articles = JSON.parse(localStorage.getItem('articles')) || [];
    const article = articles[index];

    document.getElementById('name').value = article.name;
    document.getElementById('price').value = article.price;
    document.getElementById('imageInput').value = '';
    document.getElementById('imagePreview').src = 'images/' + (article && article.image ? article.image : 'default-image.jpg');
    document.getElementById('imagePreview').style.display = 'block';

    document.getElementById('editIndex').value = index;
}

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
            const articleItem = document.createElement('div');
            articleItem.classList.add('articleItem');
        
            const articleImageContainer = document.createElement('div');
            articleImageContainer.classList.add('centered-image'); // Nueva clase para centrar la imagen verticalmente
        
            const articleImage = document.createElement('img');
            articleImage.src = 'images/' + (article && article.image ? article.image : 'default-image.jpg');
            articleImage.alt = article.name;
        
            const articleDetails = document.createElement('div');
            articleDetails.classList.add('articleDetails');

            const nameParagraph = document.createElement('p');
            nameParagraph.textContent = `Nombre: ${article.name}`;

            const priceParagraph = document.createElement('p');
            priceParagraph.textContent = `Precio: $${article.price}`;

            const editButton = document.createElement('button');
            editButton.textContent = 'Editar';
            editButton.addEventListener('click', () => editArticle(index));

            const deleteButton = document.createElement('button');
            deleteButton.textContent = 'Eliminar';
            deleteButton.addEventListener('click', () => deleteArticle(index));

            
    articleImageContainer.appendChild(articleImage); // Agregar la imagen al contenedor
    articleDetails.appendChild(nameParagraph);
    articleDetails.appendChild(priceParagraph);
    articleDetails.appendChild(editButton);
    articleDetails.appendChild(deleteButton);

    articleItem.appendChild(articleImageContainer); // Agregar el contenedor de la imagen al artículo
    articleItem.appendChild(articleDetails);

    articlesContainer.appendChild(articleItem);
});
    }
}

function previewImage() {
    const imageInput = document.getElementById('imageInput');
    const imagePreview = document.getElementById('imagePreview');

    const file = imageInput.files[0];

    if (file) {
        const reader = new FileReader();

        reader.onload = function (e) {
            imagePreview.src = e.target.result;
            imagePreview.style.display = 'block';
        };

        reader.readAsDataURL(file);
    }
}


document.addEventListener('DOMContentLoaded', function () {
    // Obtiene los datos de compra almacenados en localStorage
    const purchaseData = JSON.parse(localStorage.getItem('purchaseData'));

    if (purchaseData) {
        // Muestra los detalles de la compra
        displayPurchaseDetails(purchaseData);
    } else {
        // Si no hay datos de compra, muestra un mensaje de error o realiza otra acción
        console.error('No hay datos de compra disponibles.');
    }
});

function displayPurchaseDetails(purchaseData) {
    const purchaseDetailsContainer = document.getElementById('purchaseDetails');
    const usernameParagraph = document.createElement('p');
    usernameParagraph.textContent = `Nombre de Usuario: ${purchaseData.username}`;
    
    const steamLinkParagraph = document.createElement('p');
    steamLinkParagraph.textContent = `Link de Steam: ${purchaseData.steamLink}`;
    
    const cartItemsList = document.createElement('ul');
    purchaseData.cartItems.forEach(cartItem => {
        const cartItemElement = document.createElement('li');
        cartItemElement.textContent = `${cartItem.name} - Cantidad: ${cartItem.quantity}`;
        cartItemsList.appendChild(cartItemElement);
    });

    purchaseDetailsContainer.appendChild(usernameParagraph);
    purchaseDetailsContainer.appendChild(steamLinkParagraph);
    purchaseDetailsContainer.appendChild(cartItemsList);
}
