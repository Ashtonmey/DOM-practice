
const container = document.querySelector('#container'); // create a variable to store the selected element

const p = document.createElement('p');
p.classList.add('content');
p.textContent = 'Hey, I\'m red!';
p.setAttribute('style', 'color: red');

container.appendChild(p);

const h3 = document.createElement('h3'); // create variable for the created element
h3.classList.add('heading3'); // give the element a class
h3.textContent = 'I\'m a blue h3!'; // add text to the element
h3.setAttribute('style', 'color: blue'); // style the element

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

const btn = document.querySelector('#btn');
btn.onclick = () => alert("Hello World");

const btn2 = document.querySelector('#btn2');
btn2.addEventListener('click', () => {
    alert("Hello World!")
})

const btn3 = document.querySelector('#btn3');
btn3.addEventListener('click', alertFunction);
btn3.addEventListener('click', function(e) {
    console.log(e.target.style.background = 'blue')
});

const btn4 = document.querySelector('#btn4')
btn4.addEventListener('click', function(e) {
    console.log(e.target.style.background = 'blue')
});

function alertFunction()
{
    alert ("This is the way to do it.")
}


