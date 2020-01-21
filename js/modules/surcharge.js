$(document).ready(function(){
  /** Slick init **/
  $('.videos').slick({
    dots: true,
    arrows: true,
    mobileFirst: true
  });

  /** Height zone1 + position **/
  var $articleIntro = $('.article-intro');
  var $mainTitle = $('.at-main-title');
  var $articleTitle = $('.article-title');

  if ($articleIntro.length > 0 && $mainTitle.length > 0) {
    $articleIntro.css('top', $mainTitle.position().top + $mainTitle.height() + 20 + 'px');
    var headerHeight = $articleIntro.height() + $mainTitle.height() + $('.quicklinks-navigation').height() + $('.breadcrumb-nav .inside').height() + 60;
    if (headerHeight > $('#zone1').height()) {
      $('#zone1, .article-title img').css('height', headerHeight);
    }
  } else if ($articleTitle.length > 0 && $mainTitle.length > 0) {
    $articleTitle.css('top', $mainTitle.position().top + $mainTitle.height() + 20 + 'px');
    var headerHeight = $articleTitle.height() + $mainTitle.height() + $('.quicklinks-navigation').height() + $('.breadcrumb-nav .inside').height() + 60;
    if (headerHeight > $('#zone1').height()) {
      $('#zone1, .article-title img').css('height', headerHeight);
    }
  }

  /** ScroolTop **/
  function scroll_to_top(div) {
    $(div).click(function() {
      $('html,body').animate({scrollTop: 0}, 'slow');
    });
    $(window).scroll(function(){
      if($(window).scrollTop()<500){
        $(div).fadeOut();
      } else{
        $(div).fadeIn();
      }
    });
  }
  scroll_to_top("#scroll_top");
});
