//your JS code here. If required.
let date=document.getElementById("timer");
let curr=new Date();

setInterval(
	function(){
		curr=new Date();
		date.innerHTML=curr.toLocaleString();
	},1000
);