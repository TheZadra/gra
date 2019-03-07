var wynikg1 = 0;
var wynikg2 = 0;
var gra1;
var gra2;


function graj()
{
	if (gra1 === "k" && gra2 === "p")
    {  
    wynikg2++;
    }
	
    if (gra1 === "k" && gra2 === "n")
    {  
    wynikg1++;
    }

  
    if (gra1 === "p" && gra2 === "n")
    {  
    wynikg2++;
    }

    if (gra1 === "p" && gra2 === "k")
    {  
    wynikg1++;
    }
	
	if (gra1 === "n" && gra2 === "k")
    {  
    wynikg2++;
    }
  
    if (gra1 === "n" && gra2 === "p")
    {  
    wynikg1++;
    }

  

  
  	document.getElementById('los1').disabled = false;
	document.getElementById('los2').disabled = false;
  
	
    document.getElementById('wynikg1').innerHTML = wynikg1;
    document.getElementById('wynikg2').innerHTML = wynikg2;
	
	
	gra1 = 0;
	gra2 = 0;
    return true;
}


function gracz1( dane )
{
    gra1 = dane;
    if(dane === 'p')
	{
		document.getElementById('bitewka1').innerHTML="<img src='paper.jpg'>"
	}
    if(dane === 'k')
	{
		document.getElementById('bitewka1').innerHTML="<img src='stone.jpg'>"
    }  
    if(dane === 'n')
	{
		document.getElementById('bitewka1').innerHTML="<img src='scissors.jpg'>"
    }  
}

function gracz2( dane )
{
    gra2 = dane;
    if(dane === 'p')
	{
		document.getElementById('bitewka2').innerHTML="<img src='paper.jpg'>"
    }
    if(dane === 'k')
	{
		document.getElementById('bitewka2').innerHTML="<img src='stone.jpg'>"
    }
    if(dane === 'n')
	{
		document.getElementById('bitewka2').innerHTML="<img src='scissors.jpg'>"
    }       
}



function computer( gracz )
{
    var wylosowano = 'k';
    var wynikLosowania = Math.floor(Math.random()*100);

    if ( wynikLosowania  > 33)
		{
         wylosowano = 'p';
		}
    if ( wynikLosowania  > 66)
		{
         wylosowano = 'n';
		}
		
    if (gracz == 1)
		{
        gracz1( wylosowano );
		document.getElementById('los1').disabled = true;
		}
    if (gracz == 2)
		{
        gracz2( wylosowano );
		document.getElementById('los2').disabled = true;
		}
	
	return true;
}   

function losowanie() 
{
    return Math.floor(Math.random()*100);
}
















