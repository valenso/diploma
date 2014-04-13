app.defaultStroked = true;
function drawItem(item) {
	newPath = app.activeDocument.pathItems.add(); 
	newPath.setEntirePath(item.coordinates);
}
if ( app.documents.length > 0 ) 
	drawItem(poligon);