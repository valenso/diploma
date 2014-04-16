if (app.documents.length == 0) {
	var currentDoc = documents.add();
}
else{
	var currentDoc = app.activeDocument;
}
app.defaultStroked = true;
var component = {
	"name" : "component1",
	"articul" : 1,
	"coordinates" : [
					[10,10],
					[100,10],
					[100,100],
					[10,100],
					[10,10]
					]
};
function drawItem(item) {
	newPath = currentDoc.pathItems.add(); 
	newPath.setEntirePath(item.coordinates);
	return true;
};
	drawItem(component);
	zoomItem(component, 2);
	drawItem(component);
function moveItem(item,x,y){
	x = typeof x !== 'undefined' ? x : 0;
	y = typeof y !== 'undefined' ? y : 0;

	for (var index = 0; index < item.coordinates.length; ++index) {
    	item.coordinates[index][0] += x;
    	item.coordinates[index][1] += y;
	}

	return true;
};

function zoomItem(item, zoom){
	zoom = typeof zoom !== 'undefined' ? zoom : 1;

	var maxX = item.coordinates[0][0];
	var minX = item.coordinates[0][0];
	var maxY = item.coordinates[0][1];
	var minY = item.coordinates[0][1];

	for (var index = 0; index < item.coordinates.length; ++index) {
    	if (maxX < item.coordinates[index][0]){
    		maxX = item.coordinates[index][0];
    	}
    	else if (minX > item.coordinates[index][0]){
    		minX = item.coordinates[index][0];
    	}
    	if (maxY < item.coordinates[index][1]){
    		maxY = item.coordinates[index][1];
    	}
    	else if (minY > item.coordinates[index][1]){
    		minY = item.coordinates[index][1];
    	}
	}

	var centerX = (maxX - minX)/2 + minX;
	var centerY = (maxY - minY)/2 + minY;

	for (var index = 0; index < item.coordinates.length; ++index) {
		item.coordinates[index][0] = (item.coordinates[index][0] - centerX) * zoom + centerX; 
		item.coordinates[index][1] = (item.coordinates[index][1] - centerY) * zoom + centerY;
	}

	return true;
}
function createText(text, position){
	text = typeof text !== 'undefined' ? text : "I Love Scripting!";
	position = typeof position !== 'undefined' ? position : [0,0];

	var textRef = currentDoc.textFrames.add(); 
	textRef.contents = text; 
	textRef.top = position[0];
	textRef.left = position[1];
}