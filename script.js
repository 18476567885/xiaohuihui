//封装一个n代替getElementById()的方法
function byId(id){
  return typeof(id)==="string"?document.getElementById(id):id;
   } 
   var idex=0,
      time=null,
      pics=byId("banner").getElementsByTagName("div"),
      dots=byId("dots").getElementsByTagName("span"),

      len=pics.length;

     
function slideTmg(){
    var main=byId("main");
    //鼠标滑过清除定时器‘离开继续
    main.onmouseover=function(){
      //  滑过清除定时器
      if(time) clearInterval(time);
    }
    main.onmouseout=function(){
          time=setInterval(function(){
             idex++;
           if(idex>=len){
               idex=0;
           }
           //切换图片
           changeTmg();
          },2000);
    }
    //自动在main上触发鼠标离开的事件
    main.onmouseout();
    //遍历所有点击，且绑定事件，点击圆点切换图片
   /* for(var d=0;d<len;d++){
        dots[d].onlick=function(){
            alert("hello");
        }*/
    }

        //切换图片
        function changeTmg(){
            //需要遍历banner下的div,将其隐藏
            for(var i=0;i<len;i++ ){
                pics[i].style.display="none";
            }
            //根据idex索引找到当前div,将其显示出来
           pics[idex].style.display="block";
        }

slideTmg();