function start() {
  window.addEventListener('keydown', moves);
}

function moves(evt) {
var obj = document.getElementById("plane");
var sun = document.getElementById("sun");
var enemy = document.getElementById("enemy");
var enemy2 = document.getElementById("enemy2");
var enemy3 = document.getElementById("enemy3");
var enemy4 = document.getElementById("enemy4");
var enemy5 = document.getElementById("enemy5");
	
	
	console.log(sun.style.left);
if((Collision(obj,enemy)==0)||(Collision(obj,enemy2)==0)||(Collision(obj,enemy3)==0)||(Collision(obj,enemy4)==0)||(Collision(obj,enemy5)==0)||(Collision(obj,sun)==0)){
	window.alert("GameOver");
}
    switch (evt.keyCode) {
		case 37:
			if(obj.style.left >= "0px"){
				obj.style.left = parseInt(obj.style.left) - 10 + 'px';
			}
        break;
		case 39:
				obj.style.left = parseInt(obj.style.left) + 10 + 'px';
        break;
        case 38:
			if(obj.style.top >= "0px"){
				obj.style.top = parseInt(obj.style.top) - 10 + 'px';
			}
        break;
        case 40:
				obj.style.top = parseInt(obj.style.top) + 10 + 'px';
		break;
    }
};

function Collision(obj,enemy) {
	var  objleft, enemleft;
	var  objright, enemright;
	var  objtop, enemtop;
	var  objbottom, enembottom;
	objleft = parseInt(obj.style.left);
	enemleft = parseInt(enemy.style.left);
	objright = parseInt(obj.style.left) + 100;
	enemright = parseInt(enemy.style.left) + 50;
	objtop = parseInt(obj.style.top);
	enemtop = parseInt(enemy.style.top);
	objbottom = parseInt(obj.style.top) + 100;
	enembottom = parseInt(enemy.style.top) + 50;

	if (objbottom < enemtop){
        console.log("gameover");		
		return 0;
	}
	if (objtop > enembottom){
        console.log("gameover");		
		return 0;
	}
	if (objright < enemleft){
        console.log("gameover");		
		return 0;
	}
	if (objleft > enemright){
        console.log("gameover");		
		return 0;
	}

	return 1;
};

