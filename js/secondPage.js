$(function () {

    video();

    function video() {
        var videoList = $(".video-list");
        var $panelClose = $("#panelClose");
        var $panel = $("#panel");
        var panelClose = document.getElementById("panelClose"); /*用来以原生JS控制video的播放与暂停*/

        for (var i = 0; i < videoList.length; i++) {
            $(videoList[i]).click(function () {
                /*获取video标签的src属性*/
                /*
                * 注意：var source = $(this).children("video").attr("src");
                * 1.其中this是原生js中的方法，无法与JQ混用
                * 2.如果写成$(videoList[i])也是不行的，
                *       for循环执行完毕后，为每个videoList添加了单击响应事件
                *       相当于$(videoList[0])...,在单击响应事件中用i，无法确定是哪一个i
                *       因为单击响应事件并不是立即执行的。
                * */
                var source = $(this).children("video").attr("src");
                // console.log(source);

                /*将panel中video标签的src属性设置为点击时的视频*/
                $panel.children("video").attr("src",source);

                $panel.show();
            });
        }

        /*点击关闭按钮，关闭视频播放面板，display:none，并且暂停播放（JQ无法实现，需要用原生JS）*/
        $panelClose.click(function () {
            $panel.hide();
        });
        panelClose.onclick = function () {
            panelClose.parentNode.children[1].pause();
        }
    }
});