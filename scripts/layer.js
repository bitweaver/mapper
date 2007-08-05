////dhtml functions

var m = parent.MapFrame;

//Maplayer and ZoomBoxLayer
// html = image, uses backgroundcolor
function createMapLayer(name, left, top, width, height, z, bgColor, visible, html) {
	var layer;
	m.document.writeln('<div id="' + name + '" style="position:absolute; overflow:inherit; left:' + left + 'px; top:' + top + 'px; width:' + width + 'px; height:' + height + 'px;' + 'z-index:' + z + ';' + 'background-color:' + bgColor + ';' + 'visibility:' + (visible ? 'visible;' : 'hidden;') +  '">');
	addRest(html);
	cLayer(name, 0, 0, width, height);
}

// BackLayer 1, 3 and 2 (if the space between the mapborders should be filled with a color
//no html, uses backgroundcolor
function createBackLayer1(name, left, top, width, height, z, bgColor, visible) {
		m.document.writeln('<div id="' + name + '" style="position:absolute; overflow:inherit; left:' + left + 'px; top:' + top + 'px; width:' + width + 'px; height:' + height + 'px;' + 'z-index:' + z + ';' + 'background-color:' + bgColor + ';' + 'visibility:' + (visible ? 'visible;' : 'hidden;') +  '"></div>');
}

//BackLayer 2 (if the space between the mapborders should be filled with a image)
//no html, uses background (image)
function createBackLayer2(name, left, top, width, height, z, background, visible) {
	m.document.writeln('<div id="' + name + '" style="position:absolute; overflow:inherit; left:' + left + 'px; top:' + top + 'px; width:' + width + 'px; height:' + height + 'px;' + 'z-index:' + z + ';' + 'background-image: url(' + background + ');' + 'visibility:' + (visible ? 'visible;' : 'hidden;') +  '"></div>');

}

//Layer for the directional pan buttons
//html = image, no backgroundcolor
function createElseLayer(name, left, top, width, height, z, visible, html) {
	m.document.writeln('<div id="' + name + '" style="position:absolute; overflow:inherit; left:' + left + 'px; top:' + top + 'px; width:' + width + 'px; height:' + height + 'px;' + 'z-index:' + z + ';' + 'visibility:' + (visible ? 'visible;' : 'hidden;') +  '">');
	addRest(html);

}


function addRest(html) {
		m.document.writeln(html);
		m.document.writeln('</div>');

}


function returnLayerbyName(name) {
	  if (isIE) {
	  	if ( eval('parent.MapFrame.document.all.' + name) != null) {
			layer = eval('parent.MapFrame.document.all.' + name + '.style');
			return(layer);
		} else 
			return(null);
	  }
	  else if (isNav6) {
	  		layer = eval('parent.MapFrame.document.getElementById("'+name+'").style');
			return(layer);
	 } else
	   return(null);
}


function turnLayerVisible(name) {		
  	var layer = returnLayerbyName(name);	
  	layer.visibility = "visible";
}


function cLayer(name, left, top, right, bottom) {	
	var layer = returnLayerbyName(name);		
  	layer.clip = 'rect(' + top + ' ' +  right + ' ' + bottom + ' ' + left +')';
}


function mLayerImage(lName, thisX, thisY) {		
  	var layerToMove = returnLayerbyName(lName);		
    layerToMove.left = thisX + "px";
   	layerToMove.top  = thisY + "px";
}
