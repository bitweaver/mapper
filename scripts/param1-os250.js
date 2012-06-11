//***************path information***************
//path to ...
//... mapserv binary
var exePfad="/cgi-bin/mapserv.cgi";
//... machine name/ domain name
var host = "lsces.co.uk";
//... application path (url-path to [...]/client/)
var applicationPath = "http://"+host+"/mapper/";

//legend setting - html legend or not?
hasHTMLLegend = true;

//...map file
var mapPfad = "/srv/website/lsces/mapper/map/OS250.map";
//for Windows something like d:\\projekte\\mapfiles\\myMap.map - notice the double slahses
//for Unix/Linux /home/user/mapfiles/myMap.map


//***********************extent information*************************
//fullextent = extent in *.map
var fullExtent = "0 0 600000 1300000";

//**************thematic layers********
//array of layer names for the thematic layers = names as they appear in your mapfile
var layerList = new Array();
layerList[0] = "OS250k";
layerList[1] = "OS10k";
layerList[2] = "miniscaleng";
layerList[3] = "miniscalewg";
layerList[4] = "miniscaler1";
layerList[5] = "miniscaler2";
//layerList[1] = "[layername]";

//aliasnames for the thematic layer - these names will appear in the layertree
//(order as in layerList)
var layerAlias = new Array();
layerAlias[0] = "UK OS 250k OpenData";
layerAlias[1] = "UK OS 10k OpenData";
layerAlias[2] = "UK OS MiniScale OpenData - no grid";
layerAlias[3] = "UK OS MiniScale OpenData - with grid";
layerAlias[4] = "UK OS MiniScale OpenData - relief style 1";
layerAlias[5] = "UK OS MiniScale OpenData - relief style 2";
//layerAlias[1] = "[layeralias]";Isle of Man
//should the thematic layer be visible on the first map?
//(order as in layerList)
//0 = not visible , 1 = visible
var layerVisible = new Array();
layerVisible[0] = 1;
layerVisible[1] = 0;
layerVisible[2] = 0;
layerVisible[3] = 0;
layerVisible[4] = 0;
layerVisible[5] = 0;
//layerVisible[1] = 1;

//should a thematic layer be queryable
//(order as in layerList)
var layerIsQueryable = new Array();
layerIsQueryable[0] = false;
layerIsQueryable[1] = false;
layerIsQueryable[2] = false;
layerIsQueryable[3] = false;
layerIsQueryable[4] = false;
layerIsQueryable[5] = false;
//layerIsQueryable[1] = false;

//should the thematic layer be linked to further information - opens in new windows
//(order as in layerList)
//0 = no, 1 = yes
var layerLink = new Array();
layerLink[0] = 0;
layerLink[1] = 0;
layerLink[2] = 0;
layerLink[3] = 0;
layerLink[4] = 0;
layerLink[5] = 0;

//url to the page that contains the information
//(order as in layerList)
var layerLinkURL = new Array();
layerLinkURL[0] = "http://lsces.co.uk/mapper/images/OpenData.html";
layerLinkURL[1] = "http://lsces.co.uk/mapper/images/OpenData.html";

//tooltips for the layer links
//(order as in layerList)
var layerLinkName = new Array();
layerLinkName[0] = "Ordnance Survey 250k Open Data 2010";
layerLinkName[1] = "Ordnance Survey 10k Open Data 2010";
layerLinkName[2] = "Ordnance Survey MiniScale Open Data 2010";
layerLinkName[3] = "Ordnance Survey MiniScale Open Data 2010";
layerLinkName[4] = "Ordnance Survey MiniScale Open Data 2010";
layerLinkName[5] = "Ordnance Survey MiniScale Open Data 2010";

//**************base layers********
var hasCommonLayers = false;
//array of layer names for the base layers = names as they appear in your mapfile
var commonLayerList = new Array();
//commonLayerList[0] = "[layername]";
//commonLayerList[1] = "[layername]";

//aliasnames for the base layer - these names will appear in the layertree
//(order as in commonLayerList)
var commonLayerAlias = new Array();
//commonLayerAlias[0] = "[layeralias]";
//commonLayerAlias[1] = "[layeralias]";

//should the base layer be visible on the first map?
//(order as commonLayerList)
//0 = not visible , 1 = visible
var commonLayerIsVisible = new Array();
//commonLayerIsVisible[0] = 1;
//commonLayerIsVisible[1] = 1;

//Colors
// ...Color1 = backgroundcolor,
//...Color2 = font color ...
var BereichColor1 = "#FFFFFF";
var BereichColor2 = "#F4B900";

