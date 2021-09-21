function fonction(param) {
  new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof param === "string") {
        resolve(param.toUpperCase());
      } else {
        reject(param);
      }
    }, 500);
  })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
}
fonction("parapluie");
// const promesse1 = new Promise((resolve, reject) => {
//     return resolve('reponse ok !');
//   });

//   promesse1
//     .then(result => { console.log(result); }); // Retourne le then qui affichera "reponse ok !"

/*const myPromise = new Promise(function(resolve, reject) {
  if(Math.floor(Math.random * 2) === 1 ) { // Est egal a true or false de maniere aleatoire
      setTimeout(() => {
          resolve('Hello, from promise') // Va activer les .then et ignorer le .catch
      }, 2 * 1000)
  }
  else {
      reject('oh no an error') // Va activer le .catch et ignorer les .then
  }
})
console.log(myPromise);
myPromise
  .then((response) => {
    const message = `Hello from the then function, message:  ${response}`;
    console.log(message);
    return message; // va etre utiliser par le .then qui suit
  })
  .then((response) => {
    const finalMessage = `Hello from the other then, message: ${response}`;
    return finalMessage;
  })
  .catch((error) => {
    console.log(`Hello from the catch, message: ${error}`);
  });*/
