

// changing individual properties with code and using setInterval
var waar = true;
var rotationSpeed = 0.05;
var rotationSpeed2 = 0.01;
var myOtherBox = document.getElementById('myOtherBox');

function spin(){
	if(waar == true){
	myOtherBox.object3D.rotation.x += rotationSpeed;
	myOtherBox.object3D.rotation.y += rotationSpeed;
	
	console.log(myOtherBox.object3D.rotation.x);
	console.log(myOtherBox.object3D.rotation.y);
	waar = false
	} else {
	myOtherBox.object3D.rotation.x += rotationSpeed2;
	myOtherBox.object3D.rotation.y += rotationSpeed2;
	
	console.log(myOtherBox.object3D.rotation.x);
	console.log(myOtherBox.object3D.rotation.y);
	waar = true
	}
}

setInterval(spin, -16); //equivalent to 60 fps
