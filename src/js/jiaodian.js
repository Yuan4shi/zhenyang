$(function(){
        	var nav=$("#nav");
        	var width=nav.width();
        	var oul=$("#nav ul");
        	var len=$("#nav li").length;
        	var aPage=$(".btn a");
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
        		aPage.removeClass("active");
        		aPage.eq(index).addClass("active");
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
        
        		oul.append($('#nav li:first').clone());
        		var nowLeft=-len*width;
        		oul.stop().animate({"left":nowLeft},function(){
        			oul.css({"left":0});
        			$("#nav li:last").remove();
        		});
        		aPage.removeClass("active").eq(0).addClass("active");
        	};
        	nav.hover(function(){clearInterval(timer);},function(){autoRun();});
        });