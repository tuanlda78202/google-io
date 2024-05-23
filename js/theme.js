(function($) {
    "use strict";


// --------------------- Add .active class to current navigation based on URL
        var pgurl = window.location.href.substr(window.location.href.lastIndexOf("/")+1);
          $(".navbar-nav > li  a").each(function(){
          if($(this).attr("href") == pgurl || $(this).attr("href") == '' )
          $(this).addClass("active");
          // $(this).parent("li").addClass("active");
        })

// ----------------------------- Lazy Load
        if($(".lazy-img").length) {
          $('.lazy-img').Lazy({
            effect: 'fadeIn',
            threshold: 300
          });
        }


// ----------------------------- Counter Function
        var timer = $('.counter');
        if(timer.length) {
          $('.counter').counterUp({
            delay: 10,
            time: 1200,
          });
        }

// ------------------------ Navigation Scroll
        $(window).on('scroll', function (){   
          var sticky = $('.sticky-menu'),
          scroll = $(window).scrollTop();
          if (scroll >= 100) sticky.addClass('fixed');
          else sticky.removeClass('fixed');

        });

// -------------------- From Bottom to Top Button
        $(window).on('scroll', function (){
          if ($(this).scrollTop() > 200) {
            $('.scroll-top').fadeIn();
          } else {
            $('.scroll-top').fadeOut();
          }
        });

//---------------------- Click event to scroll to top
        $('.scroll-top').on('click', function() {
          $('html, body').animate({scrollTop : 0});
          return false;
        });

// -------------------- Remove Placeholder When Focus Or Click
        $("input,textarea").each( function(){
            $(this).data('holder',$(this).attr('placeholder'));
            $(this).on('focusin', function() {
                $(this).attr('placeholder','');
            });
            $(this).on('focusout', function() {
                $(this).attr('placeholder',$(this).data('holder'));
            });     
        });


// ----------------------------- Select Function
        if($(".nice-select").length) {
            $('.nice-select').niceSelect();
        }

// ------------------------ Feedback Slider One
        if($(".feedback_slider_one").length) {
          $('.feedback_slider_one').slick({
              dots: false,
              arrows: true,
              prevArrow: $('.prev_f1'),
              nextArrow: $('.next_f1'),
              centerPadding: '0px',
              slidesToShow: 3,
              slidesToScroll: 1,
              autoplay: true,
              centerMode:true,
              autoplaySpeed: 3000,
              responsive: [
              {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }


// ------------------------ Feedback Slider Two
        if($(".feedback_slider_two").length) {
          $('.feedback_slider_two').slick({
              dots: false,
              arrows: true,
              prevArrow: $('.prev_f2'),
              nextArrow: $('.next_f2'),
              centerPadding: '0px',
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
            });
        }

// ------------------------ Feedback Slider Three
        if($(".feedback_slider_three").length) {
          $('.feedback_slider_three').slick({
              dots: true,
              arrows: false,
              centerPadding: '0px',
              slidesToShow: 4,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }




// ------------------------ Feedback Slider Four
        if($(".feedback_slider_four").length) {
          $('.feedback_slider_four').slick({
              centerPadding: '0px',
              arrows: false,
              dots: true,
              slidesToShow: 3,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
              {
                  breakpoint: 1000,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }


// ------------------------ Feedback Slider Five
        if($(".feedback_slider_five").length) {
          $('.feedback_slider_five').slick({
              centerPadding: '0px',
              arrows: true,
              prevArrow: $('.prev_f2'),
              nextArrow: $('.next_f2'),
              dots: false,
              slidesToShow: 4,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
              {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }

// ------------------------ Feedback Slider Six
        if($(".feedback_slider_six").length) {
          $('.feedback_slider_six').slick({
              dots: false,
              arrows: true,
              prevArrow: $('.prev_s2'),
              nextArrow: $('.next_s2'),
              centerPadding: '0px',
              slidesToShow: 1,
              slidesToScroll: 1,
              autoplay: true,
              autoplaySpeed: 3000,
            });
        }



// ------------------------ Feedback Slider Seven
        if($(".feedback_slider_seven").length) {
          $('.feedback_slider_seven').slick({
              centerPadding: '0px',
              arrows: false,
              dots: true,
              slidesToShow:3,
              centerMode: true,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
              {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }

// ------------------------ Feedback Slider Nine
        if($(".feedback_slider_nine").length) {
          $('.feedback_slider_nine').slick({
              centerPadding: '0px',
              arrows: false,
              dots: true,
              slidesToShow:2,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
              {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }

// ------------------------ Feedback Slider Ten
        if($(".feedback_slider_ten").length) {
          $('.feedback_slider_ten').slick({
              centerPadding: '0px',
              arrows: true,
              prevArrow: $('.prev_f5'),
              nextArrow: $('.next_f5'),
              dots: false,
              slidesToShow: 3,
              autoplay: true,
              autoplaySpeed: 3500,
              responsive: [
              {
                  breakpoint: 1200,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }

// ------------------------ Feedback Slider Eleven
        if($(".feedback_slider_eleven").length) {
          $('.feedback_slider_eleven').slick({
              centerPadding: '0px',
              arrows: false,
              dots: true,
              slidesToShow: 1,
              autoplay: true,
              autoplaySpeed: 3500,
            });
        }

// ------------------------ Partner Slider One
        if($(".partner_slider_one").length) {
          $('.partner_slider_one').slick({
              centerPadding: '0px',
              arrows: false,
              dots: false,
              slidesToShow: 5,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
              {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 4
                  }
                },
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 3
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 2
                  }
                }
              ]
            });
        }


// ------------------------ Course Slider One
        if($(".course_slider_one").length) {
          $('.course_slider_one').slick({
              centerPadding: '0px',
              arrows: true,
              prevArrow: $('.prev_cs1'),
              nextArrow: $('.next_cs1'),
              dots: false,
              slidesToShow: 4,
              autoplay: true,
              autoplaySpeed: 3000,
              responsive: [
              {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2
                  }
                },
                {
                  breakpoint: 576,
                  settings: {
                    slidesToShow: 1
                  }
                }
              ]
            });
        }


// ----------------------------- Animated Round Progressbar
        if ($(".circle_percent").length) {
          $(".circle_percent").each(function() {
              var $this = $(this),
                $dataV = $this.data("percent"),
                $dataDeg = $dataV * 3.6,
                $round = $this.find(".round_per");
              $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)"); 
              $this.append('<div class="circle_inbox"><span class="percent_text"></span></div>');
              $this.prop('Counter', 0).animate({Counter: $dataV},
              {
                duration: 2000, 
                easing: 'swing', 
                step: function (now) {
                        $this.find(".percent_text").text(Math.ceil(now)+"%");
                    }
                });
              if($dataV >= 51){
                $round.css("transform", "rotate(" + 360 + "deg)");
                setTimeout(function(){
                  $this.addClass("percent_more");
                },1000);
                setTimeout(function(){
                  $round.css("transform", "rotate(" + parseInt($dataDeg + 180) + "deg)");
                },1000);
              } 
            });
        };
        
// ------------------------ Password Toggler
        if($(".user-data-form").length) {
          $(".passVicon").on('click', function() {
            $(".passVicon").toggleClass("eye-slash");
            var input = $(".pass_log_id");
            if (input.attr("type") === "password") {
              input.attr("type", "text");
            } else {
              input.attr("type", "password");
            }

          });
        }


// ----------------------- Closes responsive menu when a scroll trigger link is clicked
        $('#one-page-nav .nav-link').on('click', function(){
          $('.navbar-collapse').removeClass('show');
          $('.navbar-toggler').attr("aria-expanded", "false");
        })



// --------------------------------- Contact Form
          // init the validator
          // validator files are included in the download package
          // otherwise download from http://1000hz.github.io/bootstrap-validator

        if($("#contact-form").length) {
            $('#contact-form').validator();
            // when the form is submitted
            $('#contact-form').on('submit', function (e) {

                // if the validator does not prevent form submit
                if (!e.isDefaultPrevented()) {
                    var url = "inc/contact.php";

                    // POST values in the background the the script URL
                    $.ajax({
                        type: "POST",
                        url: url,
                        data: $(this).serialize(),
                        success: function (data)
                        {
                            // data = JSON object that contact.php returns

                            // we recieve the type of the message: success x danger and apply it to the
                            var messageAlert = 'alert-' + data.type;
                            var messageText = data.message;

                            // let's compose Bootstrap alert box HTML
                            var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>';

                            // If we have messageAlert and messageText
                            if (messageAlert && messageText) {
                                // inject the alert to .messages div in our form
                                $('#contact-form').find('.messages').html(alertBox);
                                // empty the form
                                $('#contact-form')[0].reset();
                            }
                        }
                    });
                    return false;
                }
            });
          }

    
$(window).on ('load', function (){ // makes sure the whole site is loaded

// -------------------- Site Preloader
        $('#ctn-preloader').fadeOut(); // will first fade out the loading animation
        $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
        $('body').delay(350).css({'overflow':'visible'});



// ------------------------------- Scroll Animation
          var wow = new WOW(
            {
              boxClass:     'wow',      // animated element css class (default is wow)
              animateClass: 'animated', // animation css class (default is animated)
              offset:       0,          // distance to the element when triggering the animation (default is 0)
              mobile:       true,       // trigger animations on mobile devices (default is true)
              live:         true,       // act on asynchronously loaded content (default is true)
            }
          );
          wow.init();
        
// ------------------------------------- Fancybox
        var fancy = $ (".fancybox");
        if(fancy.length) {
          fancy.fancybox({
            arrows: true,
            buttons: [
              "zoom",
              //"share",
              "slideShow",
              //"fullScreen",
              //"download",
              "thumbs",
              "close"
            ],
            animationEffect: "zoom-in-out",
            transitionEffect: "zoom-in-out",
          });
        }



// ----------------------------- isotop gallery
        if ($("#isotop-gallery-wrapper").length) {
            var $grid = $('#isotop-gallery-wrapper').isotope({
              // options
              itemSelector: '.isotop-item',
              percentPosition: true,
              masonry: {
                // use element for option
                columnWidth: '.grid-sizer'
              }

            });

            // filter items on button click
            $('.isotop-menu-wrapper').on( 'click', 'li', function() {
              var filterValue = $(this).attr('data-filter');
              $grid.isotope({ filter: filterValue });
            });

            // change is-checked class on buttons
            $('.isotop-menu-wrapper').each( function( i, buttonGroup ) {
                var $buttonGroup = $( buttonGroup );
                $buttonGroup.on( 'click', 'li', function() {
                  $buttonGroup.find('.is-checked').removeClass('is-checked');
                  $( this ).addClass('is-checked');
                });
            });
        }


    });  //End On Load Function

    
})(jQuery);