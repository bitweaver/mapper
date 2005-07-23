//Variables for holding the positions of the layers within the mapframe
var RahmSize = "";
var rahmposleft = "";
var rahmpostop = "";
var posleft = "";
var postop = "";
var MapWidth = "";
var MapHeight = "";
var BackWidth1 = "";
var BackHeight1 = "";
var BackWidth2 = "";
var BackHeight2 = "";
var BackWidth3 = "";
var BackHeight3 = "";
var northposleft = "";
var northpostop = "";
var southposleft = "";
var southpostop = "";
var eastposleft = "";
var eastpostop = "";
var westposleft = "";
var westpostop = "";
var versatz = 7;
var zwischenleft = "";
var zwischentop = "";
var zwischenwidth = "";
var zwischenheight = "";
var scaleposleft = "";
var scalepostop = "";
var statusposleft = "";
var statuspostop = "";

var x = "";
var y = "";



var waitForResponse = false;

//RahmSize = Thickness of the mapborder(BackLayer1-3)
if (JumpTool_MF == true) { //(Variable from param.js)
	//if pan buttons visible within the mapframe
	RahmSize = (RahmOutSize+JumpMFOutDist+NorthSouthHeight_MF+JumpMFInDist+RahmInSize);
} else {
	//if pan buttons not visible within the mapframe
	RahmSize = (RahmOutSize+RahmDist+RahmInSize);
}
//distance of the mapborder (BackLayer1) from the outer edge of the MapFrame
//rahmposleft = distance from left, rahmpostop = distance from the top
if (isNav) {
	rahmposleft = RahmLeft2;
	rahmpostop = RahmTop2;
} else {
	rahmposleft = RahmLeft1;
	rahmpostop = RahmTop1;
}
//distance of the map from the outer edge of the MapFrame
//posleft = distance from left, postop = distance from the top
posleft = (rahmposleft+RahmSize);
postop = (rahmpostop+RahmSize);


//mapsize (MapLayer)
MapWidth = (MapFrameWidth-(2*posleft));
MapHeight = (MapFrameHeight-(2*postop));

//size of BackLayer1 (outer mapborder)
BackWidth1 = (MapFrameWidth-(2*rahmposleft));
BackHeight1 = (MapFrameHeight-(2*rahmpostop));

//size of BackLayer2 (space between borders)
BackWidth2 = (BackWidth1-(2*RahmOutSize));
BackHeight2 = (BackHeight1-(2*RahmOutSize));

//size of BackLayer3 (inner mapborder)
BackWidth3 = (MapWidth+(2*RahmInSize));
BackHeight3 = (MapHeight+(2*RahmInSize));

//center of the map
x = parseInt(MapWidth/2);
y = parseInt(MapHeight/2);

//distance of the directional pan buttons from the outer edge of the mapframe
//posleft = distance from the left, postop = distance from the top
if (JumpTool_MF == true) { //(Variable aus param.js)
	//... "north"
	northposleft = parseInt(posleft+(x-(NorthSouthWidth_MF/2)));
	northpostop = (rahmpostop+RahmOutSize+JumpMFOutDist);
	if(isIE) northpostop = northpostop-versatz;
	//... "south"
	southposleft = parseInt(posleft+(x-(NorthSouthWidth_MF/2)));
	southpostop = (postop+MapHeight+RahmInSize+JumpMFInDist);
	if(isIE) southpostop = southpostop-versatz;
	//... "east"
	eastposleft = (posleft+MapWidth+RahmInSize+JumpMFInDist);
	eastpostop = parseInt(postop+(y-(EastWestHeight_MF/2)));
	//... "west"
	westposleft = (rahmposleft+RahmOutSize+JumpMFOutDist);
	westpostop = parseInt(postop+(y-(EastWestHeight_MF/2)));
}

