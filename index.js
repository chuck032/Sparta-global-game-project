
var startId = 25;
var currentPosition = $('.box');
var endId = $('#275');


$(document).keydown(function(e) {

    switch(e.which) {

        case 37: // left

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
        break;

        case 38: // up


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

        break;

        case 39: // right

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
        break;

        case 40: // down

				var newId = startId + 23;
				var nextPosition = $('#'+newId);
				if (nextPosition.hasClass('wall')){
					return;
				} else {
				$(nextPosition).addClass('box');
				$(currentPosition).removeClass('box');
				gameEnd();
				currentPosition = nextPosition;
				startId = newId;
				}
        break;

        default: return; // exit for other keys
    }
		// gameEnd();
		e.preventDefault(); // prevent the default action (scroll / move caret)
});

function gameEnd() {
	if (endId.hasClass('box')){
		alert("END!");
	}
}

function gameTime(){
	
}
