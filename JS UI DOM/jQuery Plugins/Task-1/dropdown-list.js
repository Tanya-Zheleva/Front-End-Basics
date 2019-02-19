(function ($) {
    $.fn.list = function () {
        let $list = $('<div>').addClass('dropdown-list');

        $(this)
            .css('display', 'block')
            .appendTo($list);

        $(this).change(function () {
            let $selected = $(this).find(':selected');       
            $list.children()
                .filter('.current')
                .each(function(index, element) {
                    element.remove();
                });

            $('<div>')
                .addClass('current')
                .attr('data-value', '')
                .text($selected.text())
                .appendTo($list);
        });

        let $container = $('<div>')
            .addClass('options-container')
            .css('position', 'absolute')
            .css('display', 'none');

        let optionsCount = $(this).children().length;

        for (let i = 0; i < optionsCount; i++) {
            $('<div>')
                .addClass('dropdown-item')
                .attr('data-value', `value-${i + 1}`)
                .attr('data-index', `${i}`)
                .text(`Option ${i + 1}`)
                .appendTo($container);
        }

        $container.appendTo($list);
        $list.appendTo($('body'));
    }
}(jQuery));

function dropdownList(selector) {
    $(selector).list();
}