$(".pr-products-slick").slick({
    dots: false,
    infinite: false,
    speed: 300,
    slidesToShow: 6,
    slidesToScroll: 1,
    prevArrow:
      '<button class="slick-arrow slick-prev slick-disabled slick-prev slick-arrow lc-black" aria-hidden="true" role="button" data-slide="prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#454168" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    nextArrow:
      '<button class="slick-arrow slick-next slick-next slick-arrow lc-black" aria-hidden="true" role="button" data-slide="next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3. org/2000/svg"><path d="M1 13L7 7L1 1" stroke="#454168" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3.2,
          slidesToScroll: 1
        }
      }
    ]
});

$(".pr-product-pv-imgs").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  swipeToSlide: true,
  asNavFor: ".pr-pv-mini-images",
  prevArrow:
    '<button class="slick-prev slick-arrow es-black" aria-label="Previous" type="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M9.57 5.93005L3.5 12.0001L9.57 18.0701" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M20.5 12H3.67004" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  nextArrow:
    '<button class="slick-next slick-arrow es-black" aria-label="Next" type="button"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M14.43 5.93005L20.5 12.0001L14.43 18.0701" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/><path d="M3.49996 12H20.33" stroke="black" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        dots: true,
      },
    },
  ],
});

$(".pr-pv-mini-images").slick({
  vertical: true,
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  swipeToSlide: true,
  arrows: false,
  asNavFor: ".pr-product-pv-imgs",
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1400,
      settings: {
        slidesToShow: 3,
      },
    },
  ],
});

$(".pr-about-slick").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    }
  ]
});

$(".pr-feedback-slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 3,
  slidesToScroll: 1,
  prevArrow:
    '<button class="btn carousel-control-prev-icon pr-slick-prev" aria-hidden="true" role="button" data-slide="prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#454168" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  nextArrow:
    '<button class="btn carousel-control-next-icon pr-slick-next" aria-hidden="true" role="button" data-slide="next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3. org/2000/svg"><path d="M1 13L7 7L1 1" stroke="#454168" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});

$('.pr-pv-lg-slider').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  prevArrow:
    '<button class="btn carousel-control-prev-icon pr-slick-prev" aria-hidden="true" role="button" data-slide="prev"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7 13L1 7L7 1" stroke="#454168" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  nextArrow:
    '<button class="btn carousel-control-next-icon pr-slick-next" aria-hidden="true" role="button" data-slide="next"><svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3. org/2000/svg"><path d="M1 13L7 7L1 1" stroke="#454168" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg></button>',
  fade: true,
  asNavFor: '.pr-pv-sm-slider'
});

$('.pr-pv-sm-slider').slick({
  slidesToShow: 4.5,
  slidesToScroll: 1,
  asNavFor: '.pr-pv-lg-slider',
  dots: false,
  centerMode: true,
  focusOnSelect: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 3.5,
        slidesToScroll: 1
      }
    }
  ]
});

$(".pr-pv-analogies-slider").slick({
  dots: false,
  infinite: false,
  speed: 300,
  slidesToShow: 5,
  slidesToScroll: 1,
  prevArrow: false,
  nextArrow: false,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 2.1,
        slidesToScroll: 1
      }
    }
  ]
});

let t = $("#back-top");
$(window).on("scroll", function () {
  ($scrollTop = $(window).scrollTop()),
    (t = $("#back-top")),
    $scrollTop > 350 ? t.addClass("visible") : t.removeClass("visible");

  $scrollTop > 0
    ? $(".es-navbar").addClass("es-navbar-fixed")
    : $(".es-navbar").removeClass("es-navbar-fixed");
});
($htmlBody = $("html, body")),
  t.length &&
    t.on("click", function (t) {
      $htmlBody.animate({ scrollTop: 0 }, 200), t.preventDefault();
    });