const ucFirst = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};
console.log(ucFirst("hell yeah"));

//---- Capitalize
function capitalize(sentence) {
  let result = sentence.split(" ");
  //console.log("result" + result);
  for (let i = 0; i < result.length; ++i) {
    result[i] = ucFirst(result[i]);
  }
  /*   
      ou a la place du for on fait map ex =>
      const mappedresult = result.map(element =>{
          return ucFirst(element);
      }); 
      le result.map => cela nous retourneras chaque mot dans une case d'un tableau ex ['string', 'string', 'string']
      cela s'écriras aussi =>
      const mappedresult = result.map(element => ucFirst(element));
      il n'y auras pas besoin de mettre de return car la fonction sur une ligne 
      sait que ce qu'elle doit retourner c'est element
      */

  return result.join(" ");
}
console.log(capitalize("the pretty liar is hidden"));

//---- CamelCase
function camelCase(sentence) {
  const words = sentence.split(" ");
  for (let i = 0; i < words.length; ++i) {
    const word = words[i];
    words[i] = ucFirst(word);
  }
  return words.join("");
}
function camelCase2(sentence) {}

function camelCase3(sentence) {
  for (let i = 0; i < sentence.length; ++i) {
    if (sentence[i] === " ") {
      sentence[i + 1] = sentence[i + 1].toUpperCase();
      sentence[i] = "";
    }
  }
  return sentence;
}

function camelCase4(sentence) {
  return capitalize(sentence).replace(/ /g, "");
}

console.log(camelCase("end of the world"));

//---- snake_Case

function snakeCase(sentence) {
  const result = sentence;
  return result.replace(/ /g, "_");
}

//---- encodage

console.log(snakeCase("we are the champions"));
