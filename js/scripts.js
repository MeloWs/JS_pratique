function palindrome(word) {
  if (typeof word === "string") {
    const comparison = word.split("").reverse().join("");
    if (comparison === word) {
      return true;
    } else return false;
  } else return "Merci de mettre une string valable";
}
console.log(palindrome("kayak")); // true
console.log(palindrome("noname")); // false
console.log(palindrome(1)); //Merci de mettre une string valable

// =======================================================================
// FindLongestWord

function findLongestWord(sentence) {
  const words = sentence.split(" "); // ['string', 'string', 'string']

  let result = 0;
  let word = null;
  for (let i = 0; i < words.length; ++i) {
    if (result < words[i].length) {
      result = words[i].length;
      word = words[i];
    }
  }
  return word;
}

console.log(
  findLongestWord("Le chemin le plus cours n'est pas toujours le meilleur")
);

// =======================================================================
// Merge

const merge = (element1, element2) => {
  let fusion = { a: [], b: [], c: [] };
  if (element1.a) {
    if (element2.a) {
      fusion.a = fusion.a.concat(element1.a, element2.a);
    } else fusion.a = fusion.a.concat(element1.a);
  }
  if (element1.b) {
    if (element2.b) {
      fusion.b = fusion.b.concat(element1.b, element2.b);
    } else fusion.b = fusion.b.concat(element1.b);
  } else if (element2.b) fusion.b = fusion.b.concat(element2.b);

  if (element1.c && element2.c) {
    fusion.c = fusion.c.concat(element1.c, element2.c);
  } else if (element1.c) {
    if (Array.isArray(element1.c)) fusion.c = fusion.c.concat(element1.c);
    else fusion.c = element1.c;
  } else if (element2.c) {
    if (Array.isArray(element2.c)) fusion.c = fusion.c.concat(element2.c);
    else fusion.c = element2.c;
  }

  return fusion;
};

const wu = {
  a: [{ x: 2 }, { y: 4 }],
  b: 1,
};
const tang = {
  a: { z: 3 },
  b: [2, 3],
  c: "foo",
};
const clan = {
  a: { t: 5 },
  c: "foo",
};
const expectedResult1 = {
  a: [{ x: 2 }, { y: 4 }, { z: 3 }],
  b: [1, 2, 3],
  c: "foo",
};
const expectedResult2 = {
  a: [{ z: 3 }, { t: 5 }],
  b: [2, 3],
  c: ["foo", "foo"],
};

console.log(
  JSON.stringify(merge(wu, tang)) === JSON.stringify(expectedResult1)
);
console.log(
  JSON.stringify(merge(tang, clan)) === JSON.stringify(expectedResult2)
);

// =======================================================================
// L33t Sp34k

function leet(word) {
  var chars = { a: "4", e: "3", i: "1", u: "(_)", y: "7", o: "0" };
  if (word === "") {
    return "w";
  } else if (typeof word === "string") {
    for (let i = 0; i < word.length; i++) {
      let leetResult;
      leetResult = chars[word[i].toLowerCase()];
      if (leetResult) {
        word = word.replace(word[i], leetResult);
      }
    }
    return word; //.join(" ");
  } else return "Merci de mettre une string valable";
}
console.log(
  leet('BADBADNOTGOOD - "In Your Eyes" (Feat. Charlotte Day Wilson)')
); // B4DB4DN0TG00D - "1n 70(_)r 373s" (F34t. Ch4rl0tt3 D47 W1ls0N)
console.log(leet("")); // w
console.log(leet(1)); // Merci de mettre une string valable

// =======================================================================
// Prop Access

function propAccess(object, path) {
  let obj = object;
  const objpath = path.split(".");
  objpath.forEach((key) => {
    if (obj[key]) {
      obj = obj[key];
    } else obj = path + " does not exist";
  });
  return obj;
}

const farm = {
  animal: {
    type: { name: "cow" },
    color: "verte",
    bonus: {
      sparkly: true,
      3: "No at least 7",
    },
  },
};
console.log(propAccess(farm, "animal.type.name")); // "cow"
console.log(propAccess(farm, "animal.affiliation.name")); // "animal.affiliation does not exist"
console.log(propAccess(farm, "animal.bonus.3")); // "No at least 7"
