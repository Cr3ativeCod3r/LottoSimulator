var interval; 
var games=1;
function game() 
{
  if(srodki>0 && screen.length==6)
  {
  var num = document.getElementById("num");
  var robotl = document.getElementsByClassName("wygrane");
  var robot = [];

  num.style.display = "none";


  function insertNumbers() 
  {
    var samee=0;
    var i=0;

    while(robot.length<6) 
    {
      var xx = Math.floor(Math.random() * 50) + 1;
      if(!robot.includes(xx))
      {
      robot.push(xx);
      robotl[i].innerHTML = robot[i];
      i++;
      } 
    }
    czek();
    
  }


  function clearNumbers() 
  {
    robot.length = 0;
    for (j = 0; j < robotl.length; j++) 
    {
      robotl[j].innerHTML = "";
    }
    wydane=wydane+2;
    srodki=srodki-2;
    updates();
  }
  
  function performActions() 
  {
    if(srodki>0 && screen.length==6)
    {
      if (robot.length < 6) 
      {
        insertNumbers();
       
        setTimeout(clearNumbers, speed);
      }
    }
   
  }

  





var oo=0;
var tt=0;
var tr=0;
var ff=0;
var fi=0;
var sx=0;

function czek() 
{
    var repeatedNumbers = [];
    var moje3 = document.getElementsByClassName("moje3");
    var wstaw = document.getElementById("win");
    var newTable = [];
    var now=0;
    
    
    for (var i = 0; i < screen.length; i++) 
    {
      var number = screen[i];
  
      if (robot.includes(number) ) 
      {
        now++
        repeatedNumbers.push(number);
        if(now==1)
        {
           for(y=0;y<6;y++)
          {
            newTable[y]=robot[y];
          }
        }
      }
    }

   

      if(repeatedNumbers.length==1)
      {  
        oo++;
        document.getElementById("one").innerHTML = oo;

       
      }
      if(repeatedNumbers.length==2)
      { tt++;
        document.getElementById("two").innerHTML = tt;
       
      }
      if(repeatedNumbers.length==3)
      { tr++;
        wygrane=wygrane+25;
        document.getElementById("three").innerHTML = tr;
       // wstaw.innerHTML += '<div class="plus">' + "+25zł" + '</div>';   
        

      }

      if(repeatedNumbers.length==4)
      {
        ff++;
        wygrane=wygrane+150;
        document.getElementById("four").innerHTML = ff;
        wstaw.innerHTML += '<div class="plus">' + "+150zł" + '</div>'; 
        games++;
        
       
      }

      if(repeatedNumbers.length==5)
      {
       
        fi++;
        wygrane=wygrane+5000;
        document.getElementById("five").innerHTML = fi;
        wstaw.innerHTML += '<div class="plus">' + "+5000zł" + '</div>';
        games++; 
        
      }

      if(repeatedNumbers.length==6)
      {sx++;
        wygrane=wygrane+1000000;
        document.getElementById("six").innerHTML = sx;
        wstaw.innerHTML += '<div class="plus">' + "+1000000zł" + '</div>'; 
        
        
      }

      if (repeatedNumbers.length > 3) 
      {
        
 
 
       for (var d = 0; d < 6; d++) 
       {
         if (screen.includes(robot[d])) 
         {
           
           wstaw.innerHTML += '<div class="mojewin">' + newTable[d] + '</div>';
         } 
         else {
           wstaw.innerHTML += '<div class="moje3">' + newTable[d] + '</div>';
         }
       } 
       
 
         newTable.length=0;
       }

       if (games%9===0) 
       { games==1;

         wstaw.innerHTML ="";
       
      }
      

    
      var winDiv = document.getElementById("win");
      winDiv.style.height = "500px"; // Ustawienie stałej wysokości diva "win"
      winDiv.style.overflowY = "auto"; // Dodanie paska przewijania w pionie
      repeatedNumbers.length==0;
    
}

var wyg = document.getElementById("wyg");
  if (interval) 
  {
    clearInterval(interval);
    interval = null;
    wyg.style.display = "none";
     num.style.display = "flex";
     document.getElementById("change").innerHTML="START";

  } else 
  {
    wyg.style.display = "flex";
    document.getElementById("change").innerHTML="STOP";
    interval = setInterval(performActions, speed);
  }
}
}





