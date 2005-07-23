//pan functions

function startPan(e){
	if (insideMap) {
		mLayerImage("mapimage",posleft,postop);
		cLayer("mapimage", 0, 0, layerwidth, layerheight);
		getIxIy(e);
		psX = xPosition;
		psY = yPosition;
		poX = posleft - xPosition;
		poY = postop - yPosition;
		panning=true;
	}
}

function stopPan(e){
	if (insideMap) {
		panning = false;
		getIxIy(e);
		
		if(Math.abs(psX - xPosition) < 2 && Math.abs(psY - yPosition) < 2) {
			pan(e);
			return true;
		}
		
		var mX = -(xPosition - psX);
		var mY =   psY - yPosition;
		
		var px = (right-left) / layerwidth;
		mapX = px * mX + left;
		var py = (top-bottom) / layerheight;
		mapY = py * (layerheight - mY) + bottom;
		newLeft = mapX;
		newTop = mapY;
		
		mX += layerwidth;
		mY += layerheight;
		var px = (right-left) / layerwidth;
		mapX = px * mX + left;
		var py = (top-bottom) / layerheight;
		mapY = py * (layerheight - mY) + bottom;
		newRight  = mapX;
		newBottom = mapY;
		xmin = newLeft;
		ymax = newTop
		xmax = newRight;
		ymin = newBottom;
		refreshMap("box");
		return true;
	}
}

function pan(e){
	if (insideMap) {
		if (isNav6) {
			x2 = xPosition-posleft;
			y2 = yPosition-postop;
		} else {
			x2 = xPosition;
			y2 = yPosition;
		}
	}
}

function getMapExtent(URLString) {
	url = new String(URLString);
	startpos = 0;
	endpos = 0;
	s_minx = "";
	s_miny = "";
	s_maxx = "";
	s_maxy = "";
	firstappear = url.indexOf("imgext");
	
	if (firstappear != -1) {
		startpos = firstappear + 7;
		endpos = startpos + 7;
		s_minx = url.substring(startpos, endpos);
		
		startpos = url.indexOf("+",endpos)+1;
		endpos = startpos + 7;
		s_miny = url.substring(startpos, endpos);
		
		startpos = url.indexOf("+",endpos)+1;
		endpos = startpos + 7;
		s_maxx = url.substring(startpos, endpos);
		
		startpos = url.indexOf("+",endpos)+1;
		endpos = startpos + 7;
		s_maxy = url.substring(startpos, endpos)
	}
	else {
		ext = fullExtent.split(/\ /);
		s_minx = eval(ext[0]);
		s_miny = eval(ext[1]);
		s_maxx = eval(ext[2]);
		s_maxy = eval(ext[3]);
	}
}


function jump(direction) {
	
	switch (direction) {
	
		case "north":
			turnLayerVisible("Status");
			var jumpNorth = "0 "+ (-jumpDist).toString() +" "+ MapWidth.toString() +" "+ (MapHeight-jumpDist).toString();
			mode = "browse";
			imgbox = jumpNorth;
			writeCGIForm();		
		break;
		
		case "south":
			turnLayerVisible("Status");
			var jumpSouth = "0 "+ jumpDist.toString() +" "+ MapWidth.toString() +" "+ (MapHeight+jumpDist).toString();
			mode= "browse";
			imgbox = jumpSouth;
			writeCGIForm();			
		break;	
		
		case "east":
			turnLayerVisible("Status");
			var jumpEast = jumpDist.toString() +" 0 "+ (MapWidth+jumpDist).toString() +" "+ MapHeight.toString();
			mode = "browse";
			imgbox = jumpEast;
			writeCGIForm();	
		break;
		
		case "west":
			turnLayerVisible("Status");
			var jumpWest = (-jumpDist).toString() +" 0 "+ (MapWidth-jumpDist).toString() +" "+ MapHeight.toString();
			mode = "browse";	
			imgbox = jumpWest;
			writeCGIForm();	
		break;
	}
}	


