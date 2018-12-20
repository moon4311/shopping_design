/**
 * jCarouselLite - jQuery plugin to navigate images/any content in a carousel style widget.
 * @requires jQuery v1.2 or above
 *
 * http://gmarwaha.com/jquery/jcarousellite/
 *
 * Copyright (c) 2007 Ganeshji Marwaha (gmarwaha.com)
 * Dual licensed under the MIT and GPL licenses:
 * http://www.opensource.org/licenses/mit-license.php
 * http://www.gnu.org/licenses/gpl.html
 *
 * Version: 1.0.1
 * Note: Requires jquery 1.2 or above from version 1.0.1
 */

/**
 * Creates a carousel-style navigation widget for images/any-content from a simple HTML markup.
 *
 * The HTML markup that is used to build the carousel can be as simple as...
 *
 *  <div class="carousel">
 *      <ul>
 *          <li><img src="image/1.jpg" alt="1"></li>
 *          <li><img src="image/2.jpg" alt="2"></li>
 *          <li><img src="image/3.jpg" alt="3"></li>
 *      </ul>
 *  </div>
 *
 * As you can see, this snippet is nothing but a simple div containing an unordered list of images.
 * You don't need any special "class" attribute, or a special "css" file for this plugin.
 * I am using a class attribute just for the sake of explanation here.
 *
 * To navigate the elements of the carousel, you need some kind of navigation buttons.
 * For example, you will need a "previous" button to go backward, and a "next" button to go forward.
 * This need not be part of the carousel "div" itself. It can be any element in your page.
 * Lets assume that the following elements in your document can be used as next, and prev buttons...
 *
 * <button class="prev">&lt;&lt;</button>
 * <button class="next">&gt;&gt;</button>
 *
 * Now, all you need to do is call the carousel component on the div element that represents it, and pass in the
 * navigation buttons as options.
 *
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev"
 * });
 *
 * That's it, you would have now converted your raw div, into a magnificient carousel.
 *
 * There are quite a few other options that you can use to customize it though.
 * Each will be explained with an example below.
 *
 * @param an options object - You can specify all the options shown below as an options object param.
 *
 * @option btnPrev, btnNext : string - no defaults
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev"
 * });
 * @desc Creates a basic carousel. Clicking "btnPrev" navigates backwards and "btnNext" navigates forward.
 *
 * @option btnGo - array - no defaults
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      btnGo: [".0", ".1", ".2"]
 * });
 * @desc If you don't want next and previous buttons for navigation, instead you prefer custom navigation based on
 * the item number within the carousel, you can use this option. Just supply an array of selectors for each element
 * in the carousel. The index of the array represents the index of the element. What i mean is, if the
 * first element in the array is ".0", it means that when the element represented by ".0" is clicked, the carousel
 * will slide to the first element and so on and so forth. This feature is very powerful. For example, i made a tabbed
 * interface out of it by making my navigation elements styled like tabs in css. As the carousel is capable of holding
 * any content, not just images, you can have a very simple tabbed navigation in minutes without using any other plugin.
 * The best part is that, the tab will "slide" based on the provided effect. :-)
 *
 * @option mouseWheel : boolean - default is false
 * @example
 * $(".carousel").jCarouselLite({
 *      mouseWheel: true
 * });
 * @desc The carousel can also be navigated using the mouse wheel interface of a scroll mouse instead of using buttons.
 * To get this feature working, you have to do 2 things. First, you have to include the mouse-wheel plugin from brandon.
 * Second, you will have to set the option "mouseWheel" to true. That's it, now you will be able to navigate your carousel
 * using the mouse wheel. Using buttons and mouseWheel or not mutually exclusive. You can still have buttons for navigation
 * as well. They complement each other. To use both together, just supply the options required for both as shown below.
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      mouseWheel: true
 * });
 *
 * @option auto : number - default is null, meaning autoscroll is disabled by default
 * @example
 * $(".carousel").jCarouselLite({
 *      auto: 800,
 *      speed: 500
 * });
 * @desc You can make your carousel auto-navigate itself by specfying a millisecond value in this option.
 * The value you specify is the amount of time between 2 slides. The default is null, and that disables auto scrolling.
 * Specify this value and magically your carousel will start auto scrolling.
 *
 * @option speed : number - 200 is default
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      speed: 800
 * });
 * @desc Specifying a speed will slow-down or speed-up the sliding speed of your carousel. Try it out with
 * different speeds like 800, 600, 1500 etc. Providing 0, will remove the slide effect.
 *
 * @option easing : string - no easing effects by default.
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      easing: "bounceout"
 * });
 * @desc You can specify any easing effect. Note: You need easing plugin for that. Once specified,
 * the carousel will slide based on the provided easing effect.
 *
 * @option vertical : boolean - default is false
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      vertical: true
 * });
 * @desc Determines the direction of the carousel. true, means the carousel will display vertically. The next and
 * prev buttons will slide the items vertically as well. The default is false, which means that the carousel will
 * display horizontally. The next and prev items will slide the items from left-right in this case.
 *
 * @option circular : boolean - default is true
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      circular: false
 * });
 * @desc Setting it to true enables circular navigation. This means, if you click "next" after you reach the last
 * element, you will automatically slide to the first element and vice versa. If you set circular to false, then
 * if you click on the "next" button after you reach the last element, you will stay in the last element itself
 * and similarly for "previous" button and first element.
 *
 * @option visible : number - default is 3
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      visible: 4
 * });
 * @desc This specifies the number of items visible at all times within the carousel. The default is 3.
 * You are even free to experiment with real numbers. Eg: "3.5" will have 3 items fully visible and the
 * last item half visible. This gives you the effect of showing the user that there are more images to the right.
 *
 * @option start : number - default is 0
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      start: 2
 * });
 * @desc You can specify from which item the carousel should start. Remember, the first item in the carousel
 * has a start of 0, and so on.
 *
 * @option scrool : number - default is 1
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      scroll: 2
 * });
 * @desc The number of items that should scroll/slide when you click the next/prev navigation buttons. By
 * default, only one item is scrolled, but you may set it to any number. Eg: setting it to "2" will scroll
 * 2 items when you click the next or previous buttons.
 *
 * @option beforeStart, afterEnd : function - callbacks
 * @example
 * $(".carousel").jCarouselLite({
 *      btnNext: ".next",
 *      btnPrev: ".prev",
 *      beforeStart: function(a) {
 *          alert("Before animation starts:" + a);
 *      },
 *      afterEnd: function(a) {
 *          alert("After animation ends:" + a);
 *      }
 * });
 * @desc If you wanted to do some logic in your page before the slide starts and after the slide ends, you can
 * register these 2 callbacks. The functions will be passed an argument that represents an array of elements that
 * are visible at the time of callback.
 *
 *
 * @cat Plugins/Image Gallery
 * @author Ganeshji Marwaha/ganeshread@gmail.com
 *
 *
 * @ 자동스크롤 기능 사용 시 마우스오버(자동시작 중지) 기능 추가( auto 와 함께 사용 ) - by refersign 2014-01-10
 * setIntervalObj : null <-- 타이머 객체 저장 변수.. 별도 설정 필요 없음
 * EvtAutoStop : ".Over",
 * EvtAutoStart : ".Out"
 *
 * @ scroll 과는 별개로 버튼 클릭 시 스크롤 카운트 지정 기능 추가( auto 사용 시 scroll 단위, 버튼은 CustomScroll 단위) - by refersign 2014-01-22
 * CustomScroll : 6				버튼 클릭 시 설정된 스크롤만큼 스크롤
 *
 * @ row에 따른 lines 변수 추가 2016-05-31_ne0j0ys_
 * lines : 2, 롤링 행의 수를 지정함. 기본은 1
 *
 *
 * @ 일시정지, 재생 버튼 기능 추가 - kbjin44 2018-02-13
 * EvtClickStop : 일시정지 버튼 영역   
 * EvtClickStart : 재생 버튼 영역 
 *
 */


(function($) {                                          // Compliant with jquery.noConflict()
$.fn.jCarouselLite = function(o) {
    o = $.extend({
        btnPrev: null,
        btnNext: null,
        btnGo: null,
        btnOver: null,
        mouseWheel: false,
        auto: null,

        speed: 200,
        speed2: null,
        easing: null,

        vertical: false,
        circular: true,
        visible: 3,
        start: 0,
        scroll: 1,
        lines : 1, // li 줄 수

        noResize : false,
		 dama: null,
		  
        beforeStart: null,
        afterEnd: null

        ,setIntervalObj : null
        ,EvtAutoStop : null
        ,EvtAutoStart : null
        ,CustomScroll : null
        ,EvtClickStop : null
        ,EvtClickStart: null
    }, o || {});

    return this.each(function() {                           // Returns the element collection. Chainable.

		 var curr_page_num = 0;
		 var clac_dama = 0;
		 var lilines = o.lines ? o.lines : 1; 									// li의 줄 수를 나타냄, 한줄에 몇개를 표현할지 확인

        var running = false, animCss=o.vertical?"top":"left", sizeCss=o.vertical?"height":"width";
        var div = $(this), ul = $("ul", div), tLi = $("li", ul), tl = tLi.size();
        var def_v = $("li",ul).length;
        var v = def_v<o.visible ? def_v : o.visible;

	      if (lilines == 1) {
	        if(o.circular) {
	            ul.prepend(tLi.slice(tl-v-1+1).clone())
	              .append(tLi.slice(0,v).clone());
	            o.start += v;
	        }
	      }

        var li = $("li", ul), itemLength = li.size(), curr = o.start;
        div.css("visibility", "visible");

        li.css({overflow: "hidden", float: o.vertical ? "none" : "left"});
        ul.css({margin: "0", padding: "0", position: "relative", "list-style-type": "none", "z-index": "1"});
        div.css({overflow: "hidden", position: "relative", "z-index": "2", left: "0px"});

        var liSize = o.vertical ? height(li) : width(li);   // Full li size(incl margin)-Used for animation
        if (liSize == 0) liSize = parseInt(width(li));			// 2016-06-01_ne0j0ys_IE7,8에서 liSize:0 => ulSize또한 0으로 plugin이 not working됨을 방지
        var ulSize = (liSize * itemLength) / lilines;                   // size of full ul(total length, not just for the visible items)
        var divSize = liSize * v;                           // size of entire div(total length for just the visible items)

        li.css({width: li.width(), height: li.height()});
        ul.css(sizeCss, ulSize+"px").css(animCss, -(curr*liSize));

				if( o.noResize == false ){
        	div.css(sizeCss, divSize+"px");                     // Width of the DIV. length of visible images
        }

        if(o.btnPrev)
            $(o.btnPrev).click(function() {
            		if( o.CustomScroll ){
                	return go(curr-o.CustomScroll);
                }
                else{
                	return go(curr-o.scroll);
                }
            });

        if(o.btnNext)
            $(o.btnNext).click(function() {
                if( o.CustomScroll ){
                	return go(curr+o.CustomScroll);
                }
                else{
                	return go(curr+o.scroll);
                }
            });

        if(o.btnGo)
            $.each(o.btnGo, function(i, val) {
                $(val).click(function() {
                	if (lilines == 1) {
                    return go(o.circular ? o.visible+i : i);
                  } else {
                  	var val_splt = val.split('_');
                  	var res_i = parseInt(val_splt[2]);
                  	res_i = res_i / lilines;
                  	return go(res_i);
                  }
                });
            });
            
        if(o.btnOver)
            $.each(o.btnOver, function(i, val) {
                $(val).mouseenter(function() {
                	o.speed = o.speed2;
                	if (lilines == 1) {
                    return go(o.circular ? o.visible+i : i);
                  } else {
                  	var val_splt = val.split('_');
                  	var res_i = parseInt(val_splt[2]);
                  	res_i = res_i / lilines;
                  	return go(res_i);
                  }
                  
                });
            });        
				
        if(o.mouseWheel && div.mousewheel)
            div.mousewheel(function(e, d) {
                return d>0 ? go(curr-o.scroll) : go(curr+o.scroll);
            });

        if(o.auto)
            o.setIntervalObj = setInterval(function() {
                go(curr+o.scroll);
            }, o.auto+o.speed);

        function vis() {
        	return li.slice(curr).slice(0,v);
        };

        function go(to) {
            if(!running) {

                if(o.beforeStart)
                    o.beforeStart.call(this, vis());

                if(o.circular) {            // If circular we are in first or last, then goto the other end
                    if(to<=o.start-v-1) {           // If first, then goto last
                    	if( o.CustomScroll ){
                        ul.css(animCss, -((itemLength-(v))*liSize)+"px");
                      }
                      else{
                      	ul.css(animCss, -((itemLength-(v*2))*liSize)+"px");
                      }
                        // If "scroll" > 1, then the "to" might not be equal to the condition; it can be lesser depending on the number of elements.
                        curr = to==o.start-v-1 ? itemLength-(v*2)-1 : itemLength-(v*2)-o.scroll;
                    } else if(to>=itemLength-v+1) { // If last, then goto first
                        if( o.CustomScroll ){
                          ul.css(animCss, "0px" );
                        }
                        else{
                        	ul.css(animCss, -( (v) * liSize ) + "px" );
                        }
                        // If "scroll" > 1, then the "to" might not be equal to the condition; it can be greater depending on the number of elements.
                        curr = to==itemLength-v ? v : v+o.scroll;
                    } else  curr = to;
                } else {                    // If non-circular and to points to first or last, we just return.
//                    if(to<0 || to>itemLength-v) return;
//                    else curr = to;
										if( itemLength < v ){
											return;
										}
                    if(to<0 ){
                    	curr = 0;
                    }
                    else if( to>itemLength-v ){
                    	 curr=itemLength-v;
                    }
                    else curr = to;
                }                           // If neither overrides it, the curr will still be "to" and we can proceed.

                running = true;

			        	if (lilines > 1) {
			        		if (Math.abs(ulSize) <= Math.abs(curr*liSize) || curr < 0) {
			        			if (curr < 0) {
			        				// prev
			        				curr = Math.round(def_v / lilines) - lilines;
			        			} else {
			        				// next
			        				curr = o.start;
			        			}
			        		}
			        	}

                ul.animate(
                    animCss == "left" ? { left: -(curr*liSize) } : { top: -(curr*liSize) } , o.speed, o.easing,
                    function() {
                        if(o.afterEnd)
                            o.afterEnd.call(this, vis());
                        running = false;
                    }
                );
                // Disable buttons when the carousel reaches the last/first, and enable when not
                if(!o.circular) {
                    $(o.btnPrev + "," + o.btnNext).removeClass("disabled");
                    $( (curr-o.scroll<0 && o.btnPrev)
                        ||
                       (curr+o.scroll > itemLength-v && o.btnNext)
                        ||
                       []
                     ).addClass("disabled");
                }

                if(o.dama){
                	if(curr > 3){
                		clac_dama =  curr - 3;
                	}else if(curr == 0){
                		clac_dama =  curr + 3;
                	}else{
                		clac_dama =  curr;
                	}
                	curr_page_num = clac_dama;
                	$(o.dama).text(curr_page_num);
                }
            }
            return false;
        };

        // 자동롤링 시 롤링 중지 / 시작
        if( o.auto && o.EvtAutoStop ){
				$(o.EvtAutoStop).bind('mouseenter',function(){
					//일시정지/재생 기능 추가 시 해당 버튼이 EvtAutoStop/EvtAutoStart 영역 안에 있는 경우 2중으로 스크립트 안타게
					if( !o.EvtClickStop || (o.EvtClickStop && $(o.EvtClickStop).css('display') != 'none' ) ){
						clearInterval(o.setIntervalObj);
					}
				});
			}
			
			if( o.auto && o.EvtAutoStart ){
				$(o.EvtAutoStart).bind('mouseleave',function(){
					//일시정지/재생 기능 추가 시 해당 버튼이 EvtAutoStop/EvtAutoStart 영역 안에 있는 경우 2중으로 스크립트 안타게
					if( !o.EvtClickStop || (o.EvtClickStop && $(o.EvtClickStop).css('display') != 'none' ) ){
						o.setIntervalObj = setInterval(function() {
					      go(curr+o.scroll);
					  }, o.auto+o.speed);
					}
				});
			}
			
			//일시정지 버튼 
			if(o.auto && o.EvtClickStop){
				$(o.EvtClickStop).bind('click',function(){
					clearInterval(o.setIntervalObj);
					console.log($(o.EvtClickStop).css('display'));
				});
			}
			if(o.auto && o.EvtClickStart){
				$(o.EvtClickStart).bind('click',function(){
						o.setIntervalObj = setInterval(function() {
				      go(curr+o.scroll);
				  }, o.auto+o.speed);
				});
			}
	
    });
    	
		
};

		
function css(el, prop) {
    return parseInt($.css(el[0], prop)) || 0;
};
function width(el) {
    return  el[0].offsetWidth + css(el, 'marginLeft') + css(el, 'marginRight');
};
function height(el) {
    return el[0].offsetHeight + css(el, 'marginTop') + css(el, 'marginBottom');
};

})(jQuery);