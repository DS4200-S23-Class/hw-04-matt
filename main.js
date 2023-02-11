(function(){
	console.log("linked");
})();

function clickPoint(name){
	let x = (parseInt(document.getElementById(name).getAttribute('cx')) - 30) / 40
	let y = (430 - parseInt(document.getElementById(name).getAttribute('cy'))) / 40
	document.getElementById("cord").innerHTML = "The point last clicked is at "+"(" + x +","+ y+")";
	document.getElementById(name).classList.toggle("circle-click");
}


i = 1;


function addPoint(){
x = document.getElementById("x_cord").options[document.getElementById("x_cord").selectedIndex].value;
y = document.getElementById("y_cord").options[document.getElementById("y_cord").selectedIndex].value;
var myCircle = document.createElementNS(document.getElementById("List"),"circle"); //to create a circle. for rectangle use "rectangle"
    myCircle.setAttributeNS(null, "id",i);
    i = i + 1;
    myCircle.setAttributeNS(null,"cx",x);
    myCircle.setAttributeNS(null,"cy",y);
    console.log(myCircle);
}


document.getElementById("Add")
		.addEventListener('click', addPoint);
