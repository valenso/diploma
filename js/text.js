function createText(text, position){
	text = typeof text !== 'undefined' ? text : "I Love Scripting!";
	position = typeof position !== 'undefined' ? position : [0,0];

	var textRef = currentDoc.textFrames.add(); 
	textRef.contents = text; 
	textRef.top = position[0];
	textRef.left = position[1];
}