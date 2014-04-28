function intersection (first_line, second_line) {
	//определяем направление
	if (first_line[0][0] > first_line[1][0])
		var adjunct = -1;
	else
		var adjunct = 1;

	//начальное положение
	var currentX = first_line[0][0];

	//считаем количество шагов
    for (var i = 0; i < Math.abs(first_line[0][0] - first_line[1][0]); i++) {
        var y = GetYByX(first_line[0], first_line[1], currentX);
        var yy = GetYByX(second_line[0], second_line[1], currentX);
        if (Math.abs(y - yy) < 1.5 && isPointInLine(currentX,second_line))
        	return true;
        currentX += adjunct;
    }
}

function getYByX (point1,point2,x){
    return point1[1] + (x - point1[0])/(point2[0]-point1[0])*(point2[1]-point1[1]);
}

function isPointInLine (x,line){
	if (x > line[0][0] && x < line[1][0])
		return true;
	else if (x < line[0][0] && x > line[1][0])
		return true;
	else
		return false;
}