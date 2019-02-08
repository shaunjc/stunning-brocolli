if (window.jQuery === void(0)) {
    var clickToggle = document.getElementsByClassName('js-click-toggle-open');
    for (var i in clickToggle) {
        if (clickToggle.hasOwnProperty(i)) {
            clickToggle[i].addEventListener('click', function(){
                if(this.classList.contains('open')) {
                    this.classList.remove('open');
                }
                else {
                    this.classList.add('open');
                }
            });
        }
    }
    
    var enterOpen = document.getElementsByClassName('js-enter-open');
    for (var i in enterOpen) {
        if (enterOpen.hasOwnProperty(i)) {
            enterOpen[i].addEventListener('mouseenter', function(){
                this.classList.add('open');
            });
        }
    }
    var leaveOpen = document.getElementsByClassName('js-leave-open');
    for (var i in leaveOpen) {
        if (leaveOpen.hasOwnProperty(i)) {
            leaveOpen[i].addEventListener('mouseenter', function(){
                this.classList.add('open');
            });
        }
    }
    var enterClose = document.getElementsByClassName('js-enter-close');
    for (var i in enterClose) {
        if (enterClose.hasOwnProperty(i)) {
            enterClose[i].addEventListener('mouseleave', function(){
                this.classList.remove('open');
            });
        }
    }
    var leaveClose = document.getElementsByClassName('js-leave-close');
    for (var i in leaveClose) {
        if (leaveClose.hasOwnProperty(i)) {
            leaveClose[i].addEventListener('mouseleave', function(){
                this.classList.remove('open');
            });
        }
    }
}
else {
    jQuery(function($){
        $('body').on('click', '.js-click-toggle-open', function(){
            $(this).toggleClass('open');
        }).on('mouseenter', '.js-enter-open', function(){
            $(this).addClass('open');
        }).on('mouseleave', '.js-leave-open', function(){
            $(this).addClass('open');
        }).on('mouseenter', '.js-enter-close', function(){
            $(this).removeClass('open');
        }).on('mouseleave', '.js-leave-close', function(){
            $(this).removeClass('open');
        });
    });
}
