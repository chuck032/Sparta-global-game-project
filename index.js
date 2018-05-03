
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
var reckStrike = $('#recklessStrike')

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
	if (currentPosition.is('#28')){
		sword = true;
		currentPosition.removeClass('chest');
		swordMult = swordMult + 0.2;
		console.log(swordMult);
		$('#29').removeClass('chestSprite');
		$('#29').addClass('chestSprite2');
		$("#AMULTI").html("Attack Multiplyer: " + swordMult);
		discoverMult();
	} if (currentPosition.is("#37")) {
		sword = true;
		currentPosition.removeClass('chest');
		swordMult = swordMult + 0.2;
		console.log(swordMult);
		$('#38').removeClass('chestSprite');
		$('#38').addClass('chestSprite2');
		$("#AMULTI").html("Attack Multiplyer: " + swordMult);
		discoverMult();
	} if (currentPosition.is('#73')){
		encounter = true;
		discoverTrap();
		currentPosition.removeClass('chest');
		$('#74').removeClass('chestSprite');
		$('#74').addClass('chestSprite2');
		$(".map").hide();
		combatFrame.show();
		divBox.show();
	} if (currentPosition.is("#263")){
		encounter = true;
		discoverTrap();
		currentPosition.removeClass('chest');
		$('#264').removeClass('chestSprite');
		$('#264').addClass('chestSprite2');
		$(".map").hide();
		combatFrame.show();
		divBox.show();
	} if (currentPosition.is('#273')) {
		encounter = true;
		discoverTrap();
		currentPosition.removeClass('chest');
		$('#250').removeClass('chestSprite');
		$('#250').addClass('chestSprite2');
		$(".map").hide();
		combatFrame.show();
		divBox.show();
	} if (currentPosition.is('#173')){
		health = true;
		currentPosition.removeClass('chest');
		if (healthTotal <= 80){
		healthTotal = healthTotal + 20;
		$('#174').removeClass('chestSprite');
		$('#174').addClass('chestSprite2');
		$("#HP").html("Health: " + healthTotal);
		discoverHealth();
		userHP();
		} if (healthTotal <= 100){
		healthTotal = 100;
		$('#174').removeClass('chestSprite');
		$('#174').addClass('chestSprite2');
		$("#HP").html("Health: " + healthTotal);
		discoverHealth();
		userHP();
		}
	} if (currentPosition.is("#136")) {
		health = true;
		currentPosition.removeClass('chest');
		if (healthTotal <= 80){
		healthTotal = healthTotal + 20;
		$('#135').removeClass('chestSprite');
		$('#135').addClass('chestSprite2');
		$("#HP").html("Health: " + healthTotal);
		discoverHealth();
		userHP();
		} if (healthTotal <= 100){
		healthTotal = 100;
		$('#135').removeClass('chestSprite');
		$('#135').addClass('chestSprite2');
		$("#HP").html("Health: " + healthTotal);
		discoverHealth();
		userHP();
		}
	} if (currentPosition.is('#255')) {
		health = true;
		currentPosition.removeClass('chest');
		if (healthTotal <= 80){
		healthTotal = healthTotal + 20;
		$('#256').removeClass('chestSprite');
		$('#256').addClass('chestSprite2');
		$("#HP").html("Health: " + healthTotal);
		discoverHealth();
		userHP();
		} if (healthTotal <= 100){
		healthTotal = 100;
		$('#256').removeClass('chestSprite');
		$('#256').addClass('chestSprite2');
		$("#HP").html("Health: " + healthTotal);
		discoverHealth();
		userHP();
		}
	} if (currentPosition.is("#190")){
		haveKey = true;
		currentPosition.removeClass('chest');
		$('#213').removeClass('chestSprite');
		$('#213').addClass('chestSprite2');
		discoverKey();
	}
}

//Function for door
function doorOpen(){
	if (currentPosition.is('#275')) {
		divBox.html("<h2>Currently under construction!</h2>")
		$('.map').hide();
	}
}

//Message for chest discoveries
function discoverMult(){
divBox.html("<h2>You've discovered an attack multiplier! Your attack multiplier is increased by 0.2</h2>")
}
function discoverHealth(){
divBox.html("<h2>You've discovered a health potion! You have recovered 20hp</h2>")
}
function discoverKey(){
divBox.html("<h2>You've discovered a Key! I wonder what it opens</h2>")
}
function discoverTrap(){
divBox.html("<h2>You've walked into a trap! Get ready for combat!</h2>")
}

