var picked=0;
var numbers = new Array(50);
var screen = [];
var robot = [];



for(i=0;i<51;i++)
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
	for (i=1; i<=50; i++)
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
        var x = Math.floor(Math.random() * 50) + 1;
       
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
  speed=y;
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











