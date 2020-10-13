function sortPrint(x,y)
{
    if(x==true)
    {
        //var z = y.sort();
        console.log(y.sort(function(a, b){return a-b}));
    }
    else
    {
        //var z = y.reverse();
        console.log(y.sort(function(a, b){return b-a}));
    }
}
var y = [1,2,678,4,6,46,7];
//sortPrint(true, y);
sortPrint(false, y); 
