var  Cuntry ={
	
	GetCountry: function () {
	    var xmlhttp = new XMLHttpRequest();
	    xmlhttp.open("GET", "http://northwind.servicestack.net/customers.json", true);
	    xmlhttp.send();
	    xmlhttp.onreadystatechange = function() {
	    	if (this.readyState == 4 && this.status == 200) {
	        	var myObj = JSON.parse(this.responseText);
	        	Cuntry.AppendContent(myObj);
	    	}
		}
	},

	AppendContent : function ( myObj)
	{
		
		document.getElementById('divMainEntry').innerHTML = "";
	    StringBilder.BuildMainEntry("three", "3", "1");
	    let country=[], cities={};
		let checkcountries = new Array();
	        
	    for(y =0 ; y<myObj.Customers.length ; y++)	
		{
		    if(checkcountries.includes(myObj.Customers[y].Country) == false)
		    {
		    	country = myObj.Customers[y].Country;
				cities = myObj.Customers[y].City;
				checkcountries.push(country);
				let parentId =  StringBilder.CreateDivElement("three",y, "country");
				StringBilder.CreateH4Element(country, y,"country", parentId);
				StringBilder.CreateUlElement("country", y, "cities", cities);
		   	    
		   	    for(i =0 ; i<myObj.Customers.length ; i++)	
			    {
					if (myObj.Customers[i].Country ===country  && myObj.Customers[i].City != cities )
					{
					   cities = myObj.Customers[i].City;
			           StringBilder.CreateLiElement(cities, i, y, "cities");
					}
				}
		    }
		}	
	}
}




