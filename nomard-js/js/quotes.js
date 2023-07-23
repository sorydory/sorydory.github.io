const quotes = [
  {
    quote: "늘 행복하고 지혜로운 사람이 되려면 자주 변해야 한다.",
    author: "Confucius",
  },
  {
    quote: "인생이란 누구나 한 번쯤 시도해 볼 만한 것이다.",
    author: "Henry J. Tillman",
  },
  {
    quote: "때로는 살아있는 것조차도 용기가 될 때가 있다.",
    author: "Seneca",
  },
  {
    quote: "인생은 밀림 속의 동물원이다.",
    author: "Peter De Vries",
  },
  {
    quote: "바삐 태어나지 않은 자는 바삐 죽는다.",
    author: "Bob Dylan",
  },
  {
    quote: "내일은 우리가 어제로부터 무엇인가 배웠기를 바란다.",
    author: "John Wayne",
  },
  {
    quote: "교육의 위대한 목표는 앎이 아니라 행동이다.",
    author: "Herbert Spencer",
  },
  {
    quote: "젊었을 때 배움을 게을리 한 사람은 과거를 상실하며 미래도 없다.",
    author: "Euripides",
  },
];

const quote = document.querySelector("#quotes");
const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${selectedQuote.quote} \n\n- ${selectedQuote.author} -`;
