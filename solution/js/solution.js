$(function () {
    $('.header-container').load('../public/header.html',function(){
        $('.header-nav li').eq(2).find('>a').css('color','#0068b6')
    })
    $('footer').load('../public/footer.html')
})