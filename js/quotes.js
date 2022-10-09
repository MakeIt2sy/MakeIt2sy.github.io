/* 인용문 arr만들고 랜던 변수 만들어서 붙이기
*/

const quotes = [
    {
      quote: "The world belongs to those who read.",
      author: "Rick Holland",
    },
    {
      quote: "I do believe something very magical can happen when you read a good book.",
      author: "J.K. Rowling",
    },
    {
       quote: "A room without books is like a body without a soul.",
       author: "Cicero"
    },
    {
        quote: "Reading gives us someplace to go when we have to stay where we are.",
        author: "Mason Cooley"
    },
    {
        quote: "I am part of everyting that I have read.",
        author: "Franklin Delano Roosevelt"
    },
    {
        quote: "A word after a word after a word is power.",
        author: "Magaret Atwood"
    },
    {
        quote: "Think before you speak. Read before you think.",
        author: "Fran Lebowitz"
    }

  ];

  const quote = document.querySelector("#quote span:first-child");
  const author = document.querySelector("#quote span:last-child");

  const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)];

  quote.innerText = `${todaysQuote.quote} - `;
  author.innerText = todaysQuote.author;