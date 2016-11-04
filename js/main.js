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


function hr(){
    $(window).on('load resize', function(event) {
        event.preventDefault();
        $('.gallery-box').find('hr').remove();
        var window_width = $(this).width();

        $('.albom').each(function(index, el) {
            var el_index = index+1;

            if ( window_width > 1200 ) {
                if ( el_index % 5 === 0 ) {
                    $('<hr>').insertAfter(el);
                }
            } else if ( window_width <= 1200 && window_width > 1000 ) {
                if ( el_index % 4 === 0 ) {
                    $('<hr>').insertAfter(el);
                }
            } else if ( window_width <= 1000 && window_width > 700 ) {
                if ( el_index % 3 === 0 ) {
                    $('<hr>').insertAfter(el);
                }
            } else if ( window_width <= 700 && window_width > 500 ) {
                if ( el_index % 2 === 0 ) {
                    $('<hr>').insertAfter(el);
                }
            }
        });

        reInitScroll();
    });    
}


function initScroll(){
    if ( $('.container').length > 0 ) {
        $('.container').perfectScrollbar();

        $(window).on('resize', function(event) {
            event.preventDefault();
            reInitScroll();
        });
    }    
}

function reInitScroll() {
    if ( $('.container').length > 0 ) {
        $('.container').perfectScrollbar('update');
    }
}

function initMagnificGallery() {
    $(document).on('click', '.albom', function(event) {
        event.preventDefault();
        $(this).find('a').first().click();
    });

    $('.albom').each(function(index, el) {
        $(this).magnificPopup({
            delegate: 'a',
            type: 'image',

            fixedContentPos: false,
            fixedBgPos: true,

            overflowY: 'auto',
            modal: false,

            closeBtnInside: true,
            preloader: false,
            
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            image: {
                tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
            }
        });
    });
}


function clock() {
    $('.utc-clock').clock({offset: '0', type: 'digital'});
    $('.local-clock').clock({offset: '+4', type: 'digital'});
}


jQuery(document).ready(function($) {
    $('.animate').addClass('animated');


    /*---------------------------
                                  Init PerfectScrollbar
    ---------------------------*/
    initScroll();

    /*---------------------------
                                  Clock
    ---------------------------*/
    clock()

    $(document).on('click', '.product', function(event){
        event.preventDefault();
        $('.moreInfo').addClass('active');
        var title = $(this).children('.product__hiddenInfo').children('.product__hiddenInfo__title').text(),
            text  = $(this).children('.product__hiddenInfo').children('.product__hiddenInfo__text').html(),
            images = $(this).children('.product__hiddenInfo').children('.product__hiddenInfo__images').html(),
            target = $('.moreInfo').children('.container');

            target.children('.title').text(title);
            target.children('.moreInfo__text').html(text);
            target.children('.moreInfo__images').html(images);
            reInitScroll();
    });

    $(document).on('click', '.hideInfo', function(event){
        event.preventDefault();
        $('.moreInfo').removeClass('active');
        target = $('.moreInfo').children('.container');

        target.children('.title').text('');
        target.children('.moreInfo__text').html('');
        target.children('.moreInfo__images').html('');
    });

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
    initMagnificGallery();


    /*---------------------------
                                  Gallery hr
    ---------------------------*/
    hr();

    


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
                                  Markers
    ---------------------------*/
    $(document).on('click', '.marker', function(event) {
        event.preventDefault();
        $(this).toggleClass('active').siblings('.marker').removeClass('active');
    });
    

}); // end file
