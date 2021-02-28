// ordine alfabetico di parole con lettere minuscole e senza accenti
function order(words) {

  // definizione alfabeto e relativi indici
  var alphabet = ["0","1","2","3","4","5","6","7","8","9","A","a","à","B","b","C","c","D","d","E","e","è","é","F","f","G","g","H","h","I","i","ì","J","j","K","k","L","l","M","m","N","n","O","o","ò","P","p","Q","q","R","r","S","s","T","t","U","u","ù","V","v","W","w","X","x","Y","y","Z","z"];
  var alphabetIndexes = [0];
  var i = 1;
  while (i < alphabet.length) {
    alphabetIndexes[i] = alphabetIndexes[i - 1] + 1;
    i++;
    if (parseInt(alphabet[i - 1]) != alphabet[i - 1]) { /* se non ho appena inserito un numero */
      alphabetIndexes[i] = alphabetIndexes[i - 1]; /* perchè è la minuscola corrispondente */
      i++; /* e salto un i perchè l'ho appena dato */
      if (alphabet[i - 1] == "a" ||
          alphabet[i - 1] == "i" ||
          alphabet[i - 1] == "o" ||
          alphabet[i - 1] == "u") { /* è una lettera che in italiano può essere accentata una sola volta*/
        alphabetIndexes[i] = alphabetIndexes[i - 1];
        i++; /* e salto un i perchè l'ho appena dato */
      }
      else if (alphabet[i - 1] == "e") { /* è una lettera che in italiano può essere accentata due volte*/
        alphabetIndexes[i] = alphabetIndexes[i - 1];
        alphabetIndexes[i + 1] = alphabetIndexes[i - 1];
        i = i + 2; /* e salto due i perchè li ho appena dati */
      }
    }
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
    var k = 0;
    while (letters[i] != alphabet[k] && k < alphabetIndexes.length) {
      k++;
    }
    indexes[i] = alphabetIndexes[k];
  }
  
  for (var c = 0; c < words.length; c++) {
    var i = 0; /* a quale parola sono arrivata */
    var l = 0; /* prima lettera della parola a cui sono arrivata */
    var j = 0; /* indice a cui sono arrivata (una lettera della parola i) */
    while (i < lengths.length) {
      var k = lengths[i]; /* lunghezza della parola che si muove (i) */
      var bool = false;
      while (indexes[j] == indexes[j + k]) {
        if (j + 1 == l + k && k <= lengths[i + 1]) { /* sono arrivata all'ultima lettera della parola in esame (i), questa è più corta della seconda e la sua ultima lettera è uguale alla corrispondente della parola i + 1 (questa condizione me la dà il while). oppure le parole sono uguali */
          break; /* non deve succedere nulla (non si entrerà per forza di cose nel ciclo if immediatamente successivo al while) */
        }
        else if (j - l == lengths[i + 1] - 1 && k > lengths[i + 1]) { /* sono arrivata all'ultima lettera della parola i + 1 e la seconda parola è più corta (e la sua ultima lettera è uguale alla corrispondente della parola i come da ciclo while) */
          bool = true;
          break;
        }
        else {
          j++; /* vai avanti nella ricerca */
        }
      }
      if ((bool == true && !(indexes[j] > indexes[j + k])) || indexes[j] > indexes[j + k]) { /* se sono nella situazione in cui la parola i + 1 è più corta ed è coincidente con la prima parte della parola i, oppure se semplicemente ho trovato due lettere diverse tra le due parole e la parola i + 1 deve venire prima della parola i */
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

var parole = [];
numeroParole = prompt('inserire numero delle parole che si intende ordinare');
var i = 0;
while (parseInt(numeroParole) != numeroParole) { /* controllo del'input */
  alert('Valore non valido');
  numeroParole = prompt('inserire numero delle parole che si intende ordinare');
  i++;
}
var i = 0;
while (i < numeroParole) {
  parole[i] = prompt('inserire parola n. ' + (i + 1) + ' di ' + numeroParole);
  i++;
}
console.log(parole);
console.log(order(parole));