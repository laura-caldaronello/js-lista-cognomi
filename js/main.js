// parto con la soluzione artigianale perchè ho una possibile soluzione (CE L'AVEVO IN MENTE ANCHE PRIMA CHE TSVETAN SUGGERISSE)
// l'idea generale è di confrontare ogni lettera necessaria di ogni cognome e confrontarla con un alfabeto già ordinato da me costruito

// costruisco questo alfabeto (NB: per rendere la soluzione ancora più artigianale eviterò di utilizzare anche indexOf)
var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// ora mi creo l'array degli indici per evitare di usare indexOf
var alphabetIndexes = [];
for (var i = 0; i < alphabet.length; i++) {
  alphabetIndexes.push(i);
}
// inserisco i controlli: fin qui tutto bene
console.log(alphabet);
console.log(alphabetIndexes);

// ora ho bisogno di un array di prova, per semplicità composto da singole lettere
var prova = ["g","s","t","k","a"];
var provaIndexes = [];

// adesso deve avvenire il confronto, che costruisce un array delle posizioni delle varie lettere nell'alfabeto
for (var i = 0; i < prova.length; i++) {
  for (var k = 0; k < alphabetIndexes.length; k++) {
    if (prova[i] == alphabet[k]) {
      provaIndexes.push(k);
    }
  }
}

