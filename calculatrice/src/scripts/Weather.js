const API_key = "b60fac29a641f03b4aac8310d7622564";
const villeAVoir = ["Lyon", "Paris", "Nice", "Tahiti", "Annecy", "blabla"];

const root = document.querySelector("#root");

async function getWeather(city_name) {
  try {
    const request = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city_name}&units=metric&cnt=7&appid=${API_key}&lang=fr`
    );
    const response = await request.json();
    return response.weather[0].description;
  } catch (error) {
    throw "Erreur de traitement ...";
  }
}

const select = document.createElement("select");
select.style.margin = "0 0.25rem";
select.style.height = "22px";
for (let i = 0; i < villeAVoir.length; i++) {
  let option = document.createElement("option");
  option.value = villeAVoir[i];
  option.text = villeAVoir[i];
  select.appendChild(option);
}

const btn = document.createElement("button");
btn.style.height = "22px";
btn.style.margin = "0 0.25rem";
btn.textContent = "Voir la météo de la ville";
btn.style.cursor = "pointer";
btn.addEventListener("click", () => {
  getWeather(select.value)
    .then((res) => (divRetour.textContent = `A ${select.value} : ${res}`))
    .catch((e) => (divRetour.textContent = `ERREUR : ${e}`));
});

const divRetour = document.createElement("div");
divRetour.style.padding = "0.5rem";

root.appendChild(select);
root.appendChild(btn);
root.appendChild(divRetour);
