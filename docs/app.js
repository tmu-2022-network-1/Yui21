// スクロールで要素が表示された時にclassを付与する
function add_class_in_scrolling(target) {
    var winScroll = $(window).scrollTop();
    var winHeight = $(window).height();
    var scrollPos = winScroll + winHeight;

    if (target.offset().top < scrollPos) {
        target.addClass('on');
    }
}

//スクロール連動アニメーション
$(window).on('load scroll', function () {
    add_class_in_scrolling($('.vol1_1'));

});