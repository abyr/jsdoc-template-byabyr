/* global $, window */
$(function () {
    /**
     * @module
     */

    var _onResize;

    $('#search').on('keyup', function () {
        var value = $(this).val(),
            $el = $('.navigation'),
            regexp;

        if (value) {
            regexp = new RegExp(value, 'i');
            $el.find('li, .itemMembers').hide();

            $el.find('li').each(function (i, el) {
                var $item = $(el);

                if ($item.data('name') && regexp.test($item.data('name'))) {
                    $item.show();
                    $item.closest('.itemMembers').show();
                    $item.closest('.item').show();
                }
            });
        } else {
            $el.find('.item, .itemMembers').show();
        }

        $el.find('.list').scrollTop(0);
    });

    $('.navigation').on('click', '.expand-members', function () {
        $(this).parent().find('.itemMembers').toggle();
    });

    _onResize = function () {
        var height = $(window).height();

        $('.navigation').height(height).find('.list').height(height - 133);
    };

    $(window).on('resize', _onResize);
    _onResize();

});
