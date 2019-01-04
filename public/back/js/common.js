
// 添加进度条效果
// 1. 在第一个ajax开始发送时 开启进度条
// 2. 在所有的ajax完成时, 结束进度条

// 需要借助 ajax 全局事件

// .ajaxComplete()     每个ajax完成时, 都会调用 (不管成功还是失败都调用)
// .ajaxSuccess()      每个成功的ajax都会调用
// .ajaxError()        每个失败的ajax都会调用
// .ajaxSend()         在每个ajax准备发送时调用

// .ajaxStart()        当第一个ajax请求开始的时候 调用
// .ajaxStop()         当所有ajax请求完成的时候 调用 (不管成功还是失败)


$(document).ajaxStart(function () {
    NProgress.start();
})

$(document).ajaxStop(function () {
    NProgress.done();
})

// 入口函数 等待当前的dom结构 加载完成之后执行
$(function () {
    // 公共功能
    // 1. 左侧二级菜单切换
    $('.lt_aside .category').click(function (){
        $(this).next().stop().slideToggle();
    })



    // 2. 左边侧边栏切换
    $('.icon_menu').click(function () {
        $('.lt_aside').toggleClass('hidemenu');
        $('.lt_main').toggleClass('hidemenu');
        $('.lt_topbar').toggleClass('hidemenu');
    })




    // 3. 退出功能
    // 显示模态框
    $('.icon_logout').click(function () {
        // 让模态框显示
        $('#logoutModal').modal('show');
    })

    $('#logoutBtn').click (function () {
        $.ajax({
            data: 'get',
            url: "/employee/employeeLogout",
            dataType: 'json',
            success: function (info ) {
                // console.log('退出登录');
                if (info.success) {
                    location.href = 'login.html';
                }
            }
        })
    })
})