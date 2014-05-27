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
var osnov = {
	"name" : "osnov",
	"articul" : 4,
	"conturCoordinates" : [
		[10,10],
		[100,10]
	],
	"coordinates" : [
					[347.5,261],
[360.5,266],
[376.5,277],
[382.5,282],
[390.5,285],
[398.5,291],
[402.5,295],
[413.5,300],
[420.5,305],
[429.5,311],
[438.5,316],
[444.5,322],
[455.5,326],
[465.5,329],
[475.5,330],
[490.5,334],
[509.5,337],
[521.5,341],
[535.5,342],
[545.5,344],
[559.5,346],
[567.5,348],
[576.5,348],
[664.5,364],
[665.5,369],
[659.5,380],
[646.5,389],
[635.5,394],
[624.5,404],
[610.5,406],
[602.5,412],
[587.5,419],
[574.5,425],
[557.5,428],
[534.5,440],
[512.5,449],
[494.5,459],
[475.5,467],
[457.5,473],
[442.5,478],
[423.5,480],
[401.5,482],
[382.5,482],
[358.5,480],
[332.5,473],
[305.5,468],
[280.5,460],
[264.5,452],
[244.5,446],
[226.5,442],
[212.5,442],
[190.5,440],
[174.5,440],
[156.5,437],
[133.5,437],
[114.5,437],
[96.5,439],
[80.5,439],
[65.5,439],
[61.5,439],
[52.5,419],
[46.5,400],
[45.5,379],
[45.5,363],
[46.5,344],
[50.5,327],
[57.5,318],
[104.5,324],
[127.5,326],
[182.5,331],
[220.5,332],
[251.5,330],
[271.5,319],
[287.5,305],
[302.5,290],
[313.5,276],
[330.5,271],
[341.5,266],
[358.5,262],

					]
};
function intersection (first_line, second_line) {
	//определяем направление
	if (first_line[0][0] > first_line[1][0])
		var adjunct = -1;
	else
		var adjunct = 1;

	//начальное положение
	var currentX = first_line[0][0];

	//считаем количество шагов
    for (var i = 0; i < Math.abs(first_line[0][0] - first_line[1][0]); i++) {
        var y = GetYByX(first_line[0], first_line[1], currentX);
        var yy = GetYByX(second_line[0], second_line[1], currentX);
        if (Math.abs(y - yy) < 1.5 && isPointInLine(currentX,second_line))
        	return true;
        currentX += adjunct;
    }
}

function getYByX (point1,point2,x){
    return point1[1] + (x - point1[0])/(point2[0]-point1[0])*(point2[1]-point1[1]);
}

function isPointInLine (x,line){
	if (x > line[0][0] && x < line[1][0])
		return true;
	else if (x < line[0][0] && x > line[1][0])
		return true;
	else
		return false;
}
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
	/*var element = component;
	drawItem(element);
	zoomItem(element, 1.5);
	drawItem(element);
	drawConturItem(element);

	var element = osnov;
	drawItem(element);*/

var aiFile = File('~/Documents/diploma/April-version/js/build/test.ai');
app.open(aiFile);
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