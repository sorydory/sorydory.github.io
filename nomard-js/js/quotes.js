const quotes = [
  {
    quote: "나약한 태도는 성격도 나약하게 만든다.",
    author: "Albert Einstein",
  },
  {
    quote:
      "성공은 결코 최종 목표가 아니라, 실패에서 실패로 걸어가는 과정에서 온다.",
    author: "Winston Churchill",
  },
  {
    quote:
      "당신이 세상을 변화시키려고 기다린다면, 당신은 아무것도 이룰 수 없다.\n변화는 당신으로부터 시작되어야 한다.",
    author: "Mahatma Gandhi",
  },
  {
    quote:
      "가장 훌륭한 시간은 언제인가? 10년 전이었다.\n다음으로 좋은 시간은 오늘이다.",
    author: "Yohan Ko",
  },
  {
    quote: "모든 순간이 새로운 시작이다.",
    author: "T.S Eliot",
  },
  {
    quote: "네가 상상하는 모든 것이 현실이다.",
    author: "Pablo Picasso",
  },
  {
    quote: "단순함이 궁극적인 정교함이다.",
    author: "Leonardo da Vinci",
  },
  {
    quote: "20대에는 의지, 30대에는 기지, 40대에는 판단이 지배한다.",
    author: "Benjamin Franklin",
  },
  {
    quote:
      "인생은 거울과 같으니, 비친 것을 밖에서 들여다 보기 보다\n먼저 자신의 내면을 살펴야 한다.",
    author: "Wally Famous Amos",
  },
  {
    quote: "큰 희망이 큰 사람을 만든다.",
    author: "Thomas Fuller",
  },
  {
    quote: "웃음은 두 사람간의 가장 가까운 거리다",
    author: "Victor Borge",
  },
  {
    quote: "두려움은 희망 없이 있을 수 없고 희망은 두려움없이 있을 수 없다.",
    author: "Baruch Spinoza",
  },
  {
    quote: "오늘 할 수 있는 일을 내일로 미루지 마라.",
    author: "Benjamin Franklin",
  },
  {
    quote: "자존심은 가장 고귀한 인격을 망친다.",
    author: "Claudianus",
  },
];

const quote = document.querySelector("#quotes");
const selectedQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `${selectedQuote.quote} \n\n- ${selectedQuote.author} -`;
