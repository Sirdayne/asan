$(document).ready(function(){     
    
    var slideIndex = 0;
    
    var numSlides = $('.h-slide').length;
    
    numSlides = numSlides - 2;
    
    console.log(slideIndex);
    
    //$('.h1-slide').eq( slideIndex ).fadeIn('fast');
    
    $('.h-left').css('z-index','1');
    $('.h-right').css('z-index','1');
    
    $('.h-left').eq( slideIndex ).css('z-index','3');
    $('.h-right').eq( slideIndex ).css('z-index','3');
    
    $('.h-arrow-right').click(function() {
        
        if (slideIndex > numSlides){
            
            console.log(slideIndex);
            console.log('if');
            
            var counterFix = slideIndex;
            
            $('.h-left').eq( slideIndex ).addClass('slideOutUp');  
            $('.h-right').eq( slideIndex ).addClass('slideOutDown'); 
           
            
            $('.h-left').css('z-index','1');
            $('.h-right').css('z-index','1');
            $('.h-left').eq( slideIndex ).css('z-index','3'); 
            $('.h-right').eq( slideIndex ).css('z-index','3'); 

            slideIndex = 0;
            $('.h-left').eq( slideIndex ).css('z-index','2');  
            $('.h-right').eq( slideIndex ).css('z-index','2'); 
            
            //$('.h1-slide').fadeOut('fast');
            //$('.h1-slide').eq( slideIndex ).fadeIn('fast');
            
            $('.h-left').eq( counterFix - 1 ).removeClass('slideOutUp slideOutDown slideOutLeft slideOutRight');
            $('.h-right').eq( counterFix - 1).removeClass('slideOutUp slideOutDown slideOutLeft slideOutRight');
            
            $('.h-left').eq( 0 ).removeClass('slideOutUp slideOutDown slideOutLeft slideOutRight');
            $('.h-right').eq( 0 ).removeClass('slideOutUp slideOutDown slideOutLeft slideOutRight');
            
            
            $('.h-box').hide();  
            
            $('.h-box').eq( slideIndex ).show();  
             
        }
        else{
            
            $('.h-left').removeClass('slideOutUp slideOutDown slideOutLeft slideOutRight');
            $('.h-right').removeClass('slideOutUp slideOutDown slideOutLeft slideOutRight');
            
            if ((slideIndex % 2) != 1){
                $('.h-left').eq( slideIndex ).addClass('slideOutUp');  
                $('.h-right').eq( slideIndex ).addClass('slideOutDown'); 
            }
            else{
                $('.h-left').eq( slideIndex ).addClass('slideOutLeft');  
                $('.h-right').eq( slideIndex ).addClass('slideOutRight'); 
            }

            console.log(slideIndex);
            console.log('else');
            
            $('.h-left').css('z-index','1');
            $('.h-right').css('z-index','1');
            $('.h-left').eq( slideIndex ).css('z-index','3'); 
            $('.h-right').eq( slideIndex ).css('z-index','3'); 

            slideIndex = slideIndex + 1;
            $('.h-left').eq( slideIndex ).css('z-index','2');  
            $('.h-right').eq( slideIndex ).css('z-index','2'); 
            
            $('.h-box').hide();  
            
            $('.h-box').eq( slideIndex ).show();  
            
            //$('.h1-slide').fadeOut('fast');
            //$('.h1-slide').eq( slideIndex ).fadeIn('fast');
        }
    });
    
    $('.h-arrow-left').click(function() {
        
        if (slideIndex < 1){
            
            console.log(slideIndex);
            console.log('if');
            
            $('.h-left').eq( slideIndex ).addClass('slideOutUp');  
            $('.h-right').eq( slideIndex ).addClass('slideOutDown'); 
            
            $('.h-left').css('z-index','1');
            $('.h-right').css('z-index','1');
            $('.h-left').eq( slideIndex ).css('z-index','3');
            $('.h-right').eq( slideIndex ).css('z-index','3'); 

            slideIndex = numSlides + 1;
            $('.h-left').eq( slideIndex ).css('z-index','2');  
            $('.h-right').eq( slideIndex ).css('z-index','2');  
            
            //$('.h1-slide').fadeOut('fast');
            //$('.h1-slide').eq( slideIndex ).fadeIn('fast');
            
            $('.h-left').eq( numSlides - 2 ).removeClass('slideOutUp slideOutDown slideOutLeft slideOutRight');
            $('.h-right').eq( numSlides - 2 ).removeClass('slideOutUp slideOutDown slideOutLeft slideOutRight');
            
            $('.h-left').eq( numSlides + 1 ).removeClass('slideOutUp slideOutDown slideOutLeft slideOutRight');
            $('.h-right').eq( numSlides + 1 ).removeClass('slideOutUp slideOutDown slideOutLeft slideOutRight');
            
            $('.h-box').hide();  
            
            $('.h-box').eq( slideIndex ).show();  
             
        }
        else{
            
            $('.h-left').removeClass('slideOutUp slideOutDown slideOutLeft slideOutRight slideOutLeft slideOutRight');
            $('.h-right').removeClass('slideOutUp slideOutDown slideOutLeft slideOutRight slideOutLeft slideOutRight');
            
            if ((slideIndex % 2) != 1){
                $('.h-left').eq( slideIndex ).addClass('slideOutUp');  
                $('.h-right').eq( slideIndex ).addClass('slideOutDown'); 
            }
            else{
                $('.h-left').eq( slideIndex ).addClass('slideOutLeft');  
                $('.h-right').eq( slideIndex ).addClass('slideOutRight'); 
            }

            console.log(slideIndex);
            console.log('else');
            
            $('.h-left').css('z-index','1');
            $('.h-right').css('z-index','1');
            $('.h-left').eq( slideIndex ).css('z-index','3'); 
            $('.h-right').eq( slideIndex ).css('z-index','3'); 

            slideIndex = slideIndex - 1;
            $('.h-left').eq( slideIndex ).css('z-index','2');   
            $('.h-right').eq( slideIndex ).css('z-index','2'); 
            
            $('.h-box').hide();  
            
            $('.h-box').eq( slideIndex ).show();  
            
            //$('.h1-slide').fadeOut('fast');
            //$('.h1-slide').eq( slideIndex ).fadeIn('fast');
        }
    });
    
    $('.h-1').show();
    
    $('.s-box').click(function() {
        
        var indexBox = $(".s-box").index(this);
        var leN = $('.f-box').length; 
        
        $('.f-box').eq( indexBox ).removeClass('slideOutLeft').addClass('slideInRight').css('z-index','4');
        
        for (var i = 0; i < leN; i++) {
            if( i != indexBox ){
                $('.f-box').eq( i ).removeClass('slideInRight').addClass('slideOutLeft').css('z-index','3');
            }
        }

        $('.s-box').addClass('s-active');
        $('.s-3-left').addClass('s-active');
        $('.s-fix').addClass('s-active');
        
    });
    
    $('.s-close').click(function() {
        $('.s-box').removeClass('s-active');
        $('.s-3-left').removeClass('s-active');
        $('.s-fix').removeClass('s-active');
    });
    
    if ($(window).width() > 800) {
        var imgHeight = $('.service-consult').height();
        imgHeight = imgHeight + 250;
        $('.service-consult-img').css('height', imgHeight + 'px');
    }
 /* 
    // declare variable
    var scrollTop = $(".scrollTop");

        $(window).scroll(function(){
            // declare variable
            var topPos = $(this).scrollTop();

           
            //if user scrolls down - show scroll to top button
            if(topPos > 100){
                $(scrollTop).removeClass('slideOutRightBig');
                $(scrollTop).addClass('slideInRightBig');


            }else{
                $(scrollTop).removeClass('slideInRightBig');
                $(scrollTop).addClass('slideOutRightBig');

            }
         

        }); // scroll END

        //Click event to scroll to top
        $(scrollTop).click(function(){
            $('html, body').animate({scrollTop : 0},800);
            return false;

        });
    
       */
    
    $('.burger').click(function() {
        $('.burger').toggleClass('bur-act');
        $('.nav-center').fadeToggle('fast');
        $('.burger-line-2').fadeToggle('fast');
    });
    
    $('.modal-back, .modal-close').click(function() {
        $('.modal-back').fadeOut('fast');
        $('.modal, .modal-border').fadeOut('fast');
        $('.thx').fadeOut('fast');
    });
    
    $('.jk').click(function() {
        $('.modal-back').fadeIn('fast');
        $('.modal, .modal-border').fadeIn('fast');
    });
    
    var modalH = $('.modal').height();
    modalH = modalH + 50;
    $('.modal-border').css('height', modalH + 'px');

});

