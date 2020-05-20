jQuery(document).ready(function($) { 
    $(".nav-link").click(function(event){        
        event.preventDefault();
    
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 600);
    });

    $("#back-top").hide();

    $(window).scroll(function(){
        if($(this).scrollTop()>100){
            $("#back-top").fadeIn();
        }else{
            $("#back-top").fadeOut(); 
        }
    });

    $(".top-link").click(function(event){        
        event.preventDefault();
    
        $('html,body').animate({scrollTop:0}, 600);
    });
});