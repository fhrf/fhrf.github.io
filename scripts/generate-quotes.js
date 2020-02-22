const quotes = [
  {
    content:
      "Lost rights are never regained by appeals to the conscience of the usurpers, but by relentless struggle.... Goats are used for sacrificial offerings and not lions.",
    author: "Bhimrao Ramji Ambedkar"
  },
  {
    content: "A right delayed is a right denied.",
    author: "Martin Luther King, Jr."
  },
  {
    content:
      "There may be times when we are powerless to prevent injustice, but there must never be a time when we fail to protest.",
    author: "Elie Wiesel"
  },
  {
    content:
      "There can be no peace without development, no development without peace, and no lasting peace or sustainable development without respect for human rights and the rule of law.",
    author: "Former UN Deputy Secretary General - Jan Eliasson"
  },
  {
    content:
      "Men, their rights, and nothing more; women, their rights, and nothing less.",
    author: "Susan B. Anthony"
  },
  {
    content:
      "Nothing is unchangeable but the inherent and unalienable rights of man.",
    author: "Thomas Jefferson"
  },
  {
    content: "Freedom means the supremacy of human rights everywhere.",
    author: "Theodore Roosevelet"
  },
  {
    content:
      "We will not enjoy security without development, we will not enjoy development without security, and we will not enjoy either without respect for human rights.",
    author: "UN Secretary General - Kofi Annan"
  },
  {
    content:
      "To deny people their human rights is to challenge their very humanity.",
    author: "Nelson Mandela"
  },
  {
    content:
      "The rights of every man are diminished when the rights of one man are threatened.",
    author: "John F. Kennedy"
  },
  {
    content: "A right delayed is a right denied.",
    author: "Martin Luther King, Jr."
  },
  {
    content: "Injustice anywhere is a threat to justice everywhere.",
    author: "Martin Luther King, Jr."
  },
  {
    content:
      "Peace can only last where human rights are respected, where the people are fed, and where individuals and nations are free.",
    author: "14th Dalai Lama"
  },
  {
    content:
      "Let us remember: One book, one pen, one child, and one teacher can change the world.",
    author: "Malala Yousafzai"
  },
  {
    content:
      "There can be no peace without justice and respect for human rights.",
    author: "Irene Khan"
  },
  {
    content:
      "No matter what people tell you, words and ideas can change the world.",
    author: "Robin Williams"
  },
  {
    content: "Kindness is the best form of humanity.",
    author: "Doris Lee"
  },
  {
    content:
      "The more people know about their rights, and the rights of others in society, the better equipped they are to protect them.",
    author: "Salil Shetty"
  },
  {
    content:
      "Freedom is not worth having if it does not include the freedom to make mistakes.",
    author: "Mahatma Gandhi"
  },
  {
    content: "All of humanity is searching for truth, justice, and beauty.",
    author: "Miguel Angel Ruiz"
  }
];

const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

$(document).ready(function() {
  const randomQuote = quotes[getRandomInt(0, quotes.length - 1)];

  const quoteEle = document.querySelector("blockquote#quote");
  quoteEle.textContent = randomQuote.content;
  quoteEle.setAttribute("cite", randomQuote.author);
});
