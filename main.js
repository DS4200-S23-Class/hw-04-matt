(function(){
	console.log("linked");
})();

function clickPoint1(){
	document.getElementById("cord").innerHTML = "(1, 2)";
}
document.getElementById("circle1")
		.addEventListener('click', clickPoint1);

function clickPoint2(){
	document.getElementById("cord").innerHTML = "(2, 4)";
}

document.getElementById("circle2")
		.addEventListener('click', clickPoint2);

function clickPoint3(){
	document.getElementById("cord").innerHTML = "(6, 2)";
}

document.getElementById("circle3")
		.addEventListener('click', clickPoint3);

function clickPoint4(){
	document.getElementById("cord").innerHTML = "(9, 9)";
}

document.getElementById("circle4")
		.addEventListener('click', clickPoint4);


