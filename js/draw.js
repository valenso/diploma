function drawItem(item) {
	newPath = app.activeDocument.pathItems.add(); 
	newPath.setEntirePath(item.coordinates);
};