//distance of the ScaleLayer from the outer edge of the MapFrame
//scaleposleft = distance fromthe left, scalepostop = distance from the top
//only calculated if ShowScale==true
if (ShowScale == true) { //(Variable from param1.js)
	if (ScalePlace == true) { //(Variable from param1.js)
		//if the scalebar should be drawn on top of the map
		zwischenleft = posleft;
		zwischentop = postop;
		zwischenwidth = MapWidth;
		zwischenheight = MapHeight;
	} else {
		//if the scalebar should be drawn within the mapborder
		zwischenleft = rahmposleft+RahmOutSize;
		zwischentop = rahmpostop+RahmOutSize;
		zwischenwidth = BackWidth2;
		zwischenheight = BackHeight2;
	}	
	switch (ScaleMode) { //(Variable from param.js)
	case "ol":
		//top left
		scaleposleft = zwischenleft+ScaleDist;
		scalepostop = zwischentop+ScaleDist;
		break;
	case "or":
		//top right
		scaleposleft = (zwischenleft+zwischenwidth)-(ScaleDist+ScaleWidth);
		scalepostop = zwischentop+ScaleDist;
		break;
	case "ul":
		//bottom left
		scaleposleft = zwischenleft+ScaleDist;
		scalepostop = (zwischentop+zwischenheight)-(ScaleDist+ScaleHeight);
		break;
	case "ur":
		//bottom right
		scaleposleft = (zwischenleft+zwischenwidth)-(ScaleDist+ScaleWidth);
		scalepostop = (zwischentop+zwischenheight)-(ScaleDist+ScaleHeight);
		break;
	default:
		//bottom right - default
		scaleposleft = (zwischenleft+zwischenwidth)-(ScaleDist+ScaleWidth);
		scalepostop = (zwischentop+zwischenheight)-(ScaleDist+ScaleHeight);
		break;
	}
}

//distance of the StatusLayer ("Karte wird geladen") from the outer edge of the MapFrame
//statusposleft = distance from the, statuspostop = distance from the top
statusposleft = parseInt((MapFrameWidth-StatusWidth)/2);
statuspostop = parseInt((MapFrameHeight-StatusHeight)/2);

//common functions and parameters
var wX = 0;
var wY = 0;

var left = 0;
var right = MapWidth;
var top = 0;
var bottom = MapHeight;
var fullLeft = 0;
var fullRight = MapWidth;
var fullTop = 0;
var fullBottom = MapHeight;

var newLeft = 0;
var newBottom = 0;
var newRight = 0;
var newTop = 0;

openNewWin = true;

//Parameter for CGI forms
var imgxy = x.toString() + " " + y.toString();
var savequery = true;
var mapext = "shapes";
var mode = "browse";
var zoomdir = 1;
var imgbox = "-1 -1 -1 -1";
var imgext;

//set ative layer
function setActiveLayer(layer) {
	activeLayer=layer;
}

//refresh the map
function refreshMap(type) {
	
	switch (type) {
	    //us this is the layerselection has changed
		case "newLayer" :
			turnLayerVisible("Status");
			if (imgbox != "-1 -1 -1 -1") {
				imgbox = "-1 -1 -1 -1";
			}
			imgxy=parseInt(MapWidth/2).toString()+" "+parseInt(MapHeight/2).toString();
			oldMode=mode;
			oldZoomdir=zoomdir;
			mode = "browse";
			mapext="shapes";
			zoomdir = "0";
			writeCGIForm();
			mode=oldMode;
			zoomdir=oldZoomdir;
			waitForResponse=true;
		break;
		
		//zoom with point as the new map center
		case "point":
			turnLayerVisible("Status");
			if (imgbox != "-1 -1 -1 -1") {
				imgbox = "-1 -1 -1 -1";
			}
				
			xWidth = xmax - xmin;
			x = xmin + (xWidth/2);
			yWidth = ymax - ymin;
			y = ymin + (yWidth/2);
						
			xString = x.toString();
			yString = y.toString();
			
			point = xString + " " + yString;
			
			imgxy = point;
			writeCGIForm();
		break;
		
		//boxed zoom
		case "box":
			turnLayerVisible("Status");
			maxx = xmax.toString();
			minx = xmin.toString();
			maxy = ymax.toString();
			miny = ymin.toString();
			box = minx + " " + miny + " " + maxx + " " + maxy;
			imgbox = box;
			writeCGIForm();					
		break;
 	}
}

//parse mapexttent into array
function parseImgExt() {
	ext = imgext;
	newext = ext.split(" ");
}

//initialise event captureing
function setEvents() {
		parent.MapFrame.document.onmousemove = trackM;
		parent.MapFrame.document.onmousedown = whichTool;
		parent.MapFrame.document.onmouseup = stop;
		parent.MapFrame.document.onmouseout = clear;
}

