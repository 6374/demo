$(function () {
    $('.header-container').load('public/header.html', function () {
        $('.header-nav li').eq(0).find('a').css('color', ' #0068b6');
        $.each($('header img'), function (c, v) {
            $(v).attr('src', $(v).attr('src').slice(3))
        })
        $.each($('.header-nav li>a'), function (c, v) {
            $(v).attr('href', $(v).attr('href').slice(3))
        })
    });
    $('footer').load('public/footer.html', function () {
        $.each($('footer img'), function (c, v) {
            $(v).attr('src', $(v).attr('src').slice(3))
        })
    })

    var swiper = new Swiper(".banner", {
        autoplay: {
            delay: 2000,
        },
        effect: "fade",
        pagination: {
            el: ".ban-one",
            clickable: true,
        },
        on: {
            init: function () {
                swiperAnimateCache(this); //隐藏动画元素 
                swiperAnimate(this); //初始化完成开始动画
            },
            slideChangeTransitionEnd: function () {
                swiperAnimate(this); //每个slide切换结束时也运行当前slide动画
            }
        }
    });
    var swipertwo = new Swiper('.banner2', {
        autoplay: true,
        slidesPerView: 4,
        spaceBetween: 20,
        centeredSlides: true,
        loop: true,
        pagination: {
            el: '.solution',
            clickable: true,
        },
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });

    $(window).resize(function () {
        if ($('html').width() < 1044) {
            swipertwo.params.slidesPerView = 1
        } else {
            swipertwo.params.slidesPerView = 4
        }
    })

    if ($('html').width() < 1044) {
        swipertwo.params.slidesPerView = 1
    } else {
        swipertwo.params.slidesPerView = 4
    }
    new WOW().init()
    $('.counter').countUp();
})