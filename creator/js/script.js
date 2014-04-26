document.addEventListener("DOMContentLoaded", init, false);

function writeMessage(canvas, message) {
    var context = canvas.getContext('2d');
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.font = '18pt Calibri';
    context.fillStyle = 'black';
    context.fillText(message, 10, 25);
}

function getMousePos(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
    	x: evt.clientX - rect.left,
        y: evt.clientY - rect.top
    };
}

function addPosition(message) {
	var text = document.getElementById('text');
	text.value += message + ',\n';
}

function init()
    {
        var canvas = document.getElementById('myCanvas');
		var context = canvas.getContext('2d');
		img = document.createElement("img");

		clearCanvas = function () {
			context.clearRect(0, 0, canvas.width, canvas.height);
		};

		canvas.addEventListener("dragover", function (evt) {
			evt.preventDefault();
		}, false);

		canvas.addEventListener("drop", function (evt) {
			var files = evt.dataTransfer.files;
			if (files.length > 0) {
				var file = files[0];
				if (typeof FileReader !== "undefined" && file.type.indexOf("image") != -1) {
					var reader = new FileReader();
					reader.onload = function (evt) {
						img.src = evt.target.result;
					};
					reader.readAsDataURL(file);
				}
			}
			evt.preventDefault();
		}, false);
        
        canvas.addEventListener('mousedown', function(evt){
			var mousePos = getMousePos(canvas, evt);
    		var message = '[' + mousePos.x + ',' + mousePos.y + ']';
    		addPosition(message);
		}, false);

		img.addEventListener("load", function () {
			clearCanvas();
			context.drawImage(img, 0, 0, canvas.width, canvas.height);
		}, false);
    }