const quotes = [
  `One should never try to prove anything that is not almost obvious. -Alexander Grothendieck`,
  `In mathematics you don't understand things. You just get used to them. -John von Neumann`,
  `Mathematics is the art of giving the same name to different things. -Henri Poincaré`,
  `I am in a charming state of confusion. -Ada Lovelace`,
  `If a machine is expected to be infallible, it cannot also be intelligent. -Alan Turing`,
  `It is not knowledge, but the act of learning, not the possession of but the act of getting there, which grants the greatest enjoyment. -Carl Friedrich Gauss`,
  `Beware of bugs in the above code; I have only proved it correct, not tried it. -Donald Knuth`,
  `Computer Science is no more about computers than astronomy is about telescopes. -Edsger Dijkstra`,
  `One can imagine that the ultimate mathematician is one who can see analogies between analogies. -Stefan Banach`,
  `Wir müssen wissen, wir werden wissen. -David Hilbert`,
  `However impenetrable it seems, if you don't try it, then you can never do it. -Andrew Wiles`,
]

// split into quote and author
const index = Math.floor(Math.random() * quotes.length);
document.querySelector("#quote").innerHTML = quotes[index].split('-')[0];
document.querySelector("#author").innerHTML = '-' + quotes[index].split('-')[1];
