
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
var start = $('#'+startId);

var currentPosition = $('.box');







$(document).keydown(function(e) {

    switch(e.which) {
        case 37: // left
				$(currentPosition).removeClass('box');
				var newId = startId - 1;
				var nextPosition = $('#'+newId);
				$(nextPosition).addClass('box');
				currentPosition = nextPosition;
				startId = newId;

        break;

        case 38: // up
				$(currentPosition).removeClass('box');
				var newId = startId - 10;
				var nextPosition = $('#'+newId);
				$(nextPosition).addClass('box');
				currentPosition = nextPosition;
				startId = newId;
        break;

        case 39: // right
				$(currentPosition).removeClass('box');
				var newId = startId + 1;
				var nextPosition = $('#'+newId);
				$(nextPosition).addClass('box');
				currentPosition = nextPosition;
				startId = newId;
        break;

        case 40: // down
				$(currentPosition).removeClass('box');
				var newId = startId + 10;
				var nextPosition = $('#'+newId);
				$(nextPosition).addClass('box');
				currentPosition = nextPosition;
				startId = newId;
        break;

        default: return; // exit for other keys
    }
    e.preventDefault(); // prevent the default action (scroll / move caret)
});





// function findBox(){
// 		currentPosition = $('.box')
//
// 	}
// 	if (row2.hasClass('box')){
// 		var boxRow = rows[1];
// 		return boxRow;
// 	}
// 	if (row3.hasClass('box')){
// 		var boxRow = rows[2];
// 		return boxRow;
// 	}
// 	if (row4.hasClass('box')){
// 		var boxRow = rows[3];
// 		return boxRow;
// 	}
// 	if (row5.hasClass('box')){
// 		var boxRow = rows[4];
// 		return boxRow;
// 	}
// 	if (row6.hasClass('box')){
// 		var boxRow = rows[5];
// 		return boxRow;
// 	}
// }


// function findCol(){
// 	if (col1.hasClass('box')){
// 		var boxCol = cols[0];
// 		return boxCol;
// 	}
// 	if (col2.hasClass('box')){
// 		var boxCol = cols[1];
// 		return boxCol;
// 	}
// 	if (col3.hasClass('box')){
// 		var boxCol = cols[2];
// 		return boxCol;
// 	}
// 	if (col4.hasClass('box')){
// 		var boxCol = cols[3];
// 		return boxCol;
// 	}
// 	if (row5.hasClass('box')){
// 		var boxCol = cols[4];
// 		return boxCol;
// 	}
// 	if (col6.hasClass('box')){
// 		var boxCol = cols[5];
// 		return boxCol;
// 	}
// }


// findRow();
// console.log(findRow());
// findCol();
// console.log(findCol());
