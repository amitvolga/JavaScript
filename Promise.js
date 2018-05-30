'use strict'

var my_promise = Promise.resolve('Foo');

my_promise.then((res)=> console.log(res));

var my_promise =  new Promise(function(res, rej){
	setTimeout(()=>res(4),2000);
});

my_promise.then((res)=>{
	res +=3;
	console.log(res);
});

function getData(method, url){
	
	return new Promise(function(res, rej){
		var xhr = new XMLHttpRequest();
		xhr.open(method,url);
		xhr.onload = function(){
			if(this.status >=200 && this.status<=300){
				res(xhr.response);
			}else{
	    			rej({
	    				status:this.status,
	    				statusText : xhr.statusText
	    				});
	    		 }
		};
		xhr.onerror= function(){
			rej({
				status:this.status,
				statusText : xhr.statusText
			});
		}
		xhr.send();
	});

}

getData('GET','https://jsonplaceholder.typicode.com/posts').then(function(data){
	let todos = JSON.parse(data);
	let output ='';
	for(let todo of todos){
		output += `
		<li>
			<h3>${todo.userId}</h3>
			<p>Completed : ${todo.title}</p>
		</li>`;
	}
	document.getElementById('ulexc').innerHTML = output;
	console.log(data);
}).catch(function(err){
	console.log(err);
});


 window.location.reload();

amit(5,6, 4, 8);


var amit = (...n)=>
console.log(n[]);
console.log(n);