//Start button for combat
start.click(function(){
	turns();
	if (turn % 2 == 1){
		clearList();
		textDesc.prepend("<li class = 'userLog'>It's your turn to attack</li>");
		start.html("Continue");
		}
	 if (turn % 2 == 0) {
		 enemyAtk();
		 clearList();
		 textDesc.prepend('<li class = "enemyLog">The enemy is attacking</li>');
		 start.html("Continue");
	} if (enemyhealth == 0 || healthTotal == 0) {
		$(".map").show();
		combatFrame.hide();
		resetCombat();
	}
});

//Attack button for combat
attackBtn.click(function(){
	if(turn % 2 == 1){
		var swordAtk = attack*swordMult;
		if (enemyhealth >= swordAtk){
		enemyhealth = enemyhealth - swordAtk;
		clearList();
		textDesc.prepend('<li class = "userLog">You hit the enemy for ' + swordAtk + '</li>');
		enemyHP();
		turn = turn + 1;
		turns();
		} else {
		enemyhealth = 0;
		clearList();
		textDesc.prepend('<li class = "userLog">You have defeated the enemy</li>');
		enemyHP();
		}
	} else {
		clearList();
		textDesc.prepend('<li class = "enemyLog">Not your turn. Click the continue button</li>');
	return;
	}
});

reckStrike.click(function(){
	if(turn % 2 == 1){
		ranNum();
		console.log(rng);
		if (rng === 1) {
			var recStri = (attack*swordMult)*2;
				if (enemyhealth >= recStri){
				enemyhealth = enemyhealth - recStri;
				clearList();
				textDesc.prepend('<li class = "userLog">You hit the enemy for ' + recStri + '</li>');
				enemyHP();
				turn = turn + 1;
				turns();
				} else {
				enemyhealth = 0;
				clearList();
				textDesc.prepend('<li class = "userLog">You have defeated the enemy</li>');
				enemyHP();
				}
		}	else {
			clearList();
			textDesc.prepend('<li class = "userLog">Your attack missed the enemy</li>');
			enemyHP();
			turn = turn + 1;
			turns();
		}
	}else {
		clearList();
		textDesc.prepend('<li class = "enemyLog">Not your turn. Click the continue button</li>');
	return;
	}
});

//Random number generator
function ranNum(){
	var numArray = [1,2,3];
	rng = numArray[Math.floor(Math.random() * 3 )];
	return rng;
}

//Run away button for combat
runAway.click(function() {
	sentenceArray = ['<li class = "userLog">Unable to run away, the enemy has you cornered!</li>',"<li class = 'userLog'>Looks like you'll have to fight your way out!</li>","<li class = 'userLog'>Seriously you're trapped</li>", "<li class = 'userLog'>Please stop...</li>" ]
	clearList();
	textDesc.prepend(sentenceArray[clicks]);
	clicks += 1;
	return clicks
})

//AI attack
function enemyAtk (){
		if (healthTotal > 0){
			healthTotal = healthTotal - 10;
			clearList();
			textDesc.prepend('<li class = "enemyLog">You were hit for 10 damage</li>');
			userHP();
			turn = turn + 1;
			turns();
			userHP();
			return healthTotal;
		} else {
			healthTotal = 0;
			clearList();
			textDesc.prepend('<li class ="enemyLog">You have been defeated</li>');
			userHP();
			return;
		}
}

//Function for enemy HP
function enemyHP(){
	$("#enemyHP").html("Health: " + enemyhealth);
	$("#eHealth").val(enemyhealth);
}
enemyHP();

//Function for user HP
function userHP(){
	$("#HP").html("Health: " + healthTotal);
	$("#myHealth").val(healthTotal);
}
userHP();

//Function for turn counter
function turns(){
	if (turn % 2 == 1) {
		$("#turnCount").html("Your Turn");
	} if (turn % 2 == 0) {
		$("#turnCount").html("Enemies Turn");
	}
}
turns();

//Function to display attack stat
function atk(){
	$("#ATK").html("Attack: " + attack)
}
atk();

//Function to reset combat data
function resetCombat(){
	turn = 1;
	enemyhealth = 30;
	clicks = 0;
	$('li').remove();
}

resetCombat()

//Clear last item on list
function clearList(){
	if ($("#text-desc li").length > 5){
		$('#text-desc li').last().remove();
	}
}



// function gameOver(){
// 	if (healthTotal === 0){
// 		window.open("gameOver.html")
// 	}
// }
