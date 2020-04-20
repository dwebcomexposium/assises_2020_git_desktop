$(document).ready(function(){
  /** Slick init **/
  $('.videos').slick({
    dots: true,
    arrows: true
  });

  var setArticleTitlePosition = function ($mainTitle, $articleTitle, $articleIntro) {
    if ($articleIntro.length > 0 && $mainTitle.length > 0) {
      $articleTitle.css('top', $('.breadcrumb-nav .inside').height() + 40 + 'px');
      $articleIntro.css('top', $articleTitle.position().top + $articleTitle.height() + 40 + 'px');
      var headerHeight = $articleIntro.height() + $articleTitle.height() + $('.breadcrumb-nav .inside').height() + 80;
      if (headerHeight > $('#zone1').height()) {
        $('#zone1').css('height', headerHeight + 20);
      }
    } else if ($articleTitle.length > 0 && $mainTitle.length > 0) {
      $articleTitle.css('top', $('.breadcrumb-nav .inside').height() + 40 + 'px');
      var headerHeight = $mainTitle.height() + $('.breadcrumb-nav .inside').height();
      if (headerHeight > $('#zone1').height()) {
        $('#zone1').css('height', headerHeight + 50);
      }
    }
  };

  /** Height zone1 + position page article **/
  var $mainTitle = $('.at-main-title');
  var $articleTitle = $('.article-title');
  var $articleIntro = $('.article-intro');

  setArticleTitlePosition($mainTitle, $articleTitle, $articleIntro);

  /** Height zone1 + position page liste d'articles **/
  $mainTitle = $('.la-main-title');
  $articleTitle = $('.list-articles .main-title-with-link');
  $articleIntro = $('.list-articles .intro');

  setArticleTitlePosition($mainTitle, $articleTitle, $articleIntro);

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
