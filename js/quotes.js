const quotes = [
  {
    quote:
      '"Work to death! At the end of the day there will be nothing you cannot do."',
    author: "-Makomo",
  },
  {
    quote: '"Don\'t wish for it, work for it."',
    author: "-Big Apple",
  },
  {
    quote: '"Hard work is the sum of daily efforts."',
    author: "-Big Apple",
  },
  {
    quote: '"A grateful heart is a magnet for miracles."',
    author: "-Big Apple",
  },
  {
    quote:
      '"Nothing is free in this world, you have to pay the price for every action you take."',
    author: "-Big Apple",
  },
  {
    quote:
      '"The man that see world the same way in his 50s as in his 20s he has wasted 30 years of his life."',
    author: "-Muhammad Ali",
  },
  {
    quote: '"The way to get started is to quit talking and begin doing."',
    author: "-Walt Disney",
  },
  {
    quote: '"Life is what happens when you\'re busy making other plans."',
    author: "-John Lennon",
  },
  {
    quote:
      '"The world is a book and those who do not travel read only one page."',
    author: "-Saint Augustine",
  },
  {
    quote: '"Life is either a daring adventure or nothing at all."',
    author: "-Helen Keller",
  },
  {
    quote: '"To Travel is to Live"',
    author: "-Hans Christian Andersen",
  },
  {
    quote: '"Only a life lived for others is a life worthwhile."',
    author: "-Albert Einstein",
  },
  {
    quote: '"You only live once, but if you do it right, once is enough."',
    author: "-Mae West",
  },
  {
    quote: '"Never go on trips with anyone you do ntot love."',
    author: "-Hemmingway",
  },
  {
    quote: '"We wander for distraction, but we travel for fulfilment."',
    author: "-Hilaire Belloc",
  },
  {
    quote: '"Travel expands the mind and fills the gap."',
    author: "-Sheda Savage",
  },
];
const quote = document.querySelector("#quote span:nth-child(1)");
const author = document.querySelector("#quote span:nth-child(2)");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${todaysQuote.quote} \n`;
author.innerText = todaysQuote.author;
