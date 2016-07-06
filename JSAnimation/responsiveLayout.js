
// by the clientMethod.js, we can change the layout by change the clientWidth

//    responsive layout for the browsers size
    responsive();

    window.onresize = function () {
        responsive();
    };

    function responsive() {
        if (client().width > 960) {
            //电脑
            document.body.style.backgroundColor = "red";
            document.body.innerHTML = "computer";
        } else if (client().width > 640) {
            //平板
            document.body.style.backgroundColor = "green";
            document.body.innerHTML = "tablet";
        } else {
            //手机
            document.body.style.backgroundColor = "blue";
            document.body.innerHTML = "moblie";
        }
    }
