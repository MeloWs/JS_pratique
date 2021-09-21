const root = document.querySelector("#root");
const defaultTemp = 20;
const thermostat = document.createElement("div");
const legende1 = document.createElement("p");
const temperatureChoisi = document.createElement("p");
const temperatureActuel = document.createElement("p");

legende1.textContent = "Temperature Actuel";
temperatureActuel.textContent = defaultTemp;
legende1.textContent = "Temperature Actuel";
temperatureChoisi.textContent = defaultTemp;

function saveTemperature() {
  if (temperatureActuel.textContent > temperatureChoisi.textContent) {
    temperatureActuel.textContent--;
  } else if (temperatureActuel.textContent < temperatureChoisi.textContent) {
    temperatureActuel.textContent++;
  }
}

function tempChangecolor() {
  if (temperatureChoisi.textContent <= 0) {
    temperatureChoisi.style.color = "blue";
  } else if (temperatureChoisi.textContent >= 100) {
    temperatureChoisi.style.color = "red";
  } else temperatureChoisi.style.color = "black";
}

const plus = document.createElement("button");
plus.textContent = "+";

plus.addEventListener("click", () => {
  temperatureChoisi.textContent++;
  tempChangecolor();
});

const moins = document.createElement("button");
moins.textContent = "-";

moins.addEventListener("click", () => {
  temperatureChoisi.textContent--;
  tempChangecolor();
});

const save = document.createElement("button");
save.textContent = "save";

save.addEventListener("click", () => {
  const intervalId = setInterval(saveTemperature, 500);
  tempChangecolor();
});

const tempFav = document.createElement("button");
tempFav.textContent = "Temperature Favorite";

tempFav.addEventListener("click", () => {
  temperatureChoisi.textContent = defaultTemp;
});

const controlButtons = document.createElement("div");
controlButtons.append(plus, moins, save, tempFav);

thermostat.appendChild(legende1);
thermostat.appendChild(temperatureActuel);
thermostat.appendChild(temperatureChoisi);
thermostat.appendChild(controlButtons);
root.appendChild(thermostat);
