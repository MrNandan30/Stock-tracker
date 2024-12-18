// Toggle the chatbot visibility
function toggleChatbot() {
  const chatbotContainer = document.getElementById('chatbot-container');
  chatbotContainer.style.display = (chatbotContainer.style.display === 'block') ? 'none' : 'block';
}

// Send message to backend and display response
function sendMessage() {
  const userMessage = document.getElementById('user-message').value;
  if (userMessage.trim() === "") return;

  // Display user message in the chat window
  displayMessage(userMessage, 'user');

  // Send the message to the server
  fetch('/chat', {
      method: 'POST',
      body: new URLSearchParams({
          message: userMessage
      }),
      headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
      }
  })
  .then(response => response.text())
  .then(data => {
      // Display bot's response
      displayMessage(data, 'bot');
      document.getElementById('user-message').value = ''; // Clear the input
  })
  .catch(error => {
      console.error('Error:', error);
  });
}

// Display message in the chat window
function displayMessage(message, sender) {
  const messageContainer = document.createElement('p');
  messageContainer.classList.add(sender === 'user' ? 'user-msg' : 'bot-msg');
  messageContainer.textContent = message;

  document.getElementById('chatbot-messages').appendChild(messageContainer);
  document.getElementById('chatbot-messages').scrollTop = document.getElementById('chatbot-messages').scrollHeight; // Scroll to the bottom
}
