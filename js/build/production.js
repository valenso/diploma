if (app.documents.length == 0) {
	var currentDoc = documents.add();
}
else{
	var currentDoc = app.activeDocument;
}
app.defaultStroked = true;
var berec = {
	"name" : "berec",
	"articul" : 2,
	"contur" :[
		[0],
		[1],
		[1]
	],
	"allCoordinates" : [
					[436,43],
[451,33],
[469,31],
[492,31],
[514,36],
[538,40],
[555,47],
[572,54],
[566,75],
[562,93],
[558,119],
[558,140],
[558,160],
[563,178],
[572,193],
[582,210],
[595,225],
[610,236],
[622,245],
[638,257],
[643,266],
[636,284],
[626,297],
[618,309],
[607,323],
[595,335],
[580,344],
[557,352],
[543,355],
[536,355],
[533,348],
[510,345],
[490,339],
[474,330],
[461,321],
[451,309],
[434,299],
[428,288],
[424,283],
[427,263],
[428,242],
[428,219],
[428,201],
[429,185],
[429,166],
[429,150],
[429,130],
[429,116],
[429,97],
[429,80],
[430,61],
[432,48],
[432,41],
[436,43]
					]
};
var component = {
	"name" : "component1",
	"articul" : 1,
	"conturCoordinates" : [
		[10,10],
		[100,10]
	],
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

function drawConturItem(item){
	newPath = currentDoc.pathItems.add(); 
	newPath.setEntirePath(item.conturCoordinates);
	return true;
}
	var element = component;
	drawItem(element);
	zoomItem(element, 1.5);
	drawItem(element);
	drawConturItem(element);
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