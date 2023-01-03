
const container = document.querySelector('#container');

const p = document.createElement('p');
p.classList.add('content');
p.textContent = 'Hey, I\'m red!';
p.setAttribute('style', 'color: red');

container.appendChild(p);

const h3 = document.createElement('h3');
h3.classList.add('heading3');
h3.textContent = 'I\'m a blue h3!';
h3.setAttribute('style', 'color: blue');

container.appendChild(h3);

const div = document.createElement('div');
div.classList.add('blackDiv');
div.setAttribute('style', 'border-style: solid; background-color: pink;');

const h1 = document.createElement('h1');
h1.textContent = "I'm in a div!";
div.appendChild(h1);

const p2 = document.createElement('p2');
p2.textContent = "ME TOO!";
div.appendChild(p2);

container.appendChild(div);


