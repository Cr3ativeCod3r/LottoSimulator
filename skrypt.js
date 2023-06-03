class Program {
  constructor(srodkiw, wydanee, wygranee, bilanss, nrgrElement) {
    this.srodkiw = srodkiw;
    this.wydanee = wydanee;
    this.wygranee = wygranee;
    this.bilanss = bilanss;
    this.nrgrElement = nrgrElement;
    this.srodki = 0;
    this.wydane = 0;
    this.wygrane = 0;
    this.bilans = 0;
    this.nrgr = 3;
  }

  addm(x) {
    this.srodki += x;
    this.srodkiw.innerHTML = this.srodki + ' zł';
  }

  updates() {
    this.bilans = this.wygrane - this.wydane;
    this.srodkiw.innerHTML = this.srodki + ' zł';
    this.wydanee.innerHTML = this.wydane + " zł";
    this.wygranee.innerHTML = this.wygrane + " zł";
    this.bilanss.innerHTML = this.bilans + " zł";
    this.nrgr++;
    this.nrgrElement.innerHTML = this.nrgr;

    var elements = document.getElementsByClassName('wygrane');

    for (var i = 0; i < elements.length; i++) {
      elements[i].style.backgroundColor = this.getRandomColor();
    }
  }
}


var picked=0;
var numbers = new Array(49);
var screen = [];
var robot = [];
var neww=1;



for(i=0;i<50;i++)
{
    numbers[i] = i;
}




window.onload = start;

function addn()
{  
   set.push(1);
   var addl = document.getElementsByClassName("moje");
   addl[i].innerHTML = set[i];
}


function start()
{
	
	var tresc_diva ="";
	for (i=1; i<=49; i++)
	{
		var element = "lit" + i;
		tresc_diva = tresc_diva + '<div class="liczba" onclick="push('+i+')" id="'+element+'">'+numbers[i]+'</div>';
		if ((i+1) % 7 ==0) tresc_diva = tresc_diva + '<div style="clear:both;"></div>';
	}
	
	document.getElementById("num").innerHTML = tresc_diva;
	

   
}

var added = document.getElementsByClassName("moje");


function push(x)
{
    if (!screen.includes(x)&&screen.length<=6) 
      {
        screen.push(x);
      }

     for (i = 0; i < screen.length; i++) 
        {
          added[i].innerHTML = screen[i];
        }
      
}

function clearr()
{

    screen.length=0;
    for (i = 0; i < 7; i++) 
        {
          added[i].innerHTML = "";
        }
}
function auto()
{
    
     while(screen.length!=6)
     {
        var x = Math.floor(Math.random() * 49) + 1;
       
    if (!screen.includes(x)) 
      {
        screen.push(x);
      }
    }
     for (i = 0; i < screen.length; i++) 
        {
          added[i].innerHTML = screen[i];
        }
}

var speed=1;

function sped(clickedButton,y)
{
  var buttons = document.getElementsByClassName("speed");

  for (var i = 0; i < buttons.length; i++) 
  {
    buttons[i].classList.remove("active");
  }
  clickedButton.classList.add("active");
  neww=y;
}



function getRandomColor() 
{
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) 
  {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}


function openModal() {
  document.getElementById("modal").style.display = "flex";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}











