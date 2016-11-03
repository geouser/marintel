// Global parameters
window.params = {
    isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
    isIOS: /iPhone|iPad|iPod/i.test(navigator.userAgent)
};

function typing(){
    var text = '$RATTM,02,0.36,45.2,T,0.09,308.5,T,0.4,0.0,N,,T,,,M*12 ^500 \n';
    text = text+'$RATTM,03,0.68,61.8,T,0.01,288.7,T,0.7,0.0,N,,T,,,M*14 ^1500 \n';
    text = text+'$RATTM,04,0.64,98.7,T,0.06,176.2,T,0.6,0.0,N,,T,,,M*17';
    $(".typing").typed({
        strings: [text],
        typeSpeed: 30,
        startDelay: 2000,
    });
}


jQuery(document).ready(function($) {
    $('.animate').addClass('animated');
    $('.container').perfectScrollbar();

    /*---------------------------
                                  ADD CLASS ON SCROLL
    ---------------------------*/
    $(function() { 
        var $document = $(document),
            $element = $('.menu-button'),
            $element2 = $('header'),
            className = 'hasScrolled';

        $document.scroll(function() {
            $element.toggleClass(className, $document.scrollTop() >= 1);
            $element2.toggleClass(className, $document.scrollTop() >= 1);
        });
    });
      

    /*---------------------------
                                  MENU TOGGLE
    ---------------------------*/
    $(document).on('click', '.menu-button', function(event) {
        event.preventDefault();
        $(this).toggleClass('active');
        $(this).siblings('header').toggleClass('active');

        if ($('header').hasClass('active')) {
            $('body').css('overflow', 'hidden');
        } else {
            $('body').css('overflow', 'visible');
        }
    });



    /*---------------------------
                                  Magnific popup
    ---------------------------*/
    /*$('.magnific').magnificPopup({
        type: 'inline',

        fixedContentPos: false,
        fixedBgPos: true,

        overflowY: 'auto',
        modal: false,

        closeBtnInside: true,
        preloader: false,
        
        midClick: true,
        removalDelay: 300,
        mainClass: 'my-mfp-slide-bottom'
    });*/



    /*----------------------------
                              SEND FORM
    -------------------------*/
    /**
     *
     * Open popup
     *
     * @param popup {String} jQuery object (#popup)
     *
     * @return n/a
     *
    */
    /*function openPopup(popup){
        $.magnificPopup.open({
            items: {
              src: popup
            },
            type: 'inline',
            fixedContentPos: false,
            fixedBgPos: true,
            overflowY: 'auto',
            modal: false,
            closeBtnInside: true,
            preloader: false,
            midClick: true,
            removalDelay: 300,
            mainClass: 'my-mfp-slide-bottom'
        }, 0);
    }*/

    /*$('form').on('submit', function(event) {
        event.preventDefault();
        var data = $(this).serialize();
        $.ajax({
            url: theme.url + '/forms.php',
            type: 'POST',
            data: data,
            success: function(result){
                if (result.status == 'ok') {
                    openPopup('#modal-popup-ok')
                } else {
                    openPopup('#modal-popup-error')
                }
            },
            error: function(result) {
                openPopup('#modal-popup-error');
            }
        })
        .always(function() {
            $('form').each(function(index, el) {
                $(this)[0].reset();
            });
        });
        
    });*/



    /*---------------------------
                                  Typed 
    ---------------------------*/
    typing();

    /*---------------------------
                                  delay
    ---------------------------*/
    /*$('a').click(function (e) {
        e.preventDefault();                   // prevent default anchor behavior
        var url = $(this).attr("href"); // store anchor href
        $('body').css('overflow', 'hidden').addClass('page-changing');
        $('.view-zone').addClass('scale-out');
        $('.mainHeader').removeClass('active');
        $('.menu-button').removeClass('active');

        setTimeout(function(){
             window.location = url;
        }, 400);       
    }); */


    /*---------------------------
                                  Markers
    ---------------------------*/
    $(document).on('click', '.marker', function(event) {
        event.preventDefault();
        $(this).toggleClass('active').siblings('.marker').removeClass('active');
    });
    

}); // end file





/*
$(function(){
  'use strict';
  var $page = $('#main'),
      options = {
        debug: true,
        prefetch: true,
        cacheLength: 2,
        forms: 'form',
        onStart: {
          duration: 600, // Duration of our animation
          render: function ($container) {
            // Add your CSS animation reversing class
            $container.addClass('is-exiting');
            // Restart your animation
            smoothState.restartCSSAnimations();
          }
        },
        onReady: {
          duration: 0,
          render: function ($container, $newContent) {
            // Remove your CSS animation reversing class
            $container.removeClass('is-exiting');
            // Inject the new content
            $container.html($newContent);
          }
        }
      },
      smoothState = $page.smoothState(options).data('smoothState');
});
*/