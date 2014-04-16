function drawItem(item) {
	newPath = currentDoc.pathItems.add(); 
	newPath.setEntirePath(item.coordinates);
	return true;
};