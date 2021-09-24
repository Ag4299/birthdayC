const bmonth = document.getElementById("bmonth").value;
const bday = document.getElementById("bday").value;
const secs = Math.floor(1000);
const mins = Math.floor(1000 * 60);
const hrs = Math.floor(1000 * 60 * 60);
const days = Math.floor(1000 * 60 * 60 * 24);
//const byear = document.getElementById("byear").value;

const date = new Date();

var t;

if(date.getMonth() + 1 > bmonth || (date.getMonth() + 1 == bmonth && date.getDate() + 1 > bday))
{
    t = new Date().getFullYear() + 1;
}
else
{
    t = new Date().getFullYear();
}

t.innerHTML = t;

function countdown(){
    const remaining = new Date('${t}-${bmonth}-${bday} 00:00:00') - new Date();
    days = remaining / days;
    hrs = remaining / hrs;
    mins = remaining / mins;
    secs = remaining / secs;
    document.getElementById("cdays").innerHTML = (days).value;
    document.getElementById("chrs").innerHTML = hrs;
    document.getElementById("cmin").innerHTML = mins;
    document.getElementById("csecs").innerHTML = secs;
}



countdown();
setInterval(countdown, 1000);


/*if(countdown == 0)
{
alert("Happy Birthday!");
}*/
