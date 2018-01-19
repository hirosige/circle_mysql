$(function () {
    var $nav    = $('.navDrawr');
    var $navBtn = $('.navDrawrBtn');
    var $speed  = 300;
    var $navW   = 190;
     
    //サブメニューを非表示に
    $nav.find('.sub').hide();
      
    //hover時の挙動
        $nav.find('li').hover(function(){
            // PC表示時(ハンバーガーボタン非表示時)のみにプルダウンを限定
            if ($('.navDrawrBtn span').css('display') !== 'block'){
                //li要素にhoverした時に.subがあれば実行する
                if( $(this).find('.sub').length && !$nav.hasClass('open') ){
                        $(this).find('.sub').slideDown();
                }
            }
        },function(){
            // PC表示時(ハンバーガーボタン非表示時)のみにプルダウンを限定
            if ($('.navDrawrBtn span').css('display') !== 'block'){
                if(!$nav.hasClass('open')) {
                    $(this).find('.sub').stop(true).slideUp();
                }
            }
        });
     
    //ドロワーに関連した記述(PCでもドロワーが動作するようにtouchend→clickに変更)
    $('body').on('click','.navDrawrBtn span',function(){
        drawerFunc();
    });
     
    $('body').on('click','.overlay',function(){
        drawerFunc();
    });
     
     
    function drawerFunc(){
        if( $('body').hasClass('menuOpen') ){
            $('body').removeClass('menuOpen');
            $nav.animate({right:-1*$navW},$speed,'swing');
            $('.overlay').fadeOut($speed);
        }else{
            $('body').addClass('menuOpen');
            if(!$('.overlay').length){
                $('#menu-wrapper').prepend('<div class="overlay"></div>');
            }
            $nav.animate({right:0},$speed,'swing');
            $('.overlay').fadeIn($speed);
        }
    }

  
  $('a[href^=#]').click(function() {
    var speed = 400;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var headerHeight = 60; //固定ヘッダーの高さ
    var position = target.offset().top - headerHeight; //ターゲットの座標からヘッダの高さ分引く
    $('body,html').animate({scrollTop:position}, speed, 'swing');
    drawerFunc();
    return false;
  });
  
  
});