// JavaScript Document
window.onload=function()
{
		var arr=new Array()
	arr[0]="images/buttom_0.jpg";
	arr[1]="images/buttom_2.jpg";
	arr[2]="images/buttom_3.jpg";
	var listback=document.getElementById("listback");
	var span=document.getElementById("bottons").getElementsByTagName("span");
	
		span[0].onmouseover=function()
		{
		this.className="selected";
		listback.style.background="url("+arr[0]+")";
		
		if(span[1].className=="selected"||span[2].className=="selected")
		{
			span[1].className="noselected";
			span[2].className="noselected";
			
		}	
		}
		span[1].onmouseover=function()
		{
		this.className="selected";
		listback.style.background="url("+arr[1]+")";
		
		
		if(span[0].className=="selected"||span[2].className=="selected")
		{
			span[0].className="noselected";
			span[2].className="noselected";
			
		}	
			
		}
		span[2].onmouseover=function()
		{
		this.className="selected";
		listback.style.background="url("+arr[2]+")";
		if(span[0].className=="selected"||span[1].className=="selected")
		{
			span[0].className="noselected";
			span[1].className="noselected";
			
		}		
		}
	
	var container=document.getElementById("container");
		var list=document.getElementById("list");
		var prev=document.getElementById("prev");
		var next=document.getElementById("next");
		prev.onclick=function()
		{
			
			if(list.offsetLeft<-270){
			list.style.left=-270+"px";
			}else{
				list.style.left=parseInt(list.style.left)-250+"px";
			}
		}
		next.onclick=function()
		{
			
			if(list.offsetLeft>-270){
			list.style.left=-270+"px";
			}else{
				list.style.left=list.offsetLeft+250+"px";	
			}
		}
			
}