//... various file pathes
var themenPfad = applicationPath + "theme/"
var htmlPfad = applicationPath + "html/";
var startURL = htmlPfad + "start.html";
var scriptURL = htmlPfad  + "script.html";
var initURL = htmlPfad + "map_init.html";
var naviURL = htmlPfad + "navi.html";
var mapURL = htmlPfad + "map.html";
var toolURL = htmlPfad + "tool.html";
var legendURL = htmlPfad + "legend.html";
var linkURL = htmlPfad  + "link.html";
var helpURL = htmlPfad + "help.html";
var impressURL = htmlPfad + "impress.html"
var bildPfad1 = applicationPath + "graphics/";
var bildPfad2 = applicationPath + "graphics/";
var styleURL = applicationPath + "styles/client.css";

//*************Properties for the links that appear in the LinkFrame**************
//Title for the Links
var weiterLink = new Array();
weiterLink[0] = "LSCaine Electronic Services";
weiterLink[1] = "Mapserver Homepage";
weiterLink[2] = "Ordnance Survey";
weiterLink[3] = "";
weiterLink[4] = "";
weiterLink[5] = "";
weiterLink[6] = "";
weiterLink[7] = "";

//URL
//(order as in weiterLink)
var weiterLinkURL = new Array();
weiterLinkURL[0] = "http://lsces.co.uk";
weiterLinkURL[1] = "http://mapserver.gis.umn.edu";
weiterLinkURL[2] = "http://lsces.co.uk/wiki/?page=OrdnanceSurvey";
weiterLinkURL[3] = "";
weiterLinkURL[4] = "";
weiterLinkURL[5] = "";
weiterLinkURL[6] = "";
weiterLinkURL[7] = "";

//ToolTip for the Links
//(order as in weiterLink)
var weiterLinkName = new Array();
weiterLinkName[0] = "LSCaine Electronic Services";
weiterLinkName[1] = "MapServer Homepage";
weiterLinkName[2] = "Ordnance Survey";
weiterLinkName[3] = "";
weiterLinkName[4] = "";
weiterLinkName[5] = "";
weiterLinkName[6] = "";
weiterLinkName[7] = "";

//***********backgroundcolors for Frames and Windows********
//... MapFrame
var MapFrameColor = "#FFFFFF";
//... FormFrame and LinkFrame
var FormFrameColor = "#FFFFFF";
//... ToolFrame
var ToolFrameColor = "#FFFFFF";
//... LegendeFrame
var LegendFrameColor = "#FFFFFF";
//... Identify Results (opens in new window)
var IdentifyWinColor = "#FFFFFF";
//... Layer links (opens in new windows)
var LinkWinColor = "#FFFFFF";
//... help window
var HelpWinColor = "#FFFFFF";
//... Impressum
var ImpressWinColor = "#FFFFFF";

//*************************Properties for the Toolbar**********************
//Which tools should be visible?
//true = visible, false = not visible
//Identify
var IdentifyTool = true;
//Zoom In
var ZoomInTool = true;
//Zoom out
var ZoomOutTool = true;
//Fullextent
var FullExtentTool = true;
//Pan
var PanTool = true;
//Show Help
var HelpTool = true;
//Directional Pan
var JumpTool_MF = true;

//should the map be refreshed everytime the layer selection changes
//true = map refresh is triggered via onmousedown events of the layer checkboxes
//false = a button is displayed under the layer tree for requesting a new map
var autoRefresh = false;

//distance the map is moved with the directional pan buttons (int > 0 )
var jumpDist = 200;

//Which tool should be selected on application load
//use any of the following: IdentifyTool, ZoomInTool, ZoomOutTool oder PanTool
var initialTool = "ZoomInTool";

//Path to the tool button images
// *_u = high, _o = low
// ... IdentifyTool
var IdentifyURL_o = bildPfad1 + "info_high.gif";
var IdentifyURL_u = bildPfad1 + "info_low.gif";
// ... ZoomInTool
var ZoomInURL_o = bildPfad1 + "zoomin_high.gif";
var ZoomInURL_u = bildPfad1 + "zoomin_low.gif";
//... ZoomOutTool
var ZoomOutURL_o = bildPfad1 + "zoomout_high.gif";
var ZoomOutURL_u = bildPfad1 + "zoomout_low.gif";
//... FullExtentTool
var FullExtentURL = bildPfad1 + "fextent.gif";
//... PanTool
var PanURL_o = bildPfad1 + "pan_high.gif";
var PanURL_u = bildPfad1 + "pan_low.gif";
//... HelpTool
var HelpURL = bildPfad1 + "help.gif";

//size of the toolbar buttons (pixel)
var ToolWidth = 23;
var ToolHeight = 23;

//Tooltips
var toolName = new Array();
toolName[0] = "Visible Topics"; //fuer das "Auge" in der Navigationsleiste
toolName[1] = "Move North";
toolName[2] = "Move South";
toolName[3] = "Move East";
toolName[4] = "Move west";
toolName[5] = "Zoom In";
toolName[6] = "Zoom Out";
toolName[7] = "Full Extent";
toolName[8] = "Pan";
toolName[9] = "Identify";
toolName[10] = "Help";
toolName[11] = "Legend select";


