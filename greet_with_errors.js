function randomGreeting() {
  const words = ['Hello', 'Howdy', 'Hi', 'Hey there', 'What\'s up',
               'Greetings', 'Salutations', 'Good to see you'];

  const idx = Math.floor(Math.random() * words.length);

  words[idx];
}

function greet(...args) {
  const names = Array.prototype.slice.call(args);
  let result = "";
  for (let i = 0; i < names.length; i++) {
    const name = names[i];
    const greeting = randomGreeting;

    console.log(greeting + ", " + name + "!");
    result += greeting + ", " + name + "!";
  }
  return result;
}
let p = document.getElementById("greeting");
let greetings = greet('Hannah', 'Jose', 'Beatrix', 'Julie', 'Ian')
p.append(greetings);