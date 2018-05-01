
var startId = 25;
var currentPosition = $('.box');
// var endId = $('#275');
var sword = false;
var encounter = false;
var shield = false;
var health = false;
var haveKey = false;
var swordMult = 1;
var shieldMult = 1;
var healthTotal = 10;



$(document).keydown(function(e) {
		statsBar();
    switch(e.which) {

        case 37: // left
				moveLeft();
        break;

        case 38: // up
				moveUp();
        break;

        case 39: // right
				moveRight();
        break;

        case 40: // down
				moveDown();
        break;

				case 70:
				fKey();
				break;

        default: return; // exit for other keys
    }

		e.preventDefault(); // prevent the default action (scroll / move caret)
});

//Left arrow
function moveLeft (){
	var newId = startId - 1;
	var nextPosition = $('#'+newId);
	if (nextPosition.hasClass('wall')){
		return;
	} else {
	$(nextPosition).addClass('box');
	$(currentPosition).removeClass('box');
	currentPosition = nextPosition;
	startId = newId;
	}
}

//Up arrow
function moveUp(){
	var newId = startId - 23;
	var nextPosition = $('#'+newId);
	if (nextPosition.hasClass('wall')){
		return;
	} else {
	$(nextPosition).addClass('box');
	$(currentPosition).removeClass('box');
	currentPosition = nextPosition;
	startId = newId;
	}
}

//Right arrow
function moveRight(){
	var newId = startId + 1;
	var nextPosition = $('#'+newId);
	if (nextPosition.hasClass('wall')){
		return;
	} else {
	$(nextPosition).addClass('box');
	$(currentPosition).removeClass('box');
	currentPosition = nextPosition;
	startId = newId;
	}
}

//Down arrow
function moveDown(){
	var newId = startId + 23;
	var nextPosition = $('#'+newId);
	if (nextPosition.hasClass('wall')){
		return;
	} else {
	$(nextPosition).addClass('box');
	$(currentPosition).removeClass('box');
	currentPosition = nextPosition;
	startId = newId;
	}
}

//F key/interract
function fKey(){
	if (currentPosition.hasClass('chest')){
		chestItem();
	} if (currentPosition.hasClass('door')){
		doorOpen();
	}
}

function chestItem(){
	if (currentPosition.is('#29')|| currentPosition.is("#38")){
		sword = true;
		console.log("You've found a sword, Your attack is increased +0.2!");
		currentPosition.removeClass('chest');
		swordMult = swordMult + 0.2;
		console.log(swordMult);
		currentPosition.addClass('chestSprite2')
	} if (currentPosition.is('#74')|| currentPosition.is("#264")){
		encounter = true;
		console.log("Enemy encountered!!");
		window.open('combat.html','GoogleWindow', 'width=800, height=600');
		currentPosition.removeClass('chest');
		currentPosition.addClass('chestSprite2')
	} if (currentPosition.is('#256')|| currentPosition.is("#250")){
		shield = true;
		console.log("You've found a shield, damage you take is reduced by +0.2!");
		currentPosition.removeClass('chest');
		shieldMult = shieldMult + 0.2;
		console.log(shieldMult);
		currentPosition.addClass('chestSprite2')
	} if (currentPosition.is('#174')|| currentPosition.is("#135")){
		health = true;
		console.log("You've found a health potion, your health has increased by 20%");
		currentPosition.removeClass('chest');
		healthTotal = healthTotal + 2;
		console.log(healthTotal);
		currentPosition.addClass('chestSprite2')
	} if (currentPosition.is("#213")){
		haveKey = true;
		console.log("You've found a Key, You can now open the door!");
		currentPosition.removeClass('chest');
		currentPosition.addClass('chestSprite2')
}
}

function statsBar(){
	var health = $("#healthBar")
	// health.value -= 10;
}

// function encounter(){
// 	if (encounter == true){
// 		window.open('combat.html','GoogleWindow', 'width=800, height=600');
// 	}
// }
