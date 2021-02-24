// esercizio con comandi semplici

// var cognomi = ["Bianchi","Rossi","Duzioni","Balsano","Verdi"];
// var nuovo = prompt('inserire cognome');
// nuovo = nuovo.charAt(0).toUpperCase() + nuovo.slice(1);
// cognomi.push(nuovo);
// cognomi.sort();
// console.log('lista ordinata alfabeticamente: ' + cognomi);
// var indice = cognomi.indexOf(nuovo) + 1;
// console.log('posizione umana nuovo utente: ' + indice);

// /esercizio con comandi semplici

// soluzione artigianale (CE L'AVEVO IN MENTE ANCHE PRIMA CHE TSVETAN SUGGERISSE)
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
var cognomi = ["bianchi","rossi","gialli"];
console.log(cognomi);

var prova = [];
for (var i = 0; i < cognomi.length; i++) {
  prova[i] = cognomi[i][0];
}
console.log(prova);

var provaIndexes = [];
// for (var i = 0; i < prova.length; i++) {
//   provaIndexes[i] = ''; /* creo un array di valori vuoti lunga quanto prova, altrimenti quando faccio la conversione in numeri mi dà un undefined */
// }
console.log(provaIndexes);

// adesso deve avvenire il confronto, che costruisce un array in cui ogni lettera di ogni parola è convertita in numero
// for (var i = 0; i < prova.length; i++) { /* per ogni parola */
//   for (var j = 0; j < prova[i].length; j++) { /* per ogni lettera della parola in oggetto */
//     for (var k = 0; k < alphabetIndexes.length; k++) {
//       if (prova[i][j] == alphabet[k]) {
//         provaIndexes[i] += String(k);
//       }
//     }
//   }
// }
for (var i = 0; i < prova.length; i++) { /* per ogni parola */
    for (var k = 0; k < alphabetIndexes.length; k++) {
      if (prova[i] == alphabet[k]) {
        provaIndexes.push(k);
      }
    }
}
console.log(provaIndexes);

// ora servono delle istruzioni che mettano in ordine in base alla grandezza dei numeri di provaIndexes, quindi il problema si riconduce a riordinare dei numeri dal più piccolo al più grande
// nb: non ho tempo di capire bene perchè funziona ma credo funzioni
console.log(provaIndexes);
console.log(prova);
// for (var j = 0; j < 5; j++) {

// }
  for (var i = 0; i < provaIndexes.length; i++) {
    for (var k = 0; k < provaIndexes.length; k++) {
      while (provaIndexes[k] > provaIndexes[k + 1]) { /* cosa fa questo while: prende un numero, vede se il successivo è più piccolo, in caso affermativo li scambia, passa a quel numero, continua quell'operazione. Il for immediatamente esterno fa ricominciare la stessa operazione a partire dal secondo elemento, poi dal terzo,... e il for più esterno fa eseguire la stessa operazione da capo tante volte quanto è lungo l'array */
        var prima = provaIndexes[k];
        var dopo = provaIndexes[k + 1];
        provaIndexes[k] = dopo;
        provaIndexes[k + 1] = prima;
        // gli stessi cambi li faccio fare alle lettere
        var primaL = cognomi[k];
        var dopoL = cognomi[k + 1];
        cognomi[k] = dopoL;
        cognomi[k + 1] = primaL;
        k++;
      }
    }
}
console.log(provaIndexes);
console.log(cognomi);

