(function ($) {

  toggleMobileMenu = function() {
    $('.mobile-nav-toggle').on('click', function() {
      var $this = $(this);
      $this.toggleClass('is-active');
      $('.mobile-nav').toggleClass('is-active');
    });
  };

  showLogoOnScroll = function() {
    var wScroll = $(window).scrollTop();
    var wantedTop = $('#start').height() / 2 + 100;
    if (wScroll >= wantedTop) {
      $('.logo').removeClass('logo--invisible');
    }
    else if (wScroll <= wantedTop - 100) {
      $('.logo').addClass('logo--invisible');
    }
  };

  scrollBackground = function() {
    var wScroll = $(window).scrollTop(),
        bgElementParticipate = $('.col--participate .image'),
        bgElementDonate = $('.col--donate .image'),
        bgTop = $('section.participate .col-1').offset().top;

    bgElementParticipate.css({'background-position': wScroll + 'px '+ (wScroll - bgTop) / 2 +'px'});

    bgElementDonate.css({'background-position': '-'+ wScroll + 'px '+ (wScroll - bgTop) / 2 +'px'});

  };

  $.mark = {
    jump: function (options) {
      var defaults = {
        selector: 'a.scroll-on-page-link'
      };
      if (typeof options == 'string') {
        defaults.selector = options;
      }

      options = $.extend(defaults, options);
      return $(options.selector).click(function (e) {
        var jumpobj = $(this);
        var target = jumpobj.attr('href');
        var thespeed = 1000;
        var offset = $(target).offset().top;
        $('.link--active').removeClass('link--active');
        jumpobj.addClass('link--active');
        $('html,body').animate({
          scrollTop: offset
        }, thespeed, 'swing');
        e.preventDefault();
      });
    }
  };

  $(window).scroll(function() {
    showLogoOnScroll();
    scrollBackground();
  });


  $(document).ready(function() {
    $.mark.jump();
    toggleMobileMenu();
  });

})(jQuery);
