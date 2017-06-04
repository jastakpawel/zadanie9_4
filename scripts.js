function drawTree (h) {
	for (var i=0; i<h; i++) {
		var star = '';
		for (var j=-1; j<i; j++) {
			var star = star += '*';
		}
		console.log(star);
	}
}

var drawTree5 = drawTree (5);
var drawTree3 = drawTree (3);
var drawTree1 = drawTree (1);


