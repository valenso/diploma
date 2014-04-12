var poligon = 
{
	"name" : "component1",
	"articul" : 1,
	"coordinates" : [
					[10,10],
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
}
if ( app.documents.length > 0 ) 
	drawItem(poligon);