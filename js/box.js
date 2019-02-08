if (window.jQuery === void(0)) {
    var boxes = document.getElementsByClassName('box-die');
    for (var i in boxes) {
        if (boxes.hasOwnProperty(i)) {
            boxes[i].addEventListener('click', function(){
                if(this.classList.contains('open')) {
                    this.classList.remove('open');
                }
                else {
                    this.classList.add('open');
                }
            });
        }
    }
}
else {
    jQuery(function($){
        $('body').on('click', '.box-die', function() {
            $(this).toggleClass('open');
        });
    });
}
