function moveItem(item,x,y){
	x = typeof x !== 'undefined' ? x : 0;
	y = typeof y !== 'undefined' ? y : 0;

	for (var index = 0; index < item.coordinates.length; ++index) {
    	item.coordinates[index][0] += x;
    	item.coordinates[index][1] += y;
	}

	return true;
};