$(function () {
    $('.header-container').load('../public/header.html', function () {
        $('.header-nav li').eq(4).find('>a').css('color', '#0068b6')
    })
    $('footer').load('../public/footer.html')
    $.ajax({
        url: "js/data.json",
        type: "get",
        dataType: 'json',
        // beforeSend: function () {
        //     layer.open({
        //         type: 3,
        //         time: 10000,
        //         content: '<img src="img/loading-1.gif">' //注意，如果str是object，那么需要字符拼接。
        //     });
        // },
        success: function (data) {
            $('.news-nav').append('<a href="javascript:;">所有年份</a>')
            $.each(data, function (index, ele) {
                $('.news-nav').append('<a href="javascript:;">' + index + '</a>')
            })
            var temp = 9;
            $('.news-nav a').click(function () {
                $('.count').remove();
                // layer.open({
                //     time: 100,
                //     type: 3,
                //     content: '<img src="img/loading-1.gif">' //注意，如果str是object，那么需要字符拼接。
                // });
                //关闭加载动画
                // layer.closeAll('loading')
                $('.news-list .container>a').remove();//切换页面清楚上一页的显示更多按钮
                $(this).addClass('before').siblings().removeClass('before') //点击加下划线
                var that = $(this).html()
                $.each(data, function (index, ele) {
                    if (index == that) {//获取到点击的哪一年份
                        $('.news-items').empty();
                        $.each(ele, function (key, value) {
                            $('.news-items').append(
                                `<a href="javascript:;">
                                 <div class=over><img src=${value.img}></div>
                                 <div class=info-box><h5>${value.title}</h5><p>${value.content}</p><span>${value.time}</span></div>
                             </a>`)
                        })
                    } else if (that == '所有年份') {
                        ljz()
                    }
                })

                function ljz() {
                    $('.news-items').empty();
                    $.each(data, function (index, ele) {
                        $.each(ele, function (key, value) {
                            if ($('.news-items a').length >= temp) {
                                return
                            }
                            $('.news-items').append(
                                `<a href="javascript:;">
                                <div class=over><img src=${value.img}></div>
                                <div class=info-box><h5>${value.title}</h5><p>${value.content}</p><span>${value.time}</span></div>
                            </a>`)
                        })
                    })
                }

                //当页数据条数大于9
                if ($('.news-items a').length >= 9) {
                    //所有年份显示条数
                    $('.news-list .container').append(`<div class=count>已展示<span>${temp}</span>条内容 / 共<span>${29}</span>条</div>`)
                    // 显示更多按钮
                    $('.news-list .container').append(`<a href=javascript:; class=showMore>显示更多</a>`)
                    $('.news-list .container').find('>a').click(function () {
                        // 显示条数变量
                        temp = temp + 9 > 29 ? temp = 29 : temp = temp + 9
                        //点击显示更多后更新页面
                        ljz()
                        // 当大于29的时候按钮隐藏
                        if (temp >= 29) {
                            $('.news-list .container >a').hide()
                        }
                        // 展示的条数
                        $('.count span:first').text(temp)
                    })
                } else {
                    // 每年的已展示数据条数
                    $('.news-list .container').append(`<div class=count>已展示<span>${$('.news-items>a').length}</span>条内容 / 共<span>${$('.news-items a').length}</span>条</div>`)
                }
                //默认点击所有年份让其显示
            }).eq(0).trigger('click')
        }
    })
})