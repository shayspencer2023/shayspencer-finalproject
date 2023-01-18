//Javascript code for the Title and the subtitle.
var titl = document.getElementById("imgtitl");
var text = document.getElementById("link1");
var timer = setInterval(mov, 13);
var move = 0;
var timer2 = setInterval(movtxt, 1)
var move2 = 0;

function mov(){
    titl.style.top = move + "px";
	move++;
	if(move >= 61){
	    clearInterval(timer);
	    }

}

function movtxt(){
    text.style.top = move2 + "px";
	move2++;
	if(move2 >= 211){
	    clearInterval(timer2);
	    }

}

var jobquiz = document.getElementById("jobquiz");
var b = 1;
var jcounter = document.getElementById("counterqqjob");
if(localStorage.getItem("times") != 1){
	jcounter.innerHTML = "You've done this test";
}

jobquiz.addEventListener("click", function(){
	b++;
	console.log(b);
	localStorage.setItem("times", b);
}
);


var traquiz = document.getElementById("travelquiz");
var a = 1;
var tcounter = document.getElementById("counterqqtravel");
if(localStorage.getItem("ttimes") != 1){
	tcounter.innerHTML = "You've done this test";
}
traquiz.addEventListener("click", function(){
	a++;
	console.log(a);
	localStorage.setItem("ttimes", a);
}
);


var hisquiz = document.getElementById("historyquiz");
var c = 1;
var hcounter = document.getElementById("counterqqhis");
if(localStorage.getItem("tttimes") != 1){
	hcounter.innerHTML = "You've done this test";
}

hisquiz.addEventListener("click", function(){
	c++;
	console.log(c);
	localStorage.setItem("tttimes", c);
}
);


var iqquiz = document.getElementById("iqquiz");
var d = 1;
var icounter = document.getElementById("counterqqiq");
if(localStorage.getItem("ttttimes") != 1){
	icounter.innerHTML = "You've done this test";
}

iqquiz.addEventListener("click", function(){
	d++;
	console.log(d);
	localStorage.setItem("ttttimes", d);
}

);