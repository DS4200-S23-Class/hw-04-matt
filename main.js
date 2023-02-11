(function(){
	console.log("linked");
})();

function clickPoint(name){
	let x = (parseInt(document.getElementById(name).getAttribute('cx')) - 30) / 40
	let y = (430 - parseInt(document.getElementById(name).getAttribute('cy'))) / 40
	document.getElementById("cord").innerHTML = "(" + x +","+ y+")";
	document.getElementById(name).classList.toggle("circle-click");
}

/*document.getElementsByTagName('circle')
		.addEventListener('click', clickPoint);*/
