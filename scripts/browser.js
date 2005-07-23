
//check browser
var isIE;
var isNetscape=(navigator.appName.indexOf("Netscape")>=0);
var isNav;
var isNav6;

if(isNetscape){
	if(parseFloat(navigator.appVersion)<5){
		//Netscape <6
		isIE = false;
		isNav = true;
		isNav6 = false;
	} else {
		//Netscape 6+
		isIE = false;
		isNav = false;
		isNav6 = true;
	}
}else{
	//MSIE
	isIE = true;
	isNav = false;
	isNav6 = false;
}
 
