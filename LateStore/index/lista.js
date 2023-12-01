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
