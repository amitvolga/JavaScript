var glob  = 0;
var arrayOfMethods = [];


function RouterExp(buttonId)
{
   
    arrayOfMethods = [window.CatImage.GetBase64, window.Cuntry.GetCountry, window.less.LessQuestion];
	
	if(buttonId === 1)
	{
		
		if(glob > (this.arrayOfMethods.length-1))
		{
		    this.arrayOfMethods[arrayOfMethods.length - arrayOfMethods.length]();
		    glob = 1;
		}
		else
		{
			this.arrayOfMethods[this.glob]();
			this.glob++;
		}
	}
	else if(buttonId === -1)
	{
		
		if(this.glob < 0)
		{
			this.arrayOfMethods[arrayOfMethods.length-1]();
			this.glob = 1;
		}
		else
		{
    		this.arrayOfMethods[glob]();
    		this.glob--;
		}
	}
};


window.onbeforeunload = function() {
 
  sessionStorage.setItem('glob', this.glob.toString());
  
};

onload = function () {
	
	let arrayOf = [window.CatImage.GetBase64, window.Cuntry.GetCountry, window.less.LessQuestion];

	if(parseInt(sessionStorage.getItem('glob')) < 0)
	{
		arrayOf[0]();
	}else if(parseInt(sessionStorage.getItem('glob')) > arrayOf.length)
	{
			arrayOf[arrayOf.length-1]();
	}else
	{
		arrayOf[sessionStorage.getItem('glob')]();
	}
};