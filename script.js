const quotes = [
    {
    quote: "Kuhaon ko ang bulan ebundak sa imong dughan, sharog imong mama og papa di nako maugangan.",
    author: "Justin Isaac"
},
{
    quote: "Higugmaa ko nga lami pa sa kinilaw, kay higugmaon pud tika nga ikaw ray makatilaw.",
    author: "Matt Vincent"
},
{
    quote: "Pwedi ba ikaw ang kapayas, og ako ang owak nga mutiwik sa imong buak.",
    author: "Jayson Ubay-ubay"
},
{
    quote: "Kahibaw ko nga dika busy, dili lang jud ako imong priority.",
    author: "Micho Medina"
},
{
    quote: "Sanina mo blue, shorts mo blue, amping permi I love you.",
    author: "Sir. Ralph Angelo"
},
]
const quoteContainer = document.getElementById("quote-container");
const quote = document.getElementById("quote");
const author = document.getElementById("author");
const newQuoteBtn = document.getElementById("new-quote");

function getNewQuote(){
    const randomindex = Math.floor(Math.random() * quotes.length);
    const randomQuote = quotes[randomindex];
    quote.textContent = randomQuote.quote;
    author.textContent = randomQuote.author;
}

newQuoteBtn.addEventListener("click", getNewQuote);
getNewQuote();