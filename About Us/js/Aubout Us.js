$(function () {
  $('.header-container').load('../public/header.html', function () {
    $('.header-nav li').eq(5).find('>a').css('color', '#0068b6')
  })
  $('footer').load('../public/footer.html')

  var mySwiper = new Swiper('.swiper', {
    autoplay:true,
    slidesPerView: 3,//一页显示几个
    spaceBetween: '3.333%',
    // 如果需要前进后退按钮
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    }
  })
  $(window).resize(function () {
    if ($(this).width() < 1044) {
      mySwiper.params.slidesPerView = 2
      //获取对象初始化参数，能够在初始化之后改变/重写该参数
    } else {
      mySwiper.params.slidesPerView = 3
    }
  })
  $('.play-box').click(function () {
    layer.open({
      type: 1, //基本层类型
      title:false, //标题显示
      shadeClose:true, //是否点击遮罩关闭
      area:['auto,auto'], //宽高
      content: '<video controls autoplay><source src="https://www.zeno-tech.com/uploadfile/upfiles/202006090852095ededd3912102.mp4"  type="video/mp4">' //注意，如果str是object，那么需要字符拼接。
    });
  })

})