(function($) {
    "use strict"
    $('.play-video').magnificPopup({
        type: 'iframe'

    });
    $('.team-slide-image-area').slick({
        autoplay: false,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        prevArrow: '<button type="button" class="slick-prev fa fa-long-arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next fa fa-long-arrow-right"></button>',
        responsive: [{
                breakpoint: 400,
                settings: {
                    slidesToShow: 2,
                }

            },
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 2,

                }
            }
        ]
    });
    // header slide

    $('.slide-area').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        infinite: true,
        slidesToShow: 1,

        // fade: true,
        prevArrow: '<button type="button" class="slick-prev fa fa-long-arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next fa fa-long-arrow-right"></button>',

    });
    // progress
    

    $(".skill-section").waypoint(function() {
      var opt = {
        horBarHeight: 7,
        foreColor: '#8148ff',
        milestones: false,
        animTime: 3000,
        backColor: '#fff',
    };
        $('.line').barIndicator(opt);
    }, {
        offset: "80%"
    });

    //one page nav

    $('#nave').onePageNav({
        scrollSpeed: 750,
        scrollThreshold: 0.5,

    });

    /*  
$('.slide-area').on('beforeChange', function(event, slick, direction){
  console.log('somethin');
  // left
});
*/

    // css section
    // var forom = $(".form-area").height();
    // var address =$(".address-area").height();

    //    var pdd = (address - forom) / 2;
    //    $(".address-area").css({
    //         paddingTop: pdd,
    //         paddingBottom: pdd

    //    });

    // alert(pdd)
    /*var imageheight = $('.revolation-img').height();
     var textHeight = $('.revolation-content').height();

     var heightM = (imageheight - textHeight) / 2;

     $('.revolation-content').css({
         paddingTop: heightM,
         paddingBottom: heightM
     });*/
    //     var windowWidth = $(window).width();
    // if ( windowWidth > 768 && windowWidth < 1100) {
    //     alert('something');
    // }
    // team section
    var team_image_one = $(".team-single-item");

    var big_imgage = $(".te-img img");

    $(team_image_one).click(function() {
        var thisimage = $(this).children('img').attr('src'),
            thistext = $(this).children('p').text();
        $(big_imgage).attr("src", thisimage);
        $(".team-img-content p").html(thistext);
    });
    // menu click 
    $(".menu-btn a").click(function() {
        $(".menu").toggleClass("hid");
    });
    // animation section
    // $(".section-tittle-area").addClass("animated bounceInLeft");

    // waypont and animate
    /*
    $('#handler-first').waypoint(function(direction) {
      notify(this.element.id + ' hit 25% from top of window') 
    }, {
      offset: '25%'
    })

    */
    $(".about-us-section").css("visibility","hidden");
    $(".about-us-section").waypoint(function() {
        $(".about-us-section").addClass(" animated fadeInUp");
         $(".about-us-section").css("visibility","visible");
    }, {
        offset: "90%"
    });

})(jQuery);