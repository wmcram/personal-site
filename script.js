quotes = [
    `"One should never try to prove anything that is not almost obvious." -Alexander Grothendieck`,
    `"In mathematics you don't understand things. You just get used to them." -John von Neumann`,
    `"Mathematics is the art of giving the same name to different things." -Henri Poincaré`,
]

document.querySelector("#quote").innerHTML = quotes[Math.floor(Math.random() * quotes.length)];