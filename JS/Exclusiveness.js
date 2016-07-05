
// Using the exclusiveness to deal with the tab switch.

function fn(parent) {
        var arrLi = parent.getElementsByTagName('li');
        var arrSpan = parent.getElementsByTagName('span');

        for (var i = 0; i < arrLi.length; i++) {
            arrLi[i].index = i;
            arrLi[i].onmousemove = function() {
                for (var j = 0; j < arrLi.length; j++) {
                    arrLi[j].className = "";
                    arrSpan[j].className = "";
                }
                this.className = "current";
                arrSpan[this.index].className = "show";
            }
        }
    }