//************************Window Properties**************
//size of the help window
var HelpWidth = 400;
var HelpHeight = 800;

//titles for windows
//title for the identify windows
var identifyTitle = "Help Window";
//title for the help window
var helpTitle = "Help Window"

var LinkWidth = 800;
var LinkHeight = 600;

//***********properties for the status graphic (displayed when map is loaded)***************
//size of the image
var StatusWidth = 273;
var StatusHeight = 31;
//tooltip
var statusName = "Map is loading";
//image path
var StatusURL = bildPfad1 + "loadMap.gif";

//************************ScaleBar properties**********************
//should the scale be displayed?
// true = yes, false = no
var ShowScale = true;
//where to display the scalebar
//true = within the mapimage, false = within the mapborder
var ScalePlace = true;
//in which corner should the scalebar be displayed?
//dabei: ol = upper left, or = upper right, ul = lower left, ur = lower right
var ScaleMode = "ur";
//distance of the scalebar from the outer mapborder (if ScalePlace = false)
//distance of the scalebar from the inner mapborder (if ScalePlace = true)
var ScaleDist = 3; //pixel
//Size of the scalebar image (pixel)
var ScaleWidth = 200;
var ScaleHeight = 17;


//*************************properties for the map and the mapborder***************************
//background color for the MapLayer (BackLayer4)
var MapBackColor = MapFrameColor;
//distance for the outer border from the edge of the MapFrame
// RahmLeft = from the left, RahmTop = from the top
//... for MSIE und Netscape 6+
var RahmLeft1 = 1;
var RahmTop1 = 1;
//... for Netscape <6
var RahmLeft2 = 1;
var RahmTop2 = 1;

//size of the outer border
var RahmOutSize = 1;
//color of the outer border (BackLayer1)
var RahmOutColor = BereichColor2;
//size of the inner border (BackLayer3)
var RahmInSize = 1;
//color of the inner border(BackLayer3)
var RahmInColor = BereichColor2;
//space between inner and outer border
//(wird bei JumpToolMF = true durch die Summe von ButtonOutDist, ButtonInDist und
//ButtonNorthSouthWidth (s. Parameter fuer die Verschiebe-Buttons im MapFrame) ersetzt)
var RahmDist = 20;
//color for the space between the borders(BackLayer2)
//(not visible if RahmDistImage = true)
var RahmDistColor = "#FFFFFF";
//SHould a Image be displayed in the border?
//true = yes, false = no
var RahmDistImage = false;
//path to the image
var RahmImageURL = bildPfad1 + "bg.jpg";


//*****************properties for the directional pan*****************
//specify if JumpToolMF = true,
//if JumpToolMF = false please set: var ... = ; bzw. var ... = "";
//distance of the buttons from the outer border
var JumpMFOutDist = 3;
//distance of the buttons from the inner border
var JumpMFInDist = 3;

//path to the images (pan arrows)
var NorthURL_MF = bildPfad1 + "north_MF.gif";
var SouthURL_MF = bildPfad1 + "south_MF.gif";
var EastURL_MF = bildPfad1 + "east_MF.gif";
var WestURL_MF = bildPfad1 + "west_MF.gif";

//size of the images

//North&South
var NorthSouthWidth_MF = 15;
var NorthSouthHeight_MF = 8;
//East&West
var EastWestWidth_MF = 8;
var EastWestHeight_MF = 15;


//*************************porperties for the zoombox****************************
//bordersize
var boxLineWidth = 2;
//bordercolor
var zoomColor = "#FF0000";
//zoom factor if zoomed with a single click in the map
var zoomsize = 2;


//***********************images path (various)***************
var px_buntURL = bildPfad2 + "px_bunt.gif";
var pxURL = bildPfad1 + "px.gif";
var sichtbarURL = bildPfad1 + "sichtbar.gif";
var steuerungURL = bildPfad1 + "thsteuerung.gif";
var queryURL = bildPfad1+ "aktiv.gif";

//***************************Sonstige Angaben***************************
//Titel (Titelzeile) und Ueberschrift fuer den LinkFrame
var linkTitle = "Links";

//Sonstige Bennenungen (z.B. fuer Fehlermeldungen)
var sonstName = new Array();
sonstName[0] = "";


//********************Frame sizes***************
var KopfHeight1 = 65; //Height for SkriptFrame (= Header)
var NaviWidth1 = 199; //Width for NaviFrame
var NaviHeight1 = 350; //Height for NaviFrame
var FormWidth1 = 125; //Width for FormFrame
var FormHeight1 = 200; //Height for FormFrame
var ToolHeight1 = 82; //Width for ToolFrame


