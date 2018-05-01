
var startId = 25;
var currentPosition = $('.box');
var combatFrame = $(".combat-frame");
var sword = false;
var encounter = false;
var health = false;
var haveKey = false;
var swordMult = 1;

var attack = 10;

var healthTotal = 100;
var enemyhealth = 30;
var turn = 1;

var start = $("#start-battle");
var attackBtn = $("#attack");

var textDesc = $("#text-desc");
var runAway = $("#run");
var clicks = 0;

var divBox = $('#chestItemText')

//Hide combat UI
combatFrame.hide();

//arrow keys
$(document).keydown(function(e) {
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

//Chest items
function chestItem(){
	if (currentPosition.is('#29')|| currentPosition.is("#38")){
		sword = true;
		console.log("You've found a sword, Your attack is increased +0.2!");
		currentPosition.removeClass('chest');
		swordMult = swordMult + 0.2;
		console.log(swordMult);
		currentPosition.addClass('chestSprite2')
		$("#AMULTI").html("Attack Multiplyer: " + swordMult)
		discoverMult();
	} if (currentPosition.is('#74')|| currentPosition.is("#264")|| currentPosition.is('#250')){
		encounter = true;
		console.log("Enemy encountered!!");
		currentPosition.removeClass('chest');
		currentPosition.addClass('chestSprite2');
		discoverTrap();
		$(".map").hide();
		combatFrame.show();
	} if (currentPosition.is('#174')|| currentPosition.is("#135")||currentPosition.is('#256')){
		health = true;
		console.log("You've found a health potion, your health has increased by 20%");
		currentPosition.removeClass('chest');
		healthTotal = healthTotal + 20;
		console.log(healthTotal);
		currentPosition.addClass('chestSprite2')
		$("#HP").html("Health: " + healthTotal);
		discoverHealth();
	} if (currentPosition.is("#213")){
		haveKey = true;
		console.log("You've found a Key, You can now open the door!");
		currentPosition.removeClass('chest');
		currentPosition.addClass('chestSprite2')
		discoverKey();
	}
}

function discoverMult(){
divBox.html("<h2>You've disocvered an attack multiplier! Your attacks do 0.2x more damage</h2>")
}

function discoverHealth(){
divBox.html("<h2>You've disocvered a healthpotion! Your health increased by 20hp</h2>")
}

function discoverKey(){
divBox.html("<h2>You've disocvered a Key! I wonder what it opens</h2>")
}

function discoverTrap(){
divBox.html("<h2>You've walked into a trap! Get ready for combat!</h2>")
}


start.click(function(){
	turns();
	if (turn % 2 == 1){
		textDesc.append("<li>It's your turn to attack</li>");
		start.html("Continue");
		}
	 if (turn % 2 == 0) {
		 textDesc.append('<li>The enemy is attacking</li>');
		 start.html("Continue");
		enemyAtk();
	} if (enemyhealth == 0 || healthTotal == 0) {
		$(".map").show();
		combatFrame.hide();
		resetCombat();
	}
});

attackBtn.click(function(){
	var swordAtk = (attack*swordMult);
	if(turn % 2 == 1){
		if (enemyhealth >= swordAtk){
		enemyhealth = enemyhealth - swordAtk;
		textDesc.append('<li>You hit the enemy for ' + swordAtk + '</li>');
		enemyHP();
		turn = turn + 1;
		turns();
		} else {
		enemyhealth = 0;
		textDesc.append('<li>You have defeated the enemy</li>');
		enemyHP();
		}
	} else {
	return;
	}
});

runAway.click(function() {
	sentenceArray = ['<li>Unable to run away, the enemy has you cornered!</li>',"<li>Looks like you'll have to fight your way out!</li>","<li>Seriously you're trapped</li>", "<li>Please stop...</li>" ]
	textDesc.append(sentenceArray[clicks]);
	clicks += 1;
	return clicks
})

function enemyAtk (){
		if (healthTotal > 0){
			healthTotal = healthTotal - 10;
			textDesc.append('<li>You were hit for 10 damage</li>');
			userHP();
			turn = turn + 1;
			turns();
			userHP();
			return;
		} else {
			healthTotal = 0;
			textDesc.append('<li>You have been defeated</li>');
			userHP();
			return;
		}
}

function enemyHP(){
	$("#enemyHP").html("Health: " + enemyhealth);
}
enemyHP();

function userHP(){
	$("#HP").html("Health: " + healthTotal);
}
userHP();

function turns(){
	if (turn % 2 == 1) {
		$("#turnCount").html("Your Turn");
	} if (turn % 2 == 0) {
		$("#turnCount").html("Enemies Turn");
	}
}
turns();

function atk(){
	$("#ATK").html("Attack: " + attack)
}
atk();

function resetCombat(){
	turn = 1;
	enemyhealth = 30;
	clicks = 0;
	$('li').remove();
}
