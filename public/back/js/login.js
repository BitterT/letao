$(function () {
    $('#form').bootstrapValidator({
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok', //校验成功
            invalid: 'glyphicon glyphicon-remove', //校验失败
            validating: 'glyphicon glyphicon-refresh' //校验中
        },
        // 配置校验字段
        fields: {
            username: {
                // 校验规则
                validators: {
                    // 非空校验
                    notEmpty: {
                        message: "用户名不能为空"
                    },
                    // 长度校验
                    stringLength: {
                        min: 2,
                        max: 6,
                        message: "用户名长度必须为 2~6 位"
                    },
                    callback: {
                        message: "用户名不存在"
                    }
                }
            },

            password: {
                // 校验规则
                validators: {
                    // 非空校验
                    notEmpty: {
                        message: "密码不能为空"
                    },
                    stringLength: {
                        min: 6,
                        max: 12,
                        message: "密码长度必须为 6~12 位"
                    },
                    callback: {
                        message: "密码错误"
                    }
                }
            }
        }
    })








    // 使用插件校验功能 要注册表单校验成功事件
    // 在事件中 阻止默认submit按钮的跳转功能 通过ajax提交
    $('#form').on('success.form.bv',function (e) {
        // 阻止默认提交
        // 阻止浏览器默认事件
        e.preventDefault();

        // 不推荐
        // return false;

        console.log('阻止默认提交, 通过ajax提交');
        $.ajax ({
            type: 'post',
            //    ./ 是相对路径
            //     / 是绝对路径
            url: '/employee/employeeLogin',
            // 表单序列化
            data: $('#form').serialize(),
            datatype: 'json',
            success: function (info) {
                console.log(info);
                if (info.error===1000) {

                    // 调用插件实例方法 更新校验状态成功或失败, 提示用户

                    // updateStatus(field, status, validator);
                    // 参数1: 校验字段
                    // 参数2: 校验状态 NOT_VALIDATED VALIDATING INVALID VALID
                    // 参数3: 校验规则, 配置用于显示 message 提示


                    // alert('用户名不存在');
                    $('#form').data("bootstrapValidator").updateStatus('username', 'INVALID', 'callback');
                    // 只要进入这个if 就不会再往下判断
                    return;
                }
                if (info.error===1001) {
                    // alert('密码错误');
                    $('#form').data('bootstrapValidator').updateStatus('password', 'INVALID', 'callback');
                    return;
                }
                if (info.success) {
                    location.href = 'index.html';
                    return;
                }
            }
        })
    })






    // 重置功能
    // type='reset' 按钮 只会重置表单内容
    // 此时内容和校验状态都需要重置 需要调用插件的实例方法

    // resetForm(); 不传参, 只重置校验状态
    // resetForm(true); 传true 内容和状态都重置
    $('[type="reset"]').click(function () {

        // 由于表单内容已经被 reset 内容重置 
        // 所以此处我们只需要重置表单状态 也就是 不用传true
        $('#form').data('bootstrapValidator').resetForm();
    })
})