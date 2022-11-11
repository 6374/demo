$(function () {
    $('.header-container').load('../public/header.html', function () {
        $('.header-nav li').eq(5).find('>a').css('color', '#0068b6')
    })
    $('footer').load('../public/footer.html')
    $('.t-top').click(function () {
        $(this).find('i').toggleClass('rotate')
        $('.part-select').stop().slideToggle('slow')
    })
    // 创建地图实例
    var map = new BMap.Map("container");
    //初始化地图,设置中心点坐标和地图级别 通过Point类创建一个坐标点
    var point = new BMap.Point(120.013931, 30.28183);
    //地图初始化 设置地图展示级别 大小
    map.centerAndZoom(point, 18);
    //开启鼠标滚轮缩放
    map.enableScrollWheelZoom(true);
    //中心点偏移多少像素（width,height）为div 宽高的一半;
    // map.panBy(650, 240);
    //创建自定义图标 通过icon类可以实现自定义标注的图标
    var myIcon = new BMap.Icon("img/46.png", new BMap.Size(100, 60), {
        // 指定定位位置。
        // 当标注显示在地图上时，其所指向的地理位置距离图标左上
        // 角各偏移10像素和25像素。您可以看到在本例中该位置即是
        // 图标中央下端的尖角位置。
        // 设置图片偏移。
        // 当您需要从一幅较大的图片中截取某部分作为标注图标时，您
        // 需要指定大图的偏移位置，此做法与css sprites技术类似。
        imageOffset: new BMap.Size(0, 0)   // 设置图片偏移
    });
    // 创建标注 Marker是一个用来往地图上添加"点"标记的类，Icon类来指定自定义图标
    //Marker的构造函数的参数为Point和MarkerOptions（可选）。
    var marker = new BMap.Marker(point, { icon: myIcon });
    // 将标注添加到地图中
    map.addOverlay(marker);
    var infohtml = '<div class="map-info"><div class="info"><p class="t1">杭州智诺科技股份有限公司</p><p class="t2">杭州市余杭区文一西路1217号IT公园3幢16-21层</p></div><a class="gps-box" href="http://api.map.baidu.com/marker?location=30.28183,120.013931&title=我的位置&content=杭州智诺科技股份有限公司&output=html" target="_blank"><i class="iconfont icon-08"></i><p  class="tt">到这去</p></div>'
    //添加标注 offset 位置偏移
    var label = new BMap.Label(infohtml, { offset: new BMap.Size(-80, -130) });

    marker.setLabel(label);
})