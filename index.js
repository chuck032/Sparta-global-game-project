
var row1 = $('.r1');
var row2 = $('.r2');
var row3 = $('.r3');
var row4 = $('.r4');
var row5 = $('.r5');
var row6 = $('.r6');
var col1 = $('.c1');
var col2 = $('.c2');
var col3 = $('.c3');
var col4 = $('.c4');
var col5 = $('.c5');
var col6 = $('.c6');
var rows = [row1, row2, row3, row4, row5, row6];
var cols = [col1, col2, col3, col4, col5, col6];

var startId = 1
var currentPosition = $('.box');

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

				var newId = startId - 10;
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

				var newId = startId + 10;
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

        default: return; // exit for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});

function wallColl(){
	if (nextPosition.hasClass('.wall')){
		return;
	}
}
