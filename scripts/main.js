$(function () {
  $('.septic__list').slick({
    arrows: false,
    slidesToShow: 1,
    responsive: [
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 1,
        }
      },
      {
        breakpoint: 840,
        settings: {
          slidesToShow: 1,
        }
      },
    ]
  });
  $('.septic__arrow-next').on('click', function (e) {
    e.preventDefault()
    $('.septic__list').slick('slickNext')
  });
  $('.septic__arrow-prev').on('click', function (e) {
    e.preventDefault()
    $('.septic__list').slick('slickPrev')
  });
  $('.header__button').on('click', function (e) {
    $('.popup').addClass('popup--active')
  })
  $('.popup__area').on('click', function (e) {
    e.preventDefault()
    $('.popup').removeClass('popup--active')
  })
  $('.header__body-button').on('click', function (e) {
    $('body').css('padding-right', '17px')
    $('.popup2').addClass('popup2--active')
  })
  $('.popup2__close').on('click', function (e) {
    e.preventDefault()
    $('body').css('padding', '0px')
    $('.popup2').removeClass('popup2--active')
    var inFifteenMinutes = new Date(new Date().getTime() + 60 * 60 * 1000);
    Cookies.set('popupOpen', 'true', { expires: inFifteenMinutes })
  })
  setTimeout(() => {
    if (Cookies.get('popupOpen')) {
      $('body').css('padding', '0px')
      $('.popup2').removeClass('popup2--active')
    } else {
      $('body').css('padding-right', '17px')
      $('.popup2').addClass('popup2--active')
    }
  }, 1000);
  setInterval(() => {
    if ($(window).scrollTop() > 850) {
      $('.header__body-button').addClass('header__body-button--width')
    } else {
      $('.header__body-button').removeClass('header__body-button--width')
    }
  }, 0);
  setInterval(() => {
    if ($('.popup2').hasClass('popup2--active')) {
      $('.wrapper').addClass('wrapper--hide')
      $('.header__body-button').addClass('header__body-button--width-hide')
    } else {
      $('.wrapper').removeClass('wrapper--hide')
      $('.header__body-button').removeClass('header__body-button--width-hide')
    }
  }, 0);
});