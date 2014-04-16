var component = {
	"name" : "component1",
	"articul" : 1,
	"coordinates" : [
					[10,10],
					[20,20],
					[100,10],
					[100,100],
					[10,100],
					[10,10]
					]
};
app.defaultStroked = true;
function drawItem(item) {
	newPath = app.activeDocument.pathItems.add(); 
	newPath.setEntirePath(item.coordinates);
	return true;
};
if ( app.documents.length > 0 ) {
	drawItem(component);
	moveItem(component,-100,-200);
	drawItem(component);
	zoomItem(component);
}
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

	newPath = app.activeDocument.pathItems.add(); 
	newPath.setEntirePath([[maxX,maxY],[maxX,minY],[minX,minY],[minX,maxY],[maxX,maxY]]);
}