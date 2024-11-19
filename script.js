// List of quotes
const quotes = [
    "The only way to do great work is to love what you do. – Steve Jobs",
    "Success is not the key to happiness. Happiness is the key to success. – Albert Schweitzer",
    "Don’t watch the clock; do what it does. Keep going. – Sam Levenson",
    "Believe you can and you're halfway there. – Theodore Roosevelt",
    "The harder you work for something, the greater you’ll feel when you achieve it. – Unknown",
    "Opportunities don't happen, you create them. – Chris Grosser",
    "Don’t be afraid to give up the good to go for the great. – John D. Rockefeller"
];

// Function to generate a random quote

function generateRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomIndex];
    document.getElementById('quote').textContent = randomQuote;
}


// Event listener for the button
document.getElementById('generateQuoteBtn').addEventListener('click', generateRandomQuote);
