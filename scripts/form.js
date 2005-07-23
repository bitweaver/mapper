//main form to submit map requests to mapserver
//parameters are well documented in mapserver documentation
function writeCGIForm(){
	formString = '<!DOCTYPE HTML PUBLIC "//W3C//DTD HTML 4.01 Transitional//EN">';
	formString += '<HTML><HEAD><TITLE>Formular zur Wertevermittlung an MapServ-CGI</TITLE></HEAD>';
	formString += '<BODY bgcolor="#FFFFFF">';
	formString += '<FORM name="mapserv" method="GET" action="'+exePfad+'">';
	formString += '<INPUT type="hidden" name="program" value="'+exePfad+'">';
	formString += '<INPUT type="hidden" name="map" value="'+mapPfad+'">';
	formString += '<INPUT type="hidden" name="imgxy" value="'+imgxy+'">';
	formString += '<INPUT type="hidden" name="mapext" value="'+mapext+'">';
	formString += '<INPUT type="hidden" name="mode" value="'+mode+'">';
	formString += '<INPUT type="hidden" name="imgbox" value="'+imgbox+'">';
	formString += '<INPUT type="hidden" name="map_size" value="'+MapWidth+' '+MapHeight+'">';
	formString += '<INPUT type="hidden" name="imgext" value="'+imgext+'">';
	formString += '<INPUT type="hidden" name="zoomdir" value="'+zoomdir.toString()+'">';
	formString += '<INPUT type="hidden" name="zoomsize" value="'+zoomsize+'">';
	
		for (i=0;i<layerList.length;i++){
			if (layerVisible[i]==1){
					formString+='<INPUT type="hidden" name="layer" value="'+layerList[i]+'">';
				}
		}
	if(hasCommonLayers){
		for (i=0;i<commonLayerList.length;i++){
			if (commonLayerIsVisible[i]==1){
					formString+='<INPUT type="hidden" name="layer" value="'+commonLayerList[i]+'">';
			}
		}
	}
	formString += '</FORM>';
	formString += '</BODY></HTML>';
	parent.FormFrame.document.write(formString);
	parent.FormFrame.document.mapserv.submit();
}
