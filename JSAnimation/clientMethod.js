//    capsulate the client function to return the clientWidth and clientHeight
    function client() {
        
        if (window.innerWidth != null) {
            return {
                'width': window.innerWidth,
                'height': window.innerHeight
            };
        } else if (document.compatMode == 'CSS1Compat') {
            return {
                'width': document.documentElement.clientWidth,
                'height': document.documentElement.clientHeight
            };
        } else {
            return {
                'width': document.body.clientWidth,
                'height': document.body.clientHeight
            };
        }
        
    }
