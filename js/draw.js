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