var CatImage = {
	
	AppendCatContent : function(myObj) {
		
		document.getElementById('divMainEntry').innerHTML = "";
		StringBilder.BuildMainEntry("three", "1", "2");
		StringBilder.CreatrImageElement("three","cat",1, myObj);
	},
	 
	GetBase64 : function() {
	  
	   var xmlhttp = new XMLHttpRequest();
	    xmlhttp.open("GET", "base64.txt", true);
	    xmlhttp.send();
	    xmlhttp.onreadystatechange = function() {
	    	if (this.readyState == 4 && this.status == 200) {
	        	var myObj = this.responseText;
	        	CatImage.AppendCatContent(myObj);
	    	}
		}
	}
 }

 
		
	    