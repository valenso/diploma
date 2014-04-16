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