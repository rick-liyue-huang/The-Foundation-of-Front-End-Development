
// countdown clock
    
    setInterval(fn, 1000);
    function fn() {
        var nowTime = new Date();
        var newTime = new Date('2016/09/30 24:00:00');
        
        var ms = newTime.getTime() - nowTime.getTime();
        
        var ss = parseInt(ms/1000);
        
        var s = ss % 60;
        var m = parseInt(ss / 60 % 60);
        var h = parseInt(ss / 60 /60 % 24);
        var d = parseInt(ss / 60 / 60 / 24);
        
        s = s < 10 ? "0"+s : s;
        m = m < 10 ? "0"+m : m;
        h = h < 10 ? "0"+h : h;
        d = d < 10 ? "0"+d : d;
        
        box.innerHTML = "the left time is " + d + "day" + h + "hour" + m + "minute" + s + "second";
    }
