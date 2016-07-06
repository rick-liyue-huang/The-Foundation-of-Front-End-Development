
 // change any object, any attribute to any target value
    //change more one attribute value simultaneously

    // add callback function to let the object move in continuously
    function animate(obj, json, fn, interval) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var flag = true;//define a flag to true for jumping out condition
            for (var k in json) {
                if (k == "opacity") {
                    //getStyle will get string, will transfer to number
                    var leader = getStyle(obj, k) * 100;// transfer to int
                    var target = json[k] * 100;
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    obj.style[k] = (leader + step) / 100;
                } else if (k == "zIndex") {
                    obj.style[k] = json[k];
                } else {
                // k -> attr,  json[k] -> target
                    var leader = parseInt(getStyle(obj, k)) || 0;
                    var target = json[k];
                    var step = (target - leader) / 10;
                    step = step > 0 ? Math.ceil(step) : Math.floor(step);
                    obj.style[k] = leader + step + "px";
                }


                if (leader != target) {
                    flag = false;// will keep moving 
                }
            }
            if (flag) {// flag == true
                clearInterval(obj.timer);
                if (fn) {
                    fn(); // callback function
                }
            }
        }, interval)
    }
    
    
    function getStyle(obj, attr) {
    if (obj.currentStyle) {
        return obj.currentStyle[attr];
    } else {
        return window.getComputedStyle(obj, null)[attr];
    }
}
