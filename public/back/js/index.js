// 基于准备好的dom，初始化echarts实例
var echartsLeft = echarts.init(document.querySelector('.echarts_left'));

// 指定图表的配置项和数据
var option1 = {
    backgroundColor: '#2c343c',
    textStyle: {
        color: 'rgba(255, 255, 255, 0.3)'
    },
    title: {
        text: '2017年注册人数',
        textStyle: {
            color: 'rgba(255, 255, 255, 0.5)',
            fontWeight: 'normal'
        },
        x: 'center'
    },
    tooltip: {},
    legend: {
        data:['人数'],
        textStyle: {
            color: 'rgba(255, 255, 255, 0.5)',
            fontWeight: 'normal'
        },
        x: 'right'
    },
    xAxis: {
        data: ["1月","2月","3月","4月","5月","6月"]
    },
    yAxis: {},
    series: [{
        name: '人数',
        type: 'bar',
        data: [1000, 1500, 1800, 1200, 1000, 500]
    }]
};

// 使用刚指定的配置项和数据显示图表。
echartsLeft.setOption(option1);








var echartsRight = echarts.init(document.querySelector('.echarts_right'));

option2 = {
    // roseType: 'angle',
    backgroundColor: '#2c343c',
    textStyle: {
        color: 'rgba(255, 255, 255, 0.3)',
    },
    labelLine: {
        lineStyle: {
            color: 'rgba(255, 255, 255, 0.3)',
        }
    },
    title : {
        text: '热门品牌销售',
        subtext: '2017年6月',
        x:'center',
        textStyle: {
            color: 'rgba(255, 255, 255, 0.5)',
            fontWeight: 'normal'
        },
    },
    tooltip : {
        trigger: 'item',
        formatter: "{a} <br/>{b} : {c} ({d}%)"
    },
    legend: {
        type: 'scroll',
        orient: 'vertical',
        left: 'left',
        data: ['耐克','阿迪','新百伦','李宁','阿迪王'],
        textStyle: {
            color: 'rgba(255, 255, 255, 0.5)',
            fontWeight: 'normal'
        },
    },

    series : [
        {
            name: '品牌',
            type: 'pie',
            radius : '60%',
            center: ['50%', '60%'],
            data: [
                {value:335, name: '耐克'},
                {value:310, name: '阿迪'},
                {value:234, name: '新百伦'},
                {value:135, name: '李宁'},
                {value:1548, name: '阿迪王'},
            ],
            itemStyle: {
                emphasis: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }
    ]
};

echartsRight.setOption(option2);
