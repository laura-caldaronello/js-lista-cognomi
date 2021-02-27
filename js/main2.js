// ordine alfabetico di parole con lettere minuscole e senza accenti
function order(words) {

  // definizione alfabeto e relativi indici
  var alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
  var alphabetIndexes = [];
  for (var i = 0; i < alphabet.length; i++) {
    alphabetIndexes.push(i);
  }

  // vettore delle lunghezze delle singole parole in ingresso
  var lengths = [];
  var i = 0;
  while (i < words.length) {
    lengths[i] = words[i].length;
    i++;
  }

  // letters memorizza in sequenza le singole lettere delle parole
  var letters = [];
  var i = 0; /* contatore delle singole parole */
  var j = 0; /* memorizza l'ultimo indice di letters occupato, che dipende dalla lunghezza delle parole precedenti */
  while (i < words.length) {
    var k = 0; /* contatore delle lettere della singola parola */
    while (k < words[i].length) {
      letters[j + k] = words[i][k];
      k++;
    }
    j = j + k; /* ultimo indice di letters occupato */
    i++;
  }
 
  // indexes contiene le letters in formato numerico in base all'alfabeto creato
  var indexes = [];
  for (var i = 0; i < letters.length; i++) {
    for (var k = 0; k < alphabetIndexes.length; k++) {
      if (letters[i] == alphabet[k]) {
        indexes.push(k);
      }
    }
  }
  
  for (var c = 0; c < words.length; c++) {
    var i = 0; /* a quale parola sono arrivata */
    var l = 0; /* prima lettera della parola a cui sono arrivata */
    var j = 0; /* indice a cui sono arrivata (una lettera della prima parola del confronto) */
    while (i < lengths.length) {
      var k = lengths[i]; /* lunghezza della parola che si muove */
      while (indexes[j] == indexes[j + k]) {
        j++; /* finchè le lettere sono uguali vai avanti */
      }
      if (indexes[j] > indexes[j + k]) {
        indexes = switchElements(indexes,l,l + k,l + k + lengths[i + 1] - 1);
        letters = switchElements(letters,l,l + k,l + k + lengths[i + 1] - 1);
        lengths = switchElements(lengths,i,i + 1,i + 1);
        words = switchElements(words,i,i + 1,i + 1);
      }
      l = l + lengths[i];
      j = l;
      i++;
    }
  }
  
  return words;
  
}

// utilities

// start: indice reale della prima lettera della prima parte;
// change: indice reale della prima lettera della seconda parte;
// end: indice reale dell'ultima lettera della seconda parte;
function switchElements(array,start,change,end) {
  
  var arr1 = [];
  var k = 0;
  for (var i = start; i < change + 1; i++) {
    arr1[k] = array[i];
    k++;
  }
  
  var arr2 = [];
  var k = 0;
  for (var i = change; i < end + 1; i++) {
    arr2[k] = array[i];
    k++;
  }
  
  var k = 0;
  for (var i = start; i < end + 1 - change + start; i++) {
    array[i] = arr2[k];
    k++;
  }
  
  var k = 0;
  for (var i = end + 1 - change + start; i < end + 1; i++) {
    array[i] = arr1[k];
    k++;
  }
  
  return array;

}
  
// test

var words = ['patrocinio','patriarcato','patente','pattume','patrizio','patacareddu','vaccines','water','epistemiologico'];
console.log(words);
console.log(order(words));