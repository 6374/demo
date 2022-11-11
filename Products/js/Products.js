$(function () {
    $('.header-container').load('../public/header.html', function () {
        $('.header-nav li').eq(1).find('>a').addClass('skyblue')
    })
    $('footer').load('../../public/footer.html')
    //
    $('.pro-top').on('click', function () {
        $(this).parent().toggleClass('shadow').siblings().removeClass('shadow')
        $(this).find('.icon i').toggle().end().parents('li').siblings().find('.icon i:first').show().next().hide()
        $(this).toggleClass('blue').parents('li').siblings().find('.pro-top').removeClass('blue')
        $('.pro-content').stop().slideUp('slow')
        $(this).next().stop().slideToggle('slow')
        $('.item-tops').click(function () {
            $(this).toggleClass('cor').next().stop().slideToggle('slow')
            $(this).find('i').toggle()
        })
    })
})