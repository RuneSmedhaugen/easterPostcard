updateView();

function createHtml() {
    document.getElementById('app').innerHTML = /*HTML*/ `
    <div id="postcard" class="postcard">
        <div class="front">
            <form id="cardForm" onsubmit="handleSubmit(event)">
                <label for="imageUrl">Image URL:</label>
                <input type="text" id="imageUrl" name="imageUrl" required><br>
                <label for="receiver">Receiver:</label>
                <input type="text" id="receiver" name="receiver" required><br>
                <label for="sender">Sender:</label>
                <input type="text" id="sender" name="sender" required><br>
                <label for="message">Message:</label>
                <textarea id="message" name="message" required></textarea><br>
                <button type="submit">Create card</button>
            </form>
        </div>
    </div>
    <div id="alreadyMadeCards" class="made-cards">
        <h2>Your cards:</h2>
        <div id="cardList" class="cardList"></div>
    </div>
    `;
    loadCardData();
}

createHtml();