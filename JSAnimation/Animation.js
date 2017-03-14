// this capsulating function will provide a method to animated move the element.


function animate(obj, target) {
        clearInterval(obj.timer);
        obj.timer = setInterval(function () {
            var leader = obj.offsetTop;
            var step = (target - leader) / 10;
            step = step > 0 ? Math.ceil(step) : Math.floor(step);
            console.log("target:" + target + "---leader:" + leader + "---step:" + step);
            if (leader != target) {
                obj.style.top = leader + step + "px";
            } else {
                clearInterval(obj.timer);
            }
        }, 15)
    }