//clear crosshair
function clear(){
	parent.MapFrame.crossH.clear();
	parent.MapFrame.crossV.clear();
	return false;
}

//forward events to the prober functions
function whichTool(e) {
	getIxIy(e);
	if (wX < posleft || wY < postop || wX > posleft+layerwidth || wY > postop+layerheight) {
			insideMap=false;	
	} else {
			insideMap = true;
			if (tool == "zoomin" || tool == "zoomout") {
				startBox(e);
				return false;
			}
			if (tool == "panning"){
				startPan(e);
				return false;	 
			}
			if (tool == "identify"){
				identify(e);
				return false;
			}
	}
	
}

//onmouserelease
function stop(e) {
		if (tool == "zoomin" || tool == "zoomout") stopBox(e);
		if (tool == "panning") stopPan(e);
		if (tool == "identify") makeQueryURL(e);
}


// onmousemove
function trackM(e) {
	getIxIy(e);
	//draw crosshair
	parent.MapFrame.crossH.clear();
	parent.MapFrame.crossV.clear();
	if (wX > posleft && wY > postop && wX < posleft+layerwidth && wY < postop+layerheight){
		parent.MapFrame.crossH.drawLine(0,yPosition,MapWidth,yPosition);
		parent.MapFrame.crossV.drawLine(xPosition,0,xPosition,MapHeight);
		parent.MapFrame.crossH.paint();
		parent.MapFrame.crossV.paint();
	}
	//
	if (zooming) {
		parent.MapFrame.jg.clear(); 
		currentX = xPosition;
		currentY = yPosition;
		//limit zoombox the mapimage
		if(currentX<0) currentX = 0;
		if(currentY<0) currentY = 0;
		if(currentX>MapWidth) currentX = MapWidth;
		if(currentY>MapHeight) currentY = MapHeight;
		//
		var pointsX = new Array();
		var pointsY = new Array();
		pointsX[0]=beginX;
		pointsX[1]=currentX;
		pointsX[2]=currentX;
		pointsX[3]=beginX;
		pointsX[4]=beginX;
		pointsY[0]=beginY;
		pointsY[1]=beginY;
		pointsY[2]=currentY;
		pointsY[3]=currentY;
		pointsY[4]=beginY;
		parent.MapFrame.jg.drawPolyline(pointsX, pointsY);
		parent.MapFrame.jg.paint();
		return false;
	}else if (panning){
		if (isNav6) {
			if (xPosition < posleft)
			 	xPosition = posleft;
			if (xPosition > layerwidth+posleft)
				xPosition = layerwidth+posleft;
			if (yPosition < postop)
				yPosition = postop;
			if (yPosition > layerheight+postop)
				yPosition = layerheight+postop;
			x2 = xPosition;
			y2 = yPosition;
			mLayerImage("mapimage", x2 + poX, y2 + poY);
			cLayer("mapimage", posleft - poX - x2,
								  postop - poY - y2 , 
								  layerwidth  + posleft - poX - x2, 
								  layerheight + postop - poY - y2);
			return false;
		} else {
			if (xPosition < 0)
			 	xPosition = 0;
			if (xPosition > layerwidth)
				xPosition = layerwidth;
			if (yPosition < 0)
				yPosition = 0;
			if (yPosition > layerheight)
				yPosition = layerheight;
			x2 = xPosition;
			y2 = yPosition;
			
			tmpleft = posleft - poX - x2;
			tmptop = postop - poY - y2;
			topright = layerwidth  + posleft - poX - x2;
			topbottom = layerheight + postop - poY - y2;
			mLayerImage("mapimage", x2 + poX, y2 + poY) ;
			cLayer("mapimage", posleft - poX - x2,
								  postop - poY - y2 , 
								  layerwidth  + posleft - poX - x2, 
								  layerheight + postop - poY - y2);
			return false;
		}
	} else 
	  return true;
	  return true;
	  return true;
}

function getIxIy(e) {
	if (isNav6) {
		wX=e.pageX;
		wY=e.pageY;
	} else {
		wX=parent.MapFrame.event.clientX  + parent.MapFrame.document.body.scrollLeft;
		wY=parent.MapFrame.event.clientY  + parent.MapFrame.document.body.scrollTop;
	}
	xPosition = wX-posleft;
	yPosition = wY-postop;
	x2 = xPosition;
	y2 = yPosition;
}	










