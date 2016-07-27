$(document).ready(function(){

    var getGradient = function(value) {
        var gradient;
        var background = $('.background:checked').val();
        var angle = $('.range-gradient-angle').val();
        var color_1 = $('.color-1').val();
        var color_2 = $('.color-2').val();
        if (background === 'linear-gradient') {
            gradient = background + '(' + angle + 'deg, ' + color_1 + ', ' + color_2 + ')';
        } else {
            gradient = background + '(' + color_1 + ', ' + color_2 + ')';
        }
        return gradient;
    };

    var getTransforms = function(value) {
        var perspective = 'perspective(' + $('.range-perspective').val() + 'px) ';
        var rotate = 'rotate(' + $('.range-rotate').val() + 'deg) ';
        var rotate_x = 'rotateX(' + $('.range-rotate-x').val() + 'deg) ';
        var rotate_y = 'rotateY(' + $('.range-rotate-y').val() + 'deg) ';
        var rotate_z = 'rotateZ(' + $('.range-rotate-z').val() + 'deg) ';
        var scale_x = 'scaleX(' + $('.range-scale-x').val() + ') ';
        var scale_y = 'scaleY(' + $('.range-scale-y').val() + ') ';
        var translate_x = 'translateX(' + $('.range-translate-x').val() + 'px) ';
        var translate_y = 'translateY(' + $('.range-translate-y').val() + 'px) ';
        var translate_z = 'translateZ(' + $('.range-translate-z').val() + 'px) ';
        var skew_x = 'skewX(' + $('.range-skew-x').val() + 'deg) ';
        var skew_y = 'skewY(' + $('.range-skew-y').val() + 'deg) ';
        var transforms = perspective + rotate + rotate_x + rotate_y + rotate_z + scale_x + scale_y + translate_x + translate_y + translate_z + skew_x + skew_y;
        return transforms;
    };

    $('.background').on('input change', function () {
        if ($(this).is(':checked') && $(this).val() === 'background-color') {
            $('.box').css({
                'background-image': 'none',
                'background-color': $('.color-1').val()
            });
        } else {
            $('.box').css({
                'background-color': 'transparent',
                'background-image': getGradient()
            });
        }
    });

    $('.color').on('input change', function () {
        $(this).siblings('.value').val($(this).val());
    });

    $('.range').on('input change', function () {
        $(this).siblings('.value').val($(this).val());
        $(this).css({'background-color': 'rgba(204,204,204, ' + $(this).val() / $(this).attr('max') + ')' });
    });

    $('.color-1, .color-2, .range-gradient-angle').on('input change', function () {
        $('.box').css({'background-image': getGradient()});
    });

    $('.range-border-radius').on('input change', function () {
        $('.box').css({'border-radius': $(this).val() + 'px'});
    });

    $('.range-rotate, .range-rotate-x, .range-rotate-y, .range-rotate-z').on('input change', function () {
        $('.box').css({'transform': getTransforms()});
    });

    $('.range-scale-x, .range-scale-y').on('input change', function () {
        $('.box').css({'transform': getTransforms()});
    });

    $('.range-translate-x, .range-translate-y, .range-translate-z').on('input change', function () {
        $('.box').css({'transform': getTransforms()});
    });

    $('.range-skew-x, .range-skew-y').on('input change', function () {
        $('.box').css({'transform': getTransforms()});
    });

    $('.range-perspective').on('input change', function () {
        $('.box').css({'transform': getTransforms()});
    });

    $('.range-duration').on('input change', function () {
        $('.box').css({'animation-duration': $(this).val() + 's'});
    });

});