var StringBilder =
{
	CreatrImageElement : function  (appendToId,className,imgId, baseURL)
	{
		let image = document.createElement('img');
		liNode = document.createTextNode(className);
		image.setAttribute("id",className+"img"+imgId.toString());
		image.setAttribute("class", className+"img");
		image.src = baseURL;
		element = document.getElementById(appendToId);
		element.appendChild(image)
	},
	
	CreatrDivElementWithChild : function  (appendToId,className,divId, elemKind, childId)
	{
		let div, child, element;
		div = document.createElement('div');
		child = document.getElementById(className+elemKind.toString()+childId);
		div.setAttribute("id",className+divId.toString()+"div");
		div.setAttribute("class", className+"div");
	    div.appendChild(child);
	    element = document.getElementById(appendToId);
		element.appendChild(div)
	},

	CreateParaElement : function (appendToId,className, pId, textNode)
	{
		let p = document.createElement('p');
		p.setAttribute("id", className+"p"+pId.toString());
		p.setAttribute("class",className+"p");
		node = document.createTextNode(textNode);
		p.appendChild(node);
		element = document.getElementById(appendToId);
		element.appendChild(p);
	},
	
	CreateDivElement : function (appendToId, id, className)
	{
		let div, element;
	    div = document.createElement("div");
		div.setAttribute("id",className+id.toString()+"div");
    	div.setAttribute("class", className+"div");
	    element = document.getElementById(appendToId);
		element.appendChild(div);
		return className+id.toString()+"div";
	},

	CreateH4Element : function (value, id, className, parentId)
	{
		let heder, node, element;
	    heder = document.createElement("h4");
		heder.setAttribute("id",className.toString()+id.toString()+"h4");
    	heder.setAttribute("class", className);
	    node = document.createTextNode(value);
		heder.appendChild(node);
	    element = document.getElementById(parentId);
		element.appendChild(heder);
		
	}, 

	CreateUlElement : function (parentId, id, className,li_Vlue)
	{
		let ul, element, ulNode;

			ul = document.createElement("ul");
		element = document.getElementById(parentId.toString()+id.toString()+"div");		
		ul.setAttribute("id",className+id.toString()+"ul");
		ul.setAttribute("class", className+"ul");
	    ulNode = document.createTextNode("List Of:"+className);
		ul.appendChild(ulNode);
		element.appendChild(ul);
		StringBilder.CreateLiElement(li_Vlue, 1,id,className);
	},

	CreateLiElement : function(cities, id, parentId, className){
	
		let ul, li, liNode;
	
		ul = document.getElementById(className+parentId.toString()+"ul");
		li = document.createElement("li");
		liNode = document.createTextNode(cities);
		li.setAttribute("id",className+"li"+id.toString());
		li.setAttribute("class", className+"li");
		li.appendChild(liNode);
		ul.appendChild(li);
	},

	BuildMainEntry: function(stringid, id, secid){
	
		let div, label, maimEntry;
	    maimEntry = document.getElementById("divMainEntry");
	    div = document.createElement("div");
	    div.setAttribute("id",stringid);
		div.setAttribute("class", "slideView");
		labelPrev = document.createElement("label");
		labelNext = document.createElement("label");
		labelPrev.setAttribute("for","i"+id);
		labelPrev.setAttribute("class", "prev");
		labelNext.setAttribute("for","i"+secid);
		labelNext.setAttribute("class", "next");	
		div.appendChild(labelNext);
		div.appendChild(labelPrev);
		maimEntry.appendChild(div);
		return stringid;
	}
};