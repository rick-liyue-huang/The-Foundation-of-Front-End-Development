//    this method can provide the scrolled top and left value in more compatible mode
    function scroll() {
        if (window.pageYOffset != null) {
            return {
                'top': window.pageYOffset,
                'left': window.pageXOffset
            };
        } else if (document.compatMode == 'CSS1Compat') {
//            it is standard mode
            return {
                'top': document.documentElement.scrollTop,
                'left': document.documentElement.scrollLeft
            };

        } else {
            return {
                'top': document.body.scrollTop,
                'left': document.body.scrollLeft
            };
        }
    }
