// Function to append messages to the chat UI
function appendMessage(sender, message) {
    const chatbotMessages = document.getElementById('chatbot-messages');
    const messageDiv = document.createElement('div');
    messageDiv.classList.add(sender.toLowerCase() + '-message');
    messageDiv.innerHTML = `<strong>${sender}:</strong> ${message}`;
    chatbotMessages.appendChild(messageDiv);
    chatbotMessages.scrollTop = chatbotMessages.scrollHeight;  // Scroll to the bottom
}

// Function to handle sending user queries
function sendMessage() {
    const userMessage = document.getElementById('chatbot-input').value;
    if (userMessage.trim() === "") {
        return;
    }

    // Display user's message
    appendMessage('You', userMessage);

    // Send the message to the server
    fetch('/chatbot', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            query: userMessage
        })
    })
    .then(response => response.json())
    .then(data => {
        // Display bot's response
        appendMessage('Lancer', data.response);
    })
    .catch(error => {
        console.error('Error:', error);
        appendMessage('Lancer', 'Sorry, something went wrong. Please try again later.');
    });

    // Clear the input box
    document.getElementById('chatbot-input').value = '';
}

// Display a professional welcome message when the page is loaded
window.onload = function() {
    appendMessage('Lancer', 'Hello! I am Lancer, your intelligent assistant. How can I assist you today?');
};

// Add event listener for the "Send" button
document.getElementById('chatbot-send').addEventListener('click', sendMessage);

// Allow pressing Enter to send the message
document.getElementById('chatbot-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        sendMessage();
    }
});