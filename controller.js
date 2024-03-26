function updateView() {
    createHtml();
}

function handleSubmit(event) {
    event.preventDefault();
    newCards.imageUrl = document.getElementById('imageUrl').value;
    newCards.receiver = document.getElementById('receiver').value;
    newCards.sender = document.getElementById('sender').value;
    newCards.message = document.getElementById('message').value;
    savedCards.push({ ...newCards }); // Save a copy of newCards object
    loadCardData();
    emptyInputFields();
}

function loadCardData() {
    const cardListElement = document.getElementById('cardList');
    cardListElement.innerHTML = '';
    savedCards.forEach(card => {
        const cardElement = document.createElement('div');
        cardElement.classList.add('card');
        cardElement.innerHTML = `
            <h3>Receiver: ${card.receiver}</h3>
            <p>Sender: ${card.sender}</p>
            <p>Message: ${card.message}</p>
        `;
        cardElement.addEventListener('click', () => toggleCardImage(cardElement, card));
        cardListElement.appendChild(cardElement);
    });
}

function toggleCardImage(cardElement, card) {
    const existingImage = cardElement.querySelector('img');
    if (existingImage) {
        existingImage.remove();
        const textContent = `
            <h3>Receiver: ${card.receiver}</h3>
            <p>Sender: ${card.sender}</p>
            <p>Message: ${card.message}</p>
        `;
        cardElement.insertAdjacentHTML('beforeend', textContent);
    } else {
        cardElement.innerHTML = '';
        const imageElement = document.createElement('img');
        imageElement.src = card.imageUrl;
        imageElement.alt = 'Card Image';
        cardElement.appendChild(imageElement);
    }
}

function emptyInputFields(){
    document.getElementById('imageUrl').value = '';
    document.getElementById('receiver').value = '';
    document.getElementById('sender').value = '';
    document.getElementById('message').value = '';
}