<html>
<head>
	<title>mapframe</title>
	<script type="text/javascript" language="javascript" src="../scripts/wz_jsgraphics.js"></script>
<script language="javascript">
//Abkuerzungsvariablen
var t = parent.SkriptFrame;
var n = parent.FormFrame;
var ROS = t.RahmOutSize;
var RIS = t.RahmInSize;

function reload(){
	this.document.location.href = parent.SkriptFrame.htmlPfad + "start.html";
}	
</script>
</head>
<body>
		<div id="mapcanvas" style="position:absolute; overflow:none; left:0px; top:0px; width:840px; height:840px;>
			<div id="mapBack1" style="position:absolute; overflow:none; left:0px; top:0px; width:840px; height:840px; z-index:2; background-color:#F4B900; visibility:visible;">
			</div>
			<div id="mapBack2" style="position:absolute; overflow:none; left:1px; top:1px; width:838px; height:838px; z-index:3; background-color:#C8C8C8; visibility:visible;">
			</div>
			<div id="mapBack3" style="position:absolute; overflow:none; left:19px; top:19px; width:802px; height:802px; z-index:4; background-color:#F4B900; visibility:visible;">
			</div>
			<div id="mapBack4" style="position:absolute; overflow:none; left:20px; top:20px; width:800px; height:800px; z-index:5; background-color:#FFFFFF; visibility:visible;">
			</div>
			<div id="mapimage" style="position:absolute; overflow:none; left:20px; top:20px; height:800px; width:800px; z-index:99; visibility:visible;">
				<img src="/Tmp_Maps/Demo11190999183076.png" alt="Map" title="Map - IOM" border="0" height="800" width="800" />
			</div>
			<div id="Scale" style="position:absolute; overflow:none; left:520px; top:800px; height:200px; width:17px; z-index:102; visibility:visible;">
				<img src="/Tmp_Maps/Demosb11190999183076.png" alt="Scale" title="Map - Scale" border="0" />
			</div>
			<div id="Status" style="position:absolute; overflow:none; left:120px; top:800px; height:5px; width:40px; z-index:99; visibility:visible;">
				<img src="/Tmp_Maps/Demoleg11190999183076.png" alt="Status" title="Map - IOM" border="0" />
			</div>
			<div id="myCanvas" style="position:absolute; left:20px; top:20px; height:800px; width:800px; z-index:10000">
			</div>
			<script language="javascript">
				setEvents();
				jg = new jsGraphics("myCanvas");
				jg.setColor("#ff0000");
			</script>
			<div id="crossCanvas" style="position:absolute; left:20px; top:20px; height:800px; width:800px; z-index:9999">
			</div>
			<script language="javascript">
				crossH = new jsGraphics("crossCanvas");
				crossH.setColor("#B2ADAD");
				crossV = new jsGraphics("crossCanvas");
				crossV.setColor("#B2ADAD");
			</script>
		</div>
</body>
</html>