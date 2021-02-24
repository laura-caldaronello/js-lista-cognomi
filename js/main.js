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

// ora servono delle istruzioni che mettano in ordine in base alla grandezza dei numeri di provaIndexes, quindi il problema si riconduce a riordinare dei numeri dal più piccolo al più grande
// selezionare il minore
// var nuovo = [];
// for (var i = 0; i < provaIndexes.length; i++) {
//   for (var k = 0; k < provaIndexes.length; k++) {
//     if (i != k) {
//       if (provaIndexes[i] > provaIndexes[k]) {
//         provaIndexes.push(provaIndexes[i]);
//         console.log(provaIndexes[i]);
//       }
//       // else if () {

//       // }
//     }
//   }
// }
var provaIndexes = [7,18,19,6,4,27,5,3,2,54];
console.log(provaIndexes);
for (var k = 0; k < provaIndexes.length; k++) {
  for (var i = 0; i < provaIndexes.length; i++) {
    while (provaIndexes[i] > provaIndexes[i + 1]) { /* questo ciclo while è un'operazione che si fa solo sull'elemento i di un array che va a spostarlo subito prima del maggiore successivo. va fatta tante volte quanti sono gli elementi dell'array, per questo il for esterno. il for più esterno di tutti va fatto perchè poi si deve ricominciare col nuovo assetto e ripetere l'algoritmo */
      var prima = provaIndexes[i];
      var dopo = provaIndexes[i + 1];
      provaIndexes[i] = dopo;
      provaIndexes[i + 1] = prima;
      i++;
    }
  }
}
console.log(provaIndexes);
