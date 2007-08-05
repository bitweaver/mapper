//query functions (identify, itemnquery)

function identify(e) {
	getIxIy(e);
}

//generate query url
function makeQueryURL() {
	if (insideMap) {
	var tempCheck = new Array;
			var px = (right-left) / layerwidth;
			mapX = px * xPosition + left;
			var py = (top-bottom) / layerheight;
			mapY = py * (layerheight - yPosition) + bottom;
			queryX = mapX.toString();
			queryY = mapY.toString();
			URLString = new String;
			URLString = exePfad + "?map="+mapPfad;
			
			URLString += "&imgext="
			ext = imgext;
			newext = ext.split(" ");

			for (i=0; i<newext.length; i++) {
				URLString += newext[i];
				if (i<newext.length-1) URLString += "+";
			}
			
			if(layerList.length>1){
				for (i=0; i<parent.NaviFrame.document.navi.layer.length;i++) {
					if (parent.NaviFrame.document.navi.layer[i].checked) {
							URLString += "&layer="+layerList[i];
					}
				}
			} else {
				URLString += "&layer="+layerList[0];
			}
			URLString += "&imgxy="+ xPosition + "+" + yPosition;
			URLString += "&savequery="+savequery;
			//URLString += "&mapext=shapes";
			URLString += "&mode=nquery";
			URLString += "&mapsize="+ MapWidth + "+" + MapHeight;
			showQuery(URLString);
		 }
}

//open the query url in a new window
function showQuery(URL) {
	if (openNewWin) {
		//winNumber = parseInt(Math.random()*1000);
		QueryWindow = open(URL,"Query"/*+winNumber*/,"width=400,height=400,scrollbars=yes,resizable=yes,dependent=yes, status=no");
		QueryWindow.focus();
	} else {
		parent.QueryFrame.location.href = URL;
	}
}

//zoom to x,y with a buffer of 1000
function zoomToItem(x,y) {
	this.window.focus();
	x_int = parseInt(x);
	y_int = parseInt(y);
	//calculate new mapext
	newminX = (x_int - 1000)/10;
	newmaxX = (x_int + 1000)/10;
	newminY = (y_int -1000)/10;
	newmaxY = (y_int + 1000)/10;
	newExtent = newminX.toString() + " " + newminY.toString() + " " + newmaxX.toString() + " " +newmaxY.toString();
	imgbox = "-1 -1 -1 -1";
	mapext = newExtent;
	mode="browse";
	writeCGIForm();		
}

//itemquery
function textItemQuery(textString, layer, field){
	textString = textString.replace('/','.');
	textString = textString.replace("Ä",'.');
	HTMLString ='<HTML><HEAD><TITLE></TITLE></HEAD>';
	HTMLString += '<BODY bgcolor="#FFFFFF">';
	HTMLString += '<FORM name="textquery" action="'+exePfad+'" method="post">';
	HTMLString += '<INPUT type="hidden" name="map" value="'+mapPfad+'">';
	HTMLString += '<INPUT type="hidden" name="mode" value="itemnquery">';
	HTMLString += '<INPUT type="hidden" name="qLayer" value="'+layer+'">';
	HTMLString += '<INPUT type="hidden" name="qItem" value="'+field+'">';
	HTMLString += '<INPUT type="hidden" name="qString" value="/'+textString+'/">';
	HTMLString += '</FORM></BODY></HTML>';
	parent.ResultFrame.document.open();
	parent.ResultFrame.document.write(HTMLString);
	parent.ResultFrame.document.textquery.submit();
	parent.ResultFrame.document.close();
}
