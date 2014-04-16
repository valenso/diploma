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