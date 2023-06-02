var srodki=0;
var wydane=0;
var wygrane=0;
var bilans=0;
var nrgr=3;

function addm(x)
{
    var srodkiw = document.getElementById("srodkii");
    srodki=srodki+x;
    srodkiw.innerHTML = srodki+' zł';
}

function updates()
{
    bilans=wydane+wygrane;
    var srodkiw = document.getElementById("srodkii").innerHTML= srodki+' zł';
    var wydanee = document.getElementById("wydanee").innerHTML= wydane+" zł";
    var wygranee = document.getElementById("wygrane").innerHTML= wygrane+" zł";
    var bilanss = document.getElementById("bilans").innerHTML= bilans+" zł";
    nrgr++;
    document.getElementById("nrgr").innerHTML= nrgr;


    var elements = document.getElementsByClassName('wygrane');
   

    for (var i = 0; i < elements.length; i++) 
    {
      elements[i].style.backgroundColor = getRandomColor();
    }
  
}


//LICZBA KILK


