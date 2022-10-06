//all loops in one JS









/*var mybankbalance=0;
var msg=""
while(mybankbalance<= 20)
{
msg=msg + "My Bank Balance is rs."+mybankbalance+"<br>"
mybankbalance++
}
document.write(msg)*/
/*let text = "";
let i = 0;
do {
  text += i + "<br>";
  i++;
}
while (i < 5);
document.write(text)*/
/*let text = "";
for (let i = 0; i < 10; i++) {
  text += i + "<br>";
}
document.write(text)*/



var total=0;
for(var i=0; i<5; i++)
{
    var p = prompt(" Enter marks");
    total=total+parseInt(p);
   
}

document.write(total)



//2 dimensional array in js using for loop

var row = Number(prompt("Enter Row Number"));
var col = Number(prompt("Enter Column Number"));
for (let i = 0; i < row; i++)
 {
  for (let j = 0; j < col; j++) 
  {
    document.write("1 ");
  }
  document.write("<br>");
}
