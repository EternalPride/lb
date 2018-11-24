var aimg=document.getElementById("divimg").getElementsByTagName("img")[0];
var obtn1=document.getElementById("btn1");
var obtn2=document.getElementById("btn2");
var ali=document.getElementById("uu").getElementsByTagName("li");
var n=0;
var t1=null;
//定义一个数组，存储图片的路径
var arr=new Array(5);
for(var i=0;i<arr.length;i++)
{
   arr[i]="img/tu"+(i+1)+".jpg";
}
//定义播放函数
function auto()
{
	n++;
	if(n==arr.length)
	{
		n=0;
	}
	aimg.src=arr[n];
	//相应li是active
	for(var i=0; i<ali.length;i++)
	{
		ali[i].className="";
	}
	ali[n].className="active";
}
//自动播放
t1=setInterval(auto,500);
//鼠标放到图片上时，停止播放，鼠标离开继续播放
aimg.onmouseover=function(){clearInterval(t1)};
aimg.onmouseout=function(){t1=setInterval(auto,500)};
//鼠标放到相应的li上，停止播放，显示相应的图片，li显示相应的样式
for(var i=0;i<ali.length;i++)
{
	ali[i].index=i;
	ali[i].onmouseover=function()
	{
		clearInterval(t1);
		aimg.src=arr[this.index];
		for(var j=0;j<ali.length;j++)
		{
			ali[j].className="";
		}
		ali[this.index].className="active";
		n=this.index;
	}
	//鼠标离开
	ali[i].onmouseout=function()
	{
		t1=setInterval(auto,500);
	}
}
//下一张
obtn2.onclick=function()
{
	clearInterval(t1);
	auto();
}
function auto1()
{
	n--;
	if(n<0)
	{
		n=arr.length-1;
	}
	aimg.src=arr[n];
	//相应li是active
	for(var i=0; i<ali.length;i++)
	{
		ali[i].className="";
	}
	ali[n].className="active";
}
obtn1.onclick=function()
{
	clearInterval(t1);
	auto1();
}