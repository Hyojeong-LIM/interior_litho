(($,window,document,undefined)=>{
    class Interior {
        init(){
            this.parallax();
            this.header();
            this.section1();
            this.section2();
            this.section3();
            this.section4();
            this.section5();
            this.section6();
            this.section7();
            this.section8();
            this.section9();
            this.section10();
            this.footer();
            this.goTop();
        }
        parallax(){
            let parallaxObj = {
                init(){
                    this.section2();
                    this.section3();
                    this.section4();
                    this.section5();
                    this.section6();
                    this.section8();
                    this.section10();
                },
                section2(){
                    const sec2 = $('#section2');
                    let sec2Top = $('#section2').offset().top-$(window).height()+150;

                    $(window).scroll(function(){
                        if( $(window).scrollTop()==0){
                            sec2.removeClass('addParallax');
                        }
                        if( $(window).scrollTop()>sec2Top){
                            sec2.addClass('addParallax');
                        }
                    });
                },
                section3(){
                    const sec3 = $('#section3');
                    let sec3Top = $('#section3').offset().top-$(window).height()+150;

                    $(window).scroll(function(){
                        if( $(window).scrollTop()==0){
                            sec3.removeClass('addParallax');
                        }
                        if( $(window).scrollTop()>sec3Top){
                            sec3.addClass('addParallax');
                        }
                    });
                },
                section4(){
                    const sec4 = $('#section4');
                    let sec4Top = $('#section4').offset().top-$(window).height()+100;

                    $(window).scroll(function(){
                        if( $(window).scrollTop()==0){
                            sec4.removeClass('addParallax');
                        }
                        if( $(window).scrollTop()>sec4Top){
                            sec4.addClass('addParallax');
                        }
                    });
                },
                section5(){
                    const sec5 = $('#section5');
                    let sec5Top = $('#section5').offset().top-$(window).height()+100;

                    $(window).scroll(function(){
                        if( $(window).scrollTop()==0){
                            sec5.removeClass('addParallax');
                        }
                        if( $(window).scrollTop()>sec5Top){
                            sec5.addClass('addParallax');
                        }
                    });
                },
                section6(){
                    const number = [2530, 3200, 2830, 2060];
                    let cnt = 0;

                    
                },
                section8(){
                    const sec8 = $('#section8');
                    let sec8Top = $('#section8').offset().top-$(window).height();

                    $(window).scroll(function(){
                        if( $(window).scrollTop()==0){
                            sec8.removeClass('addParallax');
                        }
                        if( $(window).scrollTop()>sec8Top){
                            sec8.addClass('addParallax');
                        }
                    });
                },
                section10(){
                    const sec10 = $('#section10');
                    let sec10Top = $('#section10').offset().top-$(window).height()+100;

                    $(window).scroll(function(){
                        if( $(window).scrollTop()==0){
                            sec10.removeClass('addParallax');
                        }
                        if( $(window).scrollTop()>sec10Top){
                            sec10.addClass('addParallax');
                        }
                    });
                }
            }
            parallaxObj.init();
        }
        header(){
            let $window = $(window);
            const header = $('#header');
            let newScrTop = $window.scrollTop();
            let oldScrTop = newScrTop;
            let result = '';

             $window.scroll(function(){
                if( $window.scrollTop()==0){
                    header.removeClass('addH80');
                    header.removeClass('addShow');
                    header.removeClass('addHide');
                }
                else{
                    header.addClass('addH80');

                    newScrTop = $window.scrollTop();

                    result = oldScrTop-newScrTop>0? 'UP':'DOWN';

                    if(result=='UP'){
                        header.addClass('addHide');
                        header.removeClass('addShow');
                    }
                    if(result=='DOWN'){
                        header.addClass('addShow');
                        header.removeClass('addHide');
                    }
                    oldScrTop = newScrTop;
                }
            });

            //메뉴 이벤트
            const mainBtn = $('.main-btn');
            const sub = $('.sub');
            const nav = $('#nav');
            const subBtn = $('.sub-btn');
            const subSub = $('.sub-sub');

            mainBtn.on({
                mouseenter:function(e){
                    e.preventDefault();
                    sub.stop().fadeOut(0);
                    $(this).next().stop().fadeIn(300);
                },
                focusin:function(e){
                    e.preventDefault();
                    sub.stop().fadeOut(0);
                    $(this).next().stop().fadeIn(300);
                }
            });

            nav.on({
                mouseleave:function(e){
                    e.preventDefault();
                    sub.stop().fadeOut(400);
                    subSub.stop().fadeOut(0);
                }
            });

            subBtn.on({
                mouseenter:function(e){
                    e.preventDefault();
                    subSub.stop().fadeOut(0);
                    $(this).next().stop().fadeIn(300);
                },
                focusin:function(e){
                    e.preventDefault();
                    subSub.stop().fadeOut(0);
                    $(this).next().stop().fadeIn(300);
                }
            });
        }
        section1(){
            const slideWrap = $('.slide-wrap');
            const slideView = $('.slide-view');
            const pageBtn = $('.page-btn');
            const nextBtn = $('.next-btn');
            const prevBtn = $('.prev-btn');
            let cnt=0;
            let winW = $(window).innerWidth();

            resize();
            function resize(){
                return winW = $(window).innerWidth();
            }

            $(window).resize(function(){
                resize();
            });

            function mainSlide(){
                slideWrap.stop().animate({left:-winW*cnt},600,'easeInOutExpo',function(){
                    if(cnt>2){cnt=0}
                    if(cnt<0){cnt=2}
                    slideWrap.stop().animate({left:-winW*cnt},0);
                });
                pageEvent();
            }

            //페이지 이벤트
            function pageEvent(){
                pageBtn.removeClass('currentPage');
                pageBtn.eq(cnt>2?0:cnt).addClass('currentPage');
            }

            pageBtn.each(function(index){
                $(this).on({
                    click:function(e){
                        e.preventDefault();
                        cnt=index;
                        mainSlide();
                    }
                })
            });

            function nextCount(){
                cnt++;
                mainSlide();
            }

            function prevCount(){
                cnt--;
                mainSlide();
            }
            //setInterval(nextCount,3000);

            //다음화살버튼
            nextBtn.on({
                click:function(e){
                    e.preventDefault();
                    nextCount();
                }
            });
            //이전화살버튼
            prevBtn.on({
                click:function(e){
                    e.preventDefault();
                    prevCount();
                }
            });

            // 드래그&드롭
            let touchStart = null;
            let touchEnd = null;
            let mouseDown = null;
            let dragEnd = null;
            let dragStart = null;

            slideView.on({
                mousedown:function(e){
                    touchStart = e.clientX;
                    dragStart = e.clientX-slideWrap.offset().left-winW;
                    mouseDown=true;
                },
                mouseup:function(e){
                    touchEnd = e.clientX;
                    mouseDown=false;

                    if(touchStart-touchEnd>0){
                        nextCount();
                    }
                    if(touchStart-touchEnd<0){
                        prevCount();
                    }
                },
                mouseleave:function(e){
                    if(!mouseDown){return}
                    touchEnd = e.clientX;
                    mouseDown=false;

                    if(touchStart-touchEnd>0){
                        nextCount();
                    }
                    if(touchStart-touchEnd<0){
                        prevCount();
                    }
                },
                mousemove:function(e){
                    e.preventDefault();
                    if(!mouseDown){return}
                    dragEnd=e.clientX;
                    slideWrap.css({left:dragEnd-dragStart});
                }
            });
            
        }
        section2(){
            
        }
        section3(){
            const sec3SlideWrap = $('.sec3-slide-wrap');
            const sec3SlideView = $('.sec3-slide-view');
            const sec3PrevBtn = $('.sec3-prev-btn');
            const sec3NextBtn = $('.sec3-next-btn');
            let cnt=0;

            if( $(window).innerWidth()<=770){
                function mainSlide(){
                    sec3SlideWrap.stop().animate({left:-736*cnt},1000,'easeInOutExpo',function(){
                        if(cnt>3){cnt=0}
                        if(cnt<0){cnt=3}
                        sec3SlideWrap.stop().animate({left:-736*cnt},0);
                    });
                }
    
                function nextCount(){
                    cnt++;
                    mainSlide();
                }
    
                function prevCount(){
                    cnt--;
                    mainSlide();
                }
                setInterval(nextCount,3000);
            }


            function mainSlide(){
                sec3SlideWrap.stop().animate({left:-360*cnt},1000,'easeInOutExpo',function(){
                    if(cnt>3){cnt=0}
                    if(cnt<0){cnt=3}
                    sec3SlideWrap.stop().animate({left:-360*cnt},0);
                });
            }

            function nextCount(){
                cnt++;
                mainSlide();
            }

            function prevCount(){
                cnt--;
                mainSlide();
            }
            setInterval(nextCount,3000);

            //다음화살버튼
            sec3NextBtn.on({
                click:function(e){
                    e.preventDefault();
                    nextCount();
                }
            });
            //이전화살버튼
            sec3PrevBtn.on({
                click:function(e){
                    e.preventDefault();
                    prevCount();
                }
            });

            // 드래그&드롭
            let touchStart = null;
            let touchEnd = null;
            let mouseDown = null;
            let dragEnd = null;
            let dragStart = null;

            sec3SlideView.on({
                mousedown:function(e){
                    touchStart = e.clientX;
                    dragStart = e.clientX-sec3SlideWrap.offset().left-360;
                    mouseDown=true;
                },
                mouseleave: function(e){
                    touchEnd = e.clientX;
                    mouseDown=false;
                },
                mouseup:function(e){
                    touchEnd = e.clientX;
                    mouseDown=false;

                    if(touchStart-touchEnd>0){
                        nextCount();
                    }
                    if(touchStart-touchEnd<0){
                        prevCount();
                    }
                },
                mousemove:function(e){
                    e.preventDefault();
                    if(!mouseDown){return}
                    dragEnd=e.clientX;
                    sec3SlideWrap.css({left:dragEnd-dragStart});
                }
            });
        }
        section4(){

        }
        section5(){
            let cnt = 0;
            const sec5SlideWrap = $('.sec5-slide-wrap');
            const sec5SlideView = $('.sec5-slide-view');

            function mainSlide(){
                sec5SlideWrap.stop().animate({left:-445*cnt},600,function(){
                    if(cnt>3){cnt=0}
                    if(cnt<0){cnt=3}
                    sec5SlideWrap.stop().animate({left:-445*cnt},0);
                });
            }
            function nextCount(){
                cnt++;
                mainSlide();
            }

            function prevCount(){
                cnt--;
                mainSlide();
            }
            setInterval(nextCount,3000);

            // 드래그&드롭
            let touchStart = null;
            let touchEnd = null;
            let mouseDown = null;
            let dragEnd = null;
            let dragStart = null;

            sec5SlideView.on({
                mousedown:function(e){
                    touchStart = e.clientX;
                    dragStart = e.clientX-sec5SlideWrap.offset().left-445;
                    mouseDown=true;
                },
                mouseleave: function(e){
                    touchEnd = e.clientX;
                    mouseDown=false;
                },
                mouseup:function(e){
                    touchEnd = e.clientX;
                    mouseDown=false;

                    if(touchStart-touchEnd>0){
                        nextCount();
                    }
                    if(touchStart-touchEnd<0){
                        prevCount();
                    }
                },
                mousemove:function(e){
                    e.preventDefault();
                    if(!mouseDown){return}
                    dragEnd=e.clientX;
                    sec5SlideWrap.css({left:dragEnd-dragStart});
                }
            });
        }
        section6(){
           const path = $('#litho path');
           let size = []; 
           
           function svgAni(){

              $.each(path, function(idx, obj){
                  size[idx] = obj.getTotalLength();
  /*                 console.log(idx,  size[idx] ); */
                  obj.style.strokeDasharray  = size[idx];
                  obj.style.strokeDashoffset = size[idx];
                 
                  //각각 하나하나 따로따로 애니메이션 구현 배열처리해서
                  $(obj).stop().animate({strokeDashoffset: 0 },6000, function(){
                    $(obj).stop().animate({strokeDashoffset: size[idx] },3000);
                  });
                  
              });
           }     

           svgAni(); //1회실행하고
           setInterval(svgAni, 9000);
        }
        section7(){

        }
        section8(){
            //메인 슬라이드 함수
            let cnt = 0;
            const sec8SlideWrap = $('.sec8-slide-wrap');
            const sec8SlideView = $('.sec8-slide-view');

            function mainSlide(){
                sec8SlideWrap.stop().animate({left:-702*cnt},800,function(){
                    if(cnt>2){cnt=0}
                    if(cnt<0){cnt=2}
                    sec8SlideWrap.stop().animate({left:-702*cnt},0);
                });
            }
            function nextCount(){
                cnt++;
                mainSlide();
            }

            function prevCount(){
                cnt--;
                mainSlide();
            }
            setInterval(nextCount,3000);

            //드래그 앤 드롭
            let touchStart = null;
            let touchEnd = null;
            let mouseDown = null;
            let dragEnd = null;
            let dragStart = null;

            sec8SlideView.on({
                mousedown:function(e){
                    touchStart = e.clientX;
                    dragStart = e.clientX - sec8SlideWrap.offset().left-702;
                    mouseDown = true;
                },
                mouseleave: function(e){
                    touchEnd = e.clientX;
                    mouseDown=false;
                },
                mouseup:function(e){
                    touchEnd = e.clientX;
                    mouseDown = false;
                    if( (touchStart-touchEnd)>0){
                        nextCount();
                    }
                    if( (touchStart-touchEnd)<0){
                        prevCount();
                    }
                },
                mousemove:function(e){ 
                    e.preventDefault();
                    if(!mouseDown){return}
                    dragEnd=e.clientX;
                    sec8SlideWrap.css({left:dragEnd-dragStart});
                }
            });

            

        }
        section9(){

        }
        section10(){

        }
        footer(){

        }
        goTop(){
            const goTop = $('.go-top');
            const goTopBtn = $('.go-top-btn');
            const htmlBody = $('html,body');

            goTop.stop().fadeOut(1000);

            $(window).scroll(function(){
                if( $(window).scrollTop() >=100 ){
                    goTop.stop().fadeIn(1000);
                }
                else{
                    goTop.stop().fadeOut(1000);
                }
            });

            goTopBtn.on({
                click:function(){
                    htmlBody.animate({scrollTop:0}, 600);
                }
            });
    
            
        }
    }
    const newInterior = new Interior();
    newInterior.init();
})(jQuery,window,document);