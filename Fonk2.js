function upperlowerPrint(x,y)
{
    if(x==true)
    {
        for(var i = 0; i < y.length; i++)
        {
            if(y[i] == y[i].toUpperCase()) { console.log(y[i]); }
        }
    }
    else
    {
        for(var j = 0; j < y.length; j++)
        {
            if(y[j] == y[j].toLowerCase()) { console.log(y[j]); }
        }
    }
}
var y = "TeRsTen De yAz";
upperlowerPrint(false, y);
