const { doc } = require("prettier");

function Calo()
{
    var b=document.getElementById('br'.value);
    var s=document.getElementById('snack'.value);
    var l=document.getElementById('lu'.value);
    var d=document.getElementById('din'.value);

    var calom = calo * 1.4;

    document.getElementById("resultcal").innerHTML="Your Daily Calories Intake: "+calom;
}
    // shows protein, fats, carbs in line chart
