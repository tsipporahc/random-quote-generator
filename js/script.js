/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/

let quotes = [
    {quote:'Success is liking yourself, liking what you do, and liking how you do it.', source:'Maya Angelou'},
    {quote:'I was built this way for a reason, so I will use it.', source:'Simone Biles', year:'2020'},
    {quote:'Your silence will not protect you.', source:'Audre Lorde', citation: 'The Transformation of Silence into Language and Action'},
    {quote:'If we give our children sound self-love, they will be able to deal with whatever life puts before them.', source:'Bell Hooks'},
    {quote:'It is not the load that breaks you down; it is the way you carry it.', source:'Lena Horne'},
    {quote:'No matter what accomplishments you make, somebody helped you.', source:'Althena Gibson'}
  ];




/***
 * `getRandomQuote` function
***/


let getRandomQuote = (arr) => {
  let random = Math.floor(Math.random() * (quotes.length));
  random = quotes[random]; // i want to grab the values only ?

  return random;
};


getRandomQuote(quotes);



/***
 * `printQuote` function
***/


let printQuote = () => {
  let randomQuote = getRandomQuote(); // do i need parameter here?
  let html = ''; 
  html +=
  `
  <p class="quote">${randomQuote.quote}</p>
  <p class="source"> ${randomQuote.source}
  `;
  if (randomQuote.citation) { // If the random quote object has a citation property, concatenate a <span> element with the class "citation" to the HTML string.
   html += `
    <span class="citation">${randomQuote.citation}</span>
    `;
  } 

  if (randomQuote.year) { // If the random quote object has a year property, concatenate a <span> element with the class "year" to the HTML string.
  html += `
    <span class="year">${randomQuote.year}</span>
    `;
  
  }
 
  html += `
  </p>
  `; 
    
  document.getElementById('quote-box').innerHTML = html; 

  return html;


};

printQuote();


/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);