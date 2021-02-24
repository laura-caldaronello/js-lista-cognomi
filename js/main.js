// esercizio con comandi semplici

var cognomi = ["Bianchi","Rossi","Duzioni","Balsano","Verdi"];
var nuovo = prompt('inserire cognome');
nuovo = nuovo.charAt(0).toUpperCase() + nuovo.slice(1);
cognomi.push(nuovo);
cognomi.sort();
console.log('lista ordinata alfabeticamente: ' + cognomi);
var indice = cognomi.indexOf(nuovo) + 1;
console.log('posizione umana nuovo utente: ' + indice);

// /esercizio con comandi semplici

// // bonus: soluzione artigianale (PER ORA RIESCE A RIORDINARE I COGNOMI SOLO IN BASE ALLA PRIMA LETTERA)
// // l'idea generale è di confrontare ogni prima (per ora) lettera di ogni cognome e confrontarla con un alfabeto già ordinato da me costruito

// // costruisco questo alfabeto (NB: per rendere la soluzione ancora più artigianale eviterò di utilizzare anche indexOf)
// var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
// // ora mi creo l'array degli indici per evitare di usare indexOf
// var alphabetIndexes = [];
// for (var i = 0; i < alphabet.length; i++) {
//   alphabetIndexes.push(i);
// }
// // inserisco i controlli: fin qui tutto bene
// console.log(alphabet);
// console.log(alphabetIndexes);

// // ora ho bisogno di un array di prova
// var cognomi = ["bianchi","rossi","duzioni","balsano","verdi"];
// console.log(cognomi);

// // array delle iniziali
// var lettera = [];
// for (var i = 0; i < cognomi.length; i++) {
//   lettera[i] = cognomi[i][0];
// }
// console.log(lettera);

// var letteraIndexes = [];
// console.log(letteraIndexes);
// // adesso deve avvenire il confronto, che costruisce un array in cui ogni iniziale è convertita in numero
// for (var i = 0; i < lettera.length; i++) { /* per ogni parola */
//     for (var k = 0; k < alphabetIndexes.length; k++) {
//       if (lettera[i] == alphabet[k]) {
//         letteraIndexes.push(k);
//       }
//     }
// }
// console.log(letteraIndexes);

// // ora servono delle istruzioni che mettano in ordine in base alla grandezza dei numeri di letteraIndexes, quindi il problema si riconduce a riordinare dei numeri dal più piccolo al più grande
// // nb: non ho tempo di capire bene perchè funziona ma credo funzioni
// console.log(letteraIndexes);
// console.log(lettera);
//   for (var i = 0; i < letteraIndexes.length; i++) {
//     for (var k = 0; k < letteraIndexes.length; k++) {
//       while (letteraIndexes[k] > letteraIndexes[k + 1]) { /* cosa fa questo while: prende un numero, vede se il successivo è più piccolo, in caso affermativo li scambia, passa a quel numero, continua quell'operazione. Il for immediatamente esterno fa ricominciare la stessa operazione a partire dal secondo elemento, poi dal terzo,... e il for più esterno fa eseguire la stessa operazione da capo tante volte quanto è lungo l'array */
//         var prima = letteraIndexes[k];
//         var dopo = letteraIndexes[k + 1];
//         letteraIndexes[k] = dopo;
//         letteraIndexes[k + 1] = prima;
//         // gli stessi cambi li faccio fare ai cognomi corrispondenti
//         var prima = cognomi[k];
//         var dopo = cognomi[k + 1];
//         cognomi[k] = dopo;
//         cognomi[k + 1] = prima;
//         k++;
//       }
//     }
// }
// console.log(letteraIndexes);
// console.log(cognomi);

// // A QUESTO PUNTO DOVREI PRENDERE TUTTI I COGNOMI CHE INIZIANO CON LA STESSA LETTERA E RIORDINARLI IN BASE ALLA SECONDA LETTERA E COSì VIA