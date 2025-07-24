// List of quotes

const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not the key to happiness. Happiness is the key to success.",
        author: "Albert Schweitzer"
    },
    {
        quote: "Don’t watch the clock; do what it does. Keep going.",
        author: "Sam Levenson"
    },
    {
        quote: "Believe you can and you're halfway there.",
        author: "Theodore Roosevelt"
    },
    {
        quote: "The harder you work for something, the greater you’ll feel when you achieve it.",
        author: "Unknown"
    },
    {
        quote: "Opportunities don't happen, you create them.",
        author: "Chris Grosser"
    },
    {
        quote: "Don’t be afraid to give up the good to go for the great.",
        author: "John D. Rockefeller"
    },
    {
        quote: "The future belongs to those who believe in the beauty of their dreams.",
        author: "Eleanor Roosevelt"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle Onassis"
    },
    {
        quote: "The best way to predict the future is to create it.",
        author: "Peter Drucker"
    },
    {
        quote: "Strive not to be a success, but rather to be of value.",
        author: "Albert Einstein"
    },
    {
        quote: "The only limit to our realization of tomorrow will be our doubts of today.",
        author: "Franklin D. Roosevelt"
    },
    {
        quote: "The mind is everything. What you think you become.",
        author: "Buddha"
    },
    {
        quote: "Everything you’ve ever wanted is on the other side of fear.",
        author: "George Addair"
    },
    {
        quote: "Dream big and dare to fail.",
        author: "Norman Vaughan"
    },
    {
        quote: "The journey of a thousand miles begins with a single step.",
        author: "Lao Tzu"
    },
    {
        quote: "What you do today can improve all your tomorrows.",
        author: "Ralph Marston"
    },
    {
        quote: "If you want to lift yourself up, lift up someone else.",
        author: "Booker T. Washington"
    },
    {
        quote: "The best revenge is massive success.",
        author: "Frank Sinatra"
    },
    {
        quote: "Limitations live only in our minds. But if we use our imaginations, our possibilities become limitless.",
        author: "Jamie Paolinetti"
    },
    {
        quote: "The two most important days in your life are the day you are born and the day you find out why.",
        author: "Mark Twain"
    },
    {
        quote: "We may encounter many defeats but we must not be defeated.",
        author: "Maya Angelou"
    },
    {
        quote: "Go confidently in the direction of your dreams! Live the life you've imagined.",
        author: "Henry David Thoreau"
    },
    {
        quote: "It always seems impossible until it's done.",
        author: "Nelson Mandela"
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    }
];

const quoteDisplay = document.getElementById('quote');
const authorDisplay = document.getElementById('author'); 
const generateQuoteBtn = document.getElementById('generateQuoteBtn');
const loadingMessage = document.getElementById('loading-message'); 

// Function to generate a random quote
function generateRandomQuote() {
    
    if (loadingMessage) {
        loadingMessage.style.display = 'none';
    }

    const randomIndex = Math.floor(Math.random() * quotes.length);
    const selectedQuote = quotes[randomIndex]; 

     quoteDisplay.textContent = selectedQuote.quote;
      authorDisplay.textContent = `- ${selectedQuote.author}`;
}
generateQuoteBtn.addEventListener('click', generateRandomQuote);

