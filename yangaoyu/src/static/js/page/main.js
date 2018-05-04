require(['jquery', '../lib/template', 'swiper'], function($, template, swiper) {

    $.ajax({
            url: '/api/get_home_data',
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log(data);
                template('#nav', {
                    data: data
                }, '.ul')
                template('#juti', {
                    data: data
                }, '.bodyer5')
                template('#juti2', {
                    data: data
                }, '.bodyer2')
                template('#juti4', {
                    data: data
                }, '.bodyer4')

                $('.nav .ul li').on('click', function() {
                    // console.log(1);
                    var index = $(this).index();
                    console.log(index);
                    $(this).css({
                        'color': 'red',
                        'border-bottom': '2/37.5rem solid red'
                    }).siblings().css({
                        'color': '#000',
                        'border': '0'
                    });
                    $('.bodyer').eq(index).css('display', 'block').siblings().css('display', 'none');
                })

                $('.tuihui').on('click', function() {
                    $('.wrap1').css('display', 'none');
                    $('.wrap').css('display', 'block');
                })

                $('dl').on('click', function() {
                    $('.wrap1').css('display', 'block');
                    $('.wrap').css('display', 'none');
                })

                $('.shangpin1').on('click', function() {
                    $('.bodyer_1').css('display', 'block');
                    $('.bodyer_2').css('display', 'none');
                })
                $('.xiangqing1').on('click', function() {
                    $('.bodyer_1').css('display', 'none');
                    $('.bodyer_2').css('display', 'block');
                })
            },
            error: function() {
                // console.log(1);
            }
        }),

        $.ajax({
            url: '/api/get_home_data1',
            type: 'get',
            dataType: 'json',
            success: function(data) {
                console.log(data)
                template('#juti1', {
                    data: data
                }, '.bodyer1')
                template('#juti3', {
                    data: data
                }, '.bodyer3')

                $('dl').on('click', function() {
                    $('.wrap1').css('display', 'block');
                    $('.wrap').css('display', 'none');
                })


            }
        })

})