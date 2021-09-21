const newElt = document.createElement("h1");
newElt.textContent = "Calculatrice!";
document.querySelector("#root").appendChild(newElt);

// __________ CALCULATOR

const root = document.querySelector("#root");
const calculator = document.createElement("div");
calculator.classList.add("app");
const screen = document.createElement("h3");

root.appendChild(calculator).appendChild(screen);
//root.appendChild(screen);
/*
_____pour faire suivre deux éléments l'un après l'autre dans le code
const root = document.querySelector('#root');
root.appendChild(title)
root.append(othertitle)
*/
/*
const root = document.querySelector('#root');
const calculator = document.createElement('div');
const screen = document.createElement('div');

calculator.appendChild(screen);
for(let i = 0 ; i <= 9 ; ++i ){
    const number = document.createElement('button');
    number.textContent = i;
    calculator.appendChild(number);
}
root.appendChild(calculator);

 const otherCalculator = document.createElement('div');
otherCalculator.appendChild(screen);
const operators = ['+', '-', '*', '/', 'C', '=', '%'];

operators.forEach(operator => {
    const element = document.createElement('button');
    element.textContent = operator;
    otherCalculator.appendChild(element);
})

 
const numbers = [...Array(9)]; -> va créer des élements de 0 à 9
numbers.forEach((_, index) => { -> l'underscore est pour dire que ce seras vide, et que ça n'a pas d'importance
    const element = document.createElement('button');
    element.textContent = index;
    otherCalculator.appendChild(element);
})
--> va faire la même chose que le for (i)*/
const otherCalculator = document.createElement("div");

const calculatorElements = [
  ...Array(10),
  "+",
  "-",
  "*",
  "/",
  "reset",
  "equal",
  "%",
];

calculatorElements.forEach((value, key) => {
  const element = document.createElement("button");
  const buttonValue = typeof value === "string" ? value : key;

  element.setAttribute("value", buttonValue);
  element.setAttribute("id", buttonValue);
  element.classList.add("btn");

  element.textContent = buttonValue;
  calculator.appendChild(element);
});

const equal = document.querySelector("#equal");
equal.setAttribute("value", "=");
equal.textContent = "=";
const reset = document.querySelector("#reset");
reset.setAttribute("value", "C");
reset.textContent = "C";

const buttons = document.querySelectorAll(".btn");

buttons.forEach((button) => {
  button.addEventListener("click", (event) => {
    switch (event.target.value) {
      case "C":
        screen.textContent = "";
        break;
      case "=":
        screen.textContent = eval(String(screen.textContent));
        break;
      default:
        screen.textContent += event.target.value;
    }
  });
});

/*const root = document.querySelector("#root");

const calc = document.createElement("div");
calc.style = "width: 200px; text-align: center;";
root.appendChild(calc);
let screen = document.createElement("input");
screen.id = "screen";
screen.value = 0;
screen.style = "height: 40px; font-size: 18px; width: 200px; text-align: right; padding: 0.25rem; margin-bottom: 0.5rem;";
screen.setAttribute("disabled", true);
calc.appendChild(screen);

const arrayValueBtn = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, ".", "+", "-", "*", "/", "DEL", "="];

arrayValueBtn.forEach(elem => {
  const btn = document.createElement("button");
  btn.textContent = elem;
  btn.value = elem;
  btn.style = "width: 40px; height: 40px; font-size: 16px;";

  btn.addEventListener("click", () => {
    if(btn.value === "=" && screen.value.length > 3) { screen.value = eval(screen.value); }
    else if(btn.value === "DEL") { screen.value = "0"; }
    else {
      if(screen.value.length === 1 && screen.value === "0"){
        const regex = /[0\+\-\*\/.=]/;
        btn.value.match(regex) ? btn.value === "." ? screen.value += btn.value : "" : screen.value = btn.value;
      }
      else{ screen.value += btn.value; }
    }
  });

  calc.appendChild(btn);
});*/
