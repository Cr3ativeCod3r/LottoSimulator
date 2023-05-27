var hasla = [
  "Meet Me in the Hallway",
    "Sign of the Times",
    "Carolina",
    "Two Ghosts",
    "Sweet Creature",
    "Only Angel",
    "Kiwi",
    "Ever Since New York",
    "Woman",
    "From the Dining Table",
    "Golden",
    "Watermelon Sugar",
    "Adore You",
    "Lights Up",
    "Cherry",
    "Falling",
    "To Be So Lonely",
    "She",
    "Sunflower",
    "Canyon Moon",
    "Treat People with Kindness",
    "Fine Line",
    "Boyfriends",
    "Love of My Life",
    "Grapejuice",
    "Daydreaming",
    "Daylight",
    "Music For a Sushi Restaurant",
    "Little Freak",
    "Satellite",
    "As It Was",
    "Keep Driving",
    "Matilda",
    "Late Night Talking",
    "Cinema",
    "dont let me go",
    "medicine",
    "anna",
    "complicated freak",
    "baby honey",
    "him"
    
];

var haslo = hasla[Math.floor(Math.random() * hasla.length)];
haslo = haslo.toLocaleUpperCase();

var dlugosc = haslo.length;
var haslo1 = "";
var litery = new Array(35);
var die = 0;

litery[0] = "A";
litery[1] = "Ą";
litery[2] = "B";
litery[3] = "C";
litery[4] = "Ć";
litery[5] = "D";
litery[6] = "E";
litery[7] = "Ę";
litery[8] = "F";
litery[9] = "G";
litery[10] = "H";
litery[11] = "I";
litery[12] = "J";
litery[13] = "K";
litery[14] = "L";
litery[15] = "Ł";
litery[16] = "M";
litery[17] = "N";
litery[18] = "Ń";
litery[19] = "O";
litery[20] = "Ó";
litery[21] = "P";
litery[22] = "Q";
litery[23] = "R";
litery[24] = "S";
litery[25] = "Ś";
litery[26] = "T";
litery[27] = "U";
litery[28] = "V";
litery[29] = "W";
litery[30] = "X";
litery[31] = "Y";
litery[32] = "Z";
litery[33] = "Ż";
litery[34] = "Ź";

for (i = 0; i < dlugosc; i++) {
  if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
  else haslo1 = haslo1 + "-";
}

function write() {
  document.getElementById("board").innerHTML = haslo1;
}

var lastHaslo = ""; // zmienna przechowująca ostatnio wylosowane hasło
var ile=0;
function resetGame() 
{
 
  ile++;
  counter++
  if(ile>=42)
  {
    document.getElementById("szubienica").innerHTML ="";
    document.getElementById("board").innerHTML ="";
    document.getElementById("alf").style.fontSize="60px";
    document.getElementById("alf").innerHTML = 'DOBRZE: ' + good + '<br>' + 'ZLE: ' + bad + '<br/><br/><span class="reset3" onclick="location.reload()">OD NOWA</span>';

  }

  //IF NOT END
  if(ile<=41)
  {
  var newHaslo = hasla[Math.floor(Math.random() * hasla.length)]; // nowe hasło

  while (newHaslo === lastHaslo) { // sprawdzanie, czy nowe hasło jest takie samo jak poprzednie
    newHaslo = hasla[Math.floor(Math.random() * hasla.length)]; // losowanie ponownie
  }

  lastHaslo = newHaslo; // przypisanie nowego hasła do zmiennej lastHaslo

  haslo = newHaslo.toLocaleUpperCase();
  dlugosc = haslo.length;
  haslo1 = "";
  die = 0;

  var obraz = "s0.jpg";
  document.getElementById("szubienica").innerHTML = '<img src="' + obraz + '" alt="szubienica" />';

  for (i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == " ") haslo1 = haslo1 + " ";
    else haslo1 = haslo1 + "-";
  }

  var divv = "";

  for (i = 0; i < 35; i++) {
    var ele = "lit" + i;
    divv =
      divv +
      '<div class="litera" onclick="check(' +
      i +
      ')" id="' +
      ele +
      '">' +
      litery[i] +
      "</div>";
    if ((i + 1) % 7 == 0) divv = divv + '<div style="clear:both;"></div>';
  }

  document.getElementById("alf").innerHTML = divv;

  write();
 }
}



function start() {
  resetGame();
}

String.prototype.ustawZnak = function (miejsce, znak) {
  if (miejsce > this.length - 1) return this.toString();
  else return this.substr(0, miejsce) + znak + this.substr(miejsce + 1);
};

function check(nr) {
  var trafiona = false;

  for (i = 0; i < dlugosc; i++) {
    if (haslo.charAt(i) == litery[nr]) {
      haslo1 = haslo1.ustawZnak(i, litery[nr]);
      trafiona = true;
    }
  }

  if (trafiona == true) {
    var ele = "lit" + nr;
    document.getElementById(ele).style.background = "#003300";
    document.getElementById(ele).style.color = "lightgreen";
    document.getElementById(ele).style.border = "3px solid green";
    document.getElementById(ele).style.cursor = "default";
    write();
  } else {
    var ele = "lit" + nr;
    document.getElementById(ele).style.background = "#330000";
    document.getElementById(ele).style.color = "red";
    document.getElementById(ele).style.border = "3px solid red";
    document.getElementById(ele).style.cursor = "default";
    document.getElementById(ele).setAttribute("onclick", ";");

    die++;
    var obraz = "s" + die + ".jpg";
    document.getElementById("szubienica").innerHTML =
      '<img src="' + obraz + '" alt="chuj" />';
  }

  if (haslo == haslo1) 
  {
    document.getElementById("alf").innerHTML =
      "DOBRZE!!!" +
      '<br/><br/><span class="reset" onclick="resetGame()">NASTEPNA<br>TO BYŁA '+counter+'/41</span>'
    good++;
  }

  if (die >= 4) {
    document.getElementById("alf").innerHTML =
      "POPRAWNA ODPOWIEDZ: " +
      haslo +
      '<br/><br/><span class="reset1" onclick="resetGame()">NASTEPNA<br>TO BYŁA '+counter+'/41</span>'
      bad++;
  }
}

window.onload = start;
var bad=0;
var good=0;
var counter = 0;
