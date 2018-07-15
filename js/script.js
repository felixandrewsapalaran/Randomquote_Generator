
// event listener to respond to "Show another quote" button clicks
// when user clicks anywhere on the button, the "printQuote" function is called
document.getElementById('loadQuote').addEventListener("click", printQuote, false);

//creating a bunch of variables to use it later in the code 
var message = '';
var red;
var green;
var blue;
var openedQuotes = [];

//create a list of array consisting of: quotes, source, citation, and year
var quotes = [
	{
		quote:"With the new day comes new strength and new thoughts.",
		source:"Eleanor Roosevelt"
	},
	{
		quote:"It does not matter how slowly you go as long as you do not stop.",
		source:"Confucius"
	},
	{
		quote:"All we have to decide is what to do with the time that is given to us.",
		source:"Gandalf ",
		citation:" from the Lord of the Rings, The Fellowship of the Ring"
	},
	{
		quote:"You can do anything, but not everything.",
		source:"David Allen",
		year:"2009"
	},
	{
		quote:"I am not what happened to me, I am what I choose to become.",
		source:"Chris Gardner",
		citation:"The Pursuit of Happyness",
		year:"2006"
	},

];

//create a function print
function print(quote){
	//This getElementId locates the tag quote-box in index.html
	var outputDiv = document.getElementById('quote-box');
	//accessing inside the div on a page
	outputDiv.innerHTML = quote;
}

//create function to get random quote from the object and store it in variable randomQuote.
function getRandomQuote() {

	var randomQuote = Math.floor(Math.random() * quotes.length);

	var splicedQuotes = quotes.splice(randomQuote, 1)[0];

	openedQuotes.push(splicedQuotes);
	
	if (quotes.length === 0){

		quotes = openedQuotes;

		openedQuotes = [];
	}

	return splicedQuotes;
}


//build function that will generate our rgb color value
function randomColorGenerator() {

	var randomColor;
	red = Math.floor(Math.random() * 256);
	green = Math.floor(Math.random() * 256);
	blue = Math.floor(Math.random() * 256);
	randomColor = 'rgb(' + red + ',' + green + ',' + blue + ')';
	//return value 
	return randomColor;
}


//Createa function printQuote
function printQuote() {
	//calling the getRandomQuote function and store its random quote value in quotes variable.
	var quotes = getRandomQuote();

	//diplay the quote
	message = '<p class= "quote">' + quotes.quote + '</p>';
	//display the source
	message += '<p class = "source">' + quotes.source;

	//if quote has citation will do these instructions inside.
	if (quotes.citation){

		message += '<span class="citation">' + quotes.citation + '</span>';
	} else {
		message += '';
	}
	//if quote has year will do these instructions inside.
	if (quotes.year){
		message += '<span class = "year">' + quotes.year + '</span>';
	}else {

		message += '';
	}if (quotes.tags) {
		message += '<h3>' + quotes.tags + '</h3></p>';
	}else {

		message += '';
	}

	
	//call this function and passing message value
	print(message);
	//Call this function to generate random color
	randomColorGenerator();
	//This getElementId locates the tag bgcolor in index.html abd apply the generated random color to its background which is the body tag.
	document.getElementById('bgcolor').style.backgroundColor = randomColorGenerator();
}


//Timer setting
	setInterval(printQuote, 8000);
