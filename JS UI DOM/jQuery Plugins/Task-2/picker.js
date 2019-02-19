$.fn.colorpicker = function () {
    $(this).on('click', function () {
        let container = $('<main>')

        if ($(this).children().length === 2) {
            let img = new Image();
            img.src = './images/color-picker.png';
           
            let canvas = $('#canvas');
            console.log(canvas);
            //let ctx = canvas.getContext('2d');
        

            container.append($(img));
            $(this).append(container);
        } else {
            $(this).children().each(function(i, el) {
                if (i > 1) {
                    el.remove();
                }
            });          
        }
    })
}