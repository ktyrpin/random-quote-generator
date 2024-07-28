const button = document.querySelector('button');
const quoteDisplay = document.querySelector('.quoteDisplay');

const quotes = [
	'Success is not final, failure is not fatal: It is the courage to continue that counts. - Winston Churchill',
	'The only way to do great work is to love what you do. - Steve Jobs',
	'In the middle of every difficulty lies opportunity. - Albert Einstein',
	"Believe you can and you're halfway there. - Theodore Roosevelt",
	'The best way to predict the future is to create it. - Abraham Lincoln',
	'The only limit to our realization of tomorrow will be our doubts of today. - Franklin D. Roosevelt',
	"Don't watch the clock; do what it does. Keep going. - Sam Levenson",
	"You miss 100% of the shots you don't take. - Wayne Gretzky",
	'The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt',
	'It does not matter how slowly you go as long as you do not stop. - Confucius',
];

function generateRandomQuote() {
  const randomQuote = Math.floor(Math.random() * quotes.length);
	const quote = quotes[randomQuote];
	quoteDisplay.textContent = quote;
	console.log(quote);
}

button.addEventListener('click', generateRandomQuote);
