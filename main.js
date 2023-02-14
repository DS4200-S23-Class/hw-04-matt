(function(){
	console.log("linked");
})();
// It tells all the circles when its clicked to show the coordinates of the point
function setup() {
	var list_cir = document.getElementsByClassName("circle");
	for (i = 0; i<list_cir.length; i++){
		list_cir[i].addEventListener("click",clickPoint);
	};
}
setup()

// Function to get the coordinates of the last point clicked 
function clickPoint(){
	this.classList.toggle("circle-click");
	var x = (this.getAttribute('cx') - 30) / 40
	var y = (430 - this.getAttribute('cy')) / 40
	document.getElementById("cord").innerHTML = "The point last clicked is at "+"(" + x +","+ y+")";
	
}
//Function that adds the point whenever a user creates one from the website
function addPoint(){
var vx = document.getElementById("x_cord").options[document.getElementById("x_cord").selectedIndex].value;
var vy = document.getElementById("y_cord").options[document.getElementById("y_cord").selectedIndex].value;
//var myCircle = document.createElementNS(document.getElementById("List"),"circle"); //to create a circle. for rectangle use "rectangle"
    var myCircle = document.createElementNS('http://www.w3.org/2000/svg',"circle"); //to create a circle. for rectangle use "rectangle"
   //Change the x,y coordinates to the scale of the graph
	myCircle.setAttributeNS(null,"cx",vx * 40 + 30);
    myCircle.setAttributeNS(null,"cy",430 - vy * 40);
    myCircle.setAttributeNS(null,"r",12);
    myCircle.setAttributeNS(null,"class","circle");
    document.getElementById("list").appendChild(myCircle)
    console.log(myCircle);
    setup();
}
//Whenever the button is clicekd we call add point to add it to the graph
document.getElementById("Add")
		.addEventListener('click', addPoint);