$(function () {
    var contentItems = $("#contentItems");

    var astGeo = $("#astGeo");
    var animalPlant = $("#animalPlant");
    var artHistory = $("#artHistory");
    var health = $("#health");
    var life = $("#life");
    var science = $("#science");
    var opera = $("#opera");
    var anecdote = $("#anecdote");
    /*在页面中嵌套其它html页面*/

    defalutNavClickEvent();
    navClickEvent();
    contactUs();


    //默认侧边导航栏
    function defalutNavClickEvent() {
        astGeo.children().addClass("nav-active");
        contentItems.load("detail/ast$geo.html");
    }

    /*侧边导航栏的单击响应事件*/
    function navClickEvent() {
        astGeo.click(function () {
            removeCla();
            astGeo.children().addClass("nav-active");
            contentItems.load("detail/ast$geo.html");
        });
        animalPlant.click(function () {
            removeCla();
            animalPlant.children().addClass("nav-active");
            contentItems.load("detail/animal$plant.html");
        });
        artHistory.click(function () {
            removeCla();
            artHistory.children().addClass("nav-active");
            contentItems.load("detail/art$history.html");
        });
        health.click(function () {
            removeCla();
            health.children().addClass("nav-active");
            contentItems.load("detail/health.html");
        });
        life.click(function () {
            removeCla();
            life.children().addClass("nav-active");
            contentItems.load("detail/life.html");
        });
        science.click(function () {
            removeCla();
            science.children().addClass("nav-active");
            contentItems.load("detail/science.html");
        });
        opera.click(function () {
            removeCla();
            opera.children().addClass("nav-active");
            contentItems.load("detail/opera.html");
        });
        anecdote.click(function () {
            removeCla();
            anecdote.children().addClass("nav-active");
            contentItems.load("detail/anecdote.html");
        });
    }

    /*删除激活类*/
    function removeCla() {
        astGeo.children().removeClass("nav-active");
        animalPlant.children().removeClass("nav-active");
        artHistory.children().removeClass("nav-active");
        health.children().removeClass("nav-active");
        life.children().removeClass("nav-active");
        science.children().removeClass("nav-active");
        opera.children().removeClass("nav-active");
        anecdote.children().removeClass("nav-active");
    }

    function contactUs() {
        layui.use('layer', function(){
            var layer = layui.layer;
            var contact = $("#contact");
            var contribute = $("#contribute");
            var aboutUs = $("#aboutUs");
            var share = $("#share");
            var collect = $("#collect");

            contact.click(function () {
                layer.open({
                    title: '联系我们'
                    ,content: '邮箱：707327700@qq.com'+'<br>'+'请将您的意见尽情的告诉我们吧~'
                });
            });

            contribute.click(function () {
                layer.open({
                    title: '投稿'
                    ,content: '请将您的投稿以word文档形式发送至'+'<br>'+'邮箱：707327700@qq.com'
                });
            });

            aboutUs.click(function () {
                layer.open({
                    title: '关于我们QAQ'
                    ,content: '此网站由 河北工程技术学院 信息技术学院 的四名同学共同完成！'
                });
            });

            share.click(function () {
                layer.open({
                    title: '欢迎分享QAQ'
                    ,content: '快复制地址栏中的链接把此网站分享给你的朋友吧~'
                });
            });

            collect.click(function () {
                layer.open({
                    title: '欢迎收藏QAQ'
                    ,content: '按键'+'<b>'+' ctrl+d '+'</b>'+'即可将此网页收藏到你的书签中哦~'
                });
            });
        });
    }
});