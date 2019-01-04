
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