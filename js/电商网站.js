function func1(){
	var oContent=document.getElementById('content');
	var oRemark=document.getElementById('remark');
	var oFirst=document.getElementById('first');
	var oSecond=document.getElementById('second');
	oContent.style.display="block";
	oRemark.style.display="none";
	oFirst.className="active";
	oSecond.className="";
}
function func2(){
	var oContent=document.getElementById('content');
	var oRemark=document.getElementById('remark');
	var oFirst=document.getElementById('first');
	var oSecond=document.getElementById('second');
	oContent.style.display="none";
	oRemark.style.display="block";
	oFirst.className="";
	oSecond.className="active";

}

