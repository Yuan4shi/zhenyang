$(function(){
        	var nav1=$("#nav1");
        	var width=nav1.width();
        	var oul=$("#nav1 ul");
        	var len=$("#nav1 li").length;
        	var aPage=$(".btn1 a");
        	var num=0;
        	var timer=null;
        	oul.css({"width":width*(len+1)});
        	aPage.each(function(index){
        		$(this).hover(function(){
        			bannerRun(index);
        		});
        	});
        	function bannerRun(index){
        		num=index;
        		aPage.removeClass("active1");
        		aPage.eq(index).addClass("active1");
        		oul.stop().animate({"left":-width*index},600);
        	};
        	autoRun();
        	function autoRun(){
        		timer=setInterval(function(){
                    if(num==len-1){
                    	seamLess();
                    	num=0;
                    }else{
                    	num++;
                    	bannerRun(num);
                    }    			
        		},2000);
        	}
        	function seamLess(){
        
        		oul.append($('#nav1 li:first').clone());
        		var nowLeft=-len*width;
        		oul.stop().animate({"left":nowLeft},function(){
        			oul.css({"left":0});
        			$("#nav1 li:last").remove();
        		});
        		aPage.removeClass("active1").eq(0).addClass("active1");
        	};
        	nav1.hover(function(){clearInterval(timer);},function(){autoRun();});
        });