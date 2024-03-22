function calculate()
{

const milliliterVal=Number(document.getElementById("inputField").value);
const literVal=milliliterVal/1000;
const result=document.getElementById("resultBox");
if(literVal<=1)
result.innerHTML="Result : " + literVal.toFixed(2)+" liter";
else
result.innerHTML="Result : " + literVal.toFixed(2)+" liters"

